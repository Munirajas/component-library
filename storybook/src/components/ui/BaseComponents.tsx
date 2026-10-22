/* ===================================
   BASE COMPONENT UTILS
   =================================== */

import { forwardRef, ReactNode } from 'react'
import { clsx } from 'clsx'

// ===================================
// BASE FORMS COMPONENT
// ===================================

export interface FormControlProps {
  children: ReactNode
  label?: string
  required?: boolean
  error?: string
  helpText?: string
  className?: string
}

export const FormControl = forwardRef<HTMLDivElement, FormControlProps>(({
  children,
  label,
  required = false,
  error,
  helpText,
  className = ''
}, ref) => {
  return (
    <div ref={ref} className={clsx('w-full space-y-2', className)}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {children}

      {(error || helpText) && (
        <div className="text-sm">
          {error ? (
            <span className="text-red-600">{error}</span>
          ) : (
            <span className="text-gray-500">{helpText}</span>
          )}
        </div>
      )}
    </div>
  )
})

FormControl.displayName = 'FormControl'

// ===================================
// BASE COMPONENT FOR INPUTS
// ===================================

export interface BaseInputProps {
  variant?: 'default' //Ther is not more personalization in the design
  size?: 'xs' | 'sm' | 'md' | 'lg'
  error?: boolean
  disabled?: boolean
  className?: string
}

export const getInputClasses = ({
  variant = 'default',
  size = 'md',
  error = false,
  disabled = false,
  className = ''
}: BaseInputProps) => {
  const baseClasses = 'w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'

  const variantClasses = {
    default: 'bg-surface-secondary text-text-secondary'
  }

  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg'
  }

  const stateClasses = {
    default: 'text-gray-900 placeholder-gray-500',
    error: 'border-red-500 text-gray-900 placeholder-gray-500',
    disabled: 'border-gray-200 bg-gray-100 text-gray-500 cursor-not-allowed'
  }

  const state = error ? 'error' : disabled ? 'disabled' : 'default'

  return clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    stateClasses[state],
    className
  )
}

// ===================================
// BASE COMPONENT FROM BUTTONS
// ===================================

export interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
}

export const getButtonClasses = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = ''
}: BaseButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    accent: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500'
  }

  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

  return clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabledClasses,
    className
  )
}

// ===================================
// BASE COMPONENT FOR ALERTS
// ===================================

export interface BaseAlertProps {
  type?: 'info' | 'success' | 'warning' | 'error'
  variant?: 'soft' | 'solid' | 'outline'
  className?: string
}

export const getAlertClasses = ({
  type = 'info',
  variant = 'soft',
  className = ''
}: BaseAlertProps) => {
  const baseClasses = 'flex items-start gap-3 p-4 border rounded-lg'

  const typeClasses = {
    info: {
      soft: 'bg-blue-50 border-blue-200 text-blue-800',
      solid: 'bg-blue-500 border-blue-600 text-white',
      outline: 'border-2 border-blue-500 bg-transparent text-blue-700'
    },
    success: {
      soft: 'bg-green-50 border-green-200 text-green-800',
      solid: 'bg-green-500 border-green-600 text-white',
      outline: 'border-2 border-green-500 bg-transparent text-green-700'
    },
    warning: {
      soft: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      solid: 'bg-yellow-500 border-yellow-600 text-white',
      outline: 'border-2 border-yellow-500 bg-transparent text-yellow-700'
    },
    error: {
      soft: 'bg-red-50 border-red-200 text-red-800',
      solid: 'bg-red-500 border-red-600 text-white',
      outline: 'border-2 border-red-500 bg-transparent text-red-700'
    }
  }

  return clsx(
    baseClasses,
    typeClasses[type][variant],
    className
  )
}

// ===================================
// BASE COMPONENT FOR MODALES
// ===================================

export const getModalClasses = (size: 'sm' | 'md' | 'lg' | 'xl' = 'md') => {
  const sizeClasses = {
    sm: 'w-11/12 max-w-md',
    md: 'w-11/12 max-w-2xl',
    lg: 'w-11/12 max-w-4xl',
    xl: 'w-11/12 max-w-7xl'
  }

  return clsx(
    'bg-white rounded-lg shadow-xl',
    sizeClasses[size]
  )
}

// ===================================
// BASE COMPONENT FOR TOASTS
// ===================================

export const getToastClasses = (type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
  const typeClasses = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800'
  }

  return clsx(
    'fixed top-4 right-4 z-50 flex items-center gap-3 p-4 border rounded-lg shadow-lg max-w-sm',
    typeClasses[type],
    'animate-in slide-in-from-right-2 duration-300'
  )
}
