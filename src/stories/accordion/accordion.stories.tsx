import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "@/components/accordion";
import { data, dataWithDisabled, dataWithOpen } from './data';

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Accordion component with different states and sizes.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionDefault: Story = {
  args: {
    data: data,
  },
};

export const AccordionFirstOpen: Story = {
  args: {
    data: dataWithOpen,
  },
};

export const AccordionWithDisabled: Story = {
  args: {
    data: dataWithDisabled,
  },
};

export const WithAccordionDefaultActive: Story = {
  args: {
    data: data,
    defaultActive: "2"
  },
};

export const AccordionSingleActive: Story = {
  args: {
    data: data,
    isSingleActive: true,
    defaultActive: "1",
  },
};


