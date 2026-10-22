"use client";

/* ===================================
   GROUPED SELECT
   Groups of options, with an optional search box.
   Menu opens upward when there isn't room below.
   =================================== */

import { useEffect, useMemo, useRef, useState } from "react";

export interface GroupedSelectOption<T = string | number> {
  value: T;
  label: string;
  disabled?: boolean;
}

export interface GroupedSelectGroup<T = string | number> {
  id?: string | number;
  label: string;
  options: GroupedSelectOption<T>[];
}

export interface GroupedSelectProps<T = string | number> {
  groups: GroupedSelectGroup<T>[];
  value?: T | null;
  placeholder?: string;
  disabled?: boolean;
  searchable?: boolean;
  searchPlaceholder?: string;
  className?: string;
  emptyMessage?: string;
  onChange: (value: T) => void;
  "data-testid"?: string;
}

export function GroupedSelect<T extends string | number = string | number>({
  groups,
  value = null,
  placeholder = "Select",
  disabled = false,
  searchable = false,
  searchPlaceholder = "Search items",
  className = "",
  emptyMessage = "No options available",
  onChange,
  "data-testid": dataTestId,
}: GroupedSelectProps<T>) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [opensAbove, setOpensAbove] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const availableGroups = useMemo(
    () => (groups ?? []).filter((group) => group.options.length > 0),
    [groups],
  );

  const visibleGroups = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return availableGroups;

    return availableGroups
      .map((group) => ({
        ...group,
        options: group.options.filter((option) =>
          option.label.toLowerCase().includes(query),
        ),
      }))
      .filter((group) => group.options.length > 0);
  }, [availableGroups, search]);

  const selectedLabel = useMemo(() => {
    for (const group of availableGroups) {
      const match = group.options.find((option) => option.value === value);
      if (match) return match.label;
    }
    return "";
  }, [availableGroups, value]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (open && searchable) searchRef.current?.focus();
  }, [open, searchable]);

  const hasOptions = availableGroups.length > 0;

  function toggleOpen() {
    if (open) {
      setOpen(false);
      setSearch("");
      return;
    }

    // max-h-72 is 18rem. Flip the menu when that won't fit under the trigger.
    const rect = rootRef.current?.getBoundingClientRect();
    if (rect) {
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      setOpensAbove(spaceBelow < 288 && spaceAbove > spaceBelow);
    }
    setOpen(true);
  }

  return (
    <div
      ref={rootRef}
      data-testid={dataTestId}
      className={`relative w-full max-w-md ${className}`}
    >
      <button
        data-testid="modules-sales-funnels-components-groupedselect--button--button"
        type="button"
        disabled={disabled || !hasOptions}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={toggleOpen}
        className="flex h-11 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-left text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100"
      >
        <span className={selectedLabel ? "text-gray-900" : "text-gray-400"}>
          {selectedLabel || (hasOptions ? placeholder : emptyMessage)}
        </span>
        <svg
          data-testid="modules-sales-funnels-components-groupedselect--svg--i1"
          className={`h-4 w-4 shrink-0 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && hasOptions ? (
        <div
          data-testid="modules-sales-funnels-components-groupedselect--div--listbox"
          role="listbox"
          className={`absolute z-20 flex max-h-72 w-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg ${
            opensAbove ? "bottom-full mb-1" : "top-full mt-1"
          }`}
        >
          {searchable ? (
            <div className="border-b border-gray-200 p-2">
              <input
                data-testid="modules-sales-funnels-components-groupedselect--input--search"
                ref={searchRef}
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={searchPlaceholder}
                className="h-9 w-full rounded-md border border-gray-300 px-3 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
          ) : null}
          <div className="overflow-auto py-1">
            {visibleGroups.length > 0 ? (
              visibleGroups.map((group) => (
                <div key={String(group.id ?? group.label)}>
                  <div className="sticky top-0 bg-gray-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {group.label}
                  </div>
                  {group.options.map((option) => {
                    const selected = option.value === value;
                    return (
                      <button
                        data-testid="modules-sales-funnels-components-groupedselect--button--option"
                        key={String(option.value)}
                        type="button"
                        role="option"
                        aria-selected={selected}
                        disabled={option.disabled}
                        onClick={() => {
                          if (option.disabled) return;
                          onChange(option.value);
                          setOpen(false);
                          setSearch("");
                        }}
                        className={`flex w-full py-2 pr-3 pl-7 text-left text-sm hover:bg-blue-50 disabled:cursor-not-allowed disabled:text-gray-400 ${
                          selected
                            ? "bg-blue-50 font-medium text-blue-700"
                            : "text-gray-800"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              ))
            ) : (
              <p className="px-3 py-2 text-sm text-gray-500">{emptyMessage}</p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default GroupedSelect;
