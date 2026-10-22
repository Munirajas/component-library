/* ===================================
   TABS COMPONENT
   =================================== */

import React, { useEffect, useMemo, useState } from 'react'
import { clsx } from 'clsx'

export type TabsVariant = 'dashboard' | 'underline' | 'pill' | 'drawer'

export interface TabItem {
  id: string
  label: React.ReactNode
  description?: React.ReactNode
  badge?: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  content?: React.ReactNode
}

export interface TabsProps {
  tabs: TabItem[]
  activeTabId?: string
  defaultActiveTabId?: string
  onTabChange?: (tabId: string, tab: TabItem) => void
  variant?: TabsVariant
  fullWidth?: boolean
  className?: string
  tabListClassName?: string
  tabClassName?: string
  contentClassName?: string
  renderContent?: (tab: TabItem | undefined) => React.ReactNode
}

const variantClasses = (variant: TabsVariant, isActive: boolean) => {
  switch (variant) {
    case 'dashboard':
      return clsx(
        'uppercase tracking-[0.18em] text-sm font-bold px-4 py-3 rounded-lg transition',
        isActive
          ? 'bg-white text-slate-900 shadow-[0px_4px_8px_rgba(6,_6,_7,_0.08)] border border-slate-200'
          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-transparent'
      )
    case 'pill':
      return clsx(
        'px-4 py-2 rounded-full text-sm font-semibold transition',
        isActive
          ? 'bg-sky-600 text-white shadow-sm'
          : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
      )
    case 'drawer':
      return clsx(
        "flex-1 p-4 text-base font-bold uppercase tracking-widest transition-colors",
        isActive
          ? 'bg-gray-light text-text-primary border-l border-b-4 border-b-cta-accent'
          : 'bg-gray-light text-text-secondary border-l border-b-4 border-b-transparent border-stroke-grey-01 hover:bg-gray-100'
      )
    case 'underline':
    default:
      return clsx(
        'px-3 py-2 text-sm font-semibold border-b-2 transition',
        isActive
          ? 'border-sky-600 text-slate-900'
          : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-200'
      )
  }
}

const TabButton: React.FC<{
  tab: TabItem
  isActive: boolean
  onClick: () => void
  variant: TabsVariant
  className?: string
  fullWidth?: boolean
}> = ({ tab, isActive, onClick, variant, className, fullWidth }) => (
  <button
    type="button"
    role="tab"
    aria-selected={isActive}
    aria-controls={`tab-panel-${tab.id}`}
    id={`tab-${tab.id}`}
    disabled={tab.disabled}
    onClick={onClick}
    className={clsx(
      'flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-gray-200',
      fullWidth ? 'justify-center w-full' : 'justify-start',
      variantClasses(variant, isActive),
      className
    )}
  >
    {tab.icon && <span className="text-lg">{tab.icon}</span>}
    <span className="flex flex-col items-start gap-1">
      <span>{tab.label}</span>
      {tab.description && (
        <span className="text-xs font-medium normal-case tracking-normal text-slate-400">
          {tab.description}
        </span>
      )}
    </span>
    {tab.badge && (
      <span className="ml-auto">
        {tab.badge}
      </span>
    )}
  </button>
)

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTabId,
  defaultActiveTabId,
  onTabChange,
  variant = 'dashboard',
  fullWidth = false,
  className,
  tabListClassName,
  tabClassName,
  contentClassName,
  renderContent,
}) => {
  const [internalActiveId, setInternalActiveId] = useState<string | undefined>(
    activeTabId ?? defaultActiveTabId ?? tabs[0]?.id
  )

  const isControlled = activeTabId !== undefined

  useEffect(() => {
    if (isControlled) {
      setInternalActiveId(activeTabId)
    }
  }, [activeTabId, isControlled])

  const activeTab = useMemo(
    () => tabs.find((tab) => tab.id === internalActiveId),
    [tabs, internalActiveId]
  )

  const handleChange = (tab: TabItem) => {
    if (tab.disabled) return

    if (!isControlled) {
      setInternalActiveId(tab.id)
    }

    onTabChange?.(tab.id, tab)
  }

  return (
    <div className={clsx(
      'w-full',
      variant !== 'drawer' && 'space-y-6',
      className
    )}>
      <div
        role="tablist"
        className={clsx(
          'flex flex-wrap items-center  rounded-2xl bg-slate-100',
          variant === 'underline' && 'bg-transparent p-0 gap-6 border-b border-slate-200',
          variant === 'pill' && 'bg-transparent p-0',
          variant === 'drawer' && 'shrink-0 flex border border-gray-100 rounded-none bg-transparent gap-0',
          tabListClassName
        )}
      >
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            tab={tab}
            isActive={tab.id === internalActiveId}
            onClick={() => handleChange(tab)}
            variant={variant}
            className={clsx(tabClassName, 'first:border-l-0','last:border-r-0') }
            fullWidth={fullWidth}
          />
        ))}
      </div>

      <div
        role="tabpanel"
        id={activeTab ? `tab-panel-${activeTab.id}` : undefined}
        aria-labelledby={activeTab ? `tab-${activeTab.id}` : undefined}
        className={clsx(
          variant !== 'drawer' && 'rounded-2xl',
          contentClassName
        )}
      >
        {renderContent ? renderContent(activeTab) : activeTab?.content}
      </div>
    </div>
  )
}

Tabs.displayName = 'Tabs'

export default Tabs

