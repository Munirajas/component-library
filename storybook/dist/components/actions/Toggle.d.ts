interface ToggleProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    label?: string;
    className?: string;
}
export declare function Toggle({ checked, defaultChecked, onChange, disabled, size, label, className, }: ToggleProps): import("react/jsx-runtime").JSX.Element;
export default Toggle;
//# sourceMappingURL=Toggle.d.ts.map