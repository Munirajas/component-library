import { ReactNode } from 'react';
export interface ModalAction {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'tertiary';
    disabled?: boolean;
}
export interface ModalProps {
    title?: string;
    description?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    showCloseButton?: boolean;
    closeOnBackdropClick?: boolean;
    primaryAction?: ModalAction;
    secondaryAction?: ModalAction;
}
export declare function Modal({ children, title, description, isOpen, onClose, className, size, showCloseButton, closeOnBackdropClick, primaryAction, secondaryAction }: ModalProps): import("react/jsx-runtime").JSX.Element | null;
export default Modal;
//# sourceMappingURL=Modal.d.ts.map