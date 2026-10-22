import React from 'react';
export type StatusPillVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'accent';
export type StatusPillSize = 'sm' | 'md';
export interface StatusPillProps extends React.HTMLAttributes<HTMLSpanElement> {
    label: React.ReactNode;
    variant?: StatusPillVariant;
    size?: StatusPillSize;
    icon?: React.ReactNode;
    uppercase?: boolean;
    soft?: boolean;
}
export declare const StatusPill: React.FC<StatusPillProps>;
export default StatusPill;
//# sourceMappingURL=StatusPill.d.ts.map