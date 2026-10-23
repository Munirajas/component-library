"use client";

/* ===================================
   SELECT
   react-select: search, single, multi, clear, remove, create, disabled.
   =================================== */

import { useId } from "react";
import ReactSelect, {
  type ActionMeta,
  type GroupBase,
  type StylesConfig,
} from "react-select";
import CreatableSelect from "react-select/creatable";
import { FormControl } from "../ui/BaseComponents";

export interface SelectOption {
  label: string;
  value: string | number;
  isDisabled?: boolean;
}

export interface SelectGroup {
  label: string;
  options: readonly SelectOption[];
}

export interface SelectProps {
  options: ReadonlyArray<SelectOption | SelectGroup>;
  value?: SelectOption | readonly SelectOption[] | null;
  defaultValue?: SelectOption | readonly SelectOption[] | null;
  onChange?: (
    value: SelectOption | readonly SelectOption[] | null,
    meta: ActionMeta<SelectOption>,
  ) => void;
  isMulti?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  /** Switch to CreatableSelect so the user can add a value that is not in the list. */
  creatable?: boolean;
  placeholder?: string;
  label?: string;
  error?: string;
  helpText?: string;
  required?: boolean;
  name?: string;
  inputId?: string;
  className?: string;
  noOptionsMessage?: (obj: { inputValue: string }) => string;
  formatCreateLabel?: (inputValue: string) => string;
  /** When set, react-select does not also call onChange for the new option. */
  onCreateOption?: (inputValue: string) => void;
  closeMenuOnSelect?: boolean;
  menuPlacement?: "auto" | "bottom" | "top";
  createOptionPosition?: "first" | "last";
  backspaceRemovesValue?: boolean;
  hideSelectedOptions?: boolean;
  "data-testid"?: string;
}

function selectStyles(
  hasError: boolean,
): StylesConfig<SelectOption, boolean, GroupBase<SelectOption>> {
  return {
    control: (base, state) => ({
      ...base,
      minHeight: 40,
      borderRadius: 6,
      fontSize: 14,
      backgroundColor: state.isDisabled ? "#f3f4f6" : "#fff",
      borderColor: hasError
        ? "#fca5a5"
        : state.isFocused
          ? "#3b82f6"
          : "#d1d5db",
      boxShadow: state.isFocused ? "0 0 0 1px #3b82f6" : "none",
      cursor: state.isDisabled ? "not-allowed" : "default",
      "&:hover": {
        borderColor: hasError
          ? "#fca5a5"
          : state.isFocused
            ? "#3b82f6"
            : "#9ca3af",
      },
    }),
    menu: (base) => ({ ...base, zIndex: 30, fontSize: 14 }),
    option: (base, state) => ({
      ...base,
      fontSize: 14,
      cursor: state.isDisabled ? "not-allowed" : "pointer",
      backgroundColor: state.isSelected
        ? "#eff6ff"
        : state.isFocused
          ? "#f3f4f6"
          : "#fff",
      color: state.isDisabled
        ? "#9ca3af"
        : state.isSelected
          ? "#1d4ed8"
          : "#1f2937",
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "#eff6ff",
      borderRadius: 4,
    }),
    multiValueLabel: (base) => ({ ...base, color: "#1d4ed8", fontSize: 13 }),
    multiValueRemove: (base, state) => ({
      ...base,
      color: "#1d4ed8",
      cursor: state.isDisabled ? "not-allowed" : "pointer",
      ":hover": {
        backgroundColor: "#dbeafe",
        color: "#1e3a8a",
      },
    }),
    placeholder: (base) => ({ ...base, color: "#9ca3af", fontSize: 14 }),
    groupHeading: (base) => ({
      ...base,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "#6b7280",
    }),
    clearIndicator: (base) => ({ ...base, cursor: "pointer" }),
    dropdownIndicator: (base, state) => ({
      ...base,
      cursor: state.isDisabled ? "not-allowed" : "pointer",
    }),
  };
}

export function Select({
  options,
  value,
  defaultValue,
  onChange,
  isMulti = false,
  isSearchable = true,
  isClearable = false,
  isDisabled = false,
  isLoading = false,
  creatable = false,
  placeholder = "Select...",
  label,
  error,
  helpText,
  required = false,
  name,
  inputId,
  className,
  noOptionsMessage,
  formatCreateLabel,
  onCreateOption,
  closeMenuOnSelect,
  menuPlacement = "auto",
  createOptionPosition = "last",
  backspaceRemovesValue = true,
  hideSelectedOptions,
  "data-testid": dataTestId,
}: SelectProps) {
  const generatedId = useId();
  const fieldId = inputId ?? generatedId;
  const Component = (creatable ? CreatableSelect : ReactSelect) as typeof CreatableSelect;

  return (
    <FormControl
      label={label}
      required={required}
      error={error}
      helpText={helpText}
      className={className}
    >
      <div data-testid={dataTestId}>
        <Component
          inputId={fieldId}
          name={name}
          options={options}
          value={value}
          defaultValue={defaultValue}
          isMulti={isMulti}
          isSearchable={isSearchable}
          isClearable={isClearable}
          isDisabled={isDisabled}
          isLoading={isLoading}
          placeholder={placeholder}
          menuPlacement={menuPlacement}
          closeMenuOnSelect={closeMenuOnSelect ?? !isMulti}
          backspaceRemovesValue={backspaceRemovesValue}
          hideSelectedOptions={hideSelectedOptions}
          noOptionsMessage={noOptionsMessage}
          formatCreateLabel={formatCreateLabel}
          onCreateOption={onCreateOption}
          createOptionPosition={createOptionPosition}
          aria-invalid={error ? true : undefined}
          styles={selectStyles(!!error)}
          onChange={(next, meta) => {
            onChange?.(
              next as SelectOption | readonly SelectOption[] | null,
              meta,
            );
          }}
        />
      </div>
    </FormControl>
  );
}

export default Select;
