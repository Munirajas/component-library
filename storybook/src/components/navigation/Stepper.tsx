/* ===================================
   STEPPER COMPONENT
   =================================== */

import React from 'react'
import { clsx } from 'clsx'

export type StepStatus = 'completed' | 'current' | 'upcoming'
export type StepOrientation = 'horizontal' | 'vertical'

export interface StepDefinition {
  id: string
  title: React.ReactNode
  description?: React.ReactNode
  status?: StepStatus
  optional?: boolean
  disabled?: boolean
  assistiveText?: React.ReactNode
}

export interface StepperProps {
  steps: StepDefinition[]
  currentStepId?: string
  currentIndex?: number
  orientation?: StepOrientation
  showStepNumbers?: boolean
  onStepClick?: (step: StepDefinition, index: number) => void
  interactive?: boolean
  className?: string
  compact?: boolean
}

const getDerivedStatuses = (
  steps: StepDefinition[],
  currentIndex?: number
): StepStatus[] => {
  if (typeof currentIndex === 'number') {
    return steps.map((_, index) => {
      if (index < currentIndex) return 'completed'
      if (index === currentIndex) return 'current'
      return 'upcoming'
    })
  }

  return steps.map((step, index) => {
    if (!step.status) return index === 0 ? 'current' : 'upcoming'
    return step.status
  })
}

const getStatuses = (
  steps: StepDefinition[],
  currentStepId?: string,
  currentIndex?: number
): StepStatus[] => {
  if (typeof currentIndex === 'number') {
    return getDerivedStatuses(steps, currentIndex)
  }

  if (currentStepId) {
    const index = steps.findIndex((step) => step.id === currentStepId)
    return getDerivedStatuses(steps, index === -1 ? undefined : index)
  }

  return getDerivedStatuses(steps, 0)
}

const statusIcon = (status: StepStatus) => {
  if (status !== 'completed') return null

  return (
    <svg
      className="h-3.5 w-3.5 text-white"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.66573 8.66573L3.8324 6.8324C3.66406 6.66406 3.38698 6.66406 3.21865 6.8324C3.05031 7.00073 3.05031 7.27781 3.21865 7.44615L5.35615 9.58365C5.52448 9.75198 5.80156 9.75198 5.9699 9.58365L10.7815 4.77207C10.9498 4.60373 10.9498 4.32665 10.7815 4.15832C10.6132 3.98998 10.3361 3.98998 10.1677 4.15832L5.66573 8.66573Z"
        fill="currentColor"
      />
    </svg>
  )
}

const indicatorClasses = (status: StepStatus) => {
  switch (status) {
    case 'completed':
      return 'bg-sky-600 border-sky-600 text-white'
    case 'current':
      return 'border-sky-600 text-sky-600 bg-white'
    default:
      return 'border-slate-300 text-slate-400 bg-white'
  }
}

const connectorClasses = (status: StepStatus) => {
  switch (status) {
    case 'completed':
      return 'bg-sky-600'
    case 'current':
      return 'bg-sky-300'
    default:
      return 'bg-slate-200'
  }
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStepId,
  currentIndex,
  orientation = 'horizontal',
  showStepNumbers = true,
  onStepClick,
  interactive = true,
  className,
  compact = false,
}) => {
  const statuses = getStatuses(steps, currentStepId, currentIndex)

  const containerClasses = clsx(
    'w-full flex',
    orientation === 'horizontal' ? 'flex-col gap-6 md:flex-row md:gap-8' : 'flex-col gap-6',
    className
  )

  const renderConnector = (status: StepStatus, isLast: boolean, orientation: StepOrientation) => {
    if (isLast) return null
    if (orientation === 'horizontal') {
      return (
        <div
          aria-hidden="true"
          className={clsx(
            'hidden md:block h-px flex-1 self-center rounded-full',
            connectorClasses(status)
          )}
        />
      )
    }

    return (
      <div
        aria-hidden="true"
        className={clsx(
          'ml-4 h-12 w-0.5 rounded-full',
          connectorClasses(status)
        )}
      />
    )
  }

  return (
    <div className={containerClasses}>
      <div
        className={clsx(
          'flex w-full',
          orientation === 'horizontal' ? 'flex-col gap-6 md:flex-row md:items-start md:gap-6' : 'flex-col gap-6'
        )}
      >
        {steps.map((step, index) => {
          const status = step.status ?? statuses[index] ?? 'upcoming'
          const isLast = index === steps.length - 1
          const clickable = interactive && status !== 'upcoming' && !step.disabled && Boolean(onStepClick)
          const stepNumbersEnabled = showStepNumbers && status !== 'completed'

          const indicator = (
            <div
              className={clsx(
                'relative flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors duration-200',
                indicatorClasses(status),
                step.disabled && 'opacity-50'
              )}
            >
              {status === 'completed' ? (
                statusIcon(status)
              ) : stepNumbersEnabled ? (
                index + 1
              ) : null}
            </div>
          )

          const content = (
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex items-start gap-2">
                <div className="flex-1 text-base font-semibold text-slate-900">
                  {step.title}
                </div>
                {step.optional && (
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Opcional
                  </span>
                )}
              </div>
              {step.description && (
                <div className="text-sm text-slate-600">
                  {step.description}
                </div>
              )}
              {step.assistiveText && (
                <div className="text-xs text-slate-400">
                  {step.assistiveText}
                </div>
              )}
            </div>
          )

          const stepBody = clickable ? (
            <button
              type="button"
              onClick={() => onStepClick?.(step, index)}
              className={clsx(
                'flex w-full items-start gap-3 rounded-xl text-left transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2',
                compact && 'rounded-lg px-2 py-1',
                !compact && 'px-2 py-2'
              )}
              aria-current={status === 'current' ? 'step' : undefined}
              aria-disabled={step.disabled}
            >
              <span className="sr-only">Paso {index + 1}</span>
              {indicator}
              <div className={clsx('flex-1', compact && 'text-sm')}>
                {content}
              </div>
            </button>
          ) : (
            <div
              className={clsx(
                'flex w-full items-start gap-3',
                orientation === 'horizontal' ? 'md:flex-col md:items-start md:gap-3' : ''
              )}
              aria-current={status === 'current' ? 'step' : undefined}
            >
              {indicator}
              <div className={clsx('flex-1', compact && 'text-sm')}>
                {content}
              </div>
            </div>
          )

          return (
            <div
              key={step.id}
              className={clsx(
                'relative flex flex-col',
                orientation === 'horizontal'
                  ? 'gap-4 md:flex-1 md:gap-3'
                  : 'gap-4'
              )}
            >
              {stepBody}
              {renderConnector(status, isLast, orientation)}
            </div>
          )
        })}
      </div>
    </div>
  )
}

Stepper.displayName = 'Stepper'

export default Stepper

