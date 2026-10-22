import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "@/components/feedback/Modal";
import { CTA } from "@/components/actions/CTA";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Modal component for displaying content in an overlay dialog. Supports custom actions, sizes, and accessibility features.",
      },
    },
  },
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
      description: "Controls if the modal is visible",
    },
    title: {
      control: { type: "text" },
      description: "Modal title",
    },
    description: {
      control: { type: "text" },
      description: "Optional modal description",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Modal size",
    },
    showCloseButton: {
      control: { type: "boolean" },
      description: "Show/hide the close button",
    },
    closeOnBackdropClick: {
      control: { type: "boolean" },
      description: "Allow closing modal by clicking outside",
    },
    onClose: {
      action: "closed",
      description: "Function called when modal is closed",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalDefault: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-8">
        <CTA onClick={() => setIsOpen(true)}>Abrir Modal</CTA>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Modal Title"
          description="Basic Modal -  description"
        >
          <p className="text-gray-700">
            Here the needed content
          </p>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Basic modal information.",
      },
    },
  },
};

// Modal with actions
export const ModalWithActions: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-8">
        <CTA onClick={() => setIsOpen(true)}>Open modal with actions</CTA>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Confirm action"
          description="Continue?"
          primaryAction={{
            label: "Confirm",
            onClick: () => {
              alert("OK");
              setIsOpen(false);
            },
            variant: "primary",
          }}
          secondaryAction={{
            label: "Cancel",
            onClick: () => setIsOpen(false),
            variant: "secondary",
          }}
        >
          <div className="text-center text-gray-700">
            <p>Cancel action.</p>
          </div>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Modal with primary and secondary actions in the footer.",
      },
    },
  },
};

// Modal without close button
export const ModalWithoutCloseButton: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-8">
        <CTA onClick={() => setIsOpen(true)}>
          Open modal without close button
        </CTA>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Modal Required"
          description="This modal can only be closed with the actions"
          showCloseButton={false}
          closeOnBackdropClick={false}
          primaryAction={{
            label: "Accept",
            onClick: () => setIsOpen(false),
            variant: "primary",
          }}
          secondaryAction={{
            label: "Reject",
            onClick: () => setIsOpen(false),
            variant: "secondary",
          }}
        >
          <p className="text-gray-700">
            This modal requires an action to close.
          </p>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Modal without close button and without possibility of closing by clicking outside.",
      },
    },
  },
};

// Different sizes
export const ModalSizes: Story = {
  render: () => {
    const [openSize, setOpenSize] = useState<"sm" | "md" | "lg" | "xl" | null>(
      null
    );

    return (
      <div className="p-8 space-y-4">
        <div className="flex flex-wrap gap-4">
          <CTA onClick={() => setOpenSize("sm")}>Small Modal (SM)</CTA>
          <CTA onClick={() => setOpenSize("md")}>Medium Modal (MD)</CTA>
          <CTA onClick={() => setOpenSize("lg")}>Large Modal (LG)</CTA>
          <CTA onClick={() => setOpenSize("xl")}>Extra Large Modal (XL)</CTA>
        </div>

        {(["sm", "md", "lg", "xl"] as const).map((size) => (
          <Modal
            key={size}
            isOpen={openSize === size}
            onClose={() => setOpenSize(null)}
            title={`Modal ${size.toUpperCase()}`}
            description={`This is a ${size} modal`}
            size={size}
            primaryAction={{
              label: "Accept",
              onClick: () => setOpenSize(null),
            }}
          >
            <div className="text-gray-700">
              <p>Content of the {size} modal</p>
            </div>
          </Modal>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the different sizes available for the modal.",
      },
    },
  },
};

// Modal with long content
export const ModalWithLongContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-8">
        <CTA onClick={() => setIsOpen(true)}>Open modal with long content</CTA>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Terms and Conditions"
          size="lg"
          primaryAction={{
            label: "Accept",
            onClick: () => setIsOpen(false),
          }}
          secondaryAction={{
            label: "Reject",
            onClick: () => setIsOpen(false),
          }}
        >
          <div className="text-gray-700 space-y-4 max-h-96 overflow-y-auto pr-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?
            </p>
          </div>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Modal with long content that demonstrates the internal scroll of the content.",
      },
    },
  },
};

// Modal with only title
export const ModalTitleOnly: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-8">
        <CTA onClick={() => setIsOpen(true)}>Open modal with only title</CTA>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Simple Modal"
        >
          <p className="text-gray-700">
            This modal only has a title, without description.
          </p>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Modal with only title, without description or actions.",
      },
    },
  },
};

// Modal with disabled actions
export const ModalWithDisabledActions: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
      setIsLoading(true);
      // Simulate an asynchronous operation
      setTimeout(() => {
        setIsLoading(false);
        alert("Operation completed!");
        setIsOpen(false);
      }, 2000);
    };

    return (
      <div className="p-8">
        <CTA onClick={() => setIsOpen(true)}>
          Open modal with disabled actions
        </CTA>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Process Information"
          description="This action may take a few seconds"
          primaryAction={{
            label: isLoading ? "Processing..." : "Process",
            onClick: handleSubmit,
            variant: "primary",
            disabled: isLoading,
          }}
          secondaryAction={{
            label: "Cancel",
            onClick: () => setIsOpen(false),
            variant: "secondary",
            disabled: isLoading,
          }}
        >
          <div className="text-gray-700">
            <p>
              During the processing, the buttons will be disabled.
            </p>
          </div>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example of modal with actions that can be disabled according to the state.",
      },
    },
  },
};

// Modal controlled externally
export const ModalControlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-8 space-y-4">
        <div className="space-y-2">
          <p className="text-gray-700">
            Modal state: {isOpen ? "Open" : "Closed"}
          </p>
          <div className="flex gap-4">
            <CTA onClick={() => setIsOpen(true)}>Open Modal</CTA>
            <CTA variant="secondary" onClick={() => setIsOpen(false)}>
              Close Modal
            </CTA>
            <CTA variant="tertiary" onClick={() => setIsOpen(!isOpen)}>
              Toggle state
            </CTA>
          </div>
        </div>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Controlled Modal"
          description="The state of this modal is controlled externally"
          primaryAction={{
            label: "Close",
            onClick: () => setIsOpen(false),
          }}
        >
          <p className="text-gray-700">
            This modal can be opened and closed from external buttons.
          </p>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example of modal with state controlled externally from multiple buttons.",
      },
    },
  },
};
