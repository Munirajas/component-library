import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    loading?: boolean;
    fullWidth?: boolean;
    rounded?: boolean;
    children: React.ReactNode;
}
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    hover?: boolean;
    interactive?: boolean;
}
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helpText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    clearable?: boolean;
    onClear?: () => void;
}
export interface ThemeToggleProps {
    showLabels?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
//# sourceMappingURL=componentTypes.d.ts.map