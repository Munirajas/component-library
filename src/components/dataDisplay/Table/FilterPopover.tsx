import { Popover } from '../../feedback/Popover';

export type FilterType = 'select' | 'multiselect' | 'boolean' | 'text' | 'number';

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterDefinition {
  key: string;
  label: string;
  type: FilterType;
  options?: FilterOption[];
}

/** All possible values a filter can hold. */
export type FilterValue = string | string[] | boolean | number | undefined;

export interface FilterPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRect?: DOMRect | null;
  filters: FilterDefinition[];
  activeFilters: Record<string, FilterValue>;
  onChange: (key: string, value: FilterValue) => void;
  onClearAll: () => void;
  className?: string;
}

// ─── Individual filter control ─────────────────────────────────────────────

interface FilterControlProps {
  filter: FilterDefinition;
  value: FilterValue;
  onChange: (value: FilterValue) => void;
}

function FilterControl({ filter, value, onChange }: FilterControlProps) {
  switch (filter.type) {
    case 'boolean': {
      const pills = [
        { label: 'All', val: undefined },
        { label: 'Yes', val: true },
        { label: 'No', val: false },
      ];
      return (
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {filter.label}
          </div>
          <div className="flex gap-1.5">
            {pills.map((pill) => (
              <button
                key={String(pill.val)}
                type="button"
                onClick={() => onChange(pill.val)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${value === pill.val
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>
      );
    }

    case 'select': {
      return (
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {filter.label}
          </div>
          <div className="space-y-1">
            {filter.options?.map((option) => {
              const isSelected = value === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onChange(isSelected ? undefined : option.value)}
                  className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${isSelected
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    case 'multiselect': {
      const selected: string[] = Array.isArray(value) ? value : [];
      return (
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {filter.label}
          </div>
          <div className="space-y-1">
            {filter.options?.map((option) => {
              const isChecked = selected.includes(option.value);
              return (
                <label
                  key={option.value}
                  className="flex items-center gap-2.5 cursor-pointer px-1 py-1 rounded-md hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {
                      const next = isChecked
                        ? selected.filter((v) => v !== option.value)
                        : [...selected, option.value];
                      onChange(next.length > 0 ? next : undefined);
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{option.label}</span>
                </label>
              );
            })}
          </div>
        </div>
      );
    }

    case 'text': {
      return (
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {filter.label}
          </div>
          <input
            type="text"
            value={(value as string) ?? ''}
            onChange={(e) => onChange(e.target.value || undefined)}
            placeholder={`Filtrar por ${filter.label.toLowerCase()}…`}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      );
    }

    case 'number': {
      return (
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {filter.label}
          </div>
          <input
            type="number"
            value={(value as number) ?? ''}
            onChange={(e) =>
              onChange(e.target.value !== '' ? Number(e.target.value) : undefined)
            }
            placeholder={`Filtrar por ${filter.label.toLowerCase()}…`}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      );
    }

    default:
      return null;
  }
}

// ─── FilterPopover ─────────────────────────────────────────────────────────

export function FilterPopover({
  isOpen,
  onClose,
  anchorRect,
  filters,
  activeFilters,
  onChange,
  onClearAll,
  className,
}: FilterPopoverProps) {
  const hasActiveFilters = Object.keys(activeFilters).length > 0;

  return (
    <Popover
      isOpen={isOpen}
      onClose={onClose}
      anchorRect={anchorRect}
      className={`w-72 ${className ?? ''}`}
      align="left"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <span className="text-sm font-semibold text-gray-800">Filters</span>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearAll}
            className="text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Filter list */}
      <div className="px-4 py-3 space-y-5 max-h-96 overflow-y-auto">
        {filters.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-2">No filters available</p>
        ) : (
          filters.map((filter) => (
            <FilterControl
              key={filter.key}
              filter={filter}
              value={activeFilters[filter.key]}
              onChange={(val) => onChange(filter.key, val)}
            />
          ))
        )}
      </div>
    </Popover>
  );
}

export default FilterPopover;
