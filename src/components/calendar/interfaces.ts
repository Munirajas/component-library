import type { ReactNode } from 'react';
import type {
  CalendarOptions,
  DateClickInfo,
  DateSelectInfo,
  EventClickInfo,
  EventHoveringInfo,
  PluginInput,
} from '@fullcalendar/react';

export type CalendarViewType = 'day' | 'week' | 'month';

export type CalendarEventLabelKey =
  | 'default'
  | 'blackout'
  | 'holiday'
  | 'reserved'
  | 'custom'
  | (string & {});

export interface CalendarEventLabelConfig {
  key: string;
  name: string;
  color: string;
  textColor?: string;
}

export type CalendarEventLabelMap = Record<string, CalendarEventLabelConfig | string>;

export interface CalendarColorTheme {
  primary?: string;
  primaryHover?: string;
  primaryActive?: string;
  primaryForeground?: string;
  secondary?: string;
  secondaryForeground?: string;
  event?: string;
  eventText?: string;
  today?: string;
  border?: string;
  text?: string;
}

export interface CalendarEvent {
  id?: string;
  title: string;
  start: string;
  end?: string;
  allDay?: boolean;
  description?: string;
  location?: string;
  recurring?: boolean;
  type?: string;
  status?: string;
  label?: CalendarEventLabelKey;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  contrastColor?: string;
  className?: string;
  display?: string;
  editable?: boolean;
  url?: string;
  extendedProps?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface CalendarToolbarContext {
  view: CalendarViewType;
  title: string;
  searchValue: string;
  setSearchValue: (value: string) => void;
  goPrev: () => void;
  goNext: () => void;
  goToday: () => void;
  changeView: (view: CalendarViewType) => void;
  views: CalendarViewType[];
}

export interface CalendarToolbarItems {
  navigation?: boolean;
  today?: boolean;
  title?: boolean;
  search?: boolean;
  viewSelector?: boolean;
}

export interface CalendarToolbarConfig {
  items?: CalendarToolbarItems;
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
  renderLeft?: (ctx: CalendarToolbarContext) => ReactNode;
  renderCenter?: (ctx: CalendarToolbarContext) => ReactNode;
  renderRight?: (ctx: CalendarToolbarContext) => ReactNode;
  extraLeft?: ReactNode;
  extraCenter?: ReactNode;
  extraRight?: ReactNode;
}

export interface CalendarProps {
  events?: CalendarEvent[];
  views?: CalendarViewType[];
  defaultView?: CalendarViewType;
  view?: CalendarViewType;
  onViewChange?: (view: CalendarViewType) => void;
  initialDate?: string;
  height?: CalendarOptions['height'];
  className?: string;
  toolbar?: CalendarToolbarConfig;
  showCustomToolbar?: boolean;
  headerToolbar?: CalendarOptions['headerToolbar'];
  searchValue?: string;
  defaultSearchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  colorTheme?: CalendarColorTheme;
  eventLabels?: CalendarEventLabelMap;
  colorMap?: Record<string, string>;
  showLegend?: boolean;
  selectable?: boolean;
  editable?: boolean;
  weekends?: boolean;
  nowIndicator?: boolean;
  dayMaxEvents?: boolean | number;
  onEventClick?: (info: EventClickInfo) => void;
  onEventMouseEnter?: (info: EventHoveringInfo) => void;
  onEventMouseLeave?: (info: EventHoveringInfo) => void;
  onDateClick?: (info: DateClickInfo) => void;
  onDateSelect?: (info: DateSelectInfo) => void;
  extraPlugins?: PluginInput[];
  options?: CalendarOptions;
}

export const DEFAULT_EVENT_LABELS: Record<string, CalendarEventLabelConfig> = {
  default: { key: 'default', name: 'Schedule', color: '#2563eb', textColor: '#ffffff' },
  blackout: { key: 'blackout', name: 'Blackout', color: '#111827', textColor: '#ffffff' },
  holiday: { key: 'holiday', name: 'Holiday', color: '#d97706', textColor: '#ffffff' },
  reserved: { key: 'reserved', name: 'Reserved', color: '#7c3aed', textColor: '#ffffff' },
  custom: { key: 'custom', name: 'Custom', color: '#0d9488', textColor: '#ffffff' },
};

export const DEFAULT_CALENDAR_COLOR_THEME: Required<CalendarColorTheme> = {
  primary: '#2563eb',
  primaryHover: '#1d4ed8',
  primaryActive: '#1e40af',
  primaryForeground: '#ffffff',
  secondary: '#dbeafe',
  secondaryForeground: '#1e3a8a',
  event: '#2563eb',
  eventText: '#ffffff',
  today: '#dbeafe',
  border: '#93c5fd',
  text: '#1e3a8a',
};

export const CALENDAR_VIEW_MAP: Record<CalendarViewType, string> = {
  day: 'timeGridDay',
  week: 'timeGridWeek',
  month: 'dayGridMonth',
};

export const CALENDAR_VIEW_LABELS: Record<CalendarViewType, string> = {
  day: 'Day',
  week: 'Week',
  month: 'Month',
};
