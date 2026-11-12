"use client";

import { Table, type TableColumn } from "../dataDisplay";
import { StatusPill } from "../ui";
import { useMemo } from "react";
import {
  SCHEDULE_STATUS_LABELS,
  type ScheduleStatus,
  toScheduleTableRow,
} from "./schedule-list";
import type { ScheduleItem, ScheduleOption } from "./types";

interface Props {
  schedules: ScheduleItem[];
  types?: ScheduleOption[];
  emptyMessage?: string;
  /** Receives the position of the clicked schedule in `schedules`. */
  onOpen: (index: number) => void;
}

const STATUS_FILTER_OPTIONS = (
  Object.entries(SCHEDULE_STATUS_LABELS) as [ScheduleStatus, string][]
).map(([value, label]) => ({ value, label }));

export function ScheduleTable({
  schedules,
  types,
  emptyMessage = "No schedules yet. Add your first schedule to get started.",
  onOpen,
}: Props) {
  const rows = useMemo(
    () =>
      schedules.map((item, index) => toScheduleTableRow(item, index, types)),
    [schedules, types],
  );

  if (rows.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-500">
        {emptyMessage}
      </div>
    );
  }

  const columns: TableColumn[] = [
    {
      key: "name",
      label: "Title",
      sortable: true,
      render: (_value: unknown, row: Record<string, unknown>) => (
        <button
          data-testid="modules-amenities-components-schedule-schedulelist--button--name"
          type="button"
          className="cursor-pointer text-left text-blue-500 text-bold"
          onClick={() => onOpen(Number(row.index))}
        >
          {String(row.name ?? "")}
        </button>
      ),
    },
    ...(types?.length
      ? [{ key: "type", label: "Type", sortable: true } as TableColumn]
      : []),
    { key: "startDate", label: "Start Date" },
    { key: "endDate", label: "End Date" },
    { key: "recurrence", label: "Recurrence", sortable: true },
    { key: "occurrences", label: "Occurrences", sortable: true },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <StatusPill
          data-testid="modules-amenities-components-schedule-schedulelist--statuspill--i1"
          label={value}
          variant={value === "ACTIVE" ? "success" : "neutral"}
        />
      ),
    },
  ];

  return (
    <Table
      data-testid="modules-amenities-components-schedule-schedulelist--table--i1"
      data={rows as unknown as Record<string, unknown>[]}
      columns={columns}
      filterable
      filters={{
        definitions: [
          {
            key: "status",
            label: "Status",
            type: "multiselect",
            options: STATUS_FILTER_OPTIONS,
          },
          {
            key: "startDate",
            label: "Start Date",
            type: "text",
          },
          {
            key: "endDate",
            label: "End Date",
            type: "text",
          },
        ],
      }}
      searchable
      pagination={{ enabled: true }}
    />
  );
}
