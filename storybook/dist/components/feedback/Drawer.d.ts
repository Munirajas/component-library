import { ReactNode } from 'react';
import { TabItem } from '../navigation/Tabs';
export interface DrawerAction {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    icon?: ReactNode;
    disabled?: boolean;
}
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
export declare function Drawer({ title, isOpen, onClose, children, className, position, width, headerActions, footerActions, tabs, activeTabId, defaultActiveTab, onTabChange, showCloseButton, closeOnBackdropClick, }: DrawerProps): import("react/jsx-runtime").JSX.Element | null;
export default Drawer;
//# sourceMappingURL=Drawer.d.ts.map