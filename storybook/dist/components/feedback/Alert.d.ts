import { ReactNode } from "react";
export interface AlertProps {
    type?: "info" | "success" | "warning" | "error";
    title?: string;
    children: ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
    icon?: ReactNode;
    className?: string;
    variant?: "soft" | "solid" | "outline";
}
export declare function Alert({ type, title, children, dismissible, onDismiss, icon, className, variant, }: AlertProps): import("react/jsx-runtime").JSX.Element;
export default Alert;
//# sourceMappingURL=Alert.d.ts.map