import type { GeneratedOccurrence, ScheduleDate, ScheduleItem } from "./types";

type ScheduleDetails = Pick<
  ScheduleItem,
  "id" | "name" | "typeId" | "isActive"
>;

/**
 * Name and type already set on an occurrence win over the schedule's values.
 * The active state always follows the schedule when it is set.
 */
export function inheritScheduleDetails(
  schedule: ScheduleDetails,
  date: GeneratedOccurrence & Partial<ScheduleDate>,
): ScheduleDate {
  return {
    scheduleId:
      schedule.id != null ? String(schedule.id) : (date.scheduleId ?? ""),
    startDateTime: date.startDateTime,
    endDateTime: date.endDateTime,
    scheduleName: date.scheduleName || schedule.name,
    typeId: date.typeId || schedule.typeId || "",
    isActive: schedule.isActive ?? date.isActive ?? true,
  };
}

export function toScheduleDates(
  schedule: ScheduleDetails,
  dates: (GeneratedOccurrence & Partial<ScheduleDate>)[],
): ScheduleDate[] {
  return dates.map((date) => inheritScheduleDetails(schedule, date));
}

export function isScheduleActive(
  item: Pick<ScheduleItem, "isActive">,
): boolean {
  return item.isActive !== false;
}

/** datesJson of every schedule, flattened into a single list. */
export function collectScheduleDates(items: ScheduleItem[]): ScheduleDate[] {
  return items.flatMap((item) => toScheduleDates(item, item.datesJson));
}

/** datesJson of every active schedule, flattened into a single list. */
export function collectActiveScheduleDates(
  items: ScheduleItem[],
): ScheduleDate[] {
  return collectScheduleDates(items.filter(isScheduleActive));
}

function occurrencesOverlap(
  left: GeneratedOccurrence,
  right: GeneratedOccurrence,
): boolean {
  const leftStart = Date.parse(left.startDateTime);
  const leftEnd = Date.parse(left.endDateTime);
  const rightStart = Date.parse(right.startDateTime);
  const rightEnd = Date.parse(right.endDateTime);
  if ([leftStart, leftEnd, rightStart, rightEnd].some(Number.isNaN)) {
    return false;
  }
  return leftStart < rightEnd && rightStart < leftEnd;
}

/** First active schedule whose instances overlap the candidate. */
export function findOverlappingSchedule<T extends ScheduleItem>(
  candidate: ScheduleItem,
  others: T[],
): T | undefined {
  if (!isScheduleActive(candidate)) return undefined;
  return others.find(
    (other) =>
      isScheduleActive(other) &&
      other.datesJson.some((otherSlot) =>
        candidate.datesJson.some((slot) => occurrencesOverlap(slot, otherSlot)),
      ),
  );
}
