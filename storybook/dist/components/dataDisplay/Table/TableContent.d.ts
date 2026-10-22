import React from "react";
import { RowAction, TableColumn, TableData, TableStickyHeaderConfig } from "./Table";
interface TableContentProps {
    data: TableData[];
    columns: TableColumn[];
    selectable?: boolean;
    selectedRows: string[];
    sortColumn: string;
    sortDirection: "asc" | "desc";
    onSort: (column: string) => void;
    onRowSelect: (rowId: string) => void;
    onSelectAll: () => void;
    expandableRow?: {
        enabled: boolean;
        renderExpandedContent?: (row: TableData) => React.ReactNode;
        expandableField?: string;
    };
    expandedRows?: Set<string>;
    onToggleExpand?: (rowId: string) => void;
    rowActions?: RowAction[];
    stickyHeader?: boolean | TableStickyHeaderConfig;
}
export declare function TableContent({ data, columns, selectable, selectedRows, sortColumn, sortDirection, onSort, onRowSelect, onSelectAll, expandableRow, expandedRows, onToggleExpand, rowActions, stickyHeader, }: TableContentProps): import("react/jsx-runtime").JSX.Element;
export default TableContent;
//# sourceMappingURL=TableContent.d.ts.map