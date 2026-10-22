import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "@/components/feedback/Drawer";
import { CTA } from "@/components/actions/CTA";
import { Input } from "@/components/dataInput/Input";
import { useState } from "react";
import {
  CloseCircleIcon,
  PrintIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  CalendarIcon,
} from "@/icons/icons";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Drawer component that slides in from the side (left or right) to display content. Supports tabs, header actions, footer actions, and customizable width.",
      },
    },
  },
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
      description: "Controls if the drawer is visible",
    },
    title: {
      control: { type: "text" },
      description: "Drawer title",
    },
    position: {
      control: { type: "select" },
      options: ["left", "right"],
      description: "Position of the drawer (left or right)",
    },
    width: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl", "2xl", "full"],
      description: "Width of the drawer",
    },
    showCloseButton: {
      control: { type: "boolean" },
      description: "Show/hide the close button",
    },
    closeOnBackdropClick: {
      control: { type: "boolean" },
      description: "Allow closing drawer by clicking outside",
    },
    onClose: {
      action: "closed",
      description: "Function called when drawer is closed",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Drawer
export const DrawerDefault: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-8">
        <CTA onClick={() => setIsOpen(true)}>Abrir Drawer</CTA>
        <Drawer
          title="Drawer Title"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="space-y-4">
            <p className="text-text-primary">
              Este es un drawer básico con contenido simple.
            </p>
            <p className="text-text-secondary">
              Puedes agregar cualquier contenido aquí.
            </p>
          </div>
        </Drawer>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Drawer básico con título y contenido simple.",
      },
    },
  },
};

// Drawer with Tabs
export const DrawerWithTabs: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-8">
        <CTA onClick={() => setIsOpen(true)}>Abrir Drawer con Tabs</CTA>
        <Drawer
          title="Tour Details"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          tabs={[
            {
              id: "tour-details",
              label: "tour details",
              content: (
                <div className="space-y-4">
                  <p className="text-text-primary font-semibold">
                    Información del Tour
                  </p>
                  <p className="text-text-secondary">
                    Contenido de los detalles del tour.
                  </p>
                </div>
              ),
            },
            {
              id: "invoices-payments",
              label: "invoices and payments",
              content: (
                <div className="space-y-4">
                  <p className="text-text-primary font-semibold">
                    Facturas y Pagos
                  </p>
                  <p className="text-text-secondary">
                    Contenido de facturas y pagos.
                  </p>
                </div>
              ),
            },
          ]}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Drawer con sistema de tabs para navegar entre diferentes secciones.",
      },
    },
  },
};

// Drawer with Header Actions
export const DrawerWithHeaderActions: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-8">
        <CTA onClick={() => setIsOpen(true)}>
          Abrir Drawer con Header Actions
        </CTA>
        <Drawer
          title="Church Mae (012024)"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          headerActions={[
            {
              label: "Cancel Tour",
              onClick: () => {
                alert("Cancel Tour clicked");
              },
              icon: <CloseCircleIcon className="w-6 h-6" />,
            },
            {
              label: "Print Tickets",
              onClick: () => {
                alert("Print Tickets clicked");
              },
              icon: <PrintIcon className="w-6 h-6" />,
            },
          ]}
        >
          <div className="space-y-4">
            <p className="text-text-primary">
              Este drawer tiene acciones en el header.
            </p>
          </div>
        </Drawer>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Drawer con botones de acción en el header.",
      },
    },
  },
};

// Drawer with Footer Actions
export const DrawerWithFooterActions: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-8">
        <CTA onClick={() => setIsOpen(true)}>
          Abrir Drawer con Footer Actions
        </CTA>
        <Drawer
          title="Edit Tour"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          footerActions={{
            secondary: {
              label: "cancel",
              onClick: () => setIsOpen(false),
            },
            primary: {
              label: "SAVE",
              onClick: () => {
                alert("Save clicked");
                setIsOpen(false);
              },
              icon: <ChevronRightIcon className="w-6 h-6" />,
            },
          }}
        >
          <div className="space-y-4">
            <p className="text-text-primary">
              Este drawer tiene acciones en el footer.
            </p>
          </div>
        </Drawer>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Drawer con botones de acción en el footer (Cancel y Save).",
      },
    },
  },
};

// Drawer Complete Example (Tour Details)
export const DrawerCompleteExample: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-8">
        <CTA onClick={() => setIsOpen(true)}>
          Abrir Drawer Completo (Tour Details)
        </CTA>
        <Drawer
          title="Church Mae (012024)"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          width="lg"
          headerActions={[
            {
              label: "Cancel Tour",
              onClick: () => {
                alert("Cancel Tour clicked");
              },
              icon: <CloseCircleIcon className="w-6 h-6" />,
            },
            {
              label: "Print Tickets",
              onClick: () => {
                alert("Print Tickets clicked");
              },
              icon: <PrintIcon className="w-6 h-6" />,
            },
          ]}
          tabs={[
            {
              id: "tour-details",
              label: "tour details",
              content: (
                <div className="space-y-6">
                  <div className="p-8 bg-surface-primary rounded-2xl space-y-6">
                    {/* Tour Operator Section */}
                    <div className="space-y-4">
                      <div className="p-2 border-b border-stroke-grey-01">
                        <h3 className="text-text-primary text-base font-semibold font-['Muli']">
                          Tour Operator
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <Input label="ID" defaultValue="392183019831" />
                        <Input label="Group Name" defaultValue="John's Tours" />
                        <Input
                          label="Operator name"
                          defaultValue="John Doe"
                        />
                        <Input
                          label="Email"
                          defaultValue="John.doe@email.com"
                        />
                        <Input
                          label="Phone number"
                          defaultValue="+5548999678990"
                        />
                        <Input
                          label="Language"
                          defaultValue="English"
                          rightIcon={<ChevronDownIcon className="w-6 h-6" />}
                        />
                      </div>
                    </div>

                    {/* Tour Details Section */}
                    <div className="space-y-4">
                      <div className="p-2 border-b border-stroke-grey-01">
                        <h3 className="text-text-primary text-base font-semibold font-['Muli']">
                          Tour Details
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <Input
                          label="Date"
                          defaultValue="02/12/24"
                          rightIcon={<CalendarIcon className="w-6 h-6" />}
                        />
                        <Input label="Arrival time" defaultValue="1 PM" />
                        <Input label="Type" defaultValue="Church" />
                        <Input label="Age range" defaultValue="Adult" />
                        <Input
                          label="Expected Attendees"
                          defaultValue="25"
                        />
                        <Input
                          label="Duration"
                          defaultValue="2h"
                          rightIcon={<ChevronDownIcon className="w-6 h-6" />}
                        />
                        <Input
                          label="Package"
                          defaultValue="General Admission + 1 tour or add-on"
                          rightIcon={<ChevronDownIcon className="w-6 h-6" />}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              id: "invoices-payments",
              label: "invoices and payments",
              content: (
                <div className="space-y-4">
                  <p className="text-text-primary font-semibold">
                    Facturas y Pagos
                  </p>
                  <p className="text-text-secondary">
                    Contenido de facturas y pagos aquí.
                  </p>
                </div>
              ),
            },
          ]}
          footerActions={{
            secondary: {
              label: "cancel",
              onClick: () => setIsOpen(false),
            },
            primary: {
              label: "SAVE",
              onClick: () => {
                alert("Save clicked");
                setIsOpen(false);
              },
              icon: <ChevronRightIcon className="w-6 h-6" />,
            },
          }}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Ejemplo completo de drawer con tabs, header actions, footer actions y formularios, similar al diseño proporcionado.",
      },
    },
  },
};

// Drawer Different Sizes
export const DrawerSizes: Story = {
  render: () => {
    const [openSize, setOpenSize] = useState<
      "sm" | "md" | "lg" | "xl" | "2xl" | null
    >(null);

    return (
      <div className="p-8 space-y-4">
        <div className="flex flex-wrap gap-4">
          <CTA onClick={() => setOpenSize("sm")}>Small Drawer (SM)</CTA>
          <CTA onClick={() => setOpenSize("md")}>Medium Drawer (MD)</CTA>
          <CTA onClick={() => setOpenSize("lg")}>Large Drawer (LG)</CTA>
          <CTA onClick={() => setOpenSize("xl")}>Extra Large Drawer (XL)</CTA>
          <CTA onClick={() => setOpenSize("2xl")}>
            Extra Extra Large Drawer (2XL)
          </CTA>
        </div>

        {(["sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
          <Drawer
            key={size}
            title={`Drawer ${size.toUpperCase()}`}
            isOpen={openSize === size}
            onClose={() => setOpenSize(null)}
            width={size}
          >
            <div className="text-text-primary">
              <p>Contenido del drawer {size}</p>
            </div>
          </Drawer>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Muestra los diferentes tamaños disponibles para el drawer.",
      },
    },
  },
};

// Drawer from Left
export const DrawerFromLeft: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-8">
        <CTA onClick={() => setIsOpen(true)}>Abrir Drawer desde la Izquierda</CTA>
        <Drawer
          title="Drawer desde la Izquierda"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          position="left"
          width="md"
        >
          <div className="space-y-4">
            <p className="text-text-primary">
              Este drawer se abre desde la izquierda.
            </p>
          </div>
        </Drawer>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Drawer que se desliza desde la izquierda en lugar de la derecha.",
      },
    },
  },
};

// Drawer with Long Content
export const DrawerWithLongContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-8">
        <CTA onClick={() => setIsOpen(true)}>
          Abrir Drawer con Contenido Largo
        </CTA>
        <Drawer
          title="Contenido Largo"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          footerActions={{
            secondary: {
              label: "Cancel",
              onClick: () => setIsOpen(false),
            },
            primary: {
              label: "Save",
              onClick: () => setIsOpen(false),
            },
          }}
        >
          <div className="space-y-4 text-text-primary">
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i}>
                Párrafo {i + 1}: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            ))}
          </div>
        </Drawer>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Drawer con contenido largo que demuestra el scroll interno del contenido.",
      },
    },
  },
};

// Drawer Controlled
export const DrawerControlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-8 space-y-4">
        <div className="space-y-2">
          <p className="text-text-primary">
            Estado del drawer: {isOpen ? "Abierto" : "Cerrado"}
          </p>
          <div className="flex gap-4">
            <CTA onClick={() => setIsOpen(true)}>Abrir Drawer</CTA>
            <CTA variant="secondary" onClick={() => setIsOpen(false)}>
              Cerrar Drawer
            </CTA>
            <CTA variant="tertiary" onClick={() => setIsOpen(!isOpen)}>
              Cambiar Estado
            </CTA>
          </div>
        </div>

        <Drawer
          title="Drawer Controlado"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          footerActions={{
            primary: {
              label: "Cerrar",
              onClick: () => setIsOpen(false),
            },
          }}
        >
          <p className="text-text-primary">
            Este drawer puede ser abierto y cerrado desde botones externos.
          </p>
        </Drawer>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Ejemplo de drawer con estado controlado externamente desde múltiples botones.",
      },
    },
  },
};

