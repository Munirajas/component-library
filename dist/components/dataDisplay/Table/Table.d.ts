import React from "react";
import { FilterDefinition, FilterType, FilterValue } from "./FilterPopover";
export type { FilterDefinition, FilterType, FilterValue };
export interface TableColumn {
    key: string;
    label: string;
    sortable?: boolean;
    width?: string;
    maxWidth?: string;
    render?: (value: any, row: TableData) => React.ReactNode;
}
export interface TableData {
    [key: string]: any;
}
export interface RowAction {
    label: string;
    icon?: React.ReactNode;
    onClick: (row: TableData) => void;
    variant?: "default" | "danger";
    disabled?: boolean;
}
export interface BulkAction {
    label: string;
    icon?: React.ReactNode;
    action: string;
}
export interface TableFiltersConfig {
    /** Explicit filter definitions. If omitted and infer is true, all columns are inferred. */
    definitions?: FilterDefinition[];
    /** Auto-infer filter definitions from columns + data. Explicit definitions take precedence. */
    infer?: boolean;
    /** Called whenever the active filters change. */
    onChange?: (activeFilters: Record<string, FilterValue>) => void;
    /** Initial filter values. */
    defaultValues?: Record<string, FilterValue>;
}
export interface TableStickyHeaderConfig {
    /** Distance from the top where the header sticks (e.g. height of a fixed navbar). Defaults to 0. */
    offset?: number | string;
    /** If set, rows scroll inside a container of this max height and the header sticks to it instead of the page. */
    maxHeight?: number | string;
}
export interface TableProps {
    data: TableData[];
    columns: TableColumn[];
    onSort?: (column: string, direction: "asc" | "desc") => void;
    onRowSelect?: (selectedRows: string[]) => void;
    bulkActions?: BulkAction[];
    onBulkAction?: (action: string, selectedRows: string[]) => void;
    searchable?: boolean;
    filterable?: boolean;
    filters?: TableFiltersConfig;
    expandableRow?: {
        enabled: boolean;
        renderExpandedContent?: (row: TableData) => React.ReactNode;
        expandableField?: string;
    };
    rowActions?: RowAction[];
    pagination?: {
        enabled: boolean;
        pageSize?: number;
        currentPage?: number;
        onPageChange?: (page: number) => void;
        showPageSizeSelector?: boolean;
        pageSizeOptions?: number[];
        onPageSizeChange?: (pageSize: number) => void;
        showTotal?: boolean;
    };
    stickyHeader?: boolean | TableStickyHeaderConfig;
    className?: string;
}
export declare function Table({ data, columns, onSort, onRowSelect, bulkActions, onBulkAction, searchable, filterable, filters, expandableRow, rowActions, pagination, stickyHeader, className, }: TableProps): import("react/jsx-runtime").JSX.Element;
export default Table;
//# sourceMappingURL=Table.d.ts.map