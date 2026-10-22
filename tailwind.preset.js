module.exports = {
  darkMode: "class",
  theme: {
    extend: {
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
        }
      },
      boxShadow: {
        sidebar: "9px 0px 15px 0px rgba(6,6,7,0.15)",
        "sidebar-dark": "9px 0px 15px 0px rgba(0,0,0,0.3)",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      }
    }
  }
};
