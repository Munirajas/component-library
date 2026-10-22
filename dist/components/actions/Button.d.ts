import React from "react";
export interface ButtonProps {
    variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "link" | "info" | "success" | "warning" | "error";
    size?: "xs" | "sm" | "md" | "lg" | "wide";
    state?: "default" | "hover" | "outline";
    outlineStyle?: "thin" | "normal" | "thick";
    loading?: boolean;
    disabled?: boolean;
    rounded?: boolean;
    fullWidth?: boolean;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    id?: string;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
//# sourceMappingURL=Button.d.ts.map