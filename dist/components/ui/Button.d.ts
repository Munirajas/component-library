import React from 'react';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonVariant = 'ctaAccent' | 'ctaHover' | 'buttonGrey' | 'outlineAccent' | 'ghost';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    variant?: ButtonVariant;
    fullWidth?: boolean;
    rounded?: boolean;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
//# sourceMappingURL=Button.d.ts.map