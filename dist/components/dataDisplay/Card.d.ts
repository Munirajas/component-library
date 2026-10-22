import { ReactNode } from 'react';
export interface CardProps {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'bordered' | 'outlined' | 'elevated' | 'flat';
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    hover?: boolean;
    interactive?: boolean;
    onClick?: () => void;
    fullWidth?: boolean;
    size?: 'auto' | 'fixed-56' | 'fixed-32';
    showOutline?: boolean;
    outlineColor?: 'accent' | 'stroke-accent' | 'cta-accent';
    rounded?: 'lg' | '10px';
    bgVariant?: 'primary' | 'secondary' | 'cards-01' | 'white';
    layout?: 'vertical' | 'horizontal';
    alignContent?: 'center' | 'start' | 'end';
}
declare const Card: import("react").ForwardRefExoticComponent<CardProps & import("react").RefAttributes<HTMLDivElement>>;
export { Card };
export default Card;
//# sourceMappingURL=Card.d.ts.map