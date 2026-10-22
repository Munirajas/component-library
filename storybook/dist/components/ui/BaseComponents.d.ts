import { ReactNode } from 'react';
export interface FormControlProps {
    children: ReactNode;
    label?: string;
    required?: boolean;
    error?: string;
    helpText?: string;
    className?: string;
}
export declare const FormControl: import("react").ForwardRefExoticComponent<FormControlProps & import("react").RefAttributes<HTMLDivElement>>;
export interface BaseInputProps {
    variant?: 'default';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    error?: boolean;
    disabled?: boolean;
    className?: string;
}
export declare const getInputClasses: ({ variant, size, error, disabled, className }: BaseInputProps) => string;
export interface BaseButtonProps {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    disabled?: boolean;
    className?: string;
}
export declare const getButtonClasses: ({ variant, size, disabled, className }: BaseButtonProps) => string;
export interface BaseAlertProps {
    type?: 'info' | 'success' | 'warning' | 'error';
    variant?: 'soft' | 'solid' | 'outline';
    className?: string;
}
export declare const getAlertClasses: ({ type, variant, className }: BaseAlertProps) => string;
export declare const getModalClasses: (size?: "sm" | "md" | "lg" | "xl") => string;
export declare const getToastClasses: (type?: "info" | "success" | "warning" | "error") => string;
//# sourceMappingURL=BaseComponents.d.ts.map