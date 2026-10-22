/* ===================================
   DARK MODE TOGGLE STORYBOOK STORIES
   =================================== */

import type { Meta, StoryObj } from "@storybook/react";
import { DarkModeToggle } from "../../components/ui/DarkModeToggle";

const meta: Meta<typeof DarkModeToggle> = {
  title: "UI/DarkModeToggle",
  component: DarkModeToggle,
  parameters: {
    docs: {
      description: {
        component:
          "A toggle button component for switching between light and dark themes. Integrates with Tailwind CSS dark mode classes.",
      },
    },
    // Dark mode support
    darkMode: {
      current: "light",
      darkClass: "dark",
      lightClass: "light",
      stylePreview: true,
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    showLabel: {
      control: "boolean",
      description: "Whether to show the theme label",
    },
  },
  args: {
    showLabel: true,
    className: "",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    showLabel: true,
  },
};

// Without label
export const WithoutLabel: Story = {
  args: {
    showLabel: false,
  },
};

// With custom styling
export const CustomStyling: Story = {
  args: {
    showLabel: false,
    className: "bg-blue-500 hover:bg-blue-600 text-white",
  },
};

// Dark mode showcase
export const DarkModeShowcase: Story = {
  args: {
    showLabel: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the DarkModeToggle component. Use the theme toggle in the Storybook toolbar to see how the component adapts to different themes.",
      },
    },
  },
};
