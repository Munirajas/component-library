import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SortableList } from "../../components/sortableList";

type AssignedItem = {
  amenityId: number;
  amenityName: string;
};

const assignedItems: AssignedItem[] = [
  { amenityId: 101, amenityName: "Custom Framing" },
  { amenityId: 102, amenityName: "Art Classes" },
  { amenityId: 103, amenityName: "Birthday Party" },
  { amenityId: 201, amenityName: "Candle Making" },
];

function GripIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <circle cx="5" cy="3.5" r="1.1" />
      <circle cx="11" cy="3.5" r="1.1" />
      <circle cx="5" cy="8" r="1.1" />
      <circle cx="11" cy="8" r="1.1" />
      <circle cx="5" cy="12.5" r="1.1" />
      <circle cx="11" cy="12.5" r="1.1" />
    </svg>
  );
}

function AssignedItemsList({ disabled = false }: { disabled?: boolean }) {
  const [items, setItems] = useState(assignedItems);

  return (
    <div className="w-[420px]">
      <SortableList
        items={items}
        getId={(item) => item.amenityId}
        onReorder={(next) => setItems(next)}
        disabled={disabled}
        className="flex flex-col gap-3"
        renderItem={(item, { isDragging, isDropTarget, dragHandleProps }) => (
          <div
            className={`flex h-11 w-full items-center gap-2 rounded-md border bg-white px-3 py-2 text-sm text-gray-900 ${
              isDragging
                ? "border-blue-400 opacity-60"
                : isDropTarget
                  ? "border-blue-500"
                  : "border-gray-300"
            }`}
          >
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center text-gray-400 ${
                disabled
                  ? "cursor-not-allowed opacity-40"
                  : "cursor-grab hover:text-gray-600 active:cursor-grabbing"
              }`}
              {...dragHandleProps}
            >
              <GripIcon />
            </span>
            <span className="min-w-0 truncate">{item.amenityName}</span>
          </div>
        )}
      />
      <p className="mt-3 text-xs text-gray-500">
        Drag the grip, or focus it and use the arrow keys.
      </p>
    </div>
  );
}

const meta: Meta<typeof SortableList> = {
  title: "Components/SortableList",
  component: SortableList,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Ordered list with a drag handle. Same list the sales funnel form uses for assigned amenities. The row markup is up to the caller.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AssignedItems: Story = {
  render: () => <AssignedItemsList />,
};

export const Disabled: Story = {
  render: () => <AssignedItemsList disabled />,
  parameters: {
    docs: {
      description: {
        story: "Handle is not draggable and ignores the arrow keys.",
      },
    },
  },
};

export const PlainRows: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: "a", label: "Step 1: Location" },
      { id: "b", label: "Step 2: Amenities" },
      { id: "c", label: "Step 3: Review" },
    ]);

    return (
      <div className="w-72">
        <SortableList
          items={items}
          getId={(item) => item.id}
          onReorder={(next) => setItems(next)}
          className="flex flex-col gap-2"
          renderItem={(item, { isDragging, isDropTarget, dragHandleProps }) => (
            <div
              className={`flex items-center gap-2 rounded border bg-white px-3 py-2 text-sm ${
                isDragging
                  ? "border-blue-400 opacity-60"
                  : isDropTarget
                    ? "border-blue-500"
                    : "border-gray-200"
              }`}
              {...dragHandleProps}
            >
              <GripIcon />
              <span>{item.label}</span>
            </div>
          )}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "The whole row is the handle. Works for any item type.",
      },
    },
  },
};
