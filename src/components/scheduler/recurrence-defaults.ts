import type { RecurrenceRuleValues, SchedulerDefaults } from "./types";

function toDateInputValue(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function toTimeInputValue(d: Date): string {
  const h = String(d.getHours()).padStart(2, "0");
  const m = String(d.getMinutes()).padStart(2, "0");
  return `${h}:${m}`;
}

export function addDays(dateStr: string, days: number): string {
  const d = new Date(`${dateStr}T00:00:00`);
  d.setDate(d.getDate() + days);
  return toDateInputValue(d);
}

export function addYears(dateStr: string, years: number): string {
  const d = new Date(`${dateStr}T00:00:00`);
  d.setFullYear(d.getFullYear() + years);
  return toDateInputValue(d);
}

export function addMonths(dateStr: string, months: number): string {
  const d = new Date(`${dateStr}T00:00:00`);
  d.setMonth(d.getMonth() + months);
  return toDateInputValue(d);
}

export const DEFAULT_DURATION_MINUTES = 60;
export const DEFAULT_RECURRENCE_MONTHS = 1;

function definedValues<T extends object>(value: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== undefined),
  ) as Partial<T>;
}

export function buildDefaultRecurrenceRule(
  defaults: SchedulerDefaults = {},
): RecurrenceRuleValues {
  const overrides = definedValues(defaults.rule ?? {});
  const now = new Date();
  const startDate = overrides.startDate || toDateInputValue(now);
  const startTime = overrides.startTime || toTimeInputValue(now);
  const durationMinutes = defaults.durationMinutes ?? DEFAULT_DURATION_MINUTES;
  const parsedStart = new Date(`${startDate}T${startTime}:00`);
  const start = Number.isNaN(parsedStart.getTime()) ? now : parsedStart;
  const end = new Date(start.getTime() + durationMinutes * 60000);
  const startDateObj = new Date(`${startDate}T00:00:00`);

  const base: RecurrenceRuleValues = {
    startDate,
    startTime,
    endDate: toDateInputValue(end),
    endTime: toTimeInputValue(end),
    frequency: "DAILY",
    interval: 1,
    daysOfWeek: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    monthlyMode: "DAY_OF_MONTH",
    monthlyDayOfMonth: startDateObj.getDate(),
    monthlySetPosition: 1,
    monthlyWeekday: "MON",
    yearlyMode: "ON_DATE",
    yearlyMonth: startDateObj.getMonth() + 1,
    yearlyDayOfMonth: startDateObj.getDate(),
    yearlySetPosition: 1,
    yearlyWeekday: "MON",
    recurrenceEndMode: "ON_DATE",
    recurrenceEndDate: addMonths(
      startDate,
      defaults.recurrenceMonths ?? DEFAULT_RECURRENCE_MONTHS,
    ),
    occurrenceCount: 1,
    dailyFrequency: "ONCE",
    dailyInterval: 30,
    dailyIntervalUnit: "MINUTE",
    dailyEndTime: "23:59",
  };

  return { ...base, ...overrides };
}

/** Fills fields missing from a saved rule (e.g. rules saved before a field existed). */
export function normalizeRecurrenceRule(
  rule?: Partial<RecurrenceRuleValues> | null,
  schedulerDefaults?: SchedulerDefaults,
): RecurrenceRuleValues {
  const defaults = buildDefaultRecurrenceRule(schedulerDefaults);
  if (!rule || typeof rule !== "object") return defaults;
  return {
    ...defaults,
    ...rule,
    daysOfWeek: Array.isArray(rule.daysOfWeek)
      ? rule.daysOfWeek
      : defaults.daysOfWeek,
  };
}

function toLocalDateTime(dateStr: string, timeStr: string): Date | null {
  if (!dateStr || !timeStr) return null;
  const d = new Date(`${dateStr}T${timeStr}:00`);
  return Number.isNaN(d.getTime()) ? null : d;
}

/** Minutes between start and end, or null when either is incomplete. */
export function getDurationMinutes(rule: RecurrenceRuleValues): number | null {
  const start = toLocalDateTime(rule.startDate, rule.startTime);
  const end = toLocalDateTime(rule.endDate, rule.endTime);
  if (!start || !end) return null;
  return Math.round((end.getTime() - start.getTime()) / 60000);
}

/** End date/time that is `minutes` after the rule's start. */
export function getEndFromDuration(
  rule: RecurrenceRuleValues,
  minutes: number,
): Pick<RecurrenceRuleValues, "endDate" | "endTime"> | null {
  const start = toLocalDateTime(rule.startDate, rule.startTime);
  if (!start) return null;
  const end = new Date(start.getTime() + minutes * 60000);
  return { endDate: toDateInputValue(end), endTime: toTimeInputValue(end) };
}
