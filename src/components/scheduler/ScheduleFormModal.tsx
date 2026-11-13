"use client";

import { Button } from "../ui";
import { useId, useRef, useState } from "react";
import { DeleteScheduleModal } from "./DeleteScheduleModal";
import { CloseIcon, TrashIcon } from "./icons";
import {
  buildDefaultRecurrenceRule,
  normalizeRecurrenceRule,
} from "./recurrence-defaults";
import { buildScheduleSavePayload } from "./recurrence-engine";
import {
  RecurrenceRuleBuilder,
  type RecurrenceRuleBuilderHandle,
} from "./RecurrenceRuleBuilder";
import { toScheduleDates } from "./schedule-dates";
import type {
  EditScope,
  ScheduleItem,
  ScheduleOption,
  SchedulerDefaults,
} from "./types";

interface Props {
  schedule: ScheduleItem | null;
  /** The Type dropdown is shown only when options exist. */
  types?: ScheduleOption[];
  /** Prefills a new schedule and fills fields missing from a saved one. */
  defaults?: SchedulerDefaults;
  /** "occurrence" edits a single instance: no recurrence fields, no delete. */
  mode?: EditScope;
  showDescription?: boolean;
  showStatus?: boolean;
  onClose: () => void;
  /** Resolves to an error message to keep the modal open, or null. */
  onSave: (schedule: ScheduleItem) => Promise<string | null>;
  onDelete?: () => Promise<string | null>;
}

const OCCURRENCE_FIELDS = [
  "startDate",
  "startTime",
  "endDate",
  "endTime",
] as const;

function initialOptionId(
  current: string | undefined,
  preferred: string | undefined,
  options: ScheduleOption[] | undefined,
): string {
  if (!options?.length) return current ?? "";
  const ids = options.map((option) => option.id);
  if (current && ids.includes(current)) return current;
  if (preferred && ids.includes(preferred)) return preferred;
  return ids[0];
}

export function ScheduleFormModal({
  schedule,
  types,
  defaults,
  mode = "series",
  showDescription = true,
  showStatus = true,
  onClose,
  onSave,
  onDelete,
}: Props) {
  const fieldId = useId();
  const [initial] = useState(() => ({
    name: schedule?.name ?? defaults?.name ?? "",
    description: schedule
      ? (schedule.description ?? "")
      : (defaults?.description ?? ""),
    typeId: initialOptionId(schedule?.typeId, defaults?.typeId, types),
    isActive: schedule
      ? schedule.isActive !== false
      : (defaults?.isActive ?? true),
    rule: schedule
      ? normalizeRecurrenceRule(schedule.scheduleJson.rule, defaults)
      : buildDefaultRecurrenceRule(defaults),
  }));
  const [name, setName] = useState(initial.name);
  const [description, setDescription] = useState(initial.description);
  const [isActive, setIsActive] = useState(initial.isActive);
  const [typeId, setTypeId] = useState(initial.typeId);
  const [nameError, setNameError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [recurrenceRule, setRecurrenceRule] = useState(initial.rule);
  const builderRef = useRef<RecurrenceRuleBuilderHandle>(null);
  const isOccurrence = mode === "occurrence";
  const excludedCount = isOccurrence
    ? 0
    : (recurrenceRule.excludedDateTimes?.length ?? 0);

  function hasOccurrenceChanges(
    trimmedName: string,
    trimmedDescription: string,
  ): boolean {
    return (
      trimmedName !== initial.name ||
      trimmedDescription !== initial.description.trim() ||
      typeId !== initial.typeId ||
      isActive !== initial.isActive ||
      OCCURRENCE_FIELDS.some(
        (field) => recurrenceRule[field] !== initial.rule[field],
      )
    );
  }

  async function handleSave() {
    const trimmedName = name.trim();
    const trimmedDescription = description.trim();
    setNameError(trimmedName ? null : "Name is required");
    const isValid = await builderRef.current?.validate();
    if (!trimmedName || !isValid) return;

    if (
      isOccurrence &&
      !hasOccurrenceChanges(trimmedName, trimmedDescription)
    ) {
      onClose();
      return;
    }

    const { rule, rruleText, occurrences } =
      buildScheduleSavePayload(recurrenceRule);
    if (!occurrences.length) {
      setError(
        "This schedule does not produce any dates. Please check the recurrence settings.",
      );
      return;
    }

    const details = {
      id: schedule?.id,
      name: trimmedName,
      typeId: typeId || undefined,
      isActive,
    };

    setIsSaving(true);
    try {
      const saveError = await onSave({
        name: trimmedName,
        description: trimmedDescription || undefined,
        typeId: details.typeId,
        isActive,
        scheduleJson: { rule, rruleText },
        datesJson: toScheduleDates(details, occurrences),
      });
      setError(saveError);
    } finally {
      setIsSaving(false);
    }
  }

  async function handleConfirmDelete() {
    if (!onDelete) return;
    setIsDeleting(true);
    try {
      const deleteError = await onDelete();
      setShowDeleteConfirm(false);
      setError(deleteError);
    } finally {
      setIsDeleting(false);
    }
  }

  const isBusy = isSaving || isDeleting;
  const nameId = `${fieldId}scheduleName`;
  const descriptionId = `${fieldId}scheduleDescription`;

  return (
    <div
      data-testid="modules-amenities-components-schedule-scheduleformmodal--div--i1"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    >
      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <h2
            data-testid="modules-amenities-components-schedule-scheduleformmodal--h2--i1"
            className="text-base font-semibold text-gray-900"
          >
            {isOccurrence
              ? "Edit Instance"
              : schedule
                ? "Edit Schedule"
                : "New Schedule"}
          </h2>
          <div className="flex items-center gap-3">
            {schedule && onDelete && !isOccurrence ? (
              <Button
                data-testid="modules-amenities-components-schedule-scheduleformmodal--button--delete"
                type="button"
                variant="outlineAccent"
                disabled={isBusy}
                onClick={() => setShowDeleteConfirm(true)}
                className="w-22 gap-2 h-8 px-3 py-2 text-left text-sm rounded-none bg-transparent text-red-600! border-red-400! hover:bg-red-50 cursor-pointer focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                  {TrashIcon}
                </span>
                Delete
              </Button>
            ) : null}
            <button
              data-testid="modules-amenities-components-schedule-scheduleformmodal--button--close"
              type="button"
              onClick={onClose}
              aria-label="Close"
              disabled={isBusy}
              className="cursor-pointer text-gray-400 transition-colors hover:text-gray-600 disabled:cursor-not-allowed"
            >
              {CloseIcon}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 overflow-y-auto px-6 py-5">
          {isOccurrence ? (
            <p className="rounded-md bg-blue-50 px-3 py-2 text-sm text-blue-800">
              Changes apply only to this instance. Once saved, it is moved out
              of the schedule and kept as a separate schedule.
            </p>
          ) : null}
          {excludedCount > 0 ? (
            <p className="rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-800">
              {excludedCount === 1
                ? "1 instance of this schedule was edited separately and is not part of this series."
                : `${excludedCount} instances of this schedule were edited separately and are not part of this series.`}
            </p>
          ) : null}
          <div className="flex flex-col gap-1">
            <label
              data-testid="modules-amenities-components-schedule-scheduleformmodal--label--name"
              htmlFor={nameId}
              className="text-sm font-medium text-gray-700"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              data-testid="modules-amenities-components-schedule-scheduleformmodal--input--name"
              id={nameId}
              type="text"
              value={name}
              disabled={isBusy}
              onChange={(e) => setName(e.target.value)}
              placeholder="Schedule name"
              className={`w-full rounded-md border px-3 py-2 text-sm bg-white ${
                nameError ? "border-red-500" : "border-gray-300"
              }`}
            />
            {nameError && <p className="text-xs text-red-600">{nameError}</p>}
          </div>

          {showDescription ? (
            <div className="flex flex-col gap-1">
              <label
                data-testid="modules-amenities-components-schedule-scheduleformmodal--label--description"
                htmlFor={descriptionId}
                className="text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                data-testid="modules-amenities-components-schedule-scheduleformmodal--textarea--description"
                id={descriptionId}
                rows={2}
                value={description}
                disabled={isBusy}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Schedule description"
                className="w-full resize-y rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
              />
            </div>
          ) : null}

          <RecurrenceRuleBuilder
            ref={builderRef}
            value={recurrenceRule}
            onChange={setRecurrenceRule}
            error={error}
            disabled={isBusy}
            showRecurrence={!isOccurrence}
            recurrenceMonths={defaults?.recurrenceMonths}
            isActive={isActive}
            onActiveChange={showStatus ? setIsActive : undefined}
            types={types}
            typeId={typeId}
            onTypeChange={setTypeId}
          />
        </div>

        <div className="flex justify-end gap-3 border-t border-gray-100 px-6 py-4">
          <button
            data-testid="modules-amenities-components-schedule-scheduleformmodal--button--cancel"
            type="button"
            onClick={onClose}
            disabled={isBusy}
            className="h-10 w-32 cursor-pointer rounded-lg border border-gray-200 text-sm text-gray-600 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Cancel
          </button>
          <button
            data-testid="modules-amenities-components-schedule-scheduleformmodal--button--save"
            type="button"
            onClick={handleSave}
            disabled={isBusy}
            className="h-10 w-32 cursor-pointer rounded-lg bg-blue-600 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSaving ? "Saving" : "Save"}
          </button>
        </div>
      </div>
      {showDeleteConfirm ? (
        <DeleteScheduleModal
          scheduleName={name.trim() || schedule?.name || "this schedule"}
          isDeleting={isDeleting}
          onClose={() => setShowDeleteConfirm(false)}
          onConfirm={handleConfirmDelete}
        />
      ) : null}
    </div>
  );
}
