import React, { ReactNode } from "react";
export interface CtaProps {
    variant?: "primary" | "secondary" | "tertiary";
    size?: "xs" | "sm" | "md" | "lg" | "wide";
    loading?: boolean;
    disabled?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}
export declare const CTA: React.ForwardRefExoticComponent<CtaProps & React.RefAttributes<HTMLButtonElement>>;
export default CTA;
//# sourceMappingURL=CTA.d.ts.map