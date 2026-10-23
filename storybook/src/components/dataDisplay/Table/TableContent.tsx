import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { columnLayout } from "./columnLayout";
import { RowAction, TableColumn, TableData, TableStickyHeaderConfig } from "./Table";

interface FlyoutPosition {
  rowId: string;
  top: number;
  right: number;
  triggerTop: number;
  triggerBottom: number;
}

const FLYOUT_GAP = 4;
const VIEWPORT_PADDING = 8;

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

export function TableContent({
  data,
  columns,
  selectable = true,
  selectedRows,
  sortColumn,
  sortDirection,
  onSort,
  onRowSelect,
  onSelectAll,
  expandableRow,
  expandedRows = new Set(),
  onToggleExpand,
  rowActions,
  stickyHeader = false,
}: TableContentProps) {
  const [openFlyout, setOpenFlyout] = useState<FlyoutPosition | null>(null);
  const flyoutRef = useRef<HTMLDivElement>(null);

  const allSelected = data.length > 0 && selectedRows.length === data.length;
  const someSelected =
    selectedRows.length > 0 && selectedRows.length < data.length;

  const hasRowActions = rowActions && rowActions.length > 0;

  // Close flyout on outside click or Escape
  useEffect(() => {
    if (!openFlyout) return;

    function handlePointerDown(e: PointerEvent) {
      if (flyoutRef.current && !flyoutRef.current.contains(e.target as Node)) {
        setOpenFlyout(null);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenFlyout(null);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openFlyout]);

  // Keep flyout inside the viewport (flip above when near the bottom)
  useLayoutEffect(() => {
    if (!openFlyout || !flyoutRef.current) return;

    const flyoutHeight = flyoutRef.current.offsetHeight;
    const spaceBelow =
      window.innerHeight - openFlyout.triggerBottom - FLYOUT_GAP;
    const spaceAbove = openFlyout.triggerTop - FLYOUT_GAP;

    let top = openFlyout.triggerBottom + FLYOUT_GAP;

    if (flyoutHeight > spaceBelow && spaceAbove > spaceBelow) {
      top = openFlyout.triggerTop - flyoutHeight - FLYOUT_GAP;
    }

    top = Math.min(
      top,
      window.innerHeight - flyoutHeight - VIEWPORT_PADDING
    );
    top = Math.max(VIEWPORT_PADDING, top);

    if (top !== openFlyout.top) {
      setOpenFlyout((prev) => (prev ? { ...prev, top } : null));
    }
  }, [openFlyout?.rowId, openFlyout?.triggerBottom]);

  function handleToggleFlyout(
    e: React.MouseEvent<HTMLButtonElement>,
    rowId: string
  ) {
    if (openFlyout?.rowId === rowId) {
      setOpenFlyout(null);
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    setOpenFlyout({
      rowId,
      top: rect.bottom + FLYOUT_GAP,
      right: window.innerWidth - rect.right,
      triggerTop: rect.top,
      triggerBottom: rect.bottom,
    });
  }

  function handleActionClick(action: RowAction, row: TableData) {
    setOpenFlyout(null);
    action.onClick(row);
  }

  const getSortIcon = (columnKey: string) => {
    if (sortColumn !== columnKey) {
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 4L12 8H4L8 4Z" fill="currentColor" opacity="0.3" />
        </svg>
      );
    }

    if (sortDirection === "asc") {
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 4L4 8H12L8 4Z" fill="currentColor" />
        </svg>
      );
    }

    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 12L12 8H4L8 12Z" fill="currentColor" />
      </svg>
    );
  };

  const renderCell = (column: TableColumn, row: TableData) => {
    if (column.render) {
      return column.render(row[column.key], row);
    }

    const value = row[column.key];


    // status style
    if (column.key === "status") {
      const statusColors: Record<string, string> = {
        Pending: "bg-amber-300",
        Confirmed: "bg-green-300",
        Cancelled: "bg-red-300",
        Completed: "bg-blue-300",
      };

      return (
        <div
          className={`px-2 py-1 ${statusColors[value] || "bg-gray-300"
            } rounded-full text-xs font-medium`}
        >
          {value}
        </div>
      );
    }

    return <div className="text-sm text-gray-800 font-normal line-clamp-2">{value}</div>;
  };

  if (data.length === 0) {
    return (
      <div className="w-full h-40 flex items-center justify-center bg-white rounded-lg border">
        <div className="text-gray-500 text-sm">No data to show.</div>
      </div>
    );
  }

  // Separate default and danger actions to render a divider between them
  const defaultActions = rowActions?.filter((a) => a.variant !== "danger") ?? [];
  const dangerActions = rowActions?.filter((a) => a.variant === "danger") ?? [];

  const openFlyoutRow =
    openFlyout ? data.find((row, i) => (row.id ?? i.toString()) === openFlyout.rowId) : null;

  const stickyConfig: TableStickyHeaderConfig | null =
    stickyHeader === true ? {} : stickyHeader || null;
  const scrollsInternally = stickyConfig?.maxHeight !== undefined;

  // `position: sticky` binds to the nearest scroll container, so in page mode
  // the wrapper must clip instead of hiding overflow to let the header stick
  // to the viewport.
  const wrapperOverflowClass = !stickyConfig
    ? "overflow-x-auto"
    : scrollsInternally
      ? "overflow-auto"
      : "overflow-x-scroll md:overflow-clip";

  return (
    <>
      <div
        className={`w-full bg-white rounded-b-lg border border-gray-200 ${wrapperOverflowClass}`}
        style={scrollsInternally ? { maxHeight: stickyConfig?.maxHeight } : undefined}
      >
        {/* Table Header */}
        <div
          className={`bg-gray-50 border-b border-gray-200 ${stickyConfig ? "sticky z-10" : ""}`}
          style={stickyConfig ? { top: stickyConfig.offset ?? 0 } : undefined}
        >
          <div className="flex w-full">
            {/* Checkbox to select all */}
            {selectable && (
              <div className="w-16 shrink-0 p-4 flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={allSelected}
                  ref={(input) => {
                    if (input) input.indeterminate = someSelected;
                  }}
                  onChange={onSelectAll}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>
            )}

            {/* Header Columns */}
            {columns.map((column) => {
              const layout = columnLayout(column);
              return (
              <div
                key={column.key}
                className={`p-4 ${layout.className}`}
                style={layout.style}
              >
                <button
                  onClick={() => column.sortable && onSort(column.key)}
                  className={`w-full min-w-0 flex items-center justify-between gap-2 text-sm font-semibold text-gray-800 uppercase tracking-wider ${column.sortable
                    ? "cursor-pointer hover:text-blue-600"
                    : "cursor-default"
                    }`}
                  disabled={!column.sortable}
                >
                  <span className="truncate">{column.label}</span>
                  {column.sortable && (
                    <span className="ml-2 text-gray-400">
                      {getSortIcon(column.key)}
                    </span>
                  )}
                </button>
              </div>
              );
            })}

            {/* Actions column header */}
            {hasRowActions && <div className="w-16 shrink-0 p-4" />}
          </div>
        </div>

        {/* Data rows */}
        <div className="divide-y divide-gray-200">
          {data.map((row, rowIndex) => {
            const rowId = row.id ?? rowIndex.toString();
            const isExpanded = expandableRow?.enabled && expandedRows.has(rowId);
            const hasExpandableContent =
              expandableRow?.enabled &&
              (expandableRow.expandableField
                ? row[expandableRow.expandableField]
                : expandableRow.renderExpandedContent);

            const isFlyoutOpen = openFlyout?.rowId === rowId;

            return (
              <React.Fragment key={rowId}>
                <div className="flex w-full hover:bg-gray-50">
                  {/* Row Checkbox */}
                  {selectable && (
                    <div className="w-16 shrink-0 p-4 flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(rowId)}
                        onChange={() => onRowSelect(rowId)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>
                  )}

                  {/* Row data */}
                  {columns.map((column) => {
                    const layout = columnLayout(column);
                    return (
                    <div
                      key={column.key}
                      className={`p-4 ${layout.className}`}
                      style={layout.style}
                    >
                      {renderCell(column, row)}
                    </div>
                    );
                  })}

                  {/* Expand / Row-actions trigger */}
                  {hasRowActions && <div className="w-16 shrink-0 p-4 flex items-center justify-center">
                    <button
                      onClick={(e) => handleToggleFlyout(e, rowId)}
                      aria-label="Row actions"
                      aria-expanded={isFlyoutOpen}
                      className={`rounded-md p-1 transition-colors ${isFlyoutOpen
                        ? "bg-gray-100 text-gray-700"
                        : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                        }`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>

                    {hasExpandableContent &&
                      <button
                        onClick={() => onToggleExpand?.(rowId)}
                        className="text-gray-400 hover:text-gray-600"
                        aria-label={isExpanded ? "Collapse row" : "Expand row"}
                      >
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        >
                          <path
                            d="M1 1L6 6L11 1"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    }
                  </div>
                  }
                </div>

                {/* Expanded content */}
                {isExpanded && hasExpandableContent && (
                  <div className="bg-gray-50 border-t border-gray-200">
                    {expandableRow.renderExpandedContent ? (
                      expandableRow.renderExpandedContent(row)
                    ) : expandableRow.expandableField &&
                      row[expandableRow.expandableField] ? (
                      <div className="p-4">
                        {Array.isArray(row[expandableRow.expandableField]) &&
                          row[expandableRow.expandableField].length > 0 ? (
                          <div className="space-y-2">
                            {(row[expandableRow.expandableField] as Array<Record<string, string | number | undefined>>).map(
                              (item, idx) => (
                                <div
                                  key={idx}
                                  className="p-4 border-b border-slate-100 last:border-b-0 flex justify-between items-center bg-white rounded"
                                >
                                  <div className="w-48 text-sm font-semibold text-neutral-900">
                                    {item.name}
                                  </div>
                                  <div className="w-14 text-right text-sm font-normal text-neutral-900">
                                    Qty: {item.qty ?? "n/a"}
                                  </div>
                                  <div className="w-14 text-right text-sm font-semibold text-neutral-900">
                                    {item.price ?? "$0.00"}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        ) : (
                          <div className="text-sm text-gray-500">
                            No items available
                          </div>
                        )}
                      </div>
                    ) : null}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Flyout — rendered outside table to escape overflow:hidden */}
      {openFlyout && openFlyoutRow && hasRowActions && (
        <div
          ref={flyoutRef}
          role="menu"
          aria-label="Row actions"
          style={{
            position: "fixed",
            top: openFlyout.top,
            right: openFlyout.right,
            zIndex: 50,
          }}
          className="w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
        >
          {/* Default / normal actions */}
          {defaultActions.map((action) => (
            <button
              key={action.label}
              role="menuitem"
              disabled={action.disabled}
              onClick={() => handleActionClick(action, openFlyoutRow)}
              className={[
                "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors",
                action.disabled
                  ? "cursor-not-allowed text-gray-300"
                  : "cursor-pointer text-gray-700 hover:bg-gray-50",
              ].join(" ")}
            >
              {action.icon && (
                <span className="flex h-4 w-4 shrink-0 items-center justify-center text-gray-400">
                  {action.icon}
                </span>
              )}
              {action.label}
            </button>
          ))}

          {/* Separator between normal and danger actions */}
          {defaultActions.length > 0 && dangerActions.length > 0 && (
            <div className="my-1 border-t border-gray-100" />
          )}

          {/* Danger actions */}
          {dangerActions.map((action) => (
            <button
              key={action.label}
              role="menuitem"
              disabled={action.disabled}
              onClick={() => handleActionClick(action, openFlyoutRow)}
              className={[
                "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors",
                action.disabled
                  ? "cursor-not-allowed text-red-200"
                  : "cursor-pointer text-red-600 hover:bg-red-50",
              ].join(" ")}
            >
              {action.icon && (
                <span className="flex h-4 w-4 shrink-0 items-center justify-center text-red-400">
                  {action.icon}
                </span>
              )}
              {action.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default TableContent;
