/* ===================================
   LAYOUT COMPONENT
   # since we are using Nextjs layout feature, this will be removed.
   =================================== */
'use client'
import React, { useState, useEffect, useMemo, useCallback, memo } from 'react'
import { clsx } from 'clsx'
import { SidebarMenu } from '../navigation/SidebarMenu'
import { ActionBar } from '../navigation/ActionBar'
import type { LayoutProps } from '../../types/layout'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let NextLink: any = null;

try {
  const nextLink = require('next/link');
  NextLink = nextLink.default;
} catch (e) {
  // Next.js not available, will use fallback
}

// Memoized LinkComponent to prevent recreation
const LinkComponent = NextLink ? React.memo(
  React.forwardRef<HTMLAnchorElement, { href: string; className?: string; onClick?: () => void; children: React.ReactNode }>(
    ({ href, className, onClick, children }, ref) => (
      <NextLink href={href} className={className} onClick={onClick} ref={ref}>
        {children}
      </NextLink>
    )
  )
) : undefined;

if (LinkComponent) {
  LinkComponent.displayName = 'LinkComponent';
}

// Memoized PathnameWrapper to prevent recreation
const PathnameWrapper: React.FC<{ children: (pathname?: string) => React.ReactNode }> = memo(({ children }) => {
  try {
    const { usePathname: usePathnameHook } = require('next/navigation');
    const pathname = usePathnameHook();
    return <>{children(pathname)}</>;
  } catch {
    return <>{children(undefined)}</>;
  }
});

PathnameWrapper.displayName = 'PathnameWrapper';

const LayoutComponent: React.FC<LayoutProps> = ({
  // Sidebar props
  sidebarSections = [],
  sidebarExpanded = true,
  onSidebarToggle,
  sidebarLogo,
  brandName = 'Admin Panel',
  onSignOut,

  // Content props
  columns = [],
  children,

  // Action bar props
  actionBar,

  // Layout props
  className = '',
  contentClassName = '',
  sidebarClassName = 'self-stretch ',
  headerClassName = '',
  footerClassName = '',

  // Responsive props
  mobileSidebarCollapsed = true,
  onMobileSidebarToggle,

  // Custom components
  header,
  footer
}) => {
  // Sync internal state with props
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(sidebarExpanded)
  const [isMobileSidebarCollapsed, setIsMobileSidebarCollapsed] = useState(mobileSidebarCollapsed)

  // Sync state with props when they change
  useEffect(() => {
    setIsSidebarExpanded(sidebarExpanded)
  }, [sidebarExpanded])

  useEffect(() => {
    setIsMobileSidebarCollapsed(mobileSidebarCollapsed)
  }, [mobileSidebarCollapsed])

  // Memoize callbacks to prevent recreation
  const handleSidebarToggle = useCallback((expanded: boolean) => {
    setIsSidebarExpanded(expanded)
    onSidebarToggle?.(expanded)
  }, [onSidebarToggle])

  const handleMobileSidebarToggle = useCallback((collapsed: boolean) => {
    setIsMobileSidebarCollapsed(collapsed)
    onMobileSidebarToggle?.(collapsed)
  }, [onMobileSidebarToggle])

  const handleMobileOverlayClick = useCallback(() => {
    handleMobileSidebarToggle(true)
  }, [handleMobileSidebarToggle])

  // Memoize grid column calculation
  const gridColumnsClass = useMemo(() => {
    if (columns.length === 0) return 'grid-cols-1'

    // Check if all columns have explicit widths
    const hasExplicitWidths = columns.every((col) => col.width)

    if (!hasExplicitWidths) {
      // Fallback to number-based grid
      switch (columns.length) {
        case 1:
          return 'grid-cols-1'
        case 2:
          return 'grid-cols-1 lg:grid-cols-2'
        case 3:
          return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        case 4:
          return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
        default:
          return 'grid-cols-1'
      }
    }

    // Use 12-column grid system for flexible widths
    return 'grid-cols-1 lg:grid-cols-12'
  }, [columns.length, columns.map((c) => c.width).join(',')])

  // Memoize column width class function
  const getColumnWidthClass = useCallback((width?: string) => {
    switch (width) {
      case '1/3':
        return 'lg:col-span-4' // 4/12 = 1/3
      case '1/2':
        return 'lg:col-span-6' // 6/12 = 1/2
      case '2/3':
        return 'lg:col-span-8' // 8/12 = 2/3
      case 'full':
        return 'col-span-full lg:col-span-12'
      case 'auto':
        return 'lg:col-auto'
      default:
        // If no width specified, distribute evenly based on number of columns
        if (columns.length === 1) return 'lg:col-span-12'
        if (columns.length === 2) return 'lg:col-span-6'
        if (columns.length === 3) return 'lg:col-span-4'
        if (columns.length === 4) return 'lg:col-span-3'
        return 'lg:col-span-12'
    }
  }, [columns.length])

  // Memoize sidebar classes
  const sidebarClasses = useMemo(() => clsx(
    'flex-shrink-0 transition-all duration-300',
    isSidebarExpanded ? 'w-80' : 'w-32',
    // Mobile behavior
    'lg:relative lg:translate-x-0',
    isMobileSidebarCollapsed ? '-translate-x-full' : 'translate-x-0',
    'fixed lg:static inset-y-0 left-0 z-50 h-screen lg:h-full',
    sidebarClassName
  ), [isSidebarExpanded, isMobileSidebarCollapsed, sidebarClassName])

  return (
    <div className={clsx('w-full h-screen bg-slate-400 flex', className)}>
      {/* Sidebar */}
      {sidebarSections.length > 0 && (
        <div className={sidebarClasses}>
          <PathnameWrapper>
            {(currentPath) => (
              <SidebarMenu
                sections={sidebarSections}
                isExpanded={isSidebarExpanded}
                onToggle={handleSidebarToggle}
                onSignOut={onSignOut}
                logo={sidebarLogo}
                brandName={brandName}
                className="h-full"
                LinkComponent={LinkComponent}
                currentPath={currentPath}
              />
            )}
          </PathnameWrapper>
        </div>
      )}

      {/* Mobile overlay */}
      {!isMobileSidebarCollapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={handleMobileOverlayClick}
        />
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0 self-stretch">
        {/* Header */}
        {header && (
          <header className={clsx('flex-shrink-0', headerClassName)}>
            {header}
          </header>
        )}

        {/* Top Action Bar */}
        {actionBar?.position === 'top' && (
          <ActionBar
            actions={actionBar.actions}
            position="top"
            variant={actionBar.variant}
            children={actionBar.children}
          />
        )}

        {/* Main content */}
        <main className={clsx('flex-1 p-6 overflow-auto', contentClassName)}>
          {columns.length > 0 ? (
            <div className={clsx('grid gap-6', gridColumnsClass)}>
              {columns.map((column) => (
                <div
                  key={column.id}
                  className={clsx(
                    'bg-surface-primary border border-button-grey rounded-lg p-4',
                    getColumnWidthClass(column.width),
                    column.className
                  )}
                >
                  {column.title && (
                    <h3 className="text-text-primary font-semibold mb-4">
                      {column.title}
                    </h3>
                  )}
                  {column.content}
                </div>
              ))}
            </div>
          ) : (
            children
          )}
        </main>

        {/* Bottom Action Bar */}
        {actionBar?.position === 'bottom' && (
          <ActionBar
            actions={actionBar.actions}
            position="bottom"
            children={actionBar.children}
            variant={actionBar.variant}
          />
        )}

        {/* Footer */}
        {footer && (
          <footer className={clsx('flex-shrink-0', footerClassName)}>
            {footer}
          </footer>
        )}
      </div>

      {/* Mobile menu button */}
      {sidebarSections.length > 0 && (
        <button
          className="fixed top-4 left-4 z-50 lg:hidden bg-cta-accent text-white p-2 rounded-lg shadow-lg"
          onClick={() => handleMobileSidebarToggle(!isMobileSidebarCollapsed)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}
    </div>
  )
}

// Memoize the Layout component with custom comparison
export const Layout = memo(LayoutComponent, (prevProps, nextProps) => {
  // Custom comparison function to prevent unnecessary re-renders
  // Compare actionBar deeply since it's an object
  const actionBarEqual =
    prevProps.actionBar === nextProps.actionBar ||
    (prevProps.actionBar && nextProps.actionBar &&
      prevProps.actionBar.title === nextProps.actionBar.title &&
      prevProps.actionBar.subtitle === nextProps.actionBar.subtitle &&
      prevProps.actionBar.position === nextProps.actionBar.position &&
      prevProps.actionBar.variant === nextProps.actionBar.variant &&
      prevProps.actionBar.actions === nextProps.actionBar.actions);

  return !!(
    prevProps.sidebarSections === nextProps.sidebarSections &&
    prevProps.sidebarExpanded === nextProps.sidebarExpanded &&
    prevProps.mobileSidebarCollapsed === nextProps.mobileSidebarCollapsed &&
    prevProps.sidebarLogo === nextProps.sidebarLogo &&
    prevProps.brandName === nextProps.brandName &&
    prevProps.columns === nextProps.columns &&
    prevProps.children === nextProps.children &&
    actionBarEqual &&
    prevProps.className === nextProps.className &&
    prevProps.contentClassName === nextProps.contentClassName &&
    prevProps.sidebarClassName === nextProps.sidebarClassName &&
    prevProps.headerClassName === nextProps.headerClassName &&
    prevProps.footerClassName === nextProps.footerClassName &&
    prevProps.header === nextProps.header &&
    prevProps.footer === nextProps.footer &&
    prevProps.onSidebarToggle === nextProps.onSidebarToggle &&
    prevProps.onSignOut === nextProps.onSignOut &&
    prevProps.onMobileSidebarToggle === nextProps.onMobileSidebarToggle
  );
})

Layout.displayName = 'Layout'

export default Layout
