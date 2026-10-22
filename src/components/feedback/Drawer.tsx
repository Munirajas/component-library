import { useEffect, ReactNode, useCallback, MouseEvent } from 'react';
import { clsx } from 'clsx';
import { Button } from '../actions/Button';
import { Tabs, TabItem } from '../navigation/Tabs';

export interface DrawerAction {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: ReactNode;
  disabled?: boolean;
}

// Reuse TabItem from Tabs component
export type DrawerTab = TabItem;

export interface DrawerProps {
  title: string;
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
  className?: string;
  position?: 'left' | 'right';
  width?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  headerActions?: DrawerAction[];
  footerActions?: {
    primary?: DrawerAction;
    secondary?: DrawerAction;
  };
  tabs?: DrawerTab[];
  /** Controlled active tab id. When provided, the Drawer operates in controlled mode. */
  activeTabId?: string;
  defaultActiveTab?: string;
  onTabChange?: (tabId: string) => void;
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
}

const widthClasses = {
  sm: 'w-full max-w-md',
  md: 'w-full max-w-2xl',
  lg: 'w-full max-w-4xl',
  xl: 'w-full max-w-6xl',
  '2xl': 'w-full max-w-7xl',
  full: 'w-full',
};

export function Drawer({
  title,
  isOpen = false,
  onClose,
  children,
  className,
  position = 'right',
  width = 'lg',
  headerActions,
  footerActions,
  tabs,
  activeTabId,
  defaultActiveTab,
  onTabChange,
  showCloseButton = true,
  closeOnBackdropClick = true,
}: DrawerProps) {
  // Escape key handler
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen && onClose) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll on drawer open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (closeOnBackdropClick && e.target === e.currentTarget && onClose) {
        onClose();
      }
    },
    [closeOnBackdropClick, onClose]
  );

  // Prevent click inside drawer
  const handleDrawerClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  // Handle tab change
  const handleTabChange = (tabId: string) => {
    onTabChange?.(tabId);
  };

  if (!isOpen) return null;

  const positionClasses =
    position === 'left'
      ? 'left-0 translate-x-0'
      : 'right-0 translate-x-0';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-end modal transition-opacity"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
    >
      <div
        className={clsx(
          'h-full bg-white shadow-[0px_4px_19.9px_0px_rgba(0,0,0,0.25)] flex flex-col transition-transform duration-300 ease-in-out',
          positionClasses,
          widthClasses[width],
          className
        )}
        onClick={handleDrawerClick}
      >
        {/* Header */}
        <div className="flex-shrink-0 px-8 py-4 bg-white rounded-tl-2xl rounded-tr-2xl border-b-2 border-gray-100 inline-flex justify-between items-center">
          <div className="justify-center text-black text-3xl font-semibold font-['Muli']">
            {title}
          </div>
          <div className="flex items-center gap-2">
            {/* Header Actions */}
            {headerActions && headerActions.length > 0 && (
              <div className="flex items-center gap-2">
                {headerActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.onClick}
                    disabled={action.disabled}
                    className={clsx(
                      'h-10 px-4 bg-surface-primary rounded-[3px] flex justify-center items-center gap-2 transition-colors',
                      'hover:bg-surface-secondary',
                      action.disabled && 'opacity-50 cursor-not-allowed'
                    )}
                  >
                    {action.icon && (
                      <div className="w-6 h-6 flex items-center justify-center">
                        {action.icon}
                      </div>
                    )}
                    <span className="text-text-secondary text-sm font-semibold font-['Muli']">
                      {action.label}
                    </span>
                  </button>
                ))}
              </div>
            )}
            {/* Close Button */}
            {showCloseButton && onClose && (
              <button
                onClick={onClose}
                className="size- flex justify-start items-center gap-2 hover:opacity-70 transition-opacity"
                aria-label="Close drawer"
              >
                <div className="justify-center text-black text-sm font-semibold uppercase tracking-widest">
                  close
                </div>
                <div className="size-6 relative overflow-hidden">
                  <div className="size-6 left-0 top-0 absolute" />
                  <div className="left-[2.27px] top-[2px] absolute">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1182_9444)">
                        <path
                          d="M10 0.3125C4.64844 0.3125 0.3125 4.64844 0.3125 10C0.3125 15.3516 4.64844 19.6875 10 19.6875C15.3516 19.6875 19.6875 15.3516 19.6875 10C19.6875 4.64844 15.3516 0.3125 10 0.3125ZM10 17.8125C5.68359 17.8125 2.1875 14.3164 2.1875 10C2.1875 5.68359 5.68359 2.1875 10 2.1875C14.3164 2.1875 17.8125 5.68359 17.8125 10C17.8125 14.3164 14.3164 17.8125 10 17.8125ZM13.9766 7.57031L11.5469 10L13.9766 12.4297C14.1602 12.6133 14.1602 12.9102 13.9766 13.0938L13.0938 13.9766C12.9102 14.1602 12.6133 14.1602 12.4297 13.9766L10 11.5469L7.57031 13.9766C7.38672 14.1602 7.08984 14.1602 6.90625 13.9766L6.02344 13.0938C5.83984 12.9102 5.83984 12.6133 6.02344 12.4297L8.45312 10L6.02344 7.57031C5.83984 7.38672 5.83984 7.08984 6.02344 6.90625L6.90625 6.02344C7.08984 5.83984 7.38672 5.83984 7.57031 6.02344L10 8.45312L12.4297 6.02344C12.6133 5.83984 12.9102 5.83984 13.0938 6.02344L13.9766 6.90625C14.1602 7.08984 14.1602 7.38672 13.9766 7.57031Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1182_9444">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Tabs and Content */}
        {tabs && tabs.length > 0 ? (
          <Tabs
            tabs={tabs}
            activeTabId={activeTabId}
            defaultActiveTabId={defaultActiveTab || tabs[0]?.id}
            onTabChange={handleTabChange}
            variant="drawer"
            className="flex-1 flex flex-col overflow-hidden"
            tabListClassName="flex-shrink-0"
            contentClassName="flex-1 overflow-y-auto p-6 bg-surface-secondary"
          />
        ) : (
          <div className="flex-1 overflow-y-auto p-6 bg-surface-secondary">
            {children}
          </div>
        )}

        {/* Footer Actions */}
        {footerActions && (footerActions.primary || footerActions.secondary) && (
          <>
            <div className="flex-shrink-0 h-px bg-stroke-grey-01" />
            <div className="flex-shrink-0 flex justify-end items-center gap-4 p-6">
              {footerActions.secondary && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={footerActions.secondary.onClick}
                  disabled={footerActions.secondary.disabled}
                  className="w-64"
                >
                  {footerActions.secondary.label}
                </Button>
              )}
              {footerActions.primary && (
                <Button
                  variant="accent"
                  size="sm"
                  onClick={footerActions.primary.onClick}
                  disabled={footerActions.primary.disabled}
                  className="flex-1 max-w-64"
                >
                  <div className="flex items-center gap-2">
                    <span>{footerActions.primary.label}</span>
                    {footerActions.primary.icon && (
                      <div className="w-6 h-6">{footerActions.primary.icon}</div>
                    )}
                  </div>
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Drawer;

