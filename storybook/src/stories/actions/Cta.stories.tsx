import type { Meta, StoryObj } from "@storybook/react";
import { CTA } from "@/components/actions/CTA";

const meta: Meta<typeof CTA> = {
  title: "Components/CTA",
  component: CTA,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Call to action variables.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
      description: "Visual variables",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "wide"],
      description: "CTA Size",
    },
    loading: {
      control: { type: "boolean" },
      description: "Loadingn state",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable the CTA.",
    },
    children: {
      control: { type: "text" },
      description: "CTA content",
    },
    onClick: {
      action: "clicked",
      description: "Function to execute on doing click",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Historia básica
export const CtaDefault: Story = {
  args: {
    children: "Cta",
    variant: "primary",
    size: "md",
  },
};

// Todas las variantes
export const CtaVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <CTA variant="primary">Primary</CTA>
      <CTA variant="secondary">Secondary</CTA>
      <CTA variant="tertiary">Tertiary</CTA>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Show all the available color options.",
      },
    },
  },
};

// Todos los tamaños
export const CtaSizes: Story = {
  args: {
    loading: true,
  },

  render: (args: { loading?: boolean }) => (
    <div className="flex items-center gap-4">
      <CTA size="xs" loading={args.loading}>
        XS
      </CTA>
      <CTA size="sm" loading={args.loading}>
        SM
      </CTA>
      <CTA size="md" loading={args.loading}>
        MD
      </CTA>
      <CTA size="lg" loading={args.loading}>
        LG
      </CTA>
      <CTA size="wide" loading={args.loading}>
        Wide
      </CTA>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Show all the CTA sizes.",
      },
    },
  },
};

// Estados especiales
export const CtaStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <CTA loading>Loading</CTA>
      <CTA disabled>Disabled</CTA>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Special CTA states : loading,disabled, rounded and full width.",
      },
    },
  },
};

// Change this to allow the user embed an icon on both sides.
export const CtaWithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <CTA>Add</CTA>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "CTA icon examples.",
      },
    },
  },
};

// Interactivo
export const CtaInteractive: Story = {
  args: {
    children: "Click here",
    variant: "primary",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive.",
      },
    },
  },
};
