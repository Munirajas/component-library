import type { Meta, StoryObj } from "@storybook/react";
import { FullCalendar } from "@/components/calendar";
import type { CalendarEvent } from "@/components/calendar";

const meta: Meta<typeof FullCalendar> = {
  title: "Components/FullCalendar",
  component: FullCalendar,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "FullCalendar wrapper with a custom toolbar, wall-clock date display, searchable events, and label-based colors.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Lobby tour",
    start: "2026-11-04T09:00:00Z",
    end: "2026-11-04T10:00:00Z",
    description: "Morning walkthrough",
    location: "Main lobby",
  },
  {
    id: "2",
    title: "Reserved block",
    start: "2026-11-04T13:00:00Z",
    end: "2026-11-04T15:00:00Z",
    description: "Private group",
    location: "Gallery",
    label: "reserved",
    type: "reserved",
    status: "reserved",
  },
  {
    id: "3",
    title: "Holiday closure",
    start: "2026-11-11",
    allDay: true,
    description: "Veterans Day",
    label: "holiday",
    type: "holiday",
  },
  {
    id: "4",
    title: "Blackout window",
    start: "2026-11-15T00:00:00Z",
    end: "2026-11-17T00:00:00Z",
    allDay: true,
    description: "Maintenance",
    location: "All venues",
    label: "blackout",
    type: "blackout",
  },
  {
    id: "5",
    title: "Recurring workshop",
    start: "2026-11-06T14:00:00",
    end: "2026-11-06T16:00:00",
    description: "Weekly session",
    location: "Studio B",
    recurring: true,
    label: "custom",
  },
];

export const CalendarDefault: Story = {
  render: () => (
    <FullCalendar events={sampleEvents} initialDate="2026-11-04" />
  ),
};

export const CalendarViews: Story = {
  render: () => (
    <FullCalendar
      events={sampleEvents}
      initialDate="2026-11-04"
      defaultView="week"
    />
  ),
};

export const CalendarWithLegend: Story = {
  render: () => (
    <FullCalendar
      events={sampleEvents}
      initialDate="2026-11-04"
      showLegend
    />
  ),
};

export const CalendarWithCustomLegend: Story = {
  render: () => (
    <FullCalendar
      initialDate="2026-11-04"
      showLegend
      eventLabels={{
        available: { key: "available", name: "Available", color: "#16a34a" },
        reserved: { key: "reserved", name: "Reserved", color: "#7c3aed" },
        blocked: { key: "blocked", name: "Blocked", color: "#dc2626" },
      }}
      events={[
        {
          id: "a",
          title: "Open slot",
          start: "2026-11-04T09:00:00",
          end: "2026-11-04T10:00:00",
          label: "available",
        },
        {
          id: "b",
          title: "Private event",
          start: "2026-11-05T13:00:00",
          end: "2026-11-05T15:00:00",
          label: "reserved",
        },
        {
          id: "c",
          title: "Maintenance",
          start: "2026-11-06T08:00:00",
          end: "2026-11-06T12:00:00",
          label: "blocked",
        },
      ]}
    />
  ),
};

export const CalendarCustomColors: Story = {
  render: () => (
    <FullCalendar
      events={sampleEvents}
      initialDate="2026-11-04"
      showLegend
      colorTheme={{
        primary: "#0f766e",
        primaryHover: "#0d9488",
        primaryActive: "#115e59",
        secondary: "#ccfbf1",
        secondaryForeground: "#134e4a",
        event: "#0f766e",
        today: "#ccfbf1",
        border: "#5eead4",
        text: "#115e59",
      }}
      colorMap={{
        reserved: "#7c3aed",
        holiday: "#ea580c",
        blackout: "#111827",
      }}
    />
  ),
};

export const CalendarPerEventColors: Story = {
  render: () => (
    <FullCalendar
      initialDate="2026-11-04"
      events={[
        {
          id: "a",
          title: "No type",
          start: "2026-11-04T09:00:00Z",
          end: "2026-11-04T10:00:00Z",
        },
        {
          id: "b",
          title: "Custom hex",
          start: "2026-11-04T11:00:00Z",
          end: "2026-11-04T12:00:00Z",
          type: "vip",
          status: "confirmed",
          color: "#db2777",
          textColor: "#ffffff",
        },
        {
          id: "c",
          title: "Mapped status",
          start: "2026-11-04T13:00:00Z",
          end: "2026-11-04T14:30:00Z",
          status: "waitlist",
        },
      ]}
      colorMap={{
        waitlist: "#ca8a04",
      }}
    />
  ),
};

export const CalendarTimezoneAsReceived: Story = {
  render: () => (
    <FullCalendar
      defaultView="day"
      initialDate="2026-11-01"
      events={[
        {
          id: "z",
          title: "BE sent 2026-11-01T00:00:00Z",
          start: "2026-11-01T00:00:00Z",
          end: "2026-11-01T01:00:00Z",
          description: "Must stay at 00:00, not converted to local",
        },
      ]}
    />
  ),
};

export const CalendarHiddenToolbarItems: Story = {
  render: () => (
    <FullCalendar
      events={sampleEvents}
      initialDate="2026-11-04"
      toolbar={{
        items: {
          search: false,
          title: false,
        },
      }}
    />
  ),
};

export const CalendarReplacedToolbar: Story = {
  render: () => (
    <FullCalendar
      events={sampleEvents}
      initialDate="2026-11-04"
      toolbar={{
        center: (
          <div className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
            Custom center slot
          </div>
        ),
      }}
    />
  ),
};

export const CalendarNativeHeaderToolbar: Story = {
  render: () => (
    <FullCalendar
      events={sampleEvents}
      initialDate="2026-11-04"
      showCustomToolbar={false}
      headerToolbar={{
        start: "prev,next today",
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
    />
  ),
};

export const CalendarManyEvents: Story = {
  render: () => {
    const manyEvents: CalendarEvent[] = Array.from({ length: 800 }, (_, index) => {
      const day = (index % 28) + 1;
      const hour = 8 + (index % 8);
      const labels = ["default", "blackout", "holiday", "reserved", "custom"] as const;
      return {
        id: `bulk-${index}`,
        title: `Event ${index + 1}`,
        start: `2026-11-${String(day).padStart(2, "0")}T${String(hour).padStart(2, "0")}:00:00Z`,
        end: `2026-11-${String(day).padStart(2, "0")}T${String(hour + 1).padStart(2, "0")}:00:00Z`,
        description: index % 7 === 0 ? "Overflow test" : "Scheduled slot",
        location: index % 5 === 0 ? "Hall A" : "Hall B",
        label: labels[index % labels.length],
        recurring: index % 11 === 0,
        allDay: index % 23 === 0,
      };
    });

    return (
      <FullCalendar
        events={manyEvents}
        initialDate="2026-11-04"
        showLegend
      />
    );
  },
};

export const CalendarSelectable: Story = {
  render: () => (
    <FullCalendar
      events={sampleEvents}
      initialDate="2026-11-04"
      defaultView="week"
      selectable
      onDateSelect={(info) => {
        window.alert(`Selected ${info.startStr} to ${info.endStr}`);
      }}
      onEventClick={(info) => {
        window.alert(info.event.title);
      }}
    />
  ),
};
