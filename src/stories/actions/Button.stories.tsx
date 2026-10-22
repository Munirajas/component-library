import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/actions/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Button component with different states and sizes.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "accent",
        "outline",
        "ghost",
        "link",
        "info",
        "success",
        "warning",
        "error",
      ],
      description: "Variante visual del botón",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "wide"],
      description: "Tamaño del botón",
    },
    loading: {
      control: { type: "boolean" },
      description: "Muestra un spinner de carga",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Deshabilita el botón",
    },
    rounded: {
      control: { type: "boolean" },
      description: "Hace el botón circular",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Hace el botón ocupar todo el ancho disponible",
    },
    children: {
      control: { type: "text" },
      description: "Contenido del botón",
    },
    onClick: {
      action: "clicked",
      description: "Función que se ejecuta al hacer clic",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Historia básica
export const ButtonDefault: Story = {
  args: {
    children: "Botón",
    variant: "primary",
    size: "md",
  },
};

// Todas las variantes
export const ButtonVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="info">Info</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
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

// Todos los tamaños
export const ButtonSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="xs">XS</Button>
      <Button size="sm">SM</Button>
      <Button size="md">MD</Button>
      <Button size="lg">LG</Button>
      <Button size="wide">Wide</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Muestra todos los tamaños disponibles para el botón.",
      },
    },
  },
};

// Estados especiales
export const ButtonStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
      <Button rounded>R</Button>
      <Button fullWidth>Full Width</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Muestra diferentes estados del botón: cargando, deshabilitado, redondeado y ancho completo.",
      },
    },
  },
};

// Con iconos
export const ButtonWithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Agregar
      </Button>
      <Button variant="outline">
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
        Editar
      </Button>
      <Button variant="error">
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        Eliminar
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Ejemplos de botones con iconos para diferentes acciones.",
      },
    },
  },
};

// Interactivo
export const ButtonInteractive: Story = {
  args: {
    children: "Haz clic en mí",
    variant: "primary",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "Botón interactivo que puedes personalizar con los controles.",
      },
    },
  },
};
