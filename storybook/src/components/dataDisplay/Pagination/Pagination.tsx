import React, { useState, useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../../../icons/icons';

export interface PaginationProps {
  /**
   * Total number of items
   */
  totalItems: number;
  /**
   * Number of items per page
   */
  pageSize?: number;
  /**
   * Current page (1-indexed). If provided, component is controlled.
   */
  currentPage?: number;
  /**
   * Callback when page changes
   */
  onPageChange?: (page: number) => void;
  /**
   * Show page size selector
   */
  showPageSizeSelector?: boolean;
  /**
   * Available page sizes
   */
  pageSizeOptions?: number[];
  /**
   * Callback when page size changes
   */
  onPageSizeChange?: (pageSize: number) => void;
  /**
   * Show total items count
   */
  showTotal?: boolean;
  /**
   * Custom className
   */
  className?: string;
}

/**
 * Pagination component for tables and data lists.
 * Can be used in controlled or uncontrolled mode.
 */
export function Pagination({
  totalItems,
  pageSize: initialPageSize = 10,
  currentPage: controlledCurrentPage,
  onPageChange,
  showPageSizeSelector = false,
  pageSizeOptions = [10, 20, 50, 100],
  onPageSizeChange,
  showTotal = true,
  className = '',
}: PaginationProps) {
  // Internal state for uncontrolled mode
  const [internalPage, setInternalPage] = useState(1);
  const [internalPageSize, setInternalPageSize] = useState(initialPageSize);

  // Determine if component is controlled
  const isControlled = controlledCurrentPage !== undefined;
  const currentPage = isControlled ? controlledCurrentPage : internalPage;
  const pageSize = isControlled ? initialPageSize : internalPageSize;

  // Calculate total pages
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  // Calculate visible page range
  const { startPage, endPage } = useMemo(() => {
    const maxVisiblePages = 7;
    let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    // Adjust start if we're near the end
    if (end - start < maxVisiblePages - 1) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    return { startPage: start, endPage: end };
  }, [currentPage, totalPages]);

  // Calculate range of items shown
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;

    if (isControlled) {
      onPageChange?.(newPage);
    } else {
      setInternalPage(newPage);
      onPageChange?.(newPage);
    }
  };

  const handlePageSizeChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newPageSize = Number(e.target.value);
    const newTotalPages = Math.ceil(totalItems / newPageSize);
    const newCurrentPage = Math.min(currentPage, newTotalPages);

    if (isControlled) {
      onPageSizeChange?.(newPageSize);
      // Reset to page 1 when page size changes in controlled mode
      if (onPageChange) {
        onPageChange(1);
      }
    } else {
      setInternalPageSize(newPageSize);
      setInternalPage(newCurrentPage);
      onPageSizeChange?.(newPageSize);
      onPageChange?.(newCurrentPage);
    }
  };

  // Generate page numbers to display
  const pageNumbers: (number | 'ellipsis')[] = useMemo(() => {
    const pages: (number | 'ellipsis')[] = [];

    if (totalPages <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Add ellipsis if needed
      if (startPage > 2) {
        pages.push('ellipsis');
      }

      // Add visible page range
      for (let i = startPage; i <= endPage; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }

      // Add ellipsis if needed
      if (endPage < totalPages - 1) {
        pages.push('ellipsis');
      }

      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  }, [startPage, endPage, totalPages]);

  if (totalItems === 0) {
    return (
      <div
        className={`flex items-center justify-between px-4 py-3 border-t border-slate-200 ${className}`}
      >
        <div className="text-sm text-slate-600">No items to display</div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 border-t border-slate-200 ${className}`}
    >
      {/* Left side: Total items and page size selector */}
      <div className="flex items-center gap-4">
        {showTotal && (
          <div className="text-sm text-slate-600">
            Showing <span className="font-medium">{startItem}</span> to{' '}
            <span className="font-medium">{endItem}</span> of{' '}
            <span className="font-medium">{totalItems}</span> results
          </div>
        )}

        {showPageSizeSelector && (
          <div className="flex items-center gap-2">
            <label
              htmlFor="page-size-select"
              className="text-sm text-slate-600"
            >
              Show:
            </label>
            <select
              id="page-size-select"
              value={pageSize}
              onChange={handlePageSizeChange}
              className="px-3 py-1.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white text-slate-900"
            >
              {pageSizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Right side: Pagination controls */}
      <div className="flex items-center gap-2">
        {/* Previous button */}
        <button
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          aria-label="Previous page"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {pageNumbers.map((page, index) => {
            if (page === 'ellipsis') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="px-2 text-slate-500"
                >
                  ...
                </span>
              );
            }

            const isActive = page === currentPage;
            return (
              <button
                key={page}
                type="button"
                onClick={() => handlePageChange(page)}
                className={`flex items-center justify-center min-w-[36px] h-9 px-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${isActive
                  ? 'bg-sky-500 text-white border-sky-500 font-medium'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                aria-label={`Go to page ${page}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* Next button */}
        <button
          type="button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          aria-label="Next page"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;


