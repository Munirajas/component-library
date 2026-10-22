/* ===================================
   METRIC CARD COMPONENT
   =================================== */

import React from 'react'
import { clsx } from 'clsx'

export type MetricTrend = 'up' | 'down' | 'flat'

export interface MetricCardProps {
  title: React.ReactNode
  value: React.ReactNode
  subtitle?: React.ReactNode
  trendLabel?: React.ReactNode
  trend?: MetricTrend
  trendValue?: React.ReactNode
  icon?: React.ReactNode
  badge?: React.ReactNode
  footer?: React.ReactNode
  variant?: 'default' | 'compact' | 'outlined'
  className?: string
  accentColorClassName?: string
}

const trendConfig: Record<MetricTrend, { icon: React.ReactNode; labelClassName: string }> = {
  up: {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 15.9995L10.5858 9.4137C11.3668 8.63266 12.6332 8.63266 13.4142 9.4137L16.5858 12.5853C17.3668 13.3663 18.6332 13.3663 19.4142 12.5853L20 11.9995"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 7H21"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 7V13"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    labelClassName: 'text-emerald-600',
  },
  down: {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 8.00049L10.5858 14.5863C11.3668 15.3673 12.6332 15.3673 13.4142 14.5863L16.5858 11.4147C17.3668 10.6337 18.6332 10.6337 19.4142 11.4147L20 12.0005"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 17H21"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 11V17"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    labelClassName: 'text-rose-500',
  },
  flat: {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 12H20"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 8L20 12L16 16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    labelClassName: 'text-slate-500',
  },
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  subtitle,
  value,
  trend,
  trendLabel,
  trendValue,
  icon,
  badge,
  footer,
  variant = 'default',
  className,
  accentColorClassName = 'bg-sky-500/10 text-sky-600',
}) => {
  const trendInfo = trend ? trendConfig[trend] : undefined

  return (
    <section
      className={clsx(
        'flex w-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_16px_rgba(15,_23,_42,_0.08)] transition-shadow hover:shadow-[0px_12px_24px_rgba(15,_23,_42,_0.12)]',
        variant === 'compact' ? 'p-4' : 'p-6',
        variant === 'outlined' && 'border-dashed',
        className
      )}
    >
      <header className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {icon && (
            <div
              className={clsx(
                'flex h-12 w-12 items-center justify-center rounded-xl text-lg',
                accentColorClassName
              )}
            >
              {icon}
            </div>
          )}
          <div className="space-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              {title}
            </p>
            {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
          </div>
        </div>
        {badge}
      </header>

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-slate-900 md:text-4xl">
            {value}
          </span>
        </div>

        {(trend || trendLabel || trendValue) && (
          <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold">
            {trendInfo?.icon && (
              <span
                className={clsx(
                  'flex items-center justify-center',
                  trendInfo.labelClassName
                )}
              >
                {trendInfo.icon}
              </span>
            )}
            {trendValue && (
              <span className={trendInfo?.labelClassName}>{trendValue}</span>
            )}
            {trendLabel && <span className="text-slate-500">{trendLabel}</span>}
          </div>
        )}
      </div>

      {footer && (
        <footer className="flex flex-wrap items-center gap-3 border-t border-slate-100 pt-3 text-sm text-slate-500">
          {footer}
        </footer>
      )}
    </section>
  )
}

MetricCard.displayName = 'MetricCard'

export default MetricCard

