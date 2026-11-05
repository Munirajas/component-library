/* ===================================
   MAIN EXPORT FILE - REACT
   =================================== */

import './styles/index.css'

export * from './components/ui';
export * from './components/actions';
export * from './components/dataDisplay';
export * from './components/dataInput';
export * from './components/feedback';
export * from './components/layout';
export * from './components/navigation';
export * from './components';

// Export icons
export * from './icons/icons';
export { default as Icon } from './icons';

// Export hooks

// Export color system functions
export {
  colorSystem,
  getColor,
  getVariantColors,
  applyVariantToDOM,
  generateVariantCSS,
  getAvailableColorClasses,
  getAvailableVariants,
  getAvailableThemes,
  getAvailableModes,
  isValidColorClass,
  createColorClass,
  exportColorSystem,
  importColorSystem,
  parseVariant,
  createVariant,
} from "./themes/colorSystem";

// Export color system types
export type {
  Theme,
  Mode,
  ColorVariant,
  ColorState,
} from "./themes/colorSystem";

// Export color system hook
export { useColorSystem } from "./hooks/useColorSystem";

// Export color system selector component
export { ColorSystemSelector } from "./components/ui/ColorSystemSelector";

// Export layout types
export type { LayoutColumn, LayoutProps } from "./types/layout";

// Explicit type exports that are not forwarded by export *
export type { DrawerProps, DrawerAction, DrawerTab } from './components/feedback/Drawer';
export type { TabItem, TabsProps, TabsVariant } from './components/navigation/Tabs';
export type { PopoverProps, PopoverPlacement, PopoverTriggerType, PopoverBackdrop } from './components/feedback/Popover';
export type { TooltipProps, TooltipPlacement, TooltipTriggerMode, TooltipColor, TooltipSize, TooltipRadius } from './components/feedback/Tooltip';
export type {
  CalendarProps,
  CalendarEvent,
  CalendarViewType,
  CalendarEventLabelKey,
  CalendarEventLabelConfig,
  CalendarEventLabelMap,
  CalendarColorTheme,
  CalendarToolbarConfig,
  CalendarToolbarContext,
  CalendarToolbarItems,
} from './components/calendar';
export type { FilterDefinition, FilterOption, FilterType, FilterPopoverProps } from './components/dataDisplay/Table/FilterPopover';
export { FilterPopover } from './components/dataDisplay/Table/FilterPopover';

export * from "./components/treeView";