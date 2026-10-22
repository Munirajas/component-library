import { useEffect, ReactNode, useCallback, MouseEvent } from 'react';
import { getModalClasses } from '../ui/BaseComponents';
import { CTA } from '../actions/CTA';
import { clsx } from 'clsx';

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

export function Modal({
    children,
    title,
    description,
    isOpen = false,
    onClose,
    className,
    size = 'md',
    showCloseButton = true,
    closeOnBackdropClick = true,
    primaryAction,
    secondaryAction
}: ModalProps) {

    // Escape key handler
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen && onClose) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll on modal open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // handle click on backdrop
    const handleBackdropClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
        if (closeOnBackdropClick && e.target === e.currentTarget && onClose) {
            onClose();
        }
    }, [closeOnBackdropClick, onClose]);

    // Prevent click inside modal
    const handleModalClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }, []);

    if (!isOpen) return null;

    const modalSizeClasses = getModalClasses(size);

    return (
        <div 
            className='modalBackground z-50' 
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'modal-title' : undefined}
        >
            <div 
                className={clsx(
                    modalSizeClasses,
                    'p-10 bg-white rounded-2xl shadow-[0px_0px_40px_0px_rgba(0,0,0,0.15)] flex flex-col gap-6 relative max-h-[90vh] overflow-y-auto',
                    className
                )}
                onClick={handleModalClick}
            >
                {/* Close button if needed */}
                {showCloseButton && onClose && (
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
                        aria-label="Cerrar modal"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                )}

                {/* Header */}
                {(title || description) && (
                    <div className="flex flex-col justify-start items-center gap-4">
                        {title && (
                            <h2 
                                id="modal-title"
                                className="text-center text-gray-900 text-3xl font-semibold font-['Mulish']"
                            >
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="self-stretch text-center text-black text-xl font-normal font-['Mulish']">
                                {description}
                            </p>
                        )}
                    </div>
                )}

                {/* Content */}
                <div className="self-stretch flex flex-col justify-start items-center gap-4">
                    {children}
                </div>

                {/* Footer with actions */}
                {(primaryAction || secondaryAction) && (
                    <div className="self-stretch inline-flex justify-center items-start gap-4 pt-4 border-t border-gray-200">
                        {secondaryAction && (
                            <CTA
                                variant={secondaryAction.variant || 'secondary'}
                                size="lg"
                                onClick={secondaryAction.onClick}
                                disabled={secondaryAction.disabled}
                                className="flex-1"
                            >
                                {secondaryAction.label}
                            </CTA>
                        )}
                        {primaryAction && (
                            <CTA
                                variant={primaryAction.variant || 'primary'}
                                size="lg"
                                onClick={primaryAction.onClick}
                                disabled={primaryAction.disabled}
                                className="flex-1"
                            >
                                {primaryAction.label}
                            </CTA>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modal;