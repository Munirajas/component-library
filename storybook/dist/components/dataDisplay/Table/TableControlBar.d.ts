import { BulkAction } from "./Table";
import { FilterDefinition, FilterValue } from "./FilterPopover";
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
export declare function TableControlBar({ searchable, filterable, searchTerm, onSearchChange, bulkActions, onBulkAction, selectedCount, totalCount, filterDefinitions, activeFilters, onFilterChange, onClearAllFilters, }: TableControlBarProps): import("react/jsx-runtime").JSX.Element;
export default TableControlBar;
//# sourceMappingURL=TableControlBar.d.ts.map