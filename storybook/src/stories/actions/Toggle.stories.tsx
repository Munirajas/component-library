import type { Meta, StoryObj } from "@storybook/react";
import Toggle from "../../components/actions/Toggle";
import { useState } from "react";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Default state",
    },
    disabled: {
      control: "boolean",
      description: "If the toggle is disabled",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Toggle size",
    },
    label: {
      control: "text",
      description: "Optional toggle label",
    },
    onChange: {
      action: "changed",
      description: "Callback when the state changes.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Story
export const DefaultToggle: Story = {
  args: {
    checked: false,
    label: "Basic Toggle",
  },
};

// Toggle - active
export const Checked: Story = {
  args: {
    checked: true,
    label: "Active Toggle",
  },
};

// Toggle - disabled
export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: "Disabled Toggle",
  },
};

// Toggle disabled and active
export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: "Toggle - disabled and active",
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <Toggle checked={true} label="Small" size="sm" />
      <Toggle checked={false} label="Medium" size="md" />
      <Toggle checked={true} label="Large" size="lg" />
    </div>
  ),
};

// No Label
export const NoLabel: Story = {
  args: {
    checked: false,
  },
};

// Large Label
export const LongLabel: Story = {
  args: {
    checked: true,
    label: "Large label content to test the component behavior.",
  },
};

// Multiple toggles
export const MultipleToggles: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <Toggle checked={true} label="Notifications" />
      <Toggle checked={false} label="Dark mode" />
      <Toggle checked={true} label="Auto save" />
      <Toggle checked={false} label="Sound Activated" />
      <Toggle checked={true} label="Sync" />
    </div>
  ),
};

// Toggle with controlled state
export const Controlled: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <div className="flex flex-col gap-4 items-start">
        <Toggle
          checked={isChecked}
          onChange={setIsChecked}
          label="Toggle control"
        />
        <p className="text-sm text-gray-600">
          Current state: {isChecked ? "active" : "inactive"}
        </p>
        <button
          onClick={() => setIsChecked(!isChecked)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Change state
        </button>
      </div>
    );
  },
};

// Toggle with different states
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <Toggle checked={false} label="Initial state" />
      <Toggle checked={true} label="Active state" />
      <Toggle checked={false} disabled label="Disabled" />
      <Toggle checked={true} disabled label="Disabled and active" />
    </div>
  ),
};
