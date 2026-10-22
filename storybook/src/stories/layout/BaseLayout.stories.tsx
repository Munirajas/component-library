import type { Meta, StoryObj } from "@storybook/react";
import { BaseLayout } from "@/components/layout/BaseLayout";
import Container from "@/components/layout/Container";

const meta: Meta<typeof BaseLayout> = {
  title: "Layout/BaseLayout",
  component: BaseLayout,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Base Layout component.",
      },
    },
  },
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Any data as children",
    },
    leftCol:{
      component:<Container >Data</Container>,
      description:"Left column content"
      
    },
    rightCol:{
      control:false,
      description:"Right Colum content"
    }
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic story
export const BaseLayoutDefault: Story = {
  args: {
    children: "BaseLayout",
  },
};



