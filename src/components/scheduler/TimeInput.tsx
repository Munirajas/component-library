"use client";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const DEFAULT_CLASS_NAME =
  "w-32 rounded-md border border-gray-300 px-2 py-2 text-sm bg-white disabled:bg-gray-50";

interface Props {
  name?: string;
  value?: string;
  disabled?: boolean;
  invalid?: boolean;
  className?: string;
  "data-testid"?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

export function TimeInput({
  name,
  value = "",
  disabled,
  invalid,
  className,
  onChange,
  onBlur,
  "data-testid": dataTestId,
}: Props) {
  return (
    <input
      type="time"
      name={name}
      data-testid={dataTestId}
      value={value}
      disabled={disabled}
      onChange={(event) => onChange(event.target.value)}
      onBlur={onBlur}
      className={twMerge(
        clsx(DEFAULT_CLASS_NAME, invalid && "border-red-500", className),
      )}
    />
  );
}
