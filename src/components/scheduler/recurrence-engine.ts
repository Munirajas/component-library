import { type Options, RRule, RRuleSet, type Weekday } from "rrule";
import type {
  GeneratedOccurrence,
  RecurrenceRuleValues,
  ScheduleSavePayload,
  WeekDay,
} from "./types";

const WEEKDAY_MAP: Record<WeekDay, Weekday> = {
  SUN: RRule.SU,
  MON: RRule.MO,
  TUE: RRule.TU,
  WED: RRule.WE,
  THU: RRule.TH,
  FRI: RRule.FR,
  SAT: RRule.SA,
};

const MAX_OCCURRENCES_SAFEGUARD = 366;
const MAX_HORIZON_YEARS = 1;

function combine(dateStr?: string, timeStr?: string): Date | null {
  if (!dateStr?.trim() || !timeStr?.trim()) return null;
  const [year, month, day] = dateStr.split("-").map(Number);
  const [hour, minute] = timeStr.split(":").map(Number);
  if (
    ![year, month, day, hour, minute].every((part) => Number.isFinite(part))
  ) {
    return null;
  }

  const date = new Date(Date.UTC(year, month - 1, day, hour, minute, 0, 0));
  return Number.isNaN(date.getTime()) ? null : date;
}

function toMinutes(timeStr: string): number {
  const [h, m] = (timeStr ?? "").split(":").map(Number);
  return h * 60 + m;
}

function toTimeString(minutes: number): string {
  const h = String(Math.floor(minutes / 60)).padStart(2, "0");
  const m = String(minutes % 60).padStart(2, "0");
  return `${h}:${m}`;
}

function pad2(value: number): string {
  return String(value).padStart(2, "0");
}

/** clock datetime with no timezone suffix. The backend converts it to UTC. */
export function toLocalDateTimeString(date: Date): string {
  return `${date.getUTCFullYear()}-${pad2(date.getUTCMonth() + 1)}-${pad2(date.getUTCDate())}T${pad2(date.getUTCHours())}:${pad2(date.getUTCMinutes())}:${pad2(date.getUTCSeconds())}`;
}

const LOCAL_DATE_TIME = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?/;

/** Reads the wall-clock part of a datetime; any timezone suffix is ignored. */
export function parseLocalDateTime(value?: string | null): Date | null {
  const match = value?.trim().match(LOCAL_DATE_TIME);
  if (!match) return null;
  const [year, month, day, hour, minute, second] = match
    .slice(1)
    .map((part) => Number(part ?? 0));
  const date = new Date(
    Date.UTC(year, month - 1, day, hour, minute, second, 0),
  );
  return Number.isNaN(date.getTime()) ? null : date;
}

export function normalizeLocalDateTime(value?: string | null): string | null {
  const date = parseLocalDateTime(value);
  return date ? toLocalDateTimeString(date) : null;
}

function getExcludedDates(values: RecurrenceRuleValues): Date[] {
  if (!Array.isArray(values.excludedDateTimes)) return [];
  return values.excludedDateTimes
    .map((value) => parseLocalDateTime(value))
    .filter((date): date is Date => date !== null);
}

export function hasDailyFrequency(values: RecurrenceRuleValues): boolean {
  return values.frequency === "DAILY" || values.frequency === "WEEKLY";
}

function occursEvery(values: RecurrenceRuleValues): boolean {
  return hasDailyFrequency(values) && values.dailyFrequency === "EVERY";
}

/** Start times ("HH:mm") of the occurrences on each recurring day. */
export function getDailyTimeSlots(values: RecurrenceRuleValues): string[] {
  if (!occursEvery(values)) return [values.startTime];

  const unitMinutes = values.dailyIntervalUnit === "HOUR" ? 60 : 1;
  const step = Math.max(values.dailyInterval || 1, 1) * unitMinutes;
  const first = toMinutes(values.startTime);
  const last = toMinutes(values.dailyEndTime);
  if (!Number.isFinite(first) || !Number.isFinite(last)) return [];

  const slots: string[] = [];
  for (let minutes = first; minutes <= last; minutes += step) {
    slots.push(toTimeString(minutes));
  }
  return slots;
}

export function buildRRule(values?: RecurrenceRuleValues | null): RRule | null {
  if (!values || values.frequency === "NONE") return null;
  const options = buildRRuleOptions(values);
  if (!options) return null;
  const excludedDates = getExcludedDates(values);
  if (!occursEvery(values) && !excludedDates.length) {
    return new RRule(options as Options);
  }

  const set = new RRuleSet();
  if (occursEvery(values)) {
    // One rule per time slot, all sharing the same DTSTART. BYHOUR/BYMINUTE are
    // read from the UTC fields, which hold the selected wall-clock time.
    for (const slot of getDailyTimeSlots(values)) {
      const slotStart = combine(values.startDate, slot);
      if (!slotStart) continue;
      set.rrule(
        new RRule({
          ...options,
          byhour: [slotStart.getUTCHours()],
          byminute: [slotStart.getUTCMinutes()],
        } as Options),
      );
    }
  } else {
    set.rrule(new RRule(options as Options));
  }
  for (const date of excludedDates) set.exdate(date);
  return set.rrules().length ? set : null;
}

function buildRRuleOptions(
  values: RecurrenceRuleValues,
): Partial<Options> | null {
  const dtstart = combine(values.startDate, values.startTime);
  if (!dtstart) return null;

  const options: Partial<Options> = {
    dtstart,
    interval: values.interval || 1,
  };

  if (values.frequency === "DAILY") {
    options.freq = RRule.DAILY;
  } else if (values.frequency === "WEEKLY") {
    options.freq = RRule.WEEKLY;
    const weekdays = (values.daysOfWeek ?? [])
      .map((day) => WEEKDAY_MAP[day])
      .filter(Boolean);
    if (!weekdays.length) return null;
    options.byweekday = weekdays;
  } else if (values.frequency === "MONTHLY") {
    options.freq = RRule.MONTHLY;
    if (values.monthlyMode === "DAY_OF_MONTH") {
      options.bymonthday = [values.monthlyDayOfMonth];
    } else {
      const weekday = WEEKDAY_MAP[values.monthlyWeekday];
      if (!weekday) return null;
      options.byweekday = [weekday.nth(values.monthlySetPosition)];
    }
  } else if (values.frequency === "YEARLY") {
    options.freq = RRule.YEARLY;
    options.bymonth = [values.yearlyMonth];
    if (values.yearlyMode === "ON_DATE") {
      options.bymonthday = [values.yearlyDayOfMonth];
    } else {
      const weekday = WEEKDAY_MAP[values.yearlyWeekday];
      if (!weekday) return null;
      options.byweekday = [weekday.nth(values.yearlySetPosition)];
    }
  }

  if (values.recurrenceEndMode === "ON_DATE" && values.recurrenceEndDate) {
    options.until = combine(values.recurrenceEndDate, "23:59") ?? undefined;
  } else if (
    values.recurrenceEndMode === "AFTER_OCCURRENCES" &&
    values.occurrenceCount
  ) {
    options.count = values.occurrenceCount;
  }

  return options;
}

/** One-time schedules are written as a single occurrence so every schedule has an RRULE. */
export function toRRuleString(
  values?: RecurrenceRuleValues | null,
): string | null {
  if (values?.frequency === "NONE") {
    const dtstart = combine(values.startDate, values.startTime);
    if (!dtstart) return null;
    return new RRule({ freq: RRule.DAILY, count: 1, dtstart })
      .toString()
      .replace(/Z/g, "");
  }
  const rule = buildRRule(values);
  if (!rule) return null;
  return Array.from(new Set(rule.toString().split("\n")))
    .join("\n")
    .replace(/Z/g, "");
}

export function generateOccurrences(
  values?: RecurrenceRuleValues | null,
): GeneratedOccurrence[] {
  if (!values) return [];
  const seedStart = combine(values.startDate, values.startTime);
  const seedEnd = combine(values.endDate, values.endTime);
  if (!seedStart || !seedEnd) return [];

  const durationMs = Math.max(seedEnd.getTime() - seedStart.getTime(), 0);

  if (values.frequency === "NONE") {
    const isExcluded = getExcludedDates(values).some(
      (date) => date.getTime() === seedStart.getTime(),
    );
    if (isExcluded) return [];
    return [
      {
        startDateTime: toLocalDateTimeString(seedStart),
        endDateTime: toLocalDateTimeString(seedEnd),
      },
    ];
  }

  const rule = buildRRule(values);
  if (!rule) return [];

  const horizonCutoff = new Date(seedStart);
  horizonCutoff.setUTCFullYear(
    horizonCutoff.getUTCFullYear() + MAX_HORIZON_YEARS,
  );

  const maxOccurrences =
    MAX_OCCURRENCES_SAFEGUARD * Math.max(getDailyTimeSlots(values).length, 1);
  const starts =
    values.recurrenceEndMode === "NEVER"
      ? rule.all((date, i) => i < maxOccurrences && date <= horizonCutoff)
      : rule.all();

  return starts.map((start) => ({
    startDateTime: toLocalDateTimeString(start),
    endDateTime: toLocalDateTimeString(new Date(start.getTime() + durationMs)),
  }));
}

export function buildScheduleSavePayload(
  values?: RecurrenceRuleValues | null,
): ScheduleSavePayload {
  return {
    rule: values ?? ({} as RecurrenceRuleValues),
    rruleText: toRRuleString(values),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    occurrences: generateOccurrences(values),
  };
}
