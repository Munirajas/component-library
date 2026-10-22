/* ===================================
   ICON STORIES
   =================================== */

import Icon from "@/icons";
import { iconMap } from "@/icons/icons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  title: "UI/Icon",
  component: Icon,
  parameters: {
    docs: {
      description: {
        component:
          "A component to show icons. Integrates with Tailwind CSS dark mode classes.",
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
    name: {
      control: "text",
      description: "Defines the Icon name",
    },
  },
  args: {
    name: "",
    className: "",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    name: "Home",
    className: "text-text-secondary"
  },
};

// With custom styling
export const CustomStyling: Story = {
  args: {
    name: "Home",
    className: "hover:text-blue-600",
  },
};

// Icon showcase
export const IconShowcase: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      {Object.keys(iconMap).map(
        (variant) => (
          <div className="border border-gray-400 p-2 rounded-sm">
            <Icon key={variant} {...args} name={variant} />
          </div>
        )
      )
      }
    </div>
  ),
  args: {
    name: "Home",
    className: "text-text-secondary"
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
