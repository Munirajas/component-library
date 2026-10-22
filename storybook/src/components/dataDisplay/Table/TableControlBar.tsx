import { useRef, useState } from "react";
import { BulkAction } from "./Table";
import { FilterDefinition, FilterPopover, FilterValue } from "./FilterPopover";
import { Input } from "@/index";

// ─── Chip helpers ──────────────────────────────────────────────────────────

interface ActiveChip {
  filterKey: string;
  label: string;
  /** For multiselect, the specific value this chip represents. */
  value?: string;
}

function buildChips(
  filterDefinitions: FilterDefinition[],
  activeFilters: Record<string, FilterValue>
): ActiveChip[] {
  const chips: ActiveChip[] = [];

  for (const [key, val] of Object.entries(activeFilters)) {
    if (val === undefined || val === null || val === "") continue;

    const def = filterDefinitions.find((f) => f.key === key);
    if (!def) continue;

    if (def.type === "multiselect" && Array.isArray(val)) {
      for (const v of val as string[]) {
        const optionLabel =
          def.options?.find((o) => o.value === v)?.label ?? v;
        chips.push({ filterKey: key, label: `${def.label}: ${optionLabel}`, value: v });
      }
    } else if (def.type === "boolean") {
      chips.push({
        filterKey: key,
        label: `${def.label}: ${val === true ? "Yes" : "No"}`,
      });
    } else if (def.type === "select") {
      const optionLabel =
        def.options?.find((o) => o.value === String(val))?.label ?? String(val);
      chips.push({ filterKey: key, label: `${def.label}: ${optionLabel}` });
    } else {
      chips.push({ filterKey: key, label: `${def.label}: ${val}` });
    }
  }

  return chips;
}

// ─── Props ─────────────────────────────────────────────────────────────────

interface TableControlBarProps {
  searchable?: boolean;
  filterable?: boolean;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  bulkActions: BulkAction[];
  onBulkAction: (action: string, selectedRows: string[]) => void;
  selectedCount: number;
  totalCount: number;
  filterDefinitions: FilterDefinition[];
  activeFilters: Record<string, FilterValue>;
  onFilterChange: (key: string, value: FilterValue) => void;
  onClearAllFilters: () => void;
}

// ─── Component ─────────────────────────────────────────────────────────────

export function TableControlBar({
  searchable = true,
  filterable = true,
  searchTerm,
  onSearchChange,
  bulkActions,
  onBulkAction,
  selectedCount,
  totalCount,
  filterDefinitions,
  activeFilters,
  onFilterChange,
  onClearAllFilters,
}: TableControlBarProps) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  const filterButtonRef = useRef<HTMLButtonElement>(null);

  const activeCount = Object.keys(activeFilters).length;
  const chips = buildChips(filterDefinitions, activeFilters);

  const handleFilterButtonClick = () => {
    if (popoverOpen) {
      setPopoverOpen(false);
      return;
    }
    const rect = filterButtonRef.current?.getBoundingClientRect() ?? null;
    setAnchorRect(rect);
    setPopoverOpen(true);
  };

  const handleRemoveChip = (chip: ActiveChip) => {
    if (chip.value !== undefined) {
      // multiselect — remove one value
      const raw = activeFilters[chip.filterKey];
      const current: string[] = Array.isArray(raw) ? raw : [];
      const next = current.filter((v) => v !== chip.value);
      onFilterChange(chip.filterKey, next.length > 0 ? next : undefined);
    } else {
      onFilterChange(chip.filterKey, undefined);
    }
  };

  return (
    <>
      <div className="w-full rounded-t-lg p-4 bg-white border-b border border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

          {/* Bulk actions */}
          {bulkActions.length > 0 && (
            <div className="flex flex-wrap items-center gap-4">
              <div className="text-sm font-semibold text-gray-600">Bulk actions</div>

              {selectedCount > 0 && (
                <div className="text-sm text-blue-600 font-medium">
                  {selectedCount} of {totalCount} selected
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {bulkActions.map((action) => (
                  <button
                    key={action.action}
                    disabled={selectedCount === 0}
                    className="h-10 px-4 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-md flex items-center gap-2 transition-colors"
                    onClick={() => onBulkAction(action.action, [])}
                  >
                    {action.icon}
                    <span className="text-sm font-semibold text-gray-600 md:block hidden">
                      {action.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search + filter controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {searchable && (
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-gray-400"
                  >
                    <path d="M20.3457 18.3164L15.6035 13.5742C15.5137 13.4844 15.3965 13.4375 15.2715 13.4375H14.7559C15.9863 12.0117 16.7324 10.1562 16.7324 8.125C16.7324 3.63672 13.0957 0 8.60742 0C4.11914 0 0.482422 3.63672 0.482422 8.125C0.482422 12.6133 4.11914 16.25 8.60742 16.25C10.6387 16.25 12.4941 15.5039 13.9199 14.2734V14.7891C13.9199 14.9141 13.9707 15.0312 14.0566 15.1211L18.7988 19.8633C18.9824 20.0469 19.2793 20.0469 19.4629 19.8633L20.3457 18.9805C20.5293 18.7969 20.5293 18.5 20.3457 18.3164ZM8.60742 14.375C5.1543 14.375 2.35742 11.5781 2.35742 8.125C2.35742 4.67188 5.1543 1.875 8.60742 1.875C12.0605 1.875 14.8574 4.67188 14.8574 8.125C14.8574 11.5781 12.0605 14.375 8.60742 14.375Z" />
                  </svg>
                </div>
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
            )}

            {filterable && filterDefinitions.length > 0 && (
              <div className="relative">
                <button
                  ref={filterButtonRef}
                  type="button"
                  onClick={handleFilterButtonClick}
                  aria-label="Open filters"
                  aria-expanded={popoverOpen}
                  className={`relative p-2 rounded-md transition-colors ${popoverOpen || activeCount > 0
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.8799 13.75H9.94238V0.625C9.94238 0.28125 9.66113 0 9.31738 0H8.69238C8.34863 0 8.06738 0.28125 8.06738 0.625V13.75H7.12988C6.78613 13.75 6.50488 14.0312 6.50488 14.375V15.625C6.50488 15.9688 6.78613 16.25 7.12988 16.25H8.06738V19.375C8.06738 19.7188 8.34863 20 8.69238 20H9.31738C9.66113 20 9.94238 19.7188 9.94238 19.375V16.25H10.8799C11.2236 16.25 11.5049 15.9688 11.5049 15.625V14.375C11.5049 14.0312 11.2236 13.75 10.8799 13.75ZM4.62988 3.75H3.69238V0.625C3.69238 0.28125 3.41113 0 3.06738 0H2.44238C2.09863 0 1.81738 0.28125 1.81738 0.625V3.75H0.879883C0.536133 3.75 0.254883 4.03125 0.254883 4.375V5.625C0.254883 5.96875 0.536133 6.25 0.879883 6.25H1.81738V19.375C1.81738 19.7188 2.09863 20 2.44238 20H3.06738C3.41113 20 3.69238 19.7188 3.69238 19.375V6.25H4.62988C4.97363 6.25 5.25488 5.96875 5.25488 5.625V4.375C5.25488 4.03125 4.97363 3.75 4.62988 3.75ZM17.1299 8.75H16.1924V0.625C16.1924 0.28125 15.9111 0 15.5674 0H14.9424C14.5986 0 14.3174 0.28125 14.3174 0.625V8.75H13.3799C13.0361 8.75 12.7549 9.03125 12.7549 9.375V10.625C12.7549 10.9688 13.0361 11.25 13.3799 11.25H14.3174V19.375C14.3174 19.7188 14.5986 20 14.9424 20H15.5674C15.9111 20 16.1924 19.7188 16.1924 19.375V11.25H17.1299C17.4736 11.25 17.7549 10.9688 17.7549 10.625V9.375C17.7549 9.03125 17.4736 8.75 17.1299 8.75Z" />
                  </svg>

                  {/* Active filter count badge */}
                  {activeCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-bold leading-none">
                      {activeCount}
                    </span>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Active filter chips */}
        {chips.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100">
            {chips.map((chip, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium"
              >
                {chip.label}
                <button
                  type="button"
                  onClick={() => handleRemoveChip(chip)}
                  aria-label={`Remove filter ${chip.label}`}
                  className="flex items-center justify-center w-4 h-4 rounded-full hover:bg-blue-200 transition-colors text-blue-500"
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                    <path d="M7.5 1.5L4 5 0.5 1.5M0.5 6.5L4 3l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </svg>
                </button>
              </span>
            ))}
            {chips.length > 1 && (
              <button
                type="button"
                onClick={onClearAllFilters}
                className="text-xs text-gray-500 hover:text-gray-700 font-medium self-center ml-1 transition-colors"
              >
                Clear all
              </button>
            )}
          </div>
        )}
      </div>

      {/* Filter popover — rendered outside the bar to escape overflow:hidden */}
      <FilterPopover
        isOpen={popoverOpen}
        onClose={() => setPopoverOpen(false)}
        anchorRect={anchorRect}
        filters={filterDefinitions}
        activeFilters={activeFilters}
        onChange={onFilterChange}
        onClearAll={() => {
          onClearAllFilters();
          setPopoverOpen(false);
        }}
      />
    </>
  );
}

export default TableControlBar;
