/* ===================================
   STEPPER STORYBOOK STORIES
   =================================== */

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "../../components/navigation/Stepper";

const stepsBase = [
  {
    id: "details",
    title: "Detalles del evento",
    description: "Nombre, categoría, fechas principales y visibilidad.",
  },
  {
    id: "pricing",
    title: "Precios y disponibilidad",
    description: "Define tiers, cantidades y ventanas de venta.",
  },
  {
    id: "addons",
    title: "Add-ons y complementos",
    description: "Productos adicionales para upselling.",
    optional: true,
  },
  {
    id: "review",
    title: "Revisión y publicación",
    description: "Confirma la configuración antes de publicar.",
  },
] as const;

const meta: Meta<typeof Stepper> = {
  title: "Navigation/Stepper",
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component:
          "Stepper multi-paso utilizado en los formularios de creación y edición (bundles, tickets, guided selling). Soporta orientación horizontal/vertical y pasos interactivos.",
      },
    },
  },
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
    currentIndex: {
      control: "number",
      min: 0,
      description: "Índice del paso actual (0-based).",
    },
    showStepNumbers: {
      control: "boolean",
    },
    interactive: {
      control: "boolean",
    },
    compact: {
      control: "boolean",
    },
    steps: {
      control: false,
    },
  },
  args: {
    orientation: "horizontal",
    currentIndex: 1,
    steps: [...stepsBase],
    showStepNumbers: true,
    interactive: true,
    compact: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const VerticalCompact: Story = {
  args: {
    orientation: "vertical",
    compact: true,
    currentIndex: 2,
  },
};

export const ManualStatuses: Story = {
  args: {
    steps: [
      { ...stepsBase[0], status: "completed" },
      { ...stepsBase[1], status: "completed" },
      { ...stepsBase[2], status: "current" },
      { ...stepsBase[3], status: "upcoming" },
    ],
    showStepNumbers: false,
    interactive: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Permite definir estados manualmente por paso, ideal para wizards no lineales o resúmenes de progreso.",
      },
    },
  },
};

export const WithCallback: Story = {
  render: (args) => {
    const [activeIndex, setActiveIndex] = React.useState(args.currentIndex ?? 0);

    return (
      <div className="space-y-6">
        <Stepper
          {...args}
          currentIndex={activeIndex}
          onStepClick={(_, index) => setActiveIndex(index)}
        />
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          Paso actual seleccionado:{" "}
          <span className="font-semibold text-slate-900">
            {stepsBase[activeIndex]?.title ?? "—"}
          </span>
        </div>
      </div>
    );
  },
  args: {
    interactive: true,
  },
};

