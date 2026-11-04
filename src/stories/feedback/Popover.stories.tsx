import type { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import { Popover } from "@/components/feedback/Popover";
import { CTA } from "@/components/actions/CTA";
import { Input } from "@/components/dataInput/Input";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Popover that can be triggered by a child element or anchored to a DOMRect. Supports controlled and uncontrolled state, placements, hover, backdrop, and the existing filter-style API.",
      },
    },
  },
  argTypes: {
    placement: {
      control: { type: "select" },
      options: [
        "top",
        "bottom",
        "left",
        "right",
        "top-start",
        "top-end",
        "bottom-start",
        "bottom-end",
        "left-start",
        "left-end",
        "right-start",
        "right-end",
      ],
    },
    triggerType: {
      control: { type: "select" },
      options: ["click", "hover"],
    },
    backdrop: {
      control: { type: "select" },
      options: ["transparent", "opaque", "blur"],
    },
    showArrow: { control: { type: "boolean" } },
    isDisabled: { control: { type: "boolean" } },
    isDismissable: { control: { type: "boolean" } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PopoverDefault: Story = {
  render: () => (
    <Popover
      trigger={<CTA size="sm">Open popover</CTA>}
      className="w-64 p-4"
    >
      <p className="text-sm font-semibold text-gray-900">Account</p>
      <p className="mt-1 text-sm text-gray-600">
        Basic popover content with a trigger button.
      </p>
    </Popover>
  ),
};

export const PopoverPlacements: Story = {
  render: () => {
    const placements = [
      "top",
      "bottom",
      "left",
      "right",
      "top-start",
      "bottom-end",
    ] as const;

    return (
      <div className="grid grid-cols-3 gap-6 p-16">
        {placements.map((placement) => (
          <Popover
            key={placement}
            placement={placement}
            showArrow
            trigger={<CTA size="sm">{placement}</CTA>}
            className="w-48 p-3"
          >
            <p className="text-sm text-gray-700">Placement: {placement}</p>
          </Popover>
        ))}
      </div>
    );
  },
};

export const PopoverWithArrow: Story = {
  render: () => (
    <Popover
      showArrow
      placement="bottom"
      trigger={<CTA size="sm">With arrow</CTA>}
      className="w-56 p-4"
    >
      <p className="text-sm text-gray-700">Popover with an arrow pointer.</p>
    </Popover>
  ),
};

export const PopoverControlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="space-y-3">
        <p className="text-sm text-gray-600">
          State: {isOpen ? "Open" : "Closed"}
        </p>
        <div className="flex gap-2">
          <CTA size="sm" onClick={() => setIsOpen(true)}>Open</CTA>
          <CTA size="sm" variant="secondary" onClick={() => setIsOpen(false)}>
            Close
          </CTA>
        </div>
        <Popover
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          trigger={<CTA size="sm">Toggle</CTA>}
          className="w-56 p-4"
        >
          <p className="text-sm text-gray-700">Controlled from outside.</p>
        </Popover>
      </div>
    );
  },
};

export const PopoverHover: Story = {
  render: () => (
    <Popover
      triggerType="hover"
      trigger={<CTA size="sm">Hover me</CTA>}
      className="w-52 p-3"
    >
      <p className="text-sm text-gray-700">Opens on hover and stays while the pointer is over the content.</p>
    </Popover>
  ),
};

export const PopoverDisabled: Story = {
  render: () => (
    <Popover
      isDisabled
      trigger={<CTA size="sm" disabled>Disabled</CTA>}
      className="w-48 p-3"
    >
      <p className="text-sm">This should not open.</p>
    </Popover>
  ),
};

export const PopoverLongContent: Story = {
  render: () => (
    <Popover
      trigger={<CTA size="sm">Long content</CTA>}
      className="w-72 max-h-56 overflow-y-auto p-4"
    >
      {Array.from({ length: 12 }, (_, index) => (
        <p key={index} className="mb-2 text-sm text-gray-600">
          Line {index + 1}: overflow stays inside the popover.
        </p>
      ))}
    </Popover>
  ),
};

export const PopoverWithForm: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Popover
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        trigger={<CTA size="sm">Edit details</CTA>}
        className="w-80 p-4 space-y-3"
      >
        <Input label="Name" defaultValue="Lobby Tour" />
        <Input label="Location" defaultValue="Main hall" />
        <div className="flex justify-end gap-2 pt-2">
          <CTA size="xs" variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </CTA>
          <CTA size="xs" onClick={() => setIsOpen(false)}>
            Save
          </CTA>
        </div>
      </Popover>
    );
  },
};

export const PopoverBackdrop: Story = {
  render: () => (
    <div className="flex gap-4">
      <Popover
        backdrop="opaque"
        trigger={<CTA size="sm">Opaque</CTA>}
        className="w-52 p-4"
      >
        <p className="text-sm text-gray-700">Opaque backdrop.</p>
      </Popover>
      <Popover
        backdrop="blur"
        trigger={<CTA size="sm">Blur</CTA>}
        className="w-52 p-4"
      >
        <p className="text-sm text-gray-700">Blur backdrop.</p>
      </Popover>
    </div>
  ),
};

export const PopoverCompound: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger>
        <CTA size="sm">Compound API</CTA>
      </Popover.Trigger>
      <Popover.Content className="w-56 p-4" placement="right" showArrow>
        <p className="text-sm text-gray-700">Trigger and content as compound parts.</p>
      </Popover.Content>
    </Popover>
  ),
};

export const PopoverNested: Story = {
  render: () => (
    <Popover trigger={<CTA size="sm">Outer</CTA>} className="w-64 p-4">
      <p className="mb-3 text-sm text-gray-700">Outer popover</p>
      <Popover
        trigger={<CTA size="xs">Inner</CTA>}
        placement="right"
        className="w-48 p-3"
      >
        <p className="text-sm text-gray-700">Nested popover.</p>
      </Popover>
    </Popover>
  ),
};

export const PopoverAnchored: Story = {
  render: () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);

    return (
      <div>
        <CTA
          ref={buttonRef}
          size="sm"
          onClick={() => {
            setAnchorRect(buttonRef.current?.getBoundingClientRect() ?? null);
            setIsOpen((open) => !open);
          }}
        >
          Anchored popover
        </CTA>
        <Popover
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          anchorRect={anchorRect}
          align="left"
          className="w-64 p-4"
        >
          <p className="text-sm font-semibold text-gray-900">Filters</p>
          <p className="mt-1 text-sm text-gray-600">
            Same anchored API used by FilterPopover.
          </p>
        </Popover>
      </div>
    );
  },
};

export const PopoverViewportEdge: Story = {
  render: () => (
    <div className="flex h-64 w-[480px] items-end justify-end">
      <Popover
        placement="bottom"
        shouldFlip
        trigger={<CTA size="sm">Near edge</CTA>}
        className="w-56 p-4"
      >
        <p className="text-sm text-gray-700">
          Flips when there is not enough room below.
        </p>
      </Popover>
    </div>
  ),
};
