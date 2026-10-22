/* ===================================
   ACTION BAR COMPONENT
   =================================== */

import React, { memo } from 'react'
import { clsx } from 'clsx'

export interface ActionBarProps {
  children?: React.ReactNode
  className?: string
  position?: 'top' | 'bottom' | undefined
  variant?: 'default' | 'floating' | 'sticky'
  actions?: React.ReactNode
}

const ActionBarComponent: React.FC<ActionBarProps> = ({
  children,
  className = '',
  position = 'bottom',
  variant = 'default',
  actions,
}) => {
  const baseClasses = 'flex items-center justify-between px-4 py-3 bg-surface-primary border-t border-button-grey'

  const variantClasses = {
    default: 'border-t border-button-grey',
    floating: 'shadow-lg rounded-lg border border-button-grey',
    sticky: 'sticky border-t border-button-grey'
  }

  const positionClasses = {
    top: 'border-t-0 border-b',
    bottom: 'border-t'
  }

  return (
    <div
      className={clsx(
        baseClasses,
        variantClasses[variant],
        positionClasses[position],
        className
      )}
    >
      {/* Actions */}
      {actions && (
        <div className="size- flex justify-start items-start gap-4">
          {actions}
        </div>
      )}

      {/* User information */}
      {children && (
        <div className="size- flex justify-end items-center gap-2">
          {children}
        </div>
      )}

      {/* <div className="size- flex justify-end items-center gap-2">
        <div data-icon="User" className="size-6 relative overflow-hidden">
          <div className="w-4 h-5 left-[3.25px] top-[2px] absolute overflow-hidden">
            <div className="w-4 h-5 left-0 top-0 absolute bg-gray-900" />
          </div>
        </div>
        <div className="text-center justify-center text-gray-900 text-xl font-semibold font-['Muli']">Welcome [Name]</div>
      </div> */}


    </div>
  )
}

// Memoize ActionBar to prevent unnecessary re-renders
export const ActionBar = memo(ActionBarComponent, (prevProps, nextProps) => {
  return (
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className &&
    prevProps.position === nextProps.position &&
    prevProps.variant === nextProps.variant &&
    prevProps.actions === nextProps.actions
  )
})

ActionBar.displayName = 'ActionBar'

export default ActionBar
