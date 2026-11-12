import { hasDailyFrequency } from "./recurrence-engine";
import { isScheduleActive } from "./schedule-dates";
import type {
  Frequency,
  RecurrenceRuleValues,
  ScheduleItem,
  ScheduleOption,
} from "./types";

export type ScheduleStatus = "ACTIVE" | "INACTIVE" | "DRAFT" | "EXPIRED";

export const SCHEDULE_STATUS_LABELS: Record<ScheduleStatus, string> = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
  DRAFT: "Draft",
  EXPIRED: "Expired",
};

const FREQUENCY_LABELS: Record<Frequency, string> = {
  NONE: "One time",
  DAILY: "Daily",
  WEEKLY: "Weekly",
  MONTHLY: "Monthly",
  YEARLY: "Yearly",
};

export interface ScheduleTableRow {
  rowKey: string;
  index: number;
  name: string;
  description: string;
  type: string;
  startDate: string;
  endDate: string;
  recurrence: string;
  occurrences: number;
  status: ScheduleStatus;
}

export function formatRecurrence(rule: RecurrenceRuleValues): string {
  const label = FREQUENCY_LABELS[rule.frequency] ?? rule.frequency;
  if (hasDailyFrequency(rule) && rule.dailyFrequency === "EVERY") {
    const unit = rule.dailyIntervalUnit === "HOUR" ? "hour(s)" : "min";
    return `${label}, every ${rule.dailyInterval} ${unit}`;
  }
  return label;
}

function formatDateTime(value?: string): string {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleString("en-US", {
    dateStyle: "short",
    timeStyle: "short",
  });
}

/** Unsaved schedules have no id yet and show as drafts. */
export function getScheduleStatus(
  item: ScheduleItem,
  now: number = Date.now(),
): ScheduleStatus {
  if (!isScheduleActive(item)) return "INACTIVE";
  if (item.id == null) return "DRAFT";
  const last = item.datesJson[item.datesJson.length - 1];
  if (last && new Date(last.endDateTime).getTime() < now) return "EXPIRED";
  return "ACTIVE";
}

export function getScheduleKey(item: ScheduleItem, index: number): string {
  return item.id != null ? `schedule-${item.id}` : `new-${index}`;
}

export function toScheduleTableRow(
  item: ScheduleItem,
  index: number,
  types: ScheduleOption[] = [],
): ScheduleTableRow {
  const { rule } = item.scheduleJson;
  const first = item.datesJson[0];
  const last = item.datesJson[item.datesJson.length - 1];
  const hasNoEnd =
    rule.frequency !== "NONE" && rule.recurrenceEndMode === "NEVER";

  return {
    rowKey: getScheduleKey(item, index),
    index,
    name: item.name,
    description: item.description ?? "",
    type: types.find((type) => type.id === item.typeId)?.name ?? "—",
    startDate: formatDateTime(
      first?.startDateTime ?? `${rule.startDate}T${rule.startTime}`,
    ),
    endDate: hasNoEnd ? "No end date" : formatDateTime(last?.endDateTime),
    recurrence: formatRecurrence(rule),
    occurrences: item.datesJson.length,
    status: getScheduleStatus(item),
  };
}
