import type { Preview } from "@storybook/react-vite";
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: "requiredFirst",
    },
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#FFFFFF",
        },
        {
          name: "dark",
          value: "#1f2937",
        },
        {
          name: "gray",
          value: "#f3f4f6",
        },
      ],
    },
    docs: {
      toc: true,
      source: {
        state: "open",
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: true,
          },
        ],
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "dark",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "light", icon: "circlehollow", title: "Light" },
          { value: "dark", icon: "circle", title: "Dark" },
          { value: "training", icon: "circle", title: "Training" },
          { value: "auto", icon: "computer", title: "Auto" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;

      // Aplicar clase de tema al body
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        document.documentElement.classList.remove("training");
      } else if (theme === "light") {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.remove("training");
      } else if (theme === "training") {
        document.documentElement.classList.add("training");
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.remove("light");
      } else {
        // Auto - usar preferencia del sistema
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (prefersDark) {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
          document.documentElement.classList.remove("training");
        } else {
          document.documentElement.classList.add("light");
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.remove("training");
        }
      }

      return Story();
    },
  ],
};

export default preview;
