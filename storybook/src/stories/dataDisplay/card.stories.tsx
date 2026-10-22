import type { Meta, StoryObj } from "@storybook/react";
import Card from "@/components/dataDisplay/Card";
import { GiftCertificateCard } from "@/components/dataDisplay/GiftCertificateCard";
import { SchoolChurchCard } from "@/components/dataDisplay/SchoolChurchCard";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Card component for displaying content in a contained, elevated container. Supports multiple variants, padding options, shadows, and interactive states.",
      },
    },
  },
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Card content",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "bordered", "outlined", "elevated", "flat"],
      description: "Visual variant of the card",
    },
    padding: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl"],
      description: "Padding size",
    },
    shadow: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl"],
      description: "Shadow size",
    },
    hover: {
      control: { type: "boolean" },
      description: "Enable hover effects",
    },
    interactive: {
      control: { type: "boolean" },
      description: "Make card interactive with hover states",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Make card full width",
    },
    onClick: {
      action: "clicked",
      description: "Function called when card is clicked",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic story
export const CardDefault: Story = {
  args: {
    children: "Card Content",
    variant: "default",
    padding: "md",
    shadow: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "Basic card with default styling.",
      },
    },
  },
};

// Variants
export const CardVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Card variant="default">
        <div className="text-text-primary font-semibold">Default Card</div>
      </Card>
      <Card variant="bordered">
        <div className="text-text-primary font-semibold">Bordered Card</div>
      </Card>
      <Card variant="outlined">
        <div className="text-text-primary font-semibold">Outlined Card</div>
      </Card>
      <Card variant="elevated" shadow="lg">
        <div className="text-text-primary font-semibold">Elevated Card</div>
      </Card>
      <Card variant="flat">
        <div className="text-text-primary font-semibold">Flat Card</div>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Shows all available card variants.",
      },
    },
  },
};

// Padding sizes
export const CardPaddingSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Card padding="none" className="border border-border-accent">
        <div className="text-text-primary">No Padding</div>
      </Card>
      <Card padding="sm">
        <div className="text-text-primary">Small Padding</div>
      </Card>
      <Card padding="md">
        <div className="text-text-primary">Medium Padding</div>
      </Card>
      <Card padding="lg">
        <div className="text-text-primary">Large Padding</div>
      </Card>
      <Card padding="xl">
        <div className="text-text-primary">Extra Large Padding</div>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Shows different padding sizes available for cards.",
      },
    },
  },
};

// Shadow sizes
export const CardShadowSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Card shadow="none" className="border border-border-accent">
        <div className="text-text-primary">No Shadow</div>
      </Card>
      <Card shadow="sm">
        <div className="text-text-primary">Small Shadow</div>
      </Card>
      <Card shadow="md">
        <div className="text-text-primary">Medium Shadow</div>
      </Card>
      <Card shadow="lg">
        <div className="text-text-primary">Large Shadow</div>
      </Card>
      <Card shadow="xl">
        <div className="text-text-primary">Extra Large Shadow</div>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Shows different shadow sizes available for cards.",
      },
    },
  },
};

// Interactive card
export const CardInteractive: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Card 
        interactive 
        onClick={() => alert("Card clicked!")}
        className="w-64"
      >
        <div className="text-text-primary font-semibold">Interactive Card</div>
        <div className="text-text-secondary text-sm mt-2">
          Click me!
        </div>
      </Card>
      <Card 
        hover 
        onClick={() => alert("Card with hover clicked!")}
        className="w-64"
      >
        <div className="text-text-primary font-semibold">Card with Hover</div>
        <div className="text-text-secondary text-sm mt-2">
          Hover over me!
        </div>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Interactive cards with click handlers and hover effects.",
      },
    },
  },
};

// Full width card
export const CardFullWidth: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Card fullWidth>
        <div className="text-text-primary font-semibold text-lg">
          Full Width Card
        </div>
        <div className="text-text-secondary mt-2">
          This card takes the full width of its container.
        </div>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Card that takes the full width of its container.",
      },
    },
  },
};

// Card with complex content
export const CardWithContent: Story = {
  render: () => (
    <Card className="w-80">
      <div className="space-y-4">
        <div>
          <h3 className="text-text-primary text-xl font-semibold">
            Card Title
          </h3>
          <p className="text-text-secondary text-sm mt-1">
            Card subtitle or description
          </p>
        </div>
        <div className="pt-4 border-t border-border-accent">
          <p className="text-text-primary">
            This is a card with more complex content structure.
          </p>
        </div>
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Card with structured content including title, subtitle, and body.",
      },
    },
  },
};

// Gift Certificate Card examples
export const GiftCertificateCardExample: Story = {
  render: () => {
    const GiftIcon = () => (
      <svg width="60" height="36" viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M57 0H3C1.34344 0 0 1.34344 0 3V33C0 34.6566 1.34344 36 3 36H57C58.6566 36 60 34.6566 60 33V3C60 1.34344 58.6566 0 57 0ZM4.5 31.5V25.5C7.81406 25.5 10.5 28.1859 10.5 31.5H4.5ZM4.5 10.5V4.5H10.5C10.5 7.81406 7.81406 10.5 4.5 10.5ZM30 27C25.8572 27 22.5 22.9697 22.5 18C22.5 13.0294 25.8581 9 30 9C34.1419 9 37.5 13.0294 37.5 18C37.5 22.9716 34.1409 27 30 27ZM55.5 31.5H49.5C49.5 28.1859 52.1859 25.5 55.5 25.5V31.5ZM55.5 10.5C52.1859 10.5 49.5 7.81406 49.5 4.5H55.5V10.5Z" fill="var(--CTA-and-buttons-Icons-icon-primary, #0273CF)"/>
      </svg>
    );

    return (
      <div className="flex flex-wrap gap-4">
        <GiftCertificateCard
          icon={<GiftIcon />}
          title="Gift certificate"
          showOutline={true}
          onClick={() => alert("Gift certificate clicked!")}
        />
        <GiftCertificateCard
          icon={<GiftIcon />}
          title="Gift certificate"
          showOutline={false}
          onClick={() => alert("Gift certificate without outline clicked!")}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Gift Certificate Card component - specialized card for displaying gift certificates with icon and title. Supports outline toggle and click handlers.",
      },
    },
  },
};

// School / Church Card examples
export const SchoolChurchCardExample: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <SchoolChurchCard
        bgVariant="white"
        showOutline={true}
        onClick={() => alert("School / Church card clicked!")}
      >
        <div className="flex-1 text-center justify-end text-black text-2xl font-semibold font-['Mulish']">
          School / Church
        </div>
      </SchoolChurchCard>
      <SchoolChurchCard
        bgVariant="cards-01"
        showOutline={true}
        onClick={() => alert("School / Church card with cards-01 background clicked!")}
      >
        <div className="flex-1 text-center justify-end text-black text-2xl font-semibold font-['Mulish']">
          School / Church
        </div>
      </SchoolChurchCard>
      <SchoolChurchCard
        bgVariant="white"
        showOutline={false}
      >
        <div className="flex-1 text-center justify-end text-black text-2xl font-semibold font-['Mulish']">
          Without Outline
        </div>
      </SchoolChurchCard>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "School / Church Card component - specialized card for displaying school or church options. Supports different background variants and outline toggle.",
      },
    },
  },
};
