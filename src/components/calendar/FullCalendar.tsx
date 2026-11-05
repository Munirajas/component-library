'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { clsx } from 'clsx';
import 'temporal-polyfill/global';
import FullCalendarBase, {
  useCalendarController,
  type DatesSetInfo,
  type EventInput,
} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/react/daygrid';
import timeGridPlugin from '@fullcalendar/react/timegrid';
import interactionPlugin from '@fullcalendar/react/interaction';
import monarchThemePlugin from '@fullcalendar/react/themes/monarch';
import '@fullcalendar/react/skeleton.css';
import '@fullcalendar/react/themes/monarch/theme.css';
import '@fullcalendar/react/themes/monarch/palettes/blue.css';
import { CalendarToolbar } from './CalendarToolbar';
import {
  eventMatchesSearch,
  eventOverlapsRange,
  getResolvedLabels,
  mergeColorTheme,
  normalizeCalendarEvent,
} from './dateUtils';
import {
  CALENDAR_VIEW_MAP,
  type CalendarEvent,
  type CalendarProps,
  type CalendarToolbarContext,
  type CalendarViewType,
} from './interfaces';
import './calendar.css';

const VIEW_BY_PLUGIN: Record<string, CalendarViewType> = {
  timeGridDay: 'day',
  timeGridWeek: 'week',
  dayGridMonth: 'month',
};

const EMPTY_EVENTS: CalendarEvent[] = [];
const DEFAULT_VIEWS: CalendarViewType[] = ['day', 'week', 'month'];

export function FullCalendar({
  events = EMPTY_EVENTS,
  views = DEFAULT_VIEWS,
  defaultView = 'month',
  view,
  onViewChange,
  initialDate,
  height = 'auto',
  className,
  toolbar,
  showCustomToolbar = true,
  headerToolbar,
  searchValue,
  defaultSearchValue = '',
  onSearchChange,
  searchPlaceholder = 'Search events by title, description, location, date...',
  colorTheme,
  eventLabels,
  colorMap,
  showLegend = false,
  selectable = false,
  editable = false,
  weekends = true,
  nowIndicator = true,
  dayMaxEvents = true,
  onEventClick,
  onEventMouseEnter,
  onEventMouseLeave,
  onDateClick,
  onDateSelect,
  extraPlugins,
  options,
}: CalendarProps) {
  const controller = useCalendarController();
  const isViewControlled = view !== undefined;
  const [internalView, setInternalView] = useState<CalendarViewType>(defaultView);
  const currentView = isViewControlled ? view : internalView;
  const isSearchControlled = searchValue !== undefined;
  const [internalSearch, setInternalSearch] = useState(defaultSearchValue);
  const query = isSearchControlled ? searchValue : internalSearch;
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [title, setTitle] = useState('');
  const [visibleRange, setVisibleRange] = useState<{ start: Date; end: Date } | null>(null);
  const theme = useMemo(() => mergeColorTheme(colorTheme), [colorTheme]);
  const availableViews = views.length > 0 ? views : DEFAULT_VIEWS;
  const optionsRef = useRef(options);
  const onViewChangeRef = useRef(onViewChange);
  const currentViewRef = useRef(currentView);
  optionsRef.current = options;
  onViewChangeRef.current = onViewChange;
  currentViewRef.current = currentView;

  const setSearch = useCallback(
    (value: string) => {
      if (!isSearchControlled) {
        setInternalSearch(value);
      }
      onSearchChange?.(value);
    },
    [isSearchControlled, onSearchChange],
  );

  const changeView = useCallback(
    (next: CalendarViewType) => {
      if (!isViewControlled) {
        setInternalView(next);
      }
      controller.changeView(CALENDAR_VIEW_MAP[next]);
      onViewChange?.(next);
    },
    [controller, isViewControlled, onViewChange],
  );

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 150);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (isViewControlled) {
      controller.changeView(CALENDAR_VIEW_MAP[view]);
    }
  }, [controller, isViewControlled, view]);

  const normalizedEvents = useMemo(
    () => events.map((event) => normalizeCalendarEvent(event, eventLabels, colorMap)),
    [events, eventLabels, colorMap],
  );

  const visibleEvents = useMemo(() => {
    const searched = debouncedQuery.trim()
      ? normalizedEvents.filter((event) => eventMatchesSearch(event, debouncedQuery))
      : normalizedEvents;

    if (!visibleRange) return searched;

    return searched.filter((event) =>
      eventOverlapsRange(event, visibleRange.start, visibleRange.end),
    );
  }, [normalizedEvents, debouncedQuery, visibleRange]);

  const handleDatesSet = useCallback(
    (info: DatesSetInfo) => {
      setTitle((prev) => (prev === info.view.title ? prev : info.view.title));
      setVisibleRange((prev) => {
        if (
          prev &&
          prev.start.getTime() === info.start.getTime() &&
          prev.end.getTime() === info.end.getTime()
        ) {
          return prev;
        }
        return { start: info.start, end: info.end };
      });
      const mapped = VIEW_BY_PLUGIN[info.view.type];
      if (mapped && mapped !== currentViewRef.current) {
        if (!isViewControlled) {
          setInternalView(mapped);
        }
        onViewChangeRef.current?.(mapped);
      }
      optionsRef.current?.datesSet?.(info);
    },
    [isViewControlled],
  );

  const goPrev = useCallback(() => controller.prev(), [controller]);
  const goNext = useCallback(() => controller.next(), [controller]);
  const goToday = useCallback(() => controller.today(), [controller]);

  const toolbarContext: CalendarToolbarContext = useMemo(
    () => ({
      view: currentView,
      title,
      searchValue: query,
      setSearchValue: setSearch,
      goPrev,
      goNext,
      goToday,
      changeView,
      views: availableViews,
    }),
    [availableViews, changeView, currentView, goNext, goPrev, goToday, query, setSearch, title],
  );

  const plugins = useMemo(
    () => [
      monarchThemePlugin,
      dayGridPlugin,
      timeGridPlugin,
      interactionPlugin,
      ...(extraPlugins ?? []),
      ...(options?.plugins ?? []),
    ],
    [extraPlugins, options?.plugins],
  );

  const legend = useMemo(
    () => (showLegend ? getResolvedLabels(eventLabels) : []),
    [eventLabels, showLegend],
  );

  const themeStyle = useMemo(
    () =>
      ({
        '--hl-calendar-primary': theme.primary,
        '--hl-calendar-primary-hover': theme.primaryHover,
        '--hl-calendar-primary-active': theme.primaryActive,
        '--hl-calendar-primary-foreground': theme.primaryForeground,
        '--hl-calendar-secondary': theme.secondary,
        '--hl-calendar-secondary-foreground': theme.secondaryForeground,
        '--hl-calendar-event': theme.event,
        '--hl-calendar-event-text': theme.eventText,
        '--hl-calendar-today': theme.today,
        '--hl-calendar-border': theme.border,
        '--hl-calendar-text': theme.text,
      }) as CSSProperties,
    [theme],
  );

  return (
    <div className={clsx('hl-calendar w-full', className)} style={themeStyle}>
      {showCustomToolbar && (
        <CalendarToolbar
          context={toolbarContext}
          toolbar={toolbar}
          searchPlaceholder={searchPlaceholder}
        />
      )}
      {showLegend && legend.length > 0 && (
        <div className="hl-calendar-legend">
          {legend.map((item) => (
            <span key={item.key} className="hl-calendar-legend-item">
              <span
                className="hl-calendar-legend-swatch"
                style={{ backgroundColor: item.color }}
              />
              {item.name}
            </span>
          ))}
        </div>
      )}
      <FullCalendarBase
        {...options}
        controller={controller}
        plugins={plugins}
        initialView={CALENDAR_VIEW_MAP[defaultView]}
        initialDate={initialDate}
        events={visibleEvents as EventInput[]}
        headerToolbar={headerToolbar ?? options?.headerToolbar ?? false}
        height={height}
        weekends={weekends}
        nowIndicator={nowIndicator}
        selectable={selectable}
        editable={editable}
        dayMaxEvents={dayMaxEvents}
        lazyFetching
        progressiveEventRendering
        timeZone={options?.timeZone ?? 'local'}
        datesSet={handleDatesSet}
        eventClick={onEventClick ?? options?.eventClick}
        eventMouseEnter={onEventMouseEnter ?? options?.eventMouseEnter}
        eventMouseLeave={onEventMouseLeave ?? options?.eventMouseLeave}
        dateClick={onDateClick ?? options?.dateClick}
        select={onDateSelect ?? options?.select}
      />
    </div>
  );
}

export default FullCalendar;
