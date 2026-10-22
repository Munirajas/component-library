/* ===================================
   TABS STORYBOOK STORIES
   =================================== */

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "../../components/navigation/Tabs";
import { StatusPill } from "../../components/ui/StatusPill";

const baseTabs = [
  {
    id: "tickets",
    label: "Tickets",
    description: "Configuración de tipos y disponibilidad",
    badge: <StatusPill label="5 activos" variant="success" size="sm" />,
    content: (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">Panel de tickets</h3>
        <p className="mt-2 text-sm text-slate-600">
          Gestiona precios, cuotas y estados de publicación. Utiliza la toolbar superior
          para filtrar segmentos específicos.
        </p>
      </div>
    ),
  },
  {
    id: "discounts",
    label: "Discounts",
    description: "Promociones y códigos",
    content: (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">Promociones activas</h3>
        <p className="mt-2 text-sm text-slate-600">
          Administra campañas, niveles de descuento y condiciones personalizadas.
        </p>
      </div>
    ),
  },
  {
    id: "events",
    label: "Events",
    description: "Calendario y horarios",
    content: (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">Listado de eventos</h3>
        <p className="mt-2 text-sm text-slate-600">
          Visualiza todos los eventos programados y gestiona la asignación de recursos.
        </p>
      </div>
    ),
  },
] as const;

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Sistema de tabs reutilizable con variantes visuales basadas en los paneles de dashboard y secciones guiadas del diseño.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["dashboard", "underline", "pill"],
    },
    fullWidth: {
      control: "boolean",
    },
    tabs: {
      control: false,
    },
    activeTabId: {
      control: "text",
    },
  },
  args: {
    tabs: [...baseTabs],
    variant: "dashboard",
    fullWidth: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const UnderlineVariant: Story = {
  args: {
    variant: "underline",
  },
};

export const PillVariantFullWidth: Story = {
  args: {
    variant: "pill",
    fullWidth: true,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [active, setActive] = React.useState(args.activeTabId ?? args.tabs[0]?.id);

    return (
      <div className="mx-auto max-w-5xl space-y-6 bg-slate-50 p-8">
        <Tabs
          {...args}
          activeTabId={active}
          onTabChange={(id) => setActive(id)}
        />
      </div>
    );
  },
};

