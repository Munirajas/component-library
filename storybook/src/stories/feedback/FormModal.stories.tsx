/* ===================================
   FORM MODAL STORYBOOK STORIES
   =================================== */

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FormModal } from "../../components/feedback/FormModal";
import { Input } from "../../components/dataInput/Input";
import { Button } from "../../components/ui/Button";

const meta: Meta<typeof FormModal> = {
  title: "Feedback/FormModal",
  component: FormModal,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Modal especializado para formularios con layout configurable (una o dos columnas), integración con CTA y contenido extra en el footer.",
      },
    },
  },
  argTypes: {
    layout: {
      control: "inline-radio",
      options: ["vertical", "two-columns"],
    },
    columns: {
      control: "inline-radio",
      options: [1, 2],
    },
    submitLabel: {
      control: "text",
    },
    cancelLabel: {
      control: "text",
    },
    submitDisabled: {
      control: "boolean",
    },
    isSubmitting: {
      control: "boolean",
    },
    footerContent: {
      control: false,
    },
    description: {
      control: "text",
    },
  },
  args: {
    title: "Create Department",
    description: "Configura los datos principales antes de activar el departamento para los operadores.",
    layout: "two-columns",
    columns: 2,
    isOpen: true,
    submitLabel: "Create",
    cancelLabel: "Cancel",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(args.isOpen ?? true);

    return (
      <div className="flex min-h-[600px] items-center justify-center bg-slate-100 p-10">
        <Button variant="ctaAccent" onClick={() => setOpen(true)}>
          Abrir modal
        </Button>

        <FormModal
          {...args}
          isOpen={open}
          onClose={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onSubmit={(event) => {
            event.preventDefault();
            setTimeout(() => setOpen(false), 800);
          }}
          footerContent={
            <p>
              Los cambios se reflejarán inmediatamente para todo el personal con acceso al módulo.
            </p>
          }
        >
          <Input label="Department name" placeholder="Operations" required />
          <Input label="Point of contact" placeholder="Search person…" />
          <Input label="Email" type="email" placeholder="operations@company.com" />
          <Input label="Phone" type="tel" placeholder="+1 555 123 4567" />
        </FormModal>
      </div>
    );
  },
};

export const VerticalLayout: Story = {
  args: {
    layout: "vertical",
    columns: 1,
    submitLabel: "Guardar",
    cancelLabel: "Cancelar",
  },
  render: (args) => (
    <div className="flex min-h-[600px] items-center justify-center bg-slate-100 p-10">
      <FormModal
        {...args}
        isOpen
        onSubmit={(event) => event.preventDefault()}
        onClose={() => undefined}
        footerContent={
          <div className="text-left">
            <p className="font-semibold text-slate-700">Nota:</p>
            <p>
              Puedes actualizar estos valores más adelante desde la sección de administración.
            </p>
          </div>
        }
      >
        <Input label="Título" placeholder="Nuevo producto" required />
        <Input label="Categoría" placeholder="Selecciona una categoría" />
        <Input label="Descripción" placeholder="Describe brevemente el producto" />
      </FormModal>
    </div>
  ),
};

