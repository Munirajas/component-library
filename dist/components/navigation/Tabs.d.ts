import React from 'react';
export type TabsVariant = 'dashboard' | 'underline' | 'pill' | 'drawer';
export interface TabItem {
    id: string;
    label: React.ReactNode;
    description?: React.ReactNode;
    badge?: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
    content?: React.ReactNode;
}
export interface TabsProps {
    tabs: TabItem[];
    activeTabId?: string;
    defaultActiveTabId?: string;
    onTabChange?: (tabId: string, tab: TabItem) => void;
    variant?: TabsVariant;
    fullWidth?: boolean;
    className?: string;
    tabListClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
    renderContent?: (tab: TabItem | undefined) => React.ReactNode;
}
export declare const Tabs: React.FC<TabsProps>;
export default Tabs;
//# sourceMappingURL=Tabs.d.ts.map