import { describe, expect, it } from "vitest";
import {
  buildDefaultRecurrenceRule,
  normalizeRecurrenceRule,
} from "./recurrence-defaults";
import {
  buildScheduleSavePayload,
  generateOccurrences,
  toRRuleString,
} from "./recurrence-engine";
import { validateRecurrenceRule } from "./recurrence-validation";
import {
  collectActiveScheduleDates,
  collectScheduleDates,
  findOverlappingSchedule,
  toScheduleDates,
} from "./schedule-dates";
import {
  getScheduleKey,
  getScheduleStatus,
  toScheduleTableRow,
} from "./schedule-list";
import {
  excludeOccurrence,
  isRecurringSchedule,
  toOccurrenceSchedule,
} from "./schedule-occurrences";
import type { RecurrenceRuleValues, ScheduleItem } from "./types";

function rule(patch: Partial<RecurrenceRuleValues>): RecurrenceRuleValues {
  return {
    ...buildDefaultRecurrenceRule(),
    startDate: "2026-11-02",
    startTime: "09:00",
    endDate: "2026-11-02",
    endTime: "10:00",
    frequency: "NONE",
    ...patch,
  };
}

function schedule(
  patch: Partial<ScheduleItem> & { rule: RecurrenceRuleValues },
): ScheduleItem {
  const { rule: values, ...rest } = patch;
  const { rruleText, occurrences } = buildScheduleSavePayload(values);
  const base = { name: "Schedule", ...rest };
  return {
    ...base,
    scheduleJson: { rule: values, rruleText },
    datesJson: toScheduleDates(base, occurrences),
  };
}

const weekly = rule({
  frequency: "WEEKLY",
  daysOfWeek: ["MON", "WED", "FRI"],
  recurrenceEndMode: "ON_DATE",
  recurrenceEndDate: "2026-11-13",
});

describe("buildDefaultRecurrenceRule", () => {
  it("uses the configured defaults", () => {
    const values = buildDefaultRecurrenceRule({
      durationMinutes: 30,
      recurrenceMonths: 3,
      rule: { startDate: "2026-12-01", startTime: "08:00", frequency: "WEEKLY" },
    });
    expect(values.startDate).toBe("2026-12-01");
    expect(values.startTime).toBe("08:00");
    expect(values.endDate).toBe("2026-12-01");
    expect(values.endTime).toBe("08:30");
    expect(values.frequency).toBe("WEEKLY");
    expect(values.recurrenceEndDate).toBe("2027-03-01");
    expect(values.monthlyDayOfMonth).toBe(1);
    expect(values.yearlyMonth).toBe(12);
  });

  it("falls back to a one hour, one month schedule", () => {
    const values = buildDefaultRecurrenceRule({
      rule: { startDate: "2026-01-15", startTime: "23:30" },
    });
    expect(values.endDate).toBe("2026-01-16");
    expect(values.endTime).toBe("00:30");
    expect(values.recurrenceEndDate).toBe("2026-02-15");
  });

  it("fills missing fields of a saved rule", () => {
    const values = normalizeRecurrenceRule(
      { startDate: "2026-11-02", frequency: "DAILY" },
      { durationMinutes: 15 },
    );
    expect(values.startDate).toBe("2026-11-02");
    expect(values.frequency).toBe("DAILY");
    expect(values.daysOfWeek.length).toBeGreaterThan(0);
  });
});

describe("recurrence engine", () => {
  it("generates wall-clock occurrences", () => {
    expect(generateOccurrences(weekly).map((o) => o.startDateTime)).toEqual([
      "2026-11-02T09:00:00",
      "2026-11-04T09:00:00",
      "2026-11-06T09:00:00",
      "2026-11-09T09:00:00",
      "2026-11-11T09:00:00",
      "2026-11-13T09:00:00",
    ]);
  });

  it("skips excluded instances and writes them as EXDATE", () => {
    const values = { ...weekly, excludedDateTimes: ["2026-11-04T09:00:00"] };
    const starts = generateOccurrences(values).map((o) => o.startDateTime);
    expect(starts).not.toContain("2026-11-04T09:00:00");
    expect(starts).toHaveLength(5);
    expect(toRRuleString(values)).toContain("EXDATE:20261104T090000");
  });
});

describe("validateRecurrenceRule", () => {
  it("accepts a valid rule", () => {
    expect(validateRecurrenceRule(weekly)).toEqual({});
  });

  it("reports field errors", () => {
    expect(
      validateRecurrenceRule(rule({ endDate: "2026-11-01" })).endDate,
    ).toBe("Cannot be before the start date");
    expect(validateRecurrenceRule(rule({ endTime: "08:00" })).endTime).toBe(
      "Must be after the start time",
    );
    expect(
      validateRecurrenceRule({ ...weekly, daysOfWeek: [] }).daysOfWeek,
    ).toBe("Select at least one day");
    expect(validateRecurrenceRule({ ...weekly, interval: 0 }).interval).toBe(
      "Must be at least 1",
    );
  });
});

describe("single instance editing", () => {
  const series = schedule({
    id: 7,
    name: "Open Hours",
    typeId: "1",
    description: "Weekdays",
    rule: weekly,
  });

  it("moves one instance out of the series", () => {
    const date = series.datesJson[1];
    const remaining = excludeOccurrence(series, date.startDateTime);
    expect(remaining.datesJson).toHaveLength(5);
    expect(remaining.scheduleJson.rule.excludedDateTimes).toEqual([
      "2026-11-04T09:00:00",
    ]);
    expect(isRecurringSchedule(remaining)).toBe(true);

    const instance = toOccurrenceSchedule(series, date);
    expect(instance.parentScheduleId).toBe(7);
    expect(instance.originalStartDateTime).toBe("2026-11-04T09:00:00");
    expect(instance.description).toBe("Weekdays");
    expect(instance.scheduleJson.rule.frequency).toBe("NONE");
    expect(isRecurringSchedule(instance)).toBe(false);
  });

  it("does not exclude the same instance twice", () => {
    const once = excludeOccurrence(series, "2026-11-04T09:00:00");
    const twice = excludeOccurrence(once, "2026-11-04T09:00");
    expect(twice.scheduleJson.rule.excludedDateTimes).toEqual([
      "2026-11-04T09:00:00",
    ]);
  });
});

describe("active state", () => {
  const active = schedule({ id: 1, name: "Active", rule: weekly });
  const inactive = schedule({
    id: 2,
    name: "Inactive",
    isActive: false,
    rule: weekly,
  });

  it("marks every date with its schedule's state", () => {
    expect(inactive.datesJson.every((date) => !date.isActive)).toBe(true);
    const flipped = { ...inactive, isActive: true };
    expect(
      collectScheduleDates([flipped]).every((date) => date.isActive),
    ).toBe(true);
  });

  it("keeps inactive dates out of the active list", () => {
    expect(collectScheduleDates([active, inactive])).toHaveLength(12);
    expect(collectActiveScheduleDates([active, inactive])).toHaveLength(6);
  });

  it("ignores inactive schedules when checking overlaps", () => {
    expect(findOverlappingSchedule(active, [inactive])).toBeUndefined();
    expect(findOverlappingSchedule(inactive, [active])).toBeUndefined();
    expect(
      findOverlappingSchedule(active, [{ ...inactive, isActive: true }])?.name,
    ).toBe("Inactive");
  });
});

describe("schedule list", () => {
  const now = Date.parse("2026-11-10T00:00:00");

  it("derives the status", () => {
    const saved = schedule({ id: 1, rule: weekly });
    expect(getScheduleStatus(saved, now)).toBe("ACTIVE");
    expect(getScheduleStatus({ ...saved, id: undefined }, now)).toBe("DRAFT");
    expect(getScheduleStatus({ ...saved, isActive: false }, now)).toBe(
      "INACTIVE",
    );
    expect(getScheduleStatus(saved, Date.parse("2026-12-01T00:00:00"))).toBe(
      "EXPIRED",
    );
  });

  it("builds stable keys and rows", () => {
    const saved = schedule({ id: 5, typeId: "2", rule: weekly });
    expect(getScheduleKey(saved, 3)).toBe("schedule-5");
    expect(getScheduleKey({ ...saved, id: undefined }, 3)).toBe("new-3");

    const row = toScheduleTableRow(saved, 0, [{ id: "2", name: "Reserved" }]);
    expect(row.type).toBe("Reserved");
    expect(row.recurrence).toBe("Weekly");
    expect(row.occurrences).toBe(6);
  });
});
