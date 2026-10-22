import React from 'react';
export interface ActionBarProps {
    children?: React.ReactNode;
    className?: string;
    position?: 'top' | 'bottom' | undefined;
    variant?: 'default' | 'floating' | 'sticky';
    actions?: React.ReactNode;
}
export declare const ActionBar: React.NamedExoticComponent<ActionBarProps>;
export default ActionBar;
//# sourceMappingURL=ActionBar.d.ts.map