/* ===================================
   LAYOUT TYPES
   =================================== */

import React from 'react'
import { MenuSection } from '../components/navigation/SidebarMenu'

export interface LayoutColumn {
  id: string
  content: React.ReactNode
  width?: 'auto' | '1/3' | '1/2' | '2/3' | 'full'
  className?: string
  title?: string
  collapsible?: boolean
  defaultCollapsed?: boolean
}

export interface LayoutProps {
  // Sidebar configuration
  sidebarSections?: MenuSection[]
  sidebarExpanded?: boolean
  onSidebarToggle?: (expanded: boolean) => void
  sidebarLogo?: React.ReactNode
  brandName?: string
  onSignOut?: () => void

  // Main content configuration
  columns?: LayoutColumn[]
  children?: React.ReactNode

  // Action bar configuration
  actionBar?: {
    title?: string
    subtitle?: string
    actions?: React.ReactNode
    position?: 'top' | 'bottom'
    variant?: 'default' | 'floating' | 'sticky'
    children?:React.ReactNode
  }

  // Layout configuration
  className?: string
  contentClassName?: string
  sidebarClassName?: string
  headerClassName?: string
  footerClassName?: string

  // Responsive behavior
  mobileSidebarCollapsed?: boolean
  onMobileSidebarToggle?: (collapsed: boolean) => void

  // Custom header/footer
  header?: React.ReactNode
  footer?: React.ReactNode
}

export interface LayoutHeaderProps {
  title?: string
  subtitle?: string
  actions?: React.ReactNode
  className?: string
}

export interface LayoutFooterProps {
  children?: React.ReactNode
  className?: string
}