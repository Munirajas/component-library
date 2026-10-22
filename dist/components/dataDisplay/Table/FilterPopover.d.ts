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
export declare function FilterPopover({ isOpen, onClose, anchorRect, filters, activeFilters, onChange, onClearAll, className, }: FilterPopoverProps): import("react/jsx-runtime").JSX.Element;
export default FilterPopover;
//# sourceMappingURL=FilterPopover.d.ts.map