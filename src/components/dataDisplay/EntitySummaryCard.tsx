/* ===================================
   ENTITY SUMMARY CARD COMPONENT
   =================================== */

import React from 'react'
import { clsx } from 'clsx'
import { StatusPill, type StatusPillProps } from '../ui/StatusPill'

export interface EntitySummaryMetaItem {
  label: React.ReactNode
  value: React.ReactNode
}

export interface EntitySummaryRow {
  id: string
  label: React.ReactNode
  meta?: EntitySummaryMetaItem[]
  value?: React.ReactNode
  description?: React.ReactNode
  trailing?: React.ReactNode
}

export interface EntitySummaryStatus extends Omit<StatusPillProps, 'label'> {
  label: React.ReactNode
}

export interface EntitySummaryCardProps {
  title: React.ReactNode
  subtitle?: React.ReactNode
  action?: React.ReactNode
  meta?: EntitySummaryMetaItem[]
  status?: EntitySummaryStatus | React.ReactNode
  rows?: EntitySummaryRow[]
  footer?: React.ReactNode
  leading?: React.ReactNode
  description?: React.ReactNode
  className?: string
  highlight?: boolean
  compact?: boolean
}

const renderMetaItems = (items?: EntitySummaryMetaItem[]) => {
  if (!items?.length) return null

  return (
    <div className="flex flex-wrap items-start gap-2 text-sm text-slate-600">
      {items.map(({ label, value }, index) => (
        <div key={index} className="inline-flex items-start gap-1">
          {label && <span className="font-semibold text-slate-700">{label}</span>}
          {value && <span>{value}</span>}
        </div>
      ))}
    </div>
  )
}

const renderStatus = (status?: EntitySummaryStatus | React.ReactNode) => {
  if (!status) return null

  if (React.isValidElement(status)) {
    return status
  }

  // Type guard: if it's not a React element, it must be EntitySummaryStatus
  if (typeof status === 'object' && status !== null && 'label' in status) {
    const { label, ...pillProps } = status as EntitySummaryStatus
    return <StatusPill label={label} {...pillProps} />
  }

  return null
}

export const EntitySummaryCard: React.FC<EntitySummaryCardProps> = ({
  title,
  subtitle,
  action,
  meta,
  status,
  rows,
  footer,
  leading,
  description,
  className,
  highlight = false,
  compact = false,
}) => {
  const hasRows = Array.isArray(rows) && rows.length > 0
  const padding = compact ? 'p-4' : 'p-6'

  return (
    <div
      className={clsx(
        'w-full rounded-2xl border border-slate-200 bg-white shadow-[0px_4px_19.9px_rgba(6,_6,_7,_0.15)] transition-shadow',
        padding,
        highlight && 'border-sky-200 shadow-blue-200/40 ring-1 ring-sky-200',
        className
      )}
    >
      <div className="flex items-start gap-4">
        {leading && (
          <div className="flex items-center justify-center">
            {leading}
          </div>
        )}

        <div className="flex flex-1 flex-col gap-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-4">
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-lg font-bold text-slate-900 md:text-xl">
                  {title}
                </div>
                {action && (
                  <div className="text-sm font-semibold text-sky-600 underline decoration-sky-600/60 decoration-1 underline-offset-2">
                    {action}
                  </div>
                )}
              </div>

              {subtitle && (
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {subtitle}
                </div>
              )}

              {description && (
                <div className="text-sm text-slate-600">
                  {description}
                </div>
              )}

              {renderMetaItems(meta)}
            </div>

            <div className="flex flex-col items-end gap-2">
              {renderStatus(status)}
            </div>
          </div>

          {hasRows && (
            <div className={clsx('divide-y divide-slate-100 rounded-xl border border-slate-100', compact ? 'overflow-hidden' : '')}>
              {rows?.map(({ id, label, meta: rowMeta, value, description: rowDescription, trailing }) => (
                <div
                  key={id}
                  className={clsx(
                    'flex flex-col gap-3 bg-white px-4 py-3 md:flex-row md:items-center md:justify-between',
                    compact && 'px-3 py-2.5'
                  )}
                >
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="text-sm font-semibold text-slate-900 md:text-base">
                      {label}
                    </div>
                    {rowMeta && renderMetaItems(rowMeta)}
                    {rowDescription && (
                      <div className="text-sm text-slate-500">
                        {rowDescription}
                      </div>
                    )}
                  </div>

                  {(value || trailing) && (
                    <div className="flex flex-col items-end gap-1 text-right text-sm text-slate-700 md:min-w-[120px]">
                      {value && <span className="font-semibold text-slate-900">{value}</span>}
                      {trailing}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {footer && (
            <div className="mt-2 border-t border-slate-100 pt-3 text-sm text-slate-600">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

EntitySummaryCard.displayName = 'EntitySummaryCard'

export default EntitySummaryCard

