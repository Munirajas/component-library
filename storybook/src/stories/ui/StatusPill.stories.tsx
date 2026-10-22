/* ===================================
   STATUS PILL STORYBOOK STORIES
   =================================== */

import type { Meta, StoryObj } from "@storybook/react";
import { StatusPill, StatusPillVariant } from "../../components/ui/StatusPill";

const meta: Meta<typeof StatusPill> = {
  title: "UI/StatusPill",
  component: StatusPill,
  parameters: {
    docs: {
      description: {
        component:
          "Componente de etiqueta de estado para mostrar el estado contextual de entidades (p. ej. Published, Draft, Pending).",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Texto que se muestra dentro de la pill.",
    },
    variant: {
      control: "select",
      options: ["success", "warning", "danger", "info", "neutral", "accent"],
      description: "Define el color semántico de la pill.",
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md"],
      description: "Controla el padding y tipografía.",
    },
    uppercase: {
      control: "boolean",
      description: "Forza el texto a MAYÚSCULAS con tracking amplio.",
    },
    soft: {
      control: "boolean",
      description: "Activa el estilo soft (fondo claro) o sólido.",
    },
    icon: {
      control: false,
      description: "ReactNode opcional para incluir íconos.",
    },
    className: {
      control: "text",
      description: "Clases tailwind adicionales.",
    },
  },
  args: {
    label: "Published",
    variant: "success",
    size: "sm",
    uppercase: true,
    soft: true,
    className: "",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SolidAccent: Story = {
  args: {
    label: "Pending approval",
    variant: "accent",
    soft: false,
  },
};

export const WarningLarge: Story = {
  args: {
    label: "Draft",
    variant: "warning",
    size: "md",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Synced",
    variant: "info",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Ejemplo de uso con un ícono inline para reforzar el estado.",
      },
    },
  },
};

export const Showcase: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      {["success", "info", "accent", "warning", "danger", "neutral"].map(
        (variant) => (
          <StatusPill key={variant} {...args} variant={variant as StatusPillVariant} label={variant} />
        )
      )}
    </div>
  ),
  args: {
    uppercase: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Visualiza rápidamente todas las variantes disponibles.",
      },
    },
  },
};


