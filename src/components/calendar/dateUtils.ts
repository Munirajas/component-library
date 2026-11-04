import type { EventInput } from '@fullcalendar/react';
import {
  DEFAULT_CALENDAR_COLOR_THEME,
  DEFAULT_EVENT_LABELS,
  type CalendarColorTheme,
  type CalendarEvent,
  type CalendarEventLabelConfig,
  type CalendarEventLabelMap,
} from './interfaces';

const ISO_DATE_TIME =
  /^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2})(?:\.\d+)?)?)?(?:Z|[+-]\d{2}:?\d{2})?$/i;

export function toWallClockValue(value: unknown): string | undefined {
  if (value == null || value === '') return undefined;
  if (typeof value !== 'string') return undefined;

  const match = value.trim().match(ISO_DATE_TIME);
  if (!match) return value;

  const [, year, month, day, hour, minute, second] = match;
  if (hour == null) return `${year}-${month}-${day}`;
  return `${year}-${month}-${day}T${hour}:${minute}:${second ?? '00'}`;
}

export function resolveLabelConfig(
  event: CalendarEvent,
  eventLabels?: CalendarEventLabelMap,
): CalendarEventLabelConfig | undefined {
  const labels = { ...DEFAULT_EVENT_LABELS, ...normalizeLabelMap(eventLabels) };
  const key = event.label || event.type || event.status || 'default';
  return labels[key] ?? labels.default;
}

function normalizeLabelMap(
  eventLabels?: CalendarEventLabelMap,
): Record<string, CalendarEventLabelConfig> {
  if (!eventLabels) return {};
  return Object.entries(eventLabels).reduce<Record<string, CalendarEventLabelConfig>>(
    (acc, [key, value]) => {
      if (typeof value === 'string') {
        acc[key] = { key, name: key, color: value, textColor: '#ffffff' };
      } else {
        acc[key] = value;
      }
      return acc;
    },
    {},
  );
}

export function resolveEventColors(
  event: CalendarEvent,
  eventLabels?: CalendarEventLabelMap,
  colorMap?: Record<string, string>,
): { color: string; contrastColor: string } {
  const mapped =
    (event.type && colorMap?.[event.type]) ||
    (event.status && colorMap?.[event.status]) ||
    (event.label && colorMap?.[event.label]);
  const label = resolveLabelConfig(event, eventLabels);
  const color =
    event.color ||
    event.backgroundColor ||
    event.borderColor ||
    mapped ||
    label?.color ||
    DEFAULT_CALENDAR_COLOR_THEME.event;
  const contrastColor =
    event.contrastColor ||
    event.textColor ||
    label?.textColor ||
    DEFAULT_CALENDAR_COLOR_THEME.eventText;
  return { color, contrastColor };
}

export function normalizeCalendarEvent(
  event: CalendarEvent,
  eventLabels?: CalendarEventLabelMap,
  colorMap?: Record<string, string>,
): EventInput {
  const colors = resolveEventColors(event, eventLabels, colorMap);
  const start = toWallClockValue(event.start) ?? event.start;
  const end = toWallClockValue(event.end);

  return {
    ...event,
    id: event.id,
    title: event.title,
    start,
    end,
    allDay: event.allDay,
    className: event.className,
    display: event.display,
    editable: event.editable,
    url: event.url,
    color: colors.color,
    contrastColor: colors.contrastColor,
    extendedProps: {
      description: event.description,
      location: event.location,
      recurring: event.recurring,
      type: event.type,
      status: event.status,
      label: event.label,
      originalStart: event.start,
      originalEnd: event.end,
      ...event.extendedProps,
    },
  };
}

export function eventMatchesSearch(event: EventInput, query: string): boolean {
  const term = query.trim().toLowerCase();
  if (!term) return true;

  const extras = (event.extendedProps ?? {}) as Record<string, unknown>;
  const allDay = Boolean(event.allDay);
  const recurring = Boolean(extras.recurring);
  const haystack = [
    event.title,
    extras.description,
    extras.location,
    extras.type,
    extras.status,
    extras.label,
    extras.originalStart,
    extras.originalEnd,
    event.start,
    event.end,
    allDay ? 'all day allday' : '',
    recurring ? 'recurring repeat' : '',
  ]
    .filter((value) => value != null)
    .map((value) => String(value).toLowerCase())
    .join(' ');

  return haystack.includes(term);
}

export function eventOverlapsRange(
  event: EventInput,
  rangeStart: Date,
  rangeEnd: Date,
): boolean {
  const start = parseWallClockDate(event.start);
  const end = parseWallClockDate(event.end) ?? start;
  if (!start) return true;
  const eventEnd = end && end > start ? end : new Date(start.getTime() + 1);
  return start < rangeEnd && eventEnd > rangeStart;
}

export function parseWallClockDate(value: unknown): Date | null {
  if (value == null || value === '') return null;
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value;
  }
  const wall = toWallClockValue(value);
  if (!wall) return null;
  const normalized = wall.includes('T') ? wall : `${wall}T00:00:00`;
  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function mergeColorTheme(
  theme?: CalendarColorTheme,
): Required<CalendarColorTheme> {
  return { ...DEFAULT_CALENDAR_COLOR_THEME, ...theme };
}

export function getResolvedLabels(
  eventLabels?: CalendarEventLabelMap,
): CalendarEventLabelConfig[] {
  const labels = { ...DEFAULT_EVENT_LABELS, ...normalizeLabelMap(eventLabels) };
  const order = ['default', 'blackout', 'holiday', 'reserved', 'custom'];
  const seen = new Set<string>();
  const result: CalendarEventLabelConfig[] = [];

  for (const key of [...order, ...Object.keys(labels)]) {
    if (seen.has(key) || !labels[key]) continue;
    seen.add(key);
    result.push(labels[key]);
  }

  return result;
}
