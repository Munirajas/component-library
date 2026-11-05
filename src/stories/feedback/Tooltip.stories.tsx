import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Tooltip } from "@/components/feedback/Tooltip";
import { CTA } from "@/components/actions/CTA";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Tooltip for hover and focus hints. Covers placement, delay, colors, empty content, disabled triggers, and controlled state.",
      },
    },
  },
  argTypes: {
    placement: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right", "top-start", "bottom-end"],
    },
    color: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    trigger: {
      control: { type: "select" },
      options: ["hover", "focus", "both"],
    },
    showArrow: { control: { type: "boolean" } },
    isDisabled: { control: { type: "boolean" } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TooltipDefault: Story = {
  render: () => (
    <Tooltip content="I am a tooltip">
      <CTA size="sm">Hover me</CTA>
    </Tooltip>
  ),
};

export const TooltipPlacements: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6 p-16">
      {(["top", "left", "right", "bottom"] as const).map((placement) => (
        <Tooltip
          key={placement}
          content={`${placement} tooltip`}
          placement={placement}
          showArrow
          delay={0}
        >
          <CTA size="sm">{placement}</CTA>
        </Tooltip>
      ))}
    </div>
  ),
};

export const TooltipColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {(["default", "primary", "secondary", "success", "warning", "danger"] as const).map(
        (color) => (
          <Tooltip key={color} content={color} color={color} delay={0} showArrow>
            <CTA size="sm">{color}</CTA>
          </Tooltip>
        ),
      )}
    </div>
  ),
};

export const TooltipSizes: Story = {
  render: () => (
    <div className="flex gap-3">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Tooltip key={size} content={`Size ${size}`} size={size} delay={0}>
          <CTA size="sm">{size}</CTA>
        </Tooltip>
      ))}
    </div>
  ),
};

export const TooltipWithArrow: Story = {
  render: () => (
    <Tooltip content="Tooltip with arrow" showArrow delay={0}>
      <CTA size="sm">Arrow</CTA>
    </Tooltip>
  ),
};

export const TooltipDelay: Story = {
  render: () => (
    <Tooltip content="Shows after 800ms" delay={800} closeDelay={200}>
      <CTA size="sm">Slow tooltip</CTA>
    </Tooltip>
  ),
};

export const TooltipFocus: Story = {
  render: () => (
    <Tooltip content="Visible on keyboard focus" trigger="focus" delay={0}>
      <button className="rounded-lg border border-gray-300 px-3 py-2 text-sm">
        Tab to me
      </button>
    </Tooltip>
  ),
};

export const TooltipDisabled: Story = {
  render: () => (
    <Tooltip content="Should not appear" isDisabled>
      <CTA size="sm" disabled>
        Disabled
      </CTA>
    </Tooltip>
  ),
};

export const TooltipEmpty: Story = {
  render: () => (
    <Tooltip content="">
      <CTA size="sm">Empty content</CTA>
    </Tooltip>
  ),
};

export const TooltipLongText: Story = {
  render: () => (
    <Tooltip
      content="This tooltip wraps a longer description so event details, helper copy, or validation messages stay readable."
      size="lg"
      delay={0}
    >
      <CTA size="sm">Long text</CTA>
    </Tooltip>
  ),
};

export const TooltipControlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="space-y-3">
        <p className="text-sm text-gray-600">
          State: {isOpen ? "Open" : "Closed"}
        </p>
        <CTA size="sm" onClick={() => setIsOpen((open) => !open)}>
          Toggle tooltip
        </CTA>
        <Tooltip content="Controlled tooltip" isOpen={isOpen} onOpenChange={setIsOpen}>
          <span className="rounded bg-gray-100 px-3 py-2 text-sm">Target</span>
        </Tooltip>
      </div>
    );
  },
};

export const TooltipCompound: Story = {
  render: () => (
    <Tooltip delay={0}>
      <Tooltip.Trigger>
        <CTA size="sm">Compound</CTA>
      </Tooltip.Trigger>
      <Tooltip.Content placement="bottom" showArrow>
        Compound tooltip content
      </Tooltip.Content>
    </Tooltip>
  ),
};

export const TooltipOnDisabledControl: Story = {
  render: () => (
    <Tooltip content="This action is unavailable" delay={0}>
      <span>
        <CTA size="sm" disabled>
          Save
        </CTA>
      </span>
    </Tooltip>
  ),
};
