import React from 'react';
import { type StatusPillProps } from '../ui/StatusPill';
export interface EntitySummaryMetaItem {
    label: React.ReactNode;
    value: React.ReactNode;
}
export interface EntitySummaryRow {
    id: string;
    label: React.ReactNode;
    meta?: EntitySummaryMetaItem[];
    value?: React.ReactNode;
    description?: React.ReactNode;
    trailing?: React.ReactNode;
}
export interface EntitySummaryStatus extends Omit<StatusPillProps, 'label'> {
    label: React.ReactNode;
}
export interface EntitySummaryCardProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    action?: React.ReactNode;
    meta?: EntitySummaryMetaItem[];
    status?: EntitySummaryStatus | React.ReactNode;
    rows?: EntitySummaryRow[];
    footer?: React.ReactNode;
    leading?: React.ReactNode;
    description?: React.ReactNode;
    className?: string;
    highlight?: boolean;
    compact?: boolean;
}
export declare const EntitySummaryCard: React.FC<EntitySummaryCardProps>;
export default EntitySummaryCard;
//# sourceMappingURL=EntitySummaryCard.d.ts.map