/* ===================================
   ADMIN SIDEBAR MENU COMPONENT
   =================================== */
'use client'
import React, { useState, useEffect, useCallback, memo } from 'react';
import clsx from 'clsx';

// Menu item interface
export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
}

// Menu section interface
export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

// Component props
export interface SidebarMenuProps {
  sections: MenuSection[];
  isExpanded?: boolean;
  onToggle?: (expanded: boolean) => void;
  onSignOut?: () => void;
  className?: string;
  logo?: React.ReactNode;
  brandName?: string;
  LinkComponent?: React.ComponentType<{ href: string; className?: string; onClick?: () => void; children: React.ReactNode }>;
  currentPath?: string;
}

// Icon component using real SVGs
import { iconMap, BrandIcon } from '../../icons/icons';
import { DarkModeToggle } from '../ui';

const Icon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    // Fallback for unknown icons
    return (
      <div className={clsx('w-6 h-6 relative', className)}>
        <div className="w-6 h-6 left-0 top-0 absolute inline-flex flex-col justify-center items-center gap-2.5">
          <div className="w-5 h-4 relative overflow-hidden">
            <div className="w-5 h-4 left-0 top-[1.11px] absolute bg-CTA-and-buttons-Icons-icon-secondary" />
          </div>
        </div>
      </div>
    );
  }
  return <IconComponent className={clsx('sidebar-icon', className)} />;
};

// Menu item component - memoized to prevent unnecessary re-renders
const MenuItemComponent: React.FC<{
  item: MenuItem;
  isExpanded: boolean;
  onClick?: () => void;
  currentPath?: string;
  LinkComponent?: React.ComponentType<{ href: string; className?: string; onClick?: () => void; children: React.ReactNode }>;
}> = memo(({ item, isExpanded, onClick, currentPath, LinkComponent }) => {
  const isActive = item.isActive || (item.href && currentPath === item.href);
  
  const content = (
    <div className="flex items-center gap-4 w-full">
      <Icon name={item.icon} />
      {isExpanded && (
        <span className="sidebar-text flex-1">
          {item.label}
        </span>
      )}
    </div>
  );

  const className = clsx(
    'sidebar-menu-item',
    isActive && 'sidebar-menu-item-active',
    !isExpanded && 'justify-center',
    item.isDisabled && 'opacity-50 cursor-not-allowed'
  );

  if (item.href && !item.onClick) {
    if (LinkComponent) {
      return (
        <div className="self-stretch inline-flex justify-start items-start">
          <div className="flex-1 flex justify-start items-start">
            <LinkComponent
              href={item.href}
              onClick={onClick}
              className={className}
            >
              {content}
            </LinkComponent>
          </div>
        </div>
      );
    }
    
    // Fallback to anchor tag if no LinkComponent provided
    return (
      <div className="self-stretch inline-flex justify-start items-start">
        <div className="flex-1 flex justify-start items-start">
          <a
            href={item.href}
            onClick={onClick}
            className={className}
          >
            {content}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="self-stretch inline-flex justify-start items-start">
      <div className="flex-1 flex justify-start items-start">
        <button
          onClick={onClick || item.onClick}
          disabled={item.isDisabled}
          className={clsx(
            'sidebar-menu-item',
            isActive && 'sidebar-menu-item-active',
            !isExpanded && 'justify-center'
          )}
        >
          {content}
        </button>
      </div>
    </div>
  );
});

MenuItemComponent.displayName = 'MenuItemComponent';

// Main component
const SidebarMenuComponent: React.FC<SidebarMenuProps> = ({
  sections,
  isExpanded = true,
  onToggle,
  onSignOut,
  className,
  logo,
  brandName,
  LinkComponent,
  currentPath
}) => {
  const [expanded, setExpanded] = useState(isExpanded);

  // Sync internal state with props
  useEffect(() => {
    setExpanded(isExpanded);
  }, [isExpanded]);

  // Memoize callbacks to prevent recreation
  const handleToggle = useCallback(() => {
    const newExpanded = !expanded;
    setExpanded(newExpanded);
    onToggle?.(newExpanded);
  }, [expanded, onToggle]);

  const handleSignOut = useCallback(() => {
    onSignOut?.();
  }, [onSignOut]);

  return (
    <div
      className={clsx(
        'sidebar-menu flex flex-col h-full transition-all duration-300 overflow-hidden',
        expanded ? 'w-80' : 'w-32',
        className
      )}
    >
      {/* Fixed Header Section (Logo/Brand and Dark Mode Toggle) */}
      <div className="flex-shrink-0 flex flex-col justify-start items-start gap-6 p-8 pb-6">
        {/* Logo/Brand Section */}
        <div className="flex flex-col justify-center items-center w-full">
          {logo || (
            <BrandIcon className="sidebar-brand-logo" />
          )}
          {expanded && brandName && (
            <div className="mt-2 sidebar-section-title text-sm">
              {brandName}
            </div>
          )}
        </div>

        <DarkModeToggle showLabel={expanded} className='flex flex-row w-full justify-center items-center' />
      </div>

      {/* Scrollable Menu Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 w-full px-8">
        <div className="flex flex-col justify-start items-start gap-4 pb-4">
          {sections.map((section) => (
            <div key={section.id} className="self-stretch flex flex-col justify-start items-start gap-4">
              {/* Section Title */}
              {expanded && (
                <div className="sidebar-section-title">
                  {section.title}
                </div>
              )}

              {/* Section Items */}
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                {section.items.map((item) => (
                  <MenuItemComponent
                    key={item.id}
                    item={item}
                    isExpanded={expanded}
                    onClick={item.onClick}
                    currentPath={currentPath}
                    LinkComponent={LinkComponent}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Sign Out Section */}
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch inline-flex justify-start items-center">
              <div className="flex-1 flex justify-start items-center">
                <button
                  onClick={handleSignOut}
                  className="sidebar-signout-button"
                >
                  <div className="flex items-center gap-4 w-full">
                    <Icon name="Sign out" />
                    {expanded && (
                      <span className="sidebar-text flex-1">
                        sign out
                      </span>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Footer Section (Toggle Button) */}
      <div className="flex-shrink-0 p-8 pt-6">
        <button
          onClick={handleToggle}
          className="sidebar-toggle-button"
          aria-label={expanded ? 'Collapse menu' : 'Expand menu'}
        >
          <Icon
            name={expanded ? 'Chevron Left' : 'Chevron Right'}
            className={clsx(
              'transition-transform duration-300',
              expanded ? 'rotate-180' : 'rotate-0'
            )}
          />
        </button>
      </div>
    </div>
  );
};

// Memoize SidebarMenu to prevent unnecessary re-renders
export const SidebarMenu = memo(SidebarMenuComponent, (prevProps, nextProps) => {
  // Custom comparison function
  return (
    prevProps.sections === nextProps.sections &&
    prevProps.isExpanded === nextProps.isExpanded &&
    prevProps.className === nextProps.className &&
    prevProps.logo === nextProps.logo &&
    prevProps.brandName === nextProps.brandName &&
    prevProps.currentPath === nextProps.currentPath &&
    prevProps.onToggle === nextProps.onToggle &&
    prevProps.onSignOut === nextProps.onSignOut &&
    prevProps.LinkComponent === nextProps.LinkComponent
  );
});

SidebarMenu.displayName = 'SidebarMenu';

export default SidebarMenu;
