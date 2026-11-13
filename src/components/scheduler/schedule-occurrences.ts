import { addMonths, normalizeRecurrenceRule } from "./recurrence-defaults";
import { normalizeLocalDateTime, toRRuleString } from "./recurrence-engine";
import type { ScheduleDate, ScheduleItem } from "./types";

export function isRecurringSchedule(
  item: Pick<ScheduleItem, "scheduleJson">,
): boolean {
  return item.scheduleJson.rule.frequency !== "NONE";
}

function isSameDateTime(left: string, right: string): boolean {
  const normalized = normalizeLocalDateTime(left);
  return normalized !== null && normalized === normalizeLocalDateTime(right);
}

/** Removes one instance from the series and records it as an excluded date. */
export function excludeOccurrence<T extends ScheduleItem>(
  series: T,
  startDateTime: string,
): T {
  const excluded = normalizeLocalDateTime(startDateTime);
  if (!excluded) return series;

  const current = series.scheduleJson.rule.excludedDateTimes ?? [];
  const excludedDateTimes = current.includes(excluded)
    ? current
    : [...current, excluded].sort();
  const rule = { ...series.scheduleJson.rule, excludedDateTimes };

  return {
    ...series,
    scheduleJson: { rule, rruleText: toRRuleString(rule) },
    datesJson: series.datesJson.filter(
      (date) => !isSameDateTime(date.startDateTime, excluded),
    ),
  };
}

function splitDateTime(value: string): { date: string; time: string } {
  const normalized = normalizeLocalDateTime(value) ?? "";
  return { date: normalized.slice(0, 10), time: normalized.slice(11, 16) };
}

/** A one-time schedule holding a single instance of a series. */
export function toOccurrenceSchedule(
  series: ScheduleItem,
  date: ScheduleDate,
): ScheduleItem {
  const start = splitDateTime(date.startDateTime);
  const end = splitDateTime(date.endDateTime);
  const rule = normalizeRecurrenceRule({
    ...series.scheduleJson.rule,
    startDate: start.date,
    startTime: start.time,
    endDate: end.date,
    endTime: end.time,
    frequency: "NONE",
    recurrenceEndDate: start.date ? addMonths(start.date, 1) : "",
    excludedDateTimes: [],
  });

  return {
    name: date.scheduleName || series.name,
    description: series.description,
    typeId: date.typeId || series.typeId,
    isActive: series.isActive ?? date.isActive,
    parentScheduleId: series.id,
    originalStartDateTime:
      normalizeLocalDateTime(date.startDateTime) ?? date.startDateTime,
    scheduleJson: { rule, rruleText: toRRuleString(rule) },
    datesJson: [date],
  };
}
