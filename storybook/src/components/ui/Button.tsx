/* ===================================
   COMPONENTE BUTTON (Sistema de Colores Granular)
   =================================== */

import React, { forwardRef } from 'react'
import { clsx } from 'clsx'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'
export type ButtonVariant = 'ctaAccent' | 'ctaHover' | 'buttonGrey' | 'outlineAccent' | 'ghost'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize
  variant?: ButtonVariant
  fullWidth?: boolean
  rounded?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

// Función para obtener clases de variante usando el sistema granular
const getVariantClasses = (variant: ButtonVariant) => {
  switch (variant) {
    case 'ctaAccent':
      return 'bg-cta-accent text-white hover:bg-cta-accent-hover active:bg-cta-accent-active disabled:bg-cta-accent-disabled'

    case 'ctaHover':
      return 'bg-cta-hover text-white hover:bg-cta-hover-hover active:bg-cta-hover-active disabled:bg-cta-hover-disabled'

    case 'buttonGrey':
      return 'bg-button-grey text-text-primary hover:bg-button-grey-hover active:bg-button-grey-active disabled:bg-button-grey-disabled'

    case 'outlineAccent':
      return 'bg-transparent text-text-primary border border-border-accent hover:bg-cta-accent/10 hover:border-border-accent-hover active:bg-cta-accent/20 disabled:bg-transparent disabled:border-border-accent-disabled'

    case 'ghost':
      return 'bg-transparent text-text-primary hover:bg-button-grey/10 active:bg-button-grey/20 disabled:bg-transparent'

    default:
      return 'bg-cta-accent text-white hover:bg-cta-accent-hover active:bg-cta-accent-active disabled:bg-cta-accent-disabled'
  }
}

// Función para obtener clases de tamaño
const getSizeClasses = (size: ButtonSize) => {
  switch (size) {
    case 'xs':
      return 'px-2 py-1 text-xs'
    case 'sm':
      return 'px-3 py-1.5 text-sm'
    case 'md':
      return 'px-4 py-2 text-base'
    case 'lg':
      return 'px-6 py-3 text-lg'
    default:
      return 'px-4 py-2 text-base'
  }
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    size = 'md',
    variant = 'ctaAccent',
    fullWidth = false,
    rounded = false,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    className,
    disabled,
    ...props
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-accent disabled:opacity-50 disabled:cursor-not-allowed'

    const variantClasses = getVariantClasses(variant)
    const sizeClasses = getSizeClasses(size)

    const classes = clsx(
      baseClasses,
      variantClasses,
      sizeClasses,
      {
        'w-full': fullWidth,
        'rounded-full': rounded,
        'rounded-lg': !rounded,
        'cursor-not-allowed': loading || disabled,
      },
      className
    )

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {!loading && leftIcon && (
          <span className="mr-2">{leftIcon}</span>
        )}

        {children}

        {!loading && rightIcon && (
          <span className="ml-2">{rightIcon}</span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button