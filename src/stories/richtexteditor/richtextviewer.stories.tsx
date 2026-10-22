import type { Meta, StoryObj } from "@storybook/react";
import { RichTextViewer } from "@/components/richTextViewer";
import {
  richContent,
  withImageContent,
  withCodeContent,
  plainTextContent,
  emptyContent,
} from "./data";

const meta: Meta<typeof RichTextViewer> = {
  title: "Components/RichTextViewer",
  component: RichTextViewer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Read-only renderer for HTML produced by <RichTextEditor />. Sanitizes with DOMPurify and reuses the editor's .rte-content styles, so formatted content (headings, lists, links, images, code) looks identical outside the editor — e.g. detail views, cards, and modals.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 480 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    html: richContent,
  },
};

export const WithImage: Story = {
  args: {
    html: withImageContent,
  },
};

export const WithCodeBlock: Story = {
  args: {
    html: withCodeContent,
  },
};

export const PlainText: Story = {
  args: {
    html: plainTextContent,
  },
};

export const Empty: Story = {
  args: {
    html: emptyContent,
  },
  parameters: {
    docs: {
      description: {
        story: "Renders nothing when html is empty or undefined — nothing to fall back on, so the parent should handle its own empty-state messaging.",
      },
    },
  },
};

export const InsideACard: Story = {
  render: (args) => (
    <div style={{ border: "1px solid #d0d5dd", borderRadius: 8, padding: 16 }}>
      <p style={{ fontSize: 13, fontWeight: 500, color: "#344054", marginBottom: 6 }}>
        Description
      </p>
      <RichTextViewer {...args} />
    </div>
  ),
  args: {
    html: richContent,
  },
};