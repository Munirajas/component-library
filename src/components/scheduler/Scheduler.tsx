"use client";

import { CTA } from "../actions";
import type { CalendarProps } from "../calendar";
import { type ReactNode, useMemo, useState } from "react";
import { EditScopeModal } from "./EditScopeModal";
import { CalendarIcon, ListIcon } from "./icons";
import { normalizeLocalDateTime } from "./recurrence-engine";
import { ScheduleCalendar } from "./ScheduleCalendar";
import { toScheduleDates } from "./schedule-dates";
import { getScheduleKey } from "./schedule-list";
import {
  excludeOccurrence,
  isRecurringSchedule,
  toOccurrenceSchedule,
} from "./schedule-occurrences";
import { ScheduleFormModal } from "./ScheduleFormModal";
import { ScheduleTable } from "./ScheduleTable";
import type {
  EditScope,
  ScheduleChange,
  ScheduleDate,
  ScheduleItem,
  ScheduleOption,
  SchedulerDefaults,
  SchedulerView,
  ScheduleSubmitResult,
} from "./types";

export interface SchedulerProps {
  schedules: ScheduleItem[];
  types?: ScheduleOption[];
  /** Values used for new schedules. */
  defaults?: SchedulerDefaults;
  /**
   * Called when a schedule is created, updated or deleted. Return an error
   * message to keep the modal open, or nothing to close it. The new list is in
   * `change.schedules`; pass it back through `schedules` once it is applied.
   */
  onSubmit: (
    change: ScheduleChange,
  ) => ScheduleSubmitResult | Promise<ScheduleSubmitResult>;
  defaultView?: SchedulerView;
  defaultCalendarView?: CalendarProps["defaultView"];
  /** Shown between the toolbar and the schedules, e.g. an unsaved changes hint. */
  notice?: ReactNode;
  addLabel?: string;
  emptyMessage?: string;
  /** Shown when `onSubmit` throws. */
  submitErrorMessage?: string;
  showDescription?: boolean;
  showStatus?: boolean;
  allowAdd?: boolean;
  allowDelete?: boolean;
  /** Lets a recurring instance be edited on its own from the calendar. */
  allowOccurrenceEdit?: boolean;
  className?: string;
}

interface ScheduleTarget {
  key: string;
  index: number;
}

interface OccurrenceTarget extends ScheduleTarget {
  date: ScheduleDate;
}

/** undefined = modal closed, null = adding a new schedule. */
type EditingTarget = ScheduleTarget | null | undefined;

export function Scheduler({
  schedules,
  types,
  defaults,
  onSubmit,
  defaultView = "calendar",
  defaultCalendarView = "month",
  notice,
  addLabel = "Add Schedule +",
  emptyMessage,
  submitErrorMessage = "Failed to save schedule.",
  showDescription = true,
  showStatus = true,
  allowAdd = true,
  allowDelete = true,
  allowOccurrenceEdit = true,
  className,
}: SchedulerProps) {
  const [view, setView] = useState<SchedulerView>(defaultView);
  const [editing, setEditing] = useState<EditingTarget>(undefined);
  const [scopeTarget, setScopeTarget] = useState<OccurrenceTarget | null>(
    null,
  );
  const [occurrenceTarget, setOccurrenceTarget] =
    useState<OccurrenceTarget | null>(null);

  const calendarEntries = useMemo(
    () =>
      schedules.flatMap((item, index) =>
        toScheduleDates(item, item.datesJson).map((date) => ({ date, index })),
      ),
    [schedules],
  );
  const calendarDates = useMemo(
    () => calendarEntries.map((entry) => entry.date),
    [calendarEntries],
  );

  function toTarget(index: number): ScheduleTarget {
    return { key: getScheduleKey(schedules[index], index), index };
  }

  function resolveIndex(target: ScheduleTarget): number {
    const current = schedules[target.index];
    if (current && getScheduleKey(current, target.index) === target.key) {
      return target.index;
    }
    return schedules.findIndex(
      (item, index) => getScheduleKey(item, index) === target.key,
    );
  }

  async function submit(change: ScheduleChange): Promise<string | null> {
    try {
      const result = await onSubmit(change);
      return typeof result === "string" && result ? result : null;
    } catch {
      return submitErrorMessage;
    }
  }

  function handleDateClick(_date: ScheduleDate, dateIndex: number) {
    const entry = calendarEntries[dateIndex];
    const item = entry && schedules[entry.index];
    if (!item) return;
    const target = toTarget(entry.index);
    if (allowOccurrenceEdit && isRecurringSchedule(item)) {
      setScopeTarget({ ...target, date: entry.date });
    } else {
      setEditing(target);
    }
  }

  function handleScopeChoice(scope: EditScope) {
    if (!scopeTarget) return;
    if (scope === "series") {
      setEditing({ key: scopeTarget.key, index: scopeTarget.index });
    } else {
      setOccurrenceTarget(scopeTarget);
    }
    setScopeTarget(null);
  }

  async function handleSave(saved: ScheduleItem): Promise<string | null> {
    if (editing === undefined) return null;

    let change: ScheduleChange;
    if (editing === null) {
      const next = [...schedules, saved];
      change = {
        action: "create",
        schedule: saved,
        index: next.length - 1,
        schedules: next,
      };
    } else {
      const index = resolveIndex(editing);
      if (index < 0) return "This schedule no longer exists.";
      const previous = schedules[index];
      const schedule = { ...previous, ...saved };
      change = {
        action: "update",
        schedule,
        index,
        previous,
        schedules: schedules.map((item, i) => (i === index ? schedule : item)),
      };
    }

    const error = await submit(change);
    if (!error) setEditing(undefined);
    return error;
  }

  async function handleOccurrenceSave(
    saved: ScheduleItem,
  ): Promise<string | null> {
    if (!occurrenceTarget) return null;
    const index = resolveIndex(occurrenceTarget);
    if (index < 0) return "This schedule no longer exists.";

    const { date } = occurrenceTarget;
    const previous = schedules[index];
    const series = excludeOccurrence(previous, date.startDateTime);
    let change: ScheduleChange;

    if (series.datesJson.length === 0) {
      const schedule = { ...previous, ...saved };
      change = {
        action: "updateOccurrence",
        schedule,
        index,
        previous,
        series: schedule,
        occurrence: date,
        schedules: schedules.map((item, i) => (i === index ? schedule : item)),
      };
    } else {
      const schedule: ScheduleItem = {
        ...saved,
        parentScheduleId: previous.id,
        originalStartDateTime:
          normalizeLocalDateTime(date.startDateTime) ?? date.startDateTime,
      };
      const next = [
        ...schedules.map((item, i) => (i === index ? series : item)),
        schedule,
      ];
      change = {
        action: "updateOccurrence",
        schedule,
        index: next.length - 1,
        previous,
        series,
        occurrence: date,
        schedules: next,
      };
    }

    const error = await submit(change);
    if (!error) setOccurrenceTarget(null);
    return error;
  }

  async function handleDelete(): Promise<string | null> {
    if (!editing) return null;
    const index = resolveIndex(editing);
    if (index < 0) return "This schedule no longer exists.";

    const previous = schedules[index];
    const error = await submit({
      action: "delete",
      schedule: previous,
      index: -1,
      previous,
      schedules: schedules.filter((_, i) => i !== index),
    });
    if (!error) setEditing(undefined);
    return error;
  }

  const editingIndex = editing ? resolveIndex(editing) : -1;
  const editingSchedule = editingIndex >= 0 ? schedules[editingIndex] : null;
  const occurrenceIndex = occurrenceTarget
    ? resolveIndex(occurrenceTarget)
    : -1;
  const occurrenceSeries =
    occurrenceIndex >= 0 ? schedules[occurrenceIndex] : undefined;

  function viewButtonClass(target: SchedulerView) {
    return `flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border ${
      view === target
        ? "border-blue-600 bg-blue-50 text-blue-600"
        : "border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
    }`;
  }

  return (
    <div className={`flex flex-col gap-4 ${className ?? ""}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            data-testid="modules-amenities-components-schedule-schedulelist--button--listview"
            type="button"
            aria-label="List view"
            aria-pressed={view === "list"}
            className={viewButtonClass("list")}
            onClick={() => setView("list")}
          >
            <span className="flex h-4 w-4 items-center justify-center">
              {ListIcon}
            </span>
          </button>
          <button
            data-testid="modules-amenities-components-schedule-schedulelist--button--calendarview"
            type="button"
            aria-label="Calendar view"
            aria-pressed={view === "calendar"}
            className={viewButtonClass("calendar")}
            onClick={() => setView("calendar")}
          >
            <span className="flex h-4 w-4 items-center justify-center">
              {CalendarIcon}
            </span>
          </button>
        </div>
        {allowAdd ? (
          <CTA
            data-testid="modules-amenities-components-schedule-schedulelist--cta--add"
            variant="primary"
            size="sm"
            onClick={() => setEditing(null)}
          >
            {addLabel}
          </CTA>
        ) : null}
      </div>

      {notice}

      {view === "calendar" ? (
        <ScheduleCalendar
          dates={calendarDates}
          types={types}
          defaultView={defaultCalendarView}
          onDateClick={handleDateClick}
        />
      ) : (
        <ScheduleTable
          schedules={schedules}
          types={types}
          emptyMessage={emptyMessage}
          onOpen={(index) => setEditing(toTarget(index))}
        />
      )}

      {scopeTarget ? (
        <EditScopeModal
          date={scopeTarget.date}
          onClose={() => setScopeTarget(null)}
          onContinue={handleScopeChoice}
        />
      ) : null}
      {occurrenceTarget && occurrenceSeries ? (
        <ScheduleFormModal
          key={`occurrence-${occurrenceTarget.key}-${occurrenceTarget.date.startDateTime}`}
          mode="occurrence"
          schedule={toOccurrenceSchedule(
            occurrenceSeries,
            occurrenceTarget.date,
          )}
          types={types}
          defaults={defaults}
          showDescription={showDescription}
          showStatus={showStatus}
          onClose={() => setOccurrenceTarget(null)}
          onSave={handleOccurrenceSave}
        />
      ) : null}
      {editing === null || editingSchedule ? (
        <ScheduleFormModal
          key={editing ? editing.key : "new"}
          schedule={editingSchedule}
          types={types}
          defaults={defaults}
          showDescription={showDescription}
          showStatus={showStatus}
          onClose={() => setEditing(undefined)}
          onSave={handleSave}
          onDelete={editingSchedule && allowDelete ? handleDelete : undefined}
        />
      ) : null}
    </div>
  );
}
