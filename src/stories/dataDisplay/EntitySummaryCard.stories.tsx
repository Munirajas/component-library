/* ===================================
   ENTITY SUMMARY CARD STORIES
   =================================== */

import type { Meta, StoryObj } from "@storybook/react";
import { EntitySummaryCard } from "../../components/dataDisplay/EntitySummaryCard";

const meta: Meta<typeof EntitySummaryCard> = {
  title: "Data Display/EntitySummaryCard",
  component: EntitySummaryCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Reusable card for listing entities (e.g. tickets, bundles or add-ons) with metadata, status and detailed rows of prices or metrics.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
    },
    subtitle: {
      control: "text",
    },
    description: {
      control: "text",
    },
    highlight: {
      control: "boolean",
    },
    compact: {
      control: "boolean",
    },
    action: {
      control: false,
      description: "ReactNode (links/buttons) displayed next to the title.",
    },
    status: {
      control: false,
      description: "`StatusPill` object or custom ReactNode.",
    },
    rows: {
      control: false,
      description: "Array of rows with metadata and values.",
    },
    footer: {
      control: false,
    },
    leading: {
      control: false,
    },
  },
  args: {
    title: "Museum",
    subtitle: "General Admission",
    action: "Edit / View details",
    highlight: false,
    compact: false,
    status: {
      label: "Published",
      variant: "success",
      size: "sm",
    },
    meta: [
      { label: "Category:", value: "Museum" },
      { label: "Type:", value: "General Admission" },
    ],
    rows: [
      {
        id: "adult",
        label: "Adult",
        meta: [{ label: "Qty:", value: "n/a" }],
        value: "$29.99",
      },
      {
        id: "youth",
        label: "Youth",
        meta: [{ label: "Qty:", value: "n/a" }],
        value: "$19.99",
      },
      {
        id: "child",
        label: "Child",
        meta: [{ label: "Qty:", value: "n/a" }],
        value: "$0.00",
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Highlighted: Story = {
  args: {
    highlight: true,
    status: {
      label: "Pending Approval",
      variant: "warning",
      size: "sm",
    },
    rows: [
      {
        id: "base",
        label: "Base",
        meta: [
          { label: "Qty:", value: "100" },
        ],
        value: "$59.99",
      },
      {
        id: "gold",
        label: "Gold Circle",
        meta: [
          { label: "Qty:", value: "160" },
        ],
        value: "$49.99",
      },
      {
        id: "back",
        label: "Back Orchestra",
        meta: [
          { label: "Qty:", value: "140" },
        ],
        value: "$34.99",
      },
    ],
  },
};

export const CompactWithFooter: Story = {
  args: {
    compact: true,
    status: {
      label: "Draft",
      variant: "warning",
      size: "sm",
      soft: false,
    },
    meta: [
      { label: "Category:", value: "Add-on" },
      { label: "Type:", value: "Merchandise" },
    ],
    rows: [
      {
        id: "poster",
        label: "Signed poster limited edition",
        description: "In-person delivery at the venue after the show.",
        value: "$24.99",
      },
    ],
    footer: (
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-slate-500">Last edited:</span>
        <span className="font-semibold text-slate-700">October 19, 2025 - 14:23</span>
      </div>
    ),
  },
};

export const WithLeadingIcon: Story = {
  args: {
    leading: (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
        🎟️
      </div>
    ),
    title: "Prince Caspian 2024/25",
    subtitle: "Theater Performance",
    status: {
      label: "Published",
      variant: "success",
      size: "sm",
    },
    rows: [
      {
        id: "base",
        label: "Base",
        meta: [
          { label: "Qty:", value: "100" },
        ],
        value: "$59.99",
      },
      {
        id: "gold",
        label: "Gold Circle",
        meta: [
          { label: "Qty:", value: "160" },
        ],
        value: "$49.99",
      },
    ],
  },
};

