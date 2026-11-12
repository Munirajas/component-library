"use client";

import {
  type CalendarEvent,
  type CalendarEventLabelConfig,
  type CalendarProps,
  FullCalendar,
} from "../calendar";
import { useMemo, useSyncExternalStore } from "react";
import type { ScheduleDate, ScheduleOption } from "./types";

const FALLBACK_TYPE_COLORS = [
  "#2563eb",
  "#16a34a",
  "#dc2626",
  "#7c3aed",
  "#d97706",
  "#0d9488",
];

interface Props {
  dates: ScheduleDate[];
  types?: ScheduleOption[];
  /** Receives the clicked date and its position in `dates`. */
  onDateClick?: (date: ScheduleDate, dateIndex: number) => void;
  defaultView?: CalendarProps["defaultView"];
  searchPlaceholder?: string;
  className?: string;
}

export function ScheduleCalendar({
  dates,
  types,
  onDateClick,
  defaultView = "month",
  searchPlaceholder = "Search schedules by name, type, status or date...",
  className,
}: Props) {
  const eventLabels = useMemo(
    () =>
      Object.fromEntries(
        (types ?? []).map((type, index): [string, CalendarEventLabelConfig] => [
          type.id,
          {
            key: type.id,
            name: type.name,
            color:
              type.color ??
              FALLBACK_TYPE_COLORS[index % FALLBACK_TYPE_COLORS.length],
            textColor: "#ffffff",
          },
        ]),
      ),
    [types],
  );

  const events = useMemo<CalendarEvent[]>(() => {
    const typeNames = new Map((types ?? []).map((t) => [t.id, t.name]));

    return dates.map((date, index) => {
      const isActive = date.isActive !== false;
      return {
        id: `${date.scheduleId || "new"}-${index}`,
        title: date.scheduleName,
        start: date.startDateTime,
        end: date.endDateTime,
        label: date.typeId || undefined,
        type: typeNames.get(date.typeId),
        status: isActive ? "Active" : "Inactive",
        className: isActive ? undefined : "opacity-60",
        extendedProps: { scheduleDate: date, dateIndex: index },
      };
    });
  }, [dates, types]);

  const hasLegend = Object.keys(eventLabels).length > 0;
  const isClient = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );

  // The calendar depends on the browser's timezone and layout, so it is
  // rendered on the client only to avoid hydration mismatches.
  if (!isClient) {
    return <div className={`min-h-[600px] ${className ?? ""}`} />;
  }

  return (
    <FullCalendar
      data-testid="components-scheduler-schedulecalendar--fullcalendar--i1"
      className={className}
      events={events}
      defaultView={defaultView}
      views={["day", "week", "month"]}
      searchPlaceholder={searchPlaceholder}
      showLegend={hasLegend}
      eventLabels={hasLegend ? eventLabels : undefined}
      onEventClick={(info) => {
        info.jsEvent.preventDefault();
        const { scheduleDate, dateIndex } = (info.event.extendedProps ??
          {}) as { scheduleDate?: ScheduleDate; dateIndex?: number };
        if (scheduleDate && dateIndex !== undefined) {
          onDateClick?.(scheduleDate, dateIndex);
        }
      }}
    />
  );
}

function subscribeToNothing() {
  return () => {};
}
