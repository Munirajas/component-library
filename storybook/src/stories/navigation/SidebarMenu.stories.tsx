/* ===================================
   SIDEBAR MENU STORYBOOK STORIES
   =================================== */

import type { Meta, StoryObj } from "@storybook/react";
import { SidebarMenu } from "../../components/navigation/SidebarMenu";
import { sampleSidebarMenuData } from "../../components/navigation/sidebarMenuData";

const meta: Meta<typeof SidebarMenu> = {
  title: "Layout/SidebarMenu",
  component: SidebarMenu,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A responsive admin sidebar menu with expand/collapse functionality, organized sections, and interactive menu items. Supports both light and dark themes.",
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
    isExpanded: {
      control: "boolean",
      description: "Initial expanded state of the sidebar",
    },
    onToggle: {
      action: "toggled",
      description: "Callback when sidebar is toggled",
    },
    onSignOut: {
      action: "signed-out",
      description: "Callback when sign out is clicked",
    },
    brandName: {
      control: "text",
      description: "Brand name displayed below logo",
    },
  },
  args: {
    sections: sampleSidebarMenuData,
    isExpanded: true,
    brandName: "Admin Panel",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic story
export const SidebarMenuDefault: Story = {
  args: {
    sections: sampleSidebarMenuData,
    isExpanded: true,
    brandName: "Event Management",
  },
};

// Collapsed state
export const Collapsed: Story = {
  args: {
    sections: sampleSidebarMenuData,
    isExpanded: false,
    brandName: "Event Management",
  },
};

// Custom brand name
export const CustomBrand: Story = {
  args: {
    sections: sampleSidebarMenuData,
    isExpanded: true,
    brandName: "My Company Admin",
  },
};

// With custom sections
export const CustomSections: Story = {
  args: {
    sections: [
      {
        id: "dashboard",
        title: "Dashboard",
        items: [
          {
            id: "overview",
            label: "overview",
            icon: "Home",
            isActive: true,
          },
          {
            id: "analytics",
            label: "analytics",
            icon: "Chart",
          },
        ],
      },
      {
        id: "management",
        title: "Management",
        items: [
          {
            id: "users",
            label: "users",
            icon: "users",
          },
          {
            id: "settings",
            label: "settings",
            icon: "Settings",
          },
        ],
      },
    ],
    isExpanded: true,
    brandName: "Custom Admin",
  },
};

// Interactive demo
export const SidebarMenuInteractive: Story = {
  args: {
    sections: sampleSidebarMenuData,
    isExpanded: true,
    brandName: "Interactive Demo",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive sidebar menu with all functionality enabled. Try clicking menu items and toggling the sidebar state.",
      },
    },
  },
};

// Dark mode showcase story
export const DarkModeShowcase: Story = {
  args: {
    sections: sampleSidebarMenuData,
    isExpanded: true,
    brandName: "Dark Mode Demo",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story showcases the sidebar menu in both light and dark themes. Use the theme toggle in the Storybook toolbar to switch between themes.",
      },
    },
  },
};
