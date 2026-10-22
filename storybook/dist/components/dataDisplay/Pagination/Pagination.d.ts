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
export declare function Pagination({ totalItems, pageSize: initialPageSize, currentPage: controlledCurrentPage, onPageChange, showPageSizeSelector, pageSizeOptions, onPageSizeChange, showTotal, className, }: PaginationProps): import("react/jsx-runtime").JSX.Element;
export default Pagination;
//# sourceMappingURL=Pagination.d.ts.map