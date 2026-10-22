import React from 'react';
export type MetricTrend = 'up' | 'down' | 'flat';
export interface MetricCardProps {
    title: React.ReactNode;
    value: React.ReactNode;
    subtitle?: React.ReactNode;
    trendLabel?: React.ReactNode;
    trend?: MetricTrend;
    trendValue?: React.ReactNode;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
    footer?: React.ReactNode;
    variant?: 'default' | 'compact' | 'outlined';
    className?: string;
    accentColorClassName?: string;
}
export declare const MetricCard: React.FC<MetricCardProps>;
export default MetricCard;
//# sourceMappingURL=MetricCard.d.ts.map