import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Select,
  type SelectOption,
} from "../../components/dataInput/Select";

const priceTypes: SelectOption[] = [
  { value: "adult", label: "Adult" },
  { value: "child", label: "Child" },
  { value: "senior", label: "Senior" },
  { value: "military", label: "Military" },
  { value: "group", label: "Group", isDisabled: true },
];

const locations = [
  {
    label: "Oklahoma",
    options: [
      { value: "okc", label: "Oklahoma City" },
      { value: "tulsa", label: "Tulsa" },
    ],
  },
  {
    label: "Texas",
    options: [
      { value: "dallas", label: "Dallas" },
      { value: "austin", label: "Austin" },
    ],
  },
];

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "react-select wrapper. Search is on by default. Turn on isMulti, isClearable, or creatable for tags, a clear button, and new options.",
      },
    },
  },
  argTypes: {
    isMulti: { control: "boolean", description: "Allow more than one value." },
    isSearchable: { control: "boolean", description: "Filter options by typing." },
    isClearable: { control: "boolean", description: "Show the clear button." },
    isDisabled: { control: "boolean", description: "Disable the control." },
    creatable: {
      control: "boolean",
      description: "Let the user add a value that is not in the list.",
    },
    placeholder: { control: "text" },
    label: { control: "text" },
    error: { control: "text" },
    onChange: { action: "changed" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    label: "Price type",
    options: priceTypes,
    placeholder: "Select a price type",
    isSearchable: true,
    isClearable: true,
    onChange: () => undefined,
  },
};

export const Multiple: Story = {
  render: () => {
    const [value, setValue] = useState<readonly SelectOption[]>([
      priceTypes[0],
      priceTypes[1],
    ]);

    return (
      <div className="w-80">
        <Select
          label="Price types"
          options={priceTypes}
          isMulti
          isClearable
          isSearchable
          placeholder="Select price types"
          value={value}
          onChange={(next) => setValue((next as readonly SelectOption[]) ?? [])}
          helpText="Click the x on a tag, or Backspace, to remove one. Clear removes all."
        />
      </div>
    );
  },
};

// Same case as the amenity pricing tab: pick a default type or type a new name.
export const CreateNew: Story = {
  render: () => {
    const [value, setValue] = useState<SelectOption | null>(null);

    return (
      <div className="w-80">
        <Select
          label="Price type"
          options={priceTypes}
          creatable
          isClearable
          isSearchable
          placeholder="Select or create a price type"
          formatCreateLabel={(input) => `Create "${input}"`}
          value={value}
          onChange={(next) => setValue(next as SelectOption | null)}
          helpText="Group is disabled. A name that is not in the list can be created."
        />
      </div>
    );
  },
};

export const CreateMultiple: Story = {
  render: () => {
    const [value, setValue] = useState<readonly SelectOption[]>([]);

    return (
      <div className="w-96">
        <Select
          label="Tags"
          options={priceTypes}
          creatable
          isMulti
          isClearable
          placeholder="Add tags"
          value={value}
          onChange={(next) => setValue((next as readonly SelectOption[]) ?? [])}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    label: "Price type",
    options: priceTypes,
    defaultValue: priceTypes[0],
    isDisabled: true,
    isClearable: true,
    onChange: () => undefined,
  },
};

export const WithError: Story = {
  args: {
    label: "Price type",
    options: priceTypes,
    placeholder: "Select a price type",
    required: true,
    error: "Price type is required",
    onChange: () => undefined,
  },
};

export const Grouped: Story = {
  args: {
    label: "Location",
    options: locations,
    isSearchable: true,
    isClearable: true,
    placeholder: "Search locations",
    onChange: () => undefined,
  },
};

export const Loading: Story = {
  args: {
    label: "Price type",
    options: [],
    isLoading: true,
    placeholder: "Loading price types",
    onChange: () => undefined,
  },
};
