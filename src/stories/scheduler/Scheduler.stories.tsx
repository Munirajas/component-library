import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  buildDefaultRecurrenceRule,
  buildScheduleSavePayload,
  findOverlappingSchedule,
  Scheduler,
  toScheduleDates,
} from "@/components/scheduler";
import type {
  RecurrenceRuleValues,
  ScheduleChange,
  ScheduleItem,
  ScheduleOption,
  SchedulerProps,
} from "@/components/scheduler";

const meta: Meta<typeof Scheduler> = {
  title: "Components/Scheduler",
  component: Scheduler,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Schedule manager with calendar and list views, recurrence rules, single instance editing and configurable defaults. The component is controlled: every change is passed to onSubmit, and returning an error message keeps the modal open.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const scheduleTypes: ScheduleOption[] = [
  { id: "1", name: "Available", color: "#16a34a" },
  { id: "2", name: "Reserved", color: "#7c3aed" },
  { id: "3", name: "Blocked", color: "#dc2626" },
];

function createSchedule(
  id: number,
  name: string,
  typeId: string,
  rule: Partial<RecurrenceRuleValues>,
  isActive = true,
): ScheduleItem {
  const fullRule = { ...buildDefaultRecurrenceRule(), ...rule };
  const { rruleText, occurrences } = buildScheduleSavePayload(fullRule);
  return {
    id,
    name,
    description: `${name} schedule`,
    typeId,
    isActive,
    scheduleJson: { rule: fullRule, rruleText },
    datesJson: toScheduleDates({ id, name, typeId, isActive }, occurrences),
  };
}

const sampleSchedules: ScheduleItem[] = [
  createSchedule(1, "Morning Open Hours", "1", {
    startDate: "2026-11-02",
    startTime: "09:00",
    endDate: "2026-11-02",
    endTime: "11:00",
    frequency: "WEEKLY",
    daysOfWeek: ["MON", "WED", "FRI"],
    recurrenceEndMode: "ON_DATE",
    recurrenceEndDate: "2026-11-30",
  }),
  createSchedule(2, "Private Party", "2", {
    startDate: "2026-11-14",
    startTime: "13:00",
    endDate: "2026-11-14",
    endTime: "16:00",
    frequency: "NONE",
  }),
  createSchedule(
    3,
    "Maintenance",
    "3",
    {
      startDate: "2026-11-03",
      startTime: "14:00",
      endDate: "2026-11-03",
      endTime: "15:00",
      frequency: "WEEKLY",
      daysOfWeek: ["TUE"],
      recurrenceEndMode: "AFTER_OCCURRENCES",
      occurrenceCount: 4,
    },
    false,
  ),
];

type ControlledSchedulerProps = Omit<SchedulerProps, "schedules" | "onSubmit"> & {
  initialSchedules?: ScheduleItem[];
  preventOverlap?: boolean;
};

function ControlledScheduler({
  initialSchedules = [],
  preventOverlap = false,
  ...props
}: ControlledSchedulerProps) {
  const [schedules, setSchedules] = useState(initialSchedules);
  const [lastChange, setLastChange] = useState<ScheduleChange | null>(null);

  function handleSubmit(change: ScheduleChange) {
    if (preventOverlap && change.action !== "delete") {
      const overlapping = findOverlappingSchedule(
        change.schedule,
        change.schedules.filter((_, index) => index !== change.index),
      );
      if (overlapping) {
        return `This schedule overlaps with "${overlapping.name}".`;
      }
    }
    setSchedules(change.schedules);
    setLastChange(change);
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <Scheduler {...props} schedules={schedules} onSubmit={handleSubmit} />
      {lastChange ? (
        <pre className="max-h-64 overflow-auto rounded-md bg-gray-50 p-3 text-xs text-gray-700">
          {JSON.stringify(
            {
              action: lastChange.action,
              index: lastChange.index,
              schedule: { ...lastChange.schedule, datesJson: undefined },
              occurrences: lastChange.schedule.datesJson.length,
            },
            null,
            2,
          )}
        </pre>
      ) : null}
    </div>
  );
}

export const SchedulerCalendarView: Story = {
  render: () => (
    <ControlledScheduler
      initialSchedules={sampleSchedules}
      types={scheduleTypes}
      preventOverlap
    />
  ),
};

export const SchedulerListView: Story = {
  render: () => (
    <ControlledScheduler
      initialSchedules={sampleSchedules}
      types={scheduleTypes}
      defaultView="list"
    />
  ),
};

export const SchedulerCustomDefaults: Story = {
  render: () => (
    <ControlledScheduler
      types={scheduleTypes}
      defaultView="list"
      addLabel="New Slot"
      defaults={{
        name: "Untitled slot",
        typeId: "2",
        isActive: false,
        durationMinutes: 30,
        recurrenceMonths: 3,
        rule: { frequency: "WEEKLY", daysOfWeek: ["SAT", "SUN"] },
      }}
    />
  ),
};

export const SchedulerWithoutTypes: Story = {
  render: () => (
    <ControlledScheduler
      initialSchedules={sampleSchedules}
      showDescription={false}
      allowOccurrenceEdit={false}
    />
  ),
};
