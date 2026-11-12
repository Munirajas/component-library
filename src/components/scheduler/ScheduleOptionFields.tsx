"use client";

import { useId } from "react";
import type { ScheduleOption } from "./types";

interface OptionSelectProps {
  id: string;
  label: string;
  value: string;
  options: ScheduleOption[];
  disabled?: boolean;
  testId: string;
  onChange: (value: string) => void;
}

function OptionSelect({
  id,
  label,
  value,
  options,
  disabled,
  testId,
  onChange,
}: OptionSelectProps) {
  return (
    <div className="flex flex-1 flex-col gap-1">
      <label
        data-testid={`components-scheduler-scheduleoptionfields--label--${testId}`}
        htmlFor={id}
        className="text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <select
        data-testid={`components-scheduler-scheduleoptionfields--select--${testId}`}
        id={id}
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white disabled:bg-gray-50"
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option
            data-testid={`components-scheduler-scheduleoptionfields--option--${testId}`}
            key={option.id}
            value={option.id}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

interface Props {
  types?: ScheduleOption[];
  typeId: string;
  disabled?: boolean;
  onTypeChange: (typeId: string) => void;
}

export function ScheduleOptionFields({
  types,
  typeId,
  disabled,
  onTypeChange,
}: Props) {
  const fieldId = useId();
  if (!types?.length) return null;

  return (
    <div className="flex gap-3">
      <OptionSelect
        data-testid="components-scheduler-scheduleoptionfields--optionselect--scheduletype"
        id={`${fieldId}scheduleType`}
        label="Type"
        value={typeId}
        options={types}
        disabled={disabled}
        testId="type"
        onChange={onTypeChange}
      />
    </div>
  );
}
