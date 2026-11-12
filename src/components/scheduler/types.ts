export type Frequency = "NONE" | "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";
export type WeekDay = "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT";
export type MonthlyMode = "DAY_OF_MONTH" | "WEEKDAY_POSITION";
export type YearlyMode = "ON_DATE" | "WEEKDAY_POSITION";
export type SetPosition = 1 | 2 | 3 | 4 | -1; // 1st..4th, -1 = last
export type RecurrenceEndMode = "ON_DATE" | "AFTER_OCCURRENCES" | "NEVER";
export type DailyFrequencyMode = "ONCE" | "EVERY";
export type DailyIntervalUnit = "MINUTE" | "HOUR";

export interface RecurrenceRuleValues {
  // First occurrence; (end - start) is the duration reused later.
  startDate: string; // "YYYY-MM-DD"
  startTime: string; // "HH:mm"
  endDate: string; // "YYYY-MM-DD"
  endTime: string; // "HH:mm"

  frequency: Frequency;
  interval: number;

  daysOfWeek: WeekDay[];

  monthlyMode: MonthlyMode;
  monthlyDayOfMonth: number;
  monthlySetPosition: SetPosition;
  monthlyWeekday: WeekDay;

  yearlyMode: YearlyMode;
  yearlyMonth: number;
  yearlyDayOfMonth: number;
  yearlySetPosition: SetPosition;
  yearlyWeekday: WeekDay;

  recurrenceEndMode: RecurrenceEndMode;
  recurrenceEndDate?: string;
  occurrenceCount?: number;

  // Daily frequency, only used by DAILY and WEEKLY. "ONCE" runs at startTime;
  // "EVERY" repeats from startTime to dailyEndTime every dailyInterval units.
  dailyFrequency: DailyFrequencyMode;
  dailyInterval: number;
  dailyIntervalUnit: DailyIntervalUnit;
  dailyEndTime: string; // "HH:mm"

  // Occurrence starts ("YYYY-MM-DDTHH:mm:ss") removed from the series (EXDATE).
  excludedDateTimes?: string[];
}

export const EMPTY_RECURRENCE_RULE: RecurrenceRuleValues = {
  startDate: "",
  startTime: "15:00",
  endDate: "",
  endTime: "16:00",
  frequency: "DAILY",
  interval: 1,
  daysOfWeek: ["MON", "TUE", "WED", "THU", "FRI"],
  monthlyMode: "DAY_OF_MONTH",
  monthlyDayOfMonth: 1,
  monthlySetPosition: 1,
  monthlyWeekday: "MON",
  yearlyMode: "ON_DATE",
  yearlyMonth: 1,
  yearlyDayOfMonth: 1,
  yearlySetPosition: 1,
  yearlyWeekday: "MON",
  recurrenceEndMode: "ON_DATE",
  recurrenceEndDate: "",
  occurrenceCount: 1,
  dailyFrequency: "ONCE",
  dailyInterval: 30,
  dailyIntervalUnit: "MINUTE",
  dailyEndTime: "23:59",
};

export interface GeneratedOccurrence {
  startDateTime: string; // ISO 8601
  endDateTime: string; // ISO 8601
}

export type ScheduleId = string | number;

/**
 * One occurrence of a schedule. It inherits name, type and active state from
 * its schedule, but keeps its own copy so a single instance can be overridden.
 */
export interface ScheduleDate extends GeneratedOccurrence {
  scheduleId: string; // empty until the schedule is saved
  scheduleName: string;
  typeId: string;
  isActive: boolean;
}

export interface ScheduleJson {
  rule: RecurrenceRuleValues;
  rruleText: string | null;
}

/** A schedule type option, e.g. Reserved. */
export interface ScheduleOption {
  id: string;
  name: string;
  color?: string;
}

/** `id` is missing until the schedule is saved. A missing `isActive` means active. */
export interface ScheduleItem {
  id?: ScheduleId;
  name: string;
  description?: string;
  typeId?: string;
  isActive?: boolean;
  scheduleJson: ScheduleJson;
  datesJson: ScheduleDate[];
  /** Set on a single instance that was edited and moved out of its series. */
  parentScheduleId?: ScheduleId;
  originalStartDateTime?: string;
}

export type EditScope = "occurrence" | "series";

export type SchedulerView = "calendar" | "list";

/** Values used to prefill a new schedule. Anything left out uses the built-in default. */
export interface SchedulerDefaults {
  name?: string;
  description?: string;
  typeId?: string;
  isActive?: boolean;
  durationMinutes?: number;
  recurrenceMonths?: number;
  rule?: Partial<RecurrenceRuleValues>;
}

export type ScheduleChangeAction =
  | "create"
  | "update"
  | "updateOccurrence"
  | "delete";

export interface ScheduleChange {
  action: ScheduleChangeAction;
  /** The created, updated or deleted schedule. For "updateOccurrence" it is the edited instance. */
  schedule: ScheduleItem;
  /** Position of `schedule` in `schedules`, or -1 when it was deleted. */
  index: number;
  /** The schedule before the change. For "updateOccurrence" it is the original series. */
  previous?: ScheduleItem;
  /** "updateOccurrence" only: the series without the edited instance. */
  series?: ScheduleItem;
  /** "updateOccurrence" only: the instance as it was before the edit. */
  occurrence?: ScheduleDate;
  /** Every schedule after the change. */
  schedules: ScheduleItem[];
}

/** An error message keeps the modal open and is shown to the user. */
export type ScheduleSubmitResult = string | null | undefined | void;

export interface ScheduleSavePayload {
  rule: RecurrenceRuleValues;
  rruleText: string | null;
  timezone: string;
  occurrences: GeneratedOccurrence[];
}
