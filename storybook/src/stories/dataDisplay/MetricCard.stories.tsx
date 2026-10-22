/* ===================================
   METRIC CARD STORYBOOK STORIES
   =================================== */

import type { Meta, StoryObj } from "@storybook/react";
import { MetricCard } from "../../components/dataDisplay/MetricCard";
import { StatusPill } from "../../components/ui/StatusPill";

const baseIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3V21M12 3C9.23858 3 7 5.23858 7 8V8.5C7 10.433 5.433 12 3.5 12H3M12 3C14.7614 3 17 5.23858 17 8V8.5C17 10.433 18.567 12 20.5 12H21M12 21C9.23858 21 7 18.7614 7 16V15.5C7 13.567 5.433 12 3.5 12H3M12 21C14.7614 21 17 18.7614 17 16V15.5C17 13.567 18.567 12 20.5 12H21"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta: Meta<typeof MetricCard> = {
  title: "Data Display/MetricCard",
  component: MetricCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Metric widget with icon, main value, delta and status; ideal for overview dashboards.",
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
    value: {
      control: "text",
    },
    trend: {
      control: "inline-radio",
      options: ["up", "down", "flat"],
    },
    trendValue: {
      control: "text",
    },
    trendLabel: {
      control: "text",
    },
    variant: {
      control: "inline-radio",
      options: ["default", "compact", "outlined"],
    },
  },
  args: {
    title: "Total Revenue",
    subtitle: "Last 30 days",
    value: "$128,430",
    trend: "up",
    trendValue: "+12.5%",
    trendLabel: "vs previous period",
    icon: baseIcon,
    badge: <StatusPill label="Live" variant="success" size="sm" />,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NegativeTrend: Story = {
  args: {
    title: "Refunds",
    value: "$3,210",
    subtitle: "Last 14 days",
    trend: "down",
    trendValue: "+4.2%",
    trendLabel: "vs target",
    badge: <StatusPill label="Attention" variant="warning" size="sm" />,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21L19 6H5L12 21Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 9V12"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16H12.01"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};

export const Compact: Story = {
  args: {
    variant: "compact",
    subtitle: undefined,
    badge: undefined,
    trendLabel: "vs yesterday",
    value: "1,284 sessions",
    title: "Web Traffic",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12H7L10 4L14 20L17 12H21"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};

export const OutlinedWithFooter: Story = {
  args: {
    variant: "outlined",
    trend: "flat",
    trendValue: "0.0%",
    trendLabel: "vs last week",
    footer: (
      <div className="flex items-center gap-3">
        <StatusPill label="Targets aligned" variant="neutral" size="sm" soft />
        <span>Next update: 11:30 AM</span>
      </div>
    ),
  },
};

