import { ReactNode } from 'react';
export interface SchoolChurchCardProps {
    children: ReactNode;
    bgVariant?: 'white' | 'cards-01';
    showOutline?: boolean;
    onClick?: () => void;
    className?: string;
}
export declare const SchoolChurchCard: import("react").ForwardRefExoticComponent<SchoolChurchCardProps & import("react").RefAttributes<HTMLDivElement>>;
export default SchoolChurchCard;
//# sourceMappingURL=SchoolChurchCard.d.ts.map