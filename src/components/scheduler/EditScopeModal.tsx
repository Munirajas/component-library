"use client";

import { useId, useState } from "react";
import { parseLocalDateTime } from "./recurrence-engine";
import type { EditScope, ScheduleDate } from "./types";

const OCCURRENCE_FORMAT = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "short",
  timeZone: "UTC",
});

const TIME_FORMAT = new Intl.DateTimeFormat("en-US", {
  timeStyle: "short",
  timeZone: "UTC",
});

function formatOccurrence(date: ScheduleDate): string {
  const start = parseLocalDateTime(date.startDateTime);
  const end = parseLocalDateTime(date.endDateTime);
  if (!start) return date.startDateTime;
  const startLabel = OCCURRENCE_FORMAT.format(start);
  return end ? `${startLabel} - ${TIME_FORMAT.format(end)}` : startLabel;
}

const OPTIONS: { value: EditScope; label: string; description: string }[] = [
  {
    value: "occurrence",
    label: "Edit current instance",
    description:
      "Only this instance changes. It is moved out of the schedule and saved on its own.",
  },
  {
    value: "series",
    label: "Edit entire schedule",
    description: "All instances of the schedule are updated.",
  },
];

interface Props {
  date: ScheduleDate;
  onClose: () => void;
  onContinue: (scope: EditScope) => void;
}

export function EditScopeModal({ date, onClose, onContinue }: Props) {
  const [scope, setScope] = useState<EditScope>("occurrence");
  const groupName = useId();

  return (
    <div
      data-testid="components-scheduler-editscopemodal--div--i1"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <h2
          data-testid="components-scheduler-editscopemodal--h2--i1"
          className="text-base font-semibold text-gray-900"
        >
          {date.scheduleName}
        </h2>
        <p className="mt-1 text-sm text-gray-500">{formatOccurrence(date)}</p>

        <p className="mt-4 text-sm text-gray-700">
          This is one instance of a recurring schedule. What do you want to
          edit?
        </p>

        <div
          data-testid="components-scheduler-editscopemodal--div--radiogroup"
          role="radiogroup"
          className="mt-3 flex flex-col gap-2"
        >
          {OPTIONS.map((option) => (
            <label
              data-testid={`components-scheduler-editscopemodal--label--${option.value}`}
              key={option.value}
              className={`flex cursor-pointer gap-3 rounded-lg border px-4 py-3 ${
                scope === option.value
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
            >
              <input
                data-testid={`components-scheduler-editscopemodal--input--${option.value}`}
                type="radio"
                name={groupName}
                value={option.value}
                checked={scope === option.value}
                onChange={() => setScope(option.value)}
                className="mt-0.5"
              />
              <span className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">
                  {option.label}
                </span>
                <span className="text-xs text-gray-500">
                  {option.description}
                </span>
              </span>
            </label>
          ))}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            data-testid="components-scheduler-editscopemodal--button--cancel"
            type="button"
            onClick={onClose}
            className="h-10 w-32 cursor-pointer rounded-lg border border-gray-200 text-sm text-gray-600 transition-colors hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            data-testid="components-scheduler-editscopemodal--button--continue"
            type="button"
            onClick={() => onContinue(scope)}
            className="h-10 w-32 cursor-pointer rounded-lg bg-blue-600 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
