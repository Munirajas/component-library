/* ===================================
   CARD COMPONENT
   =================================== */

import { forwardRef, ReactNode } from 'react'
import { clsx } from 'clsx'

export interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'bordered' | 'outlined' | 'elevated' | 'flat'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  hover?: boolean
  interactive?: boolean
  onClick?: () => void
  fullWidth?: boolean
  size?: 'auto' | 'fixed-56' | 'fixed-32'
  showOutline?: boolean
  outlineColor?: 'accent' | 'stroke-accent' | 'cta-accent'
  rounded?: 'lg' | '10px'
  bgVariant?: 'primary' | 'secondary' | 'cards-01' | 'white'
  layout?: 'vertical' | 'horizontal'
  alignContent?: 'center' | 'start' | 'end'
}

const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  className,
  variant = 'default',
  padding = 'md',
  shadow = 'md',
  hover = false,
  interactive = false,
  onClick,
  fullWidth = false,
  size = 'auto',
  showOutline = false,
  outlineColor = 'cta-accent',
  rounded = 'lg',
  bgVariant = 'primary',
  layout = 'vertical',
  alignContent = 'center',
  ...props
}, ref) => {
  // Size classes
  const sizeClasses = {
    'auto': fullWidth ? 'w-full' : 'w-auto',
    'fixed-56': 'size-56',
    'fixed-32': 'h-32'
  }

  // Background variant classes
  const bgVariantClasses = {
    'primary': 'bg-surface-primary',
    'secondary': 'bg-surface-secondary',
    'cards-01': 'bg-[#EBEFF6]', // surface-cards-01 color
    'white': 'bg-white'
  }

  // Rounded classes
  const roundedClasses = {
    'lg': 'rounded-lg',
    '10px': 'rounded-[10px]'
  }

  // Outline classes
  const outlineClasses = showOutline ? clsx(
    'outline outline-[3px] outline-offset-[-3px]',
    outlineColor === 'accent' && 'outline-border-accent',
    outlineColor === 'stroke-accent' && 'outline-[#0273CF]', // stroke-accent color #0273CF
    outlineColor === 'cta-accent' && 'outline-cta-accent'
  ) : ''

  // Layout classes
  const layoutClasses = clsx(
    layout === 'vertical' ? 'flex-col' : 'flex-row',
    alignContent === 'center' && 'justify-center items-center',
    alignContent === 'start' && 'justify-start items-start',
    alignContent === 'end' && 'justify-start items-end'
  )

  // Base classes
  const baseClasses = clsx(
    'transition-all duration-200 inline-flex',
    sizeClasses[size],
    bgVariantClasses[bgVariant],
    roundedClasses[rounded],
    layoutClasses,
    outlineClasses,
    onClick || interactive ? 'cursor-pointer' : ''
  )
  
  // Variant classes
  const variantClasses = {
    default: '',
    bordered: 'border border-border-accent',
    outlined: 'bg-transparent border-2 border-border-accent',
    elevated: '',
    flat: 'bg-surface-secondary'
  }

  // Shadow classes
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }
  
  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }

  // Hover effects
  const hoverClasses = hover ? clsx(
    'hover:shadow-lg',
    'hover:-translate-y-1',
    !showOutline && 'hover:outline',
    !showOutline && 'hover:outline-[3px]',
    !showOutline && 'hover:outline-offset-[-3px]',
    !showOutline && 'hover:outline-cta-accent'
  ) : ''

  // Interactive classes
  const interactiveClasses = interactive ? clsx(
    'hover:bg-surface-secondary',
    'active:bg-surface-secondary'
  ) : ''
  
  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    shadowClasses[shadow],
    paddingClasses[padding],
    hoverClasses,
    interactiveClasses,
    className
  )
  
  return (
    <div 
      ref={ref} 
      className={classes} 
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      } : undefined}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'

export { Card }
export default Card