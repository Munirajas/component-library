import type { RecurrenceRuleValues } from "./types";

export type RecurrenceRuleErrors = Partial<
  Record<keyof RecurrenceRuleValues, string>
>;

function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function isNumberAtLeast(value: unknown, min: number): boolean {
  return isFiniteNumber(value) && value >= min;
}

function isNumberBetween(value: unknown, min: number, max: number): boolean {
  return isNumberAtLeast(value, min) && (value as number) <= max;
}

/** Returns the first problem found for each field; an empty object means valid. */
export function validateRecurrenceRule(
  values: RecurrenceRuleValues,
): RecurrenceRuleErrors {
  const errors: RecurrenceRuleErrors = {};
  const add = (field: keyof RecurrenceRuleValues, message: string) => {
    if (!errors[field]) errors[field] = message;
  };

  if (!values.startDate) add("startDate", "Start date is required");
  if (!values.startTime) add("startTime", "Start time is required");
  if (!values.endDate) add("endDate", "End date is required");
  if (!values.endTime) add("endTime", "End time is required");
  if (!isNumberAtLeast(values.interval, 1)) {
    add("interval", "Must be at least 1");
  }
  if (!isNumberBetween(values.monthlyDayOfMonth, 1, 31)) {
    add("monthlyDayOfMonth", "Must be 1-31");
  }
  if (!isNumberBetween(values.yearlyMonth, 1, 12)) {
    add("yearlyMonth", "Must be 1-12");
  }
  if (!isNumberBetween(values.yearlyDayOfMonth, 1, 31)) {
    add("yearlyDayOfMonth", "Must be 1-31");
  }
  if (!isNumberAtLeast(values.dailyInterval, 1)) {
    add("dailyInterval", "Must be at least 1");
  }

  const hasInvalidCount =
    values.occurrenceCount !== undefined &&
    !isFiniteNumber(values.occurrenceCount);
  if (hasInvalidCount) add("occurrenceCount", "Enter a number of occurrences");

  const numberFields = [
    values.interval,
    values.monthlyDayOfMonth,
    values.yearlyMonth,
    values.yearlyDayOfMonth,
    values.dailyInterval,
  ];
  if (hasInvalidCount || numberFields.some((value) => !isFiniteNumber(value))) {
    return errors;
  }

  if (values.endDate < values.startDate) {
    add("endDate", "Cannot be before the start date");
  }
  if (
    values.endDate === values.startDate &&
    values.endTime <= values.startTime
  ) {
    add("endTime", "Must be after the start time");
  }

  if (values.frequency === "NONE") return errors;

  if (values.frequency === "WEEKLY" && values.daysOfWeek.length === 0) {
    add("daysOfWeek", "Select at least one day");
  }

  const hasDailyFrequency =
    values.frequency === "DAILY" || values.frequency === "WEEKLY";
  if (
    hasDailyFrequency &&
    values.dailyFrequency === "EVERY" &&
    (!values.dailyEndTime || values.dailyEndTime <= values.startTime)
  ) {
    add("dailyEndTime", "Must be after the starting time");
  }

  if (values.recurrenceEndMode === "ON_DATE") {
    if (!values.recurrenceEndDate) {
      add("recurrenceEndDate", "Choose an end date");
    } else if (values.recurrenceEndDate < values.startDate) {
      add("recurrenceEndDate", "Must be on or after the start date");
    }
  }
  if (
    values.recurrenceEndMode === "AFTER_OCCURRENCES" &&
    (!values.occurrenceCount || values.occurrenceCount < 1)
  ) {
    add("occurrenceCount", "Enter a number of occurrences");
  }

  return errors;
}

export function isRecurrenceRuleValid(values: RecurrenceRuleValues): boolean {
  return Object.keys(validateRecurrenceRule(values)).length === 0;
}
