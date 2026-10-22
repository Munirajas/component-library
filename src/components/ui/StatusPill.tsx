/* ===================================
   STATUS PILL COMPONENT
   =================================== */

import React from 'react'
import { clsx } from 'clsx'

export type StatusPillVariant =
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral'
  | 'accent'

export type StatusPillSize = 'sm' | 'md'

export interface StatusPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: React.ReactNode
  variant?: StatusPillVariant
  size?: StatusPillSize
  icon?: React.ReactNode
  uppercase?: boolean
  soft?: boolean
}

const VARIANT_CLASSES: Record<StatusPillVariant, string> = {
  success: 'bg-emerald-200 text-emerald-900 border-emerald-300',
  warning: 'bg-amber-200 text-amber-900 border-amber-300',
  danger: 'bg-rose-200 text-rose-900 border-rose-300',
  info: 'bg-sky-200 text-sky-900 border-sky-300',
  neutral: 'bg-slate-200 text-slate-800 border-slate-300',
  accent: 'bg-blue-200 text-blue-900 border-blue-300',
}

const VARIANT_SOLID_CLASSES: Record<StatusPillVariant, string> = {
  success: 'bg-emerald-500 text-white border-transparent',
  warning: 'bg-amber-500 text-slate-900 border-transparent',
  danger: 'bg-rose-500 text-white border-transparent',
  info: 'bg-sky-500 text-white border-transparent',
  neutral: 'bg-slate-500 text-white border-transparent',
  accent: 'bg-blue-600 text-white border-transparent',
}

const SIZE_CLASSES: Record<StatusPillSize, string> = {
  sm: 'px-2 py-1 text-xs gap-1',
  md: 'px-3 py-1.5 text-sm gap-2',
}

export const StatusPill: React.FC<StatusPillProps> = ({
  label,
  variant = 'neutral',
  size = 'sm',
  icon,
  uppercase = true,
  soft = true,
  className,
  ...rest
}) => {
  const baseClasses =
    'inline-flex items-center rounded-full font-semibold tracking-wide border transition-colors duration-150'

  const variantClasses = soft ? VARIANT_CLASSES[variant] : VARIANT_SOLID_CLASSES[variant]
  const sizeClasses = SIZE_CLASSES[size]

  return (
    <span
      className={clsx(
        baseClasses,
        variantClasses,
        sizeClasses,
        uppercase && 'uppercase',
        uppercase && 'tracking-[0.18em]',
        className
      )}
      {...rest}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      <span className="flex items-center justify-center">{label}</span>
    </span>
  )
}

StatusPill.displayName = 'StatusPill'

export default StatusPill


