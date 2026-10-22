import React from 'react';
export interface InputProps {
    autocomplete?: string;
    autofocus?: boolean;
    label?: string;
    id?: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'textarea' | 'datetime-local' | 'time' | 'file' | 'hidden' | 'week' | 'month' | 'checkbox' | 'color' | 'image' | 'radio' | 'range' | 'reset' | 'submit';
    name?: string;
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    error?: string;
    helpText?: string;
    clearable?: boolean;
    required?: boolean;
    className?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onClear?: () => void;
    rows?: number;
    cols?: number;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
export default Input;
//# sourceMappingURL=Input.d.ts.map