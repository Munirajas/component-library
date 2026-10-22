/* eslint-disable no-console */
// Since this file is a story can have some console
import type { Meta, StoryObj } from "@storybook/react";
import { TreeView } from "@/components/treeView";
import { mockData } from './data';

const meta: Meta<typeof TreeView> = {
  title: "Components/Tree View",
  component: TreeView,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "TreeView component with different states and sizes.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TreeViewDefault: Story = {
  args: {
    data: mockData,
    showActiveId: false
  },
};

export const TreeViewWithDefaultOpen: Story = {
  args: {
    data: mockData,
    showActiveId: false,
    defaultExpandedIds: ["Location-1", "Location-1-2", "Location-1-2-2"]
  },
};

export const TreeViewWithMoreActions: Story = {
  args: {
    data: mockData,
    showMoreButton: true,
    showActiveId: true,
    onEdit: (node) => {
      console.log("edit", node)
    },
    onDelete: (node) => {
      console.log("delete", node)
    },
    onMove: (node) => {
      console.log("Move", node)
    },
    onAdd: (node) => {
      console.log("onAdd", node)
    }
  },
};

export const TreeViewWithSearch: Story = {
  args: {
    data: mockData,
    showSearchbar: true,
    showMoreButton: true,
    showActiveId: true,
    onEdit: (node) => {
      console.log("edit", node)
    },
    onDelete: (node) => {
      console.log("delete", node)
    }
  },
};


