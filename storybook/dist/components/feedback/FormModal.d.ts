import React from 'react';
import { type ModalProps, type ModalAction } from './Modal';
type OmittedModalProps = 'children' | 'primaryAction' | 'secondaryAction' | 'description';
export type FormLayout = 'vertical' | 'two-columns';
export interface FormModalProps extends Omit<ModalProps, OmittedModalProps> {
    children: React.ReactNode;
    description?: React.ReactNode;
    layout?: FormLayout;
    columns?: 1 | 2;
    gapClassName?: string;
    contentClassName?: string;
    footerContent?: React.ReactNode;
    submitLabel?: string;
    cancelLabel?: string;
    submitVariant?: ModalAction['variant'];
    cancelVariant?: ModalAction['variant'];
    submitDisabled?: boolean;
    isSubmitting?: boolean;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    onCancel?: () => void;
    id?: string;
}
export declare const FormModal: React.FC<FormModalProps>;
export default FormModal;
//# sourceMappingURL=FormModal.d.ts.map