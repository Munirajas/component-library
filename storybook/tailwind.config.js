/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./examples/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      // Custom color tokens from the design system
      colors: {
        "cta-accent": {
          DEFAULT: "var(--color-cta-accent-default)",
          hover: "var(--color-cta-accent-hover)",
          active: "var(--color-cta-accent-active)",
          disabled: "var(--color-cta-accent-disabled)",
        },
        "cta-hover": {
          DEFAULT: "var(--color-cta-hover-default)",
          hover: "var(--color-cta-hover-hover)",
          active: "var(--color-cta-hover-active)",
          disabled: "var(--color-cta-hover-disabled)",
        },
        "button-grey": {
          DEFAULT: "var(--color-button-grey-default)",
          hover: "var(--color-button-grey-hover)",
          active: "var(--color-button-grey-active)",
          disabled: "var(--color-button-grey-disabled)",
        },
        "text-primary": {
          DEFAULT: "var(--color-text-primary-default)",
          hover: "var(--color-text-primary-hover)",
          active: "var(--color-text-primary-active)",
          disabled: "var(--color-text-primary-disabled)",
        },
        "text-secondary": {
          DEFAULT: "var(--color-text-secondary-default)",
          hover: "var(--color-text-secondary-hover)",
          active: "var(--color-text-secondary-active)",
          disabled: "var(--color-text-secondary-disabled)",
        },
        "surface-primary": {
          DEFAULT: "var(--color-surface-primary-default)",
          hover: "var(--color-surface-primary-hover)",
          active: "var(--color-surface-primary-active)",
          disabled: "var(--color-surface-primary-disabled)",
        },
        "border-accent": {
          DEFAULT: "var(--color-border-accent-default)",
          hover: "var(--color-border-accent-hover)",
          active: "var(--color-border-accent-active)",
          disabled: "var(--color-border-accent-disabled)",
        },
        "accordion-border-accent": {
          DEFAULT: "var(--color-panel-border-accent-default)",
          hover: "var(--color-border-accent-hover)",
          active: "var(--color-panel-border-accent-active)",
          disabled: "var(--color-panel-border-accent-disabled)",
        },
        btn: {
          accent: {
            light: "#3B82F6",
            dark: "#0273CF",
            training: "#CC4A00",
          },
          hover: {
            light: "#2563EB",
            dark: "#1890F2",
            training: "#CB7D4F",
          },
          "grey-default": {
            light: "#EBEFF6",
            dark: "#627083",
            training: "#EBE7E6",
          },
          "grey-hover": {
            light: "#C8DBF5",
            dark: "#324857",
            training: "#E0DDDC",
          },
        },
        icon: {
          member: {
            light: "#E2B000",
            dark: "#E2B000",
            training: "#E2B000",
          },
          primary: {
            light: "#0273CF",
            dark: "#027DE1",
            training: "#CC4A00",
          },
          secondary: {
            light: "#14191D",
            dark: "#FFFFFF",
            training: "#1D1D1C",
          },
          tertiary: {
            light: "#BDBAB9",
            dark: "#EBEFF6",
            training: "#BDBAB9",
          },
          reverse: {
            light: "#FFFFFF",
            dark: "#FFFFFF",
            training: "#FFFFFF",
          },
        },
        text: {
          primary: {
            light: "#101820",
            dark: "#FFFFFF",
            training: "#2C2B2B",
          },
          secondary: {
            light: "#627083",
            dark: "#EFF4FB",
            training: "#807E7D",
          },
          tertiary: {
            light: "#9DAEC2",
            dark: "#EBEFF6",
            training: "#BDBAB9",
          },
          reverse: {
            light: "#FFFFFF",
            dark: "#FFFFFF",
            training: "#FFFFFF",
          },
          accent: {
            light: "#027DE1",
            dark: "#1890F2",
            training: "#CC4A00",
          },
        },
        surface: {
          primary: {
            light: "#FFFFFF",
            dark: "#101820",
            training: "#FFFFFF",
          },
          secondary: {
            light: "#EFF4FB",
            dark: "#17242C",
            training: "#F0ECEA",
          },
          reverse: {
            light: "#14191D",
            dark: "#FFFFFF",
            training: "#1D1D1C",
          },
          background: {
            light: "#9DAEC2",
            dark: "#324857",
            training: "#BDBAB9",
          },
          "cards-01": {
            light: "#EBEFF6",
            dark: "#23343F",
            training: "#EBE7E6",
          },
          "cards-02": {
            light: "#F4F5F8",
            dark: "#23343F",
            training: "#FAF7F6",
          },
          "cards-03": {
            light: "#C8DBF5",
            dark: "#324857",
            training: "#CB7D4F",
          },
          "cards-04": {
            light: "#9DAEC2",
            dark: "#545B66",
            training: "#CB7D4F",
          },
        },
        stroke: {
          "grey-01": {
            light: "#EBEFF6",
            dark: "#627083",
            training: "#EBE7E6",
          },
          "grey-02": {
            light: "#9DAEC2",
            dark: "#9DAEC2",
            training: "#BDBAB9",
          },
          "gray-03": {
            light: "#545B66",
            dark: "#F4F5F8",
            training: "#646566",
          },
          accent: {
            light: "#0273CF",
            dark: "#027DE1",
            training: "#CC4A00",
          },
        },
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      // Custom shadows
      boxShadow: {
        sidebar: "9px 0px 15px 0px rgba(6,6,7,0.15)",
        "sidebar-dark": "9px 0px 15px 0px rgba(0,0,0,0.3)",
      },
      // Custom spacing for the design system
      spacing: {
        18: "4.5rem", // 72px
        88: "22rem", // 352px
      },
    },
  },
  plugins: [],
};
