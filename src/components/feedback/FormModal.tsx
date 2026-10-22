/* ===================================
   FORM MODAL COMPONENT
   =================================== */

import React, { useId, useMemo } from 'react'
import { Modal, type ModalProps, type ModalAction } from './Modal'

type OmittedModalProps = 'children' | 'primaryAction' | 'secondaryAction' | 'description'

export type FormLayout = 'vertical' | 'two-columns'

export interface FormModalProps extends Omit<ModalProps, OmittedModalProps> {
  children: React.ReactNode
  description?: React.ReactNode
  layout?: FormLayout
  columns?: 1 | 2
  gapClassName?: string
  contentClassName?: string
  footerContent?: React.ReactNode
  submitLabel?: string
  cancelLabel?: string
  submitVariant?: ModalAction['variant']
  cancelVariant?: ModalAction['variant']
  submitDisabled?: boolean
  isSubmitting?: boolean
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
  onCancel?: () => void
  id?: string
}

const layoutClasses = (layout: FormLayout, columns: 1 | 2) => {
  if (layout === 'two-columns') {
    const columnClass = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1'
    return `grid grid-cols-1 ${columnClass}`
  }

  return 'flex flex-col'
}

export const FormModal: React.FC<FormModalProps> = ({
  children,
  description,
  layout = 'vertical',
  columns = 2,
  gapClassName,
  contentClassName,
  footerContent,
  submitLabel = 'Guardar',
  cancelLabel = 'Cancelar',
  submitVariant = 'primary',
  cancelVariant = 'secondary',
  submitDisabled = false,
  isSubmitting = false,
  onSubmit,
  onCancel,
  ...modalProps
}) => {
  const generatedId = useId()
  const formId = modalProps.id ? `${modalProps.id}-form` : `form-modal-${generatedId}`

  const gapClasses = useMemo(() => {
    if (gapClassName) return gapClassName
    return layout === 'two-columns' ? 'gap-6' : 'gap-5'
  }, [gapClassName, layout])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit?.(event)
  }

  const handleCancel = () => {
    onCancel?.()
    modalProps.onClose?.()
  }

  return (
    <Modal
      {...modalProps}
      description={typeof description === 'string' ? description : undefined}
      primaryAction={{
        label: submitLabel,
        onClick: () => {
          const form = document.getElementById(formId) as HTMLFormElement | null
          form?.requestSubmit()
        },
        disabled: submitDisabled || isSubmitting,
        variant: submitVariant,
      }}
      secondaryAction={
        cancelLabel
          ? {
              label: cancelLabel,
              onClick: handleCancel,
              variant: cancelVariant,
            }
          : undefined
      }
    >
      <form
        id={formId}
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-6"
      >
        {description && typeof description !== 'string' && (
          <div className="text-center text-base text-slate-600">
            {description}
          </div>
        )}

        <div
          className={[
            layoutClasses(layout, columns),
            gapClasses,
            contentClassName,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {children}
        </div>

        {footerContent && (
          <div className="border-t border-slate-100 pt-4 text-sm text-slate-500">
            {footerContent}
          </div>
        )}
      </form>
    </Modal>
  )
}

FormModal.displayName = 'FormModal'

export default FormModal

