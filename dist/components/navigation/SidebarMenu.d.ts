import React from 'react';
export interface MenuItem {
    id: string;
    label: string;
    icon: string;
    href?: string;
    onClick?: () => void;
    isActive?: boolean;
    isDisabled?: boolean;
}
export interface MenuSection {
    id: string;
    title: string;
    items: MenuItem[];
}
export interface SidebarMenuProps {
    sections: MenuSection[];
    isExpanded?: boolean;
    onToggle?: (expanded: boolean) => void;
    onSignOut?: () => void;
    className?: string;
    logo?: React.ReactNode;
    brandName?: string;
    LinkComponent?: React.ComponentType<{
        href: string;
        className?: string;
        onClick?: () => void;
        children: React.ReactNode;
    }>;
    currentPath?: string;
}
export declare const SidebarMenu: React.NamedExoticComponent<SidebarMenuProps>;
export default SidebarMenu;
//# sourceMappingURL=SidebarMenu.d.ts.map