import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  GroupedSelect,
  type GroupedSelectGroup,
} from "../../components/dataInput/GroupedSelect";

// Same shape as the funnel "Includes" picker: amenities grouped by location.
const amenityGroups: GroupedSelectGroup<number>[] = [
  {
    id: "okc",
    label: "Oklahoma City",
    options: [
      { value: 101, label: "Custom Framing" },
      { value: 102, label: "Art Classes" },
      { value: 103, label: "Birthday Party" },
    ],
  },
  {
    id: "tulsa",
    label: "Tulsa",
    options: [
      { value: 201, label: "Candle Making" },
      { value: 202, label: "Kids Camp" },
      { value: 203, label: "Private Event", disabled: true },
    ],
  },
  {
    id: "norman",
    label: "Norman",
    options: [
      { value: 301, label: "Floral Workshop" },
      { value: 302, label: "Pottery" },
    ],
  },
];

const meta: Meta<typeof GroupedSelect> = {
  title: "Components/GroupedSelect",
  component: GroupedSelect,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Dropdown with grouped options. Search filters option labels inside each group. Used on the sales funnel form to pick amenities by location.",
      },
    },
  },
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "Shown when nothing is selected.",
    },
    searchPlaceholder: {
      control: { type: "text" },
      description: "Placeholder on the search box.",
    },
    emptyMessage: {
      control: { type: "text" },
      description: "Shown when a group has no options left, or search matches nothing.",
    },
    searchable: {
      control: { type: "boolean" },
      description: "Show the search box.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable the trigger.",
    },
    onChange: {
      action: "changed",
      description: "Fires with the selected option value.",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    groups: amenityGroups,
    placeholder: "Select item",
    onChange: () => undefined,
  },
};

// Funnel field turns search on.
export const Searchable: Story = {
  args: {
    groups: amenityGroups,
    placeholder: "Select item",
    searchable: true,
    searchPlaceholder: "Search by item name",
    onChange: () => undefined,
  },
  parameters: {
    docs: {
      description: {
        story: "Type to filter. Groups with no matches drop out of the list.",
      },
    },
  },
};

export const WithValue: Story = {
  args: {
    groups: amenityGroups,
    value: 201,
    placeholder: "Select item",
    searchable: true,
    searchPlaceholder: "Search by item name",
    onChange: () => undefined,
  },
};

export const Disabled: Story = {
  args: {
    groups: amenityGroups,
    value: 102,
    disabled: true,
    placeholder: "Select item",
    onChange: () => undefined,
  },
};

// Trigger stays disabled and shows the empty copy. Happens once every amenity is already assigned.
export const Empty: Story = {
  args: {
    groups: [
      { id: "okc", label: "Oklahoma City", options: [] },
      { id: "tulsa", label: "Tulsa", options: [] },
    ],
    placeholder: "Select item",
    emptyMessage: "All amenities assigned",
    searchable: true,
    onChange: () => undefined,
  },
};

export const DisabledOption: Story = {
  args: {
    groups: amenityGroups,
    placeholder: "Select item",
    searchable: true,
    searchPlaceholder: "Search by item name",
    onChange: () => undefined,
  },
  parameters: {
    docs: {
      description: {
        story: "Private Event is disabled and can't be picked.",
      },
    },
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(null);
    const selected = amenityGroups
      .flatMap((group) => group.options)
      .find((option) => option.value === value);

    return (
      <div className="flex w-80 flex-col gap-3">
        <GroupedSelect
          groups={amenityGroups}
          value={value}
          placeholder="Select item"
          searchable
          searchPlaceholder="Search by item name"
          onChange={(next) => setValue(next)}
        />
        <p className="text-sm text-gray-600">
          Selected: {selected ? selected.label : "none"}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Picking an option closes the menu and clears the search.",
      },
    },
  },
};
