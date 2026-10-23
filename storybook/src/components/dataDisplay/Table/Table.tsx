import React, { useEffect, useMemo, useState } from "react";
import TableContent from "./TableContent";
import TableControlBar from "./TableControlBar";
import Pagination from "../Pagination/Pagination";
import { FilterDefinition, FilterType, FilterValue } from "./FilterPopover";

export type { FilterDefinition, FilterType, FilterValue };

// ─── Interfaces ────────────────────────────────────────────────────────────

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  /** Fixed size when min/max are omitted. Tailwind class (`w-48`) or a CSS length (`12rem`). */
  width?: string;
  /** Tailwind class (`min-w-32`) or a CSS length. The column will not shrink past this. */
  minWidth?: string;
  /** Tailwind class (`max-w-xs`) or a CSS length. The column will not grow past this. */
  maxWidth?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (value: any, row: TableData) => React.ReactNode;
}

export interface TableData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

// ─── Sorting helper ────────────────────────────────────────────────────────

function compareValues(aValue: unknown, bValue: unknown): number {
  if (aValue === bValue) return 0;
  if (aValue === null || aValue === undefined || aValue === "") return 1;
  if (bValue === null || bValue === undefined || bValue === "") return -1;

  if (aValue instanceof Date && bValue instanceof Date) {
    return aValue.getTime() - bValue.getTime();
  }
  if (typeof aValue === "number" && typeof bValue === "number") {
    return aValue - bValue;
  }
  if (typeof aValue === "boolean" && typeof bValue === "boolean") {
    return aValue === bValue ? 0 : aValue ? 1 : -1;
  }

  return String(aValue).localeCompare(String(bValue), undefined, {
    numeric: true,
    sensitivity: "base",
  });
}

// ─── Inference helper ──────────────────────────────────────────────────────

function inferFilters(columns: TableColumn[], data: TableData[]): FilterDefinition[] {
  return columns
    .map((col): FilterDefinition | null => {
      const values = data
        .map((row) => row[col.key])
        .filter((v) => v !== null && v !== undefined && v !== "");

      if (values.length === 0) return null;

      if (values.every((v) => typeof v === "boolean")) {
        return { key: col.key, label: col.label, type: "boolean" as FilterType };
      }

      const unique = Array.from(new Set(values.map((v) => String(v))));
      if (unique.length <= 8) {
        return {
          key: col.key,
          label: col.label,
          type: "select" as FilterType,
          options: unique.map((v) => ({ value: v, label: v })),
        };
      }

      return { key: col.key, label: col.label, type: "text" as FilterType };
    })
    .filter(Boolean) as FilterDefinition[];
}

// ─── Component ─────────────────────────────────────────────────────────────

export function Table({
  data,
  columns,
  onSort,
  onRowSelect,
  bulkActions = [],
  onBulkAction,
  searchable = true,
  filterable = true,
  filters,
  expandableRow,
  rowActions,
  pagination,
  stickyHeader = false,
  className = "",
}: TableProps) {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [activeFilters, setActiveFilters] = useState<Record<string, FilterValue>>(
    filters?.defaultValues ?? {}
  );

  // Resolve filter definitions (explicit + optionally inferred)
  const resolvedFilters = useMemo<FilterDefinition[]>(() => {
    if (!filters) return [];

    const explicit = filters.definitions ?? [];
    if (!filters.infer) return explicit;

    const inferred = inferFilters(columns, data);
    const explicitKeys = new Set(explicit.map((f) => f.key));
    return [...explicit, ...inferred.filter((f) => !explicitKeys.has(f.key))];
  }, [filters, columns, data]);

  // ── Event handlers ────────────────────────────────────────────────────────

  const handleSort = (columnKey: string) => {
    if (!columns.find((col) => col.key === columnKey)?.sortable) return;
    const newDirection =
      sortColumn === columnKey && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(columnKey);
    setSortDirection(newDirection);
    onSort?.(columnKey, newDirection);
  };

  const handleRowSelect = (rowId: string) => {
    const newSelected = selectedRows.includes(rowId)
      ? selectedRows.filter((id) => id !== rowId)
      : [...selectedRows, rowId];
    setSelectedRows(newSelected);
    onRowSelect?.(newSelected);
  };

  const handleSelectAll = () => {
    const newSelected =
      selectedRows.length === data.length
        ? []
        : data.map((row) => row.id || row.key);
    setSelectedRows(newSelected);
    onRowSelect?.(newSelected);
  };

  const handleBulkAction = (action: string) => {
    onBulkAction?.(action, selectedRows);
  };

  const handleToggleExpand = (rowId: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(rowId)) {
      newExpanded.delete(rowId);
    } else {
      newExpanded.add(rowId);
    }
    setExpandedRows(newExpanded);
  };

  const handleFilterChange = (key: string, value: FilterValue) => {
    setActiveFilters((prev) => {
      const isEmpty =
        value === undefined ||
        value === null ||
        value === "" ||
        (Array.isArray(value) && value.length === 0);

      if (isEmpty) {
        const next = { ...prev };
        delete next[key];
        filters?.onChange?.(next);
        return next;
      }

      const next: Record<string, FilterValue> = { ...prev, [key]: value };
      filters?.onChange?.(next);
      return next;
    });
  };

  const handleClearAllFilters = () => {
    setActiveFilters({});
    filters?.onChange?.({});
  };

  // ── Filtering ─────────────────────────────────────────────────────────────

  const filteredData = data.filter((row) => {
    const matchesSearch =
      !searchTerm ||
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesFilters = Object.entries(activeFilters).every(
      ([key, filterValue]) => {
        const isEmpty =
          filterValue === undefined ||
          filterValue === null ||
          filterValue === "" ||
          (Array.isArray(filterValue) && filterValue.length === 0);
        if (isEmpty) return true;

        const rowValue = row[key];
        const filterDef = resolvedFilters.find((f) => f.key === key);
        if (!filterDef) return true;

        switch (filterDef.type) {
          case "boolean":
            return rowValue === filterValue;
          case "select":
            return String(rowValue) === String(filterValue);
          case "multiselect":
            return (filterValue as string[]).includes(String(rowValue));
          case "text":
            return String(rowValue)
              .toLowerCase()
              .includes(String(filterValue).toLowerCase());
          case "number":
            return Number(rowValue) === Number(filterValue);
          default:
            return true;
        }
      }
    );

    return matchesSearch && matchesFilters;
  });

  // ── Sorting ───────────────────────────────────────────────────────────────
  // Sorting is applied automatically whenever a sortable column header is
  // clicked — no need to pre-sort `data` or wire up `onSort` manually.

  const sortedData = useMemo(() => {
    const column = columns.find((col) => col.key === sortColumn);
    if (!sortColumn || !column?.sortable) return filteredData;

    return [...filteredData].sort((a, b) => {
      const comparison = compareValues(a[sortColumn], b[sortColumn]);
      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [filteredData, sortColumn, sortDirection, columns]);

  // ── Pagination ────────────────────────────────────────────────────────────
  // Pagination is self-managed by default (automatic) so it works out of the
  // box just by setting `pagination={{ enabled: true }}`. If the consumer
  // explicitly provides `currentPage` / `pageSize`, those act as controlled
  // values and the component defers to the consumer's state instead.

  const isPageControlled = pagination?.currentPage !== undefined;
  const isPageSizeControlled = pagination?.pageSize !== undefined;

  const [internalPage, setInternalPage] = useState(pagination?.currentPage ?? 1);
  const [internalPageSize, setInternalPageSize] = useState(
    pagination?.pageSize ?? 10
  );

  const currentPage = isPageControlled ? pagination!.currentPage! : internalPage;
  const pageSize = isPageSizeControlled ? pagination!.pageSize! : internalPageSize;

  const totalItems = sortedData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = pagination?.enabled
    ? sortedData.slice(startIndex, endIndex)
    : sortedData;

  // Reset to first page when the underlying data set shrinks (search/filter)
  // so pagination never lands on an out-of-range, empty page.
  useEffect(() => {
    if (!isPageControlled && internalPage > totalPages) {
      setInternalPage(totalPages);
    }
  }, [internalPage, totalPages, isPageControlled]);

  useEffect(() => {
    if (!isPageControlled) {
      setInternalPage(1);
    }
  }, [searchTerm, activeFilters, isPageControlled]);

  const handlePageChange = (page: number) => {
    if (!isPageControlled) setInternalPage(page);
    pagination?.onPageChange?.(page);
  };

  const handlePageSizeChange = (size: number) => {
    if (!isPageSizeControlled) setInternalPageSize(size);
    if (!isPageControlled) setInternalPage(1);
    pagination?.onPageSizeChange?.(size);
  };

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className={`w-full ${className}`}>
      <TableControlBar
        searchable={searchable}
        filterable={filterable}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        bulkActions={bulkActions}
        onBulkAction={handleBulkAction}
        selectedCount={selectedRows.length}
        totalCount={data.length}
        filterDefinitions={resolvedFilters}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearAllFilters={handleClearAllFilters}
      />
      <TableContent
        data={paginatedData}
        columns={columns}
        selectable={bulkActions.length > 0}
        selectedRows={selectedRows}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        onSort={handleSort}
        onRowSelect={handleRowSelect}
        onSelectAll={handleSelectAll}
        expandableRow={expandableRow}
        expandedRows={expandedRows}
        onToggleExpand={handleToggleExpand}
        rowActions={rowActions}
        stickyHeader={stickyHeader}
      />
      {pagination?.enabled && (
        <Pagination
          totalItems={totalItems}
          pageSize={pageSize}
          currentPage={safeCurrentPage}
          onPageChange={handlePageChange}
          showPageSizeSelector={pagination.showPageSizeSelector}
          pageSizeOptions={pagination.pageSizeOptions}
          onPageSizeChange={handlePageSizeChange}
          showTotal={pagination.showTotal}
        />
      )}
    </div>
  );
}

export default Table;
