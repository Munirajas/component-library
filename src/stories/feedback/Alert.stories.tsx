import type { Meta, StoryObj } from "@storybook/react";
import Alert from "@/components/feedback/Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Alert component general documentation. Contains all the options available.",
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["info", "success", "warning", "error"],
      description: "Alert visual variants",
    },
    children: {
      control: { type: "text" },
      description: "Alert content",
    },
    onDismiss: {
      action: "clicked",
      description: "Function to dismiss the alert.",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic story
export const AlertDefault: Story = {
  args: {
    children: "Alert",
    type: "info",
    onDismiss: () => {
      alert("Dissmissed");
    },
  },
};

// Variants
export const AlertVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Alert type="info" title="Some information">
        Info
      </Alert>
      <Alert type="success" title="Yeah!">
        Success
      </Alert>
      <Alert type="warning" title="Heads up!">
        Warning
      </Alert>
      <Alert type="error" title="Alert">
        Error
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Muestra todas las variantes de color disponibles para el botón.",
      },
    },
  },
};
