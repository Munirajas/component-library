/* ===================================
   COLOR SYSTEM
   =================================== */

export type Theme = "default" | "training" | "ocean";
export type Mode = "light" | "dark";
export type ColorState = "default" | "hover" | "active" | "disabled";

// ColorVariant now represents theme-mode combination for backward compatibility
export type ColorVariant = `${Theme}-${Mode}` | "default-light" | "default-dark" | "training-light" | "training-dark" | "ocean-light" | "ocean-dark";

export interface ColorClass {
  name: string;
  themes: {
    [K in Theme]: {
      [M in Mode]: {
        [S in ColorState]?: string;
      };
    };
  };
}

// Helper to parse variant string
export const parseVariant = (variant: ColorVariant): { theme: Theme; mode: Mode } => {
  const parts = variant.split("-");
  if (parts.length === 2) {
    const theme = parts[0] as Theme;
    const mode = parts[1] as Mode;
    if (theme && mode && ["default", "training", "ocean"].includes(theme) && ["light", "dark"].includes(mode)) {
      return { theme, mode };
    }
  }
  // Fallback to default-light
  return { theme: "default", mode: "light" };
};

// Helper to create variant string
export const createVariant = (theme: Theme, mode: Mode): ColorVariant => {
  return `${theme}-${mode}` as ColorVariant;
};

// Color system restructured with themes and modes
export const colorSystem: ColorClass[] = [
  {
    name: "cta-accent",
    themes: {
      default: {
        light: {
          default: "#3B82F6",
          hover: "#2563EB",
          active: "#1D4ED8",
          disabled: "#93C5FD",
        },
        dark: {
          default: "#60A5FA",
          hover: "#3B82F6",
          active: "#2563EB",
          disabled: "#1E3A8A",
        },
      },
      training: {
        light: {
          default: "#8B5CF6",
          hover: "#7C3AED",
          active: "#d328d9ff",
          disabled: "#C4B5FD",
        },
        dark: {
          default: "#A78BFA",
          hover: "#8B5CF6",
          active: "#7C3AED",
          disabled: "#6D28D9",
        },
      },
      ocean: {
        light: {
          default: "#06B6D4",
          hover: "#0891B2",
          active: "#0E7490",
          disabled: "#67E8F9",
        },
        dark: {
          default: "#22D3EE",
          hover: "#06B6D4",
          active: "#0891B2",
          disabled: "#0E7490",
        },
      },
    },
  },
  {
    name: "cta-hover",
    themes: {
      default: {
        light: {
          default: "#2563EB",
          hover: "#1D4ED8",
          active: "#1E40AF",
          disabled: "#93C5FD",
        },
        dark: {
          default: "#3B82F6",
          hover: "#2563EB",
          active: "#1D4ED8",
          disabled: "#1E3A8A",
        },
      },
      training: {
        light: {
          default: "#7C3AED",
          hover: "#6D28D9",
          active: "#5B21B6",
          disabled: "#C4B5FD",
        },
        dark: {
          default: "#8B5CF6",
          hover: "#7C3AED",
          active: "#6D28D9",
          disabled: "#5B21B6",
        },
      },
      ocean: {
        light: {
          default: "#0891B2",
          hover: "#0E7490",
          active: "#155E75",
          disabled: "#67E8F9",
        },
        dark: {
          default: "#06B6D4",
          hover: "#0891B2",
          active: "#0E7490",
          disabled: "#155E75",
        },
      },
    },
  },
  {
    name: "button-grey",
    themes: {
      default: {
        light: {
          default: "#6B7280",
          hover: "#4B5563",
          active: "#374151",
          disabled: "#D1D5DB",
        },
        dark: {
          default: "#9CA3AF",
          hover: "#6B7280",
          active: "#4B5563",
          disabled: "#374151",
        },
      },
      training: {
        light: {
          default: "#8B5CF6",
          hover: "#7C3AED",
          active: "#6D28D9",
          disabled: "#C4B5FD",
        },
        dark: {
          default: "#A78BFA",
          hover: "#8B5CF6",
          active: "#7C3AED",
          disabled: "#6D28D9",
        },
      },
      ocean: {
        light: {
          default: "#155E75",
          hover: "#0E7490",
          active: "#164E63",
          disabled: "#67E8F9",
        },
        dark: {
          default: "#22D3EE",
          hover: "#06B6D4",
          active: "#0891B2",
          disabled: "#155E75",
        },
      },
    },
  },
  {
    name: "text-primary",
    themes: {
      default: {
        light: {
          default: "#111827",
          hover: "#1F2937",
          active: "#374151",
          disabled: "#9CA3AF",
        },
        dark: {
          default: "#F9FAFB",
          hover: "#F3F4F6",
          active: "#E5E7EB",
          disabled: "#6B7280",
        },
      },
      training: {
        light: {
          default: "#581C87",
          hover: "#6B21A8",
          active: "#7C2D12",
          disabled: "#A78BFA",
        },
        dark: {
          default: "#E9D5FF",
          hover: "#DDD6FE",
          active: "#C4B5FD",
          disabled: "#8B5CF6",
        },
      },
      ocean: {
        light: {
          default: "#164E63",
          hover: "#155E75",
          active: "#0E7490",
          disabled: "#22D3EE",
        },
        dark: {
          default: "#ECFEFF",
          hover: "#CFFAFE",
          active: "#A5F3FC",
          disabled: "#67E8F9",
        },
      },
    },
  },
  {
    name: "text-secondary",
    themes: {
      default: {
        light: {
          default: "#6B7280",
          hover: "#4B5563",
          active: "#374151",
          disabled: "#D1D5DB",
        },
        dark: {
          default: "#9CA3AF",
          hover: "#6B7280",
          active: "#4B5563",
          disabled: "#374151",
        },
      },
      training: {
        light: {
          default: "#7C3AED",
          hover: "#6D28D9",
          active: "#5B21B6",
          disabled: "#C4B5FD",
        },
        dark: {
          default: "#C4B5FD",
          hover: "#A78BFA",
          active: "#8B5CF6",
          disabled: "#7C3AED",
        },
      },
      ocean: {
        light: {
          default: "#155E75",
          hover: "#0E7490",
          active: "#0891B2",
          disabled: "#67E8F9",
        },
        dark: {
          default: "#A5F3FC",
          hover: "#67E8F9",
          active: "#22D3EE",
          disabled: "#06B6D4",
        },
      },
    },
  },
  {
    name: "surface-primary",
    themes: {
      default: {
        light: {
          default: "#FFFFFF",
          hover: "#F9FAFB",
          active: "#F3F4F6",
          disabled: "#F9FAFB",
        },
        dark: {
          default: "#1F2937",
          hover: "#374151",
          active: "#4B5563",
          disabled: "#374151",
        },
      },
      training: {
        light: {
          default: "#F3E8FF",
          hover: "#E9D5FF",
          active: "#00bac0ff",
          disabled: "#F3E8FF",
        },
        dark: {
          default: "#4C1D95",
          hover: "#5B21B6",
          active: "#6D28D9",
          disabled: "#4C1D95",
        },
      },
      ocean: {
        light: {
          default: "#ECFEFF",
          hover: "#CFFAFE",
          active: "#A5F3FC",
          disabled: "#ECFEFF",
        },
        dark: {
          default: "#164E63",
          hover: "#155E75",
          active: "#0E7490",
          disabled: "#164E63",
        },
      },
    },
  },
  {
    name: "surface-secondary",
    themes: {
      default: {
        light: {
          default: "#eff4fb",
          hover: "#F9FAFB",
          active: "#F3F4F6",
          disabled: "#F9FAFB",
        },
        dark: {
          default: "#1F2937",
          hover: "#374151",
          active: "#4B5563",
          disabled: "#374151",
        },
      },
      training: {
        light: {
          default: "#F3E8FF",
          hover: "#E9D5FF",
          active: "#DDD6FE",
          disabled: "#F3E8FF",
        },
        dark: {
          default: "#5B21B6",
          hover: "#6D28D9",
          active: "#7C3AED",
          disabled: "#5B21B6",
        },
      },
      ocean: {
        light: {
          default: "#CFFAFE",
          hover: "#A5F3FC",
          active: "#67E8F9",
          disabled: "#ECFEFF",
        },
        dark: {
          default: "#155E75",
          hover: "#0E7490",
          active: "#0891B2",
          disabled: "#155E75",
        },
      },
    },
  },
  {
    name: "border-accent",
    themes: {
      default: {
        light: {
          default: "#3B82F6",
          hover: "#2563EB",
          active: "#1D4ED8",
          disabled: "#93C5FD",
        },
        dark: {
          default: "#60A5FA",
          hover: "#3B82F6",
          active: "#2563EB",
          disabled: "#1E3A8A",
        },
      },
      training: {
        light: {
          default: "#8B5CF6",
          hover: "#7C3AED",
          active: "#6D28D9",
          disabled: "#C4B5FD",
        },
        dark: {
          default: "#A78BFA",
          hover: "#8B5CF6",
          active: "#7C3AED",
          disabled: "#6D28D9",
        },
      },
      ocean: {
        light: {
          default: "#06B6D4",
          hover: "#0891B2",
          active: "#0E7490",
          disabled: "#67E8F9",
        },
        dark: {
          default: "#22D3EE",
          hover: "#06B6D4",
          active: "#0891B2",
          disabled: "#0E7490",
        },
      },
    },
  },
];

// Function to get a specific color
export const getColor = (
  colorName: string,
  variant: ColorVariant = "default-light",
  state: ColorState = "default"
): string | null => {
  const colorClass = colorSystem.find((c) => c.name === colorName);
  if (!colorClass) return null;

  const { theme, mode } = parseVariant(variant);
  return colorClass.themes[theme]?.[mode]?.[state] || null;
};

// Function to get all variant colors
export const getVariantColors = (
  variant: ColorVariant
): Record<string, Partial<Record<ColorState, string>>> => {
  const colors: Record<string, Partial<Record<ColorState, string>>> = {};
  const { theme, mode } = parseVariant(variant);

  colorSystem.forEach((colorClass) => {
    colors[colorClass.name] = colorClass.themes[theme]?.[mode] || {};
  });

  return colors;
};

// Generate css variant colors
export const generateVariantCSS = (variant: ColorVariant): string => {
  const colors = getVariantColors(variant);
  const { theme, mode } = parseVariant(variant);
  const selector = variant === "default-light" ? ":root" : `.${theme}-${mode}`;

  const cssVars = Object.entries(colors)
    .flatMap(([colorName, states]) =>
      Object.entries(states).map(
        ([state, value]) => `  --color-${colorName}-${state}: ${value};`
      )
    )
    .join("\n");

  return `${selector} {\n${cssVars}\n}`;
};

// Apply variant to the DOM
export const applyVariantToDOM = (variant: ColorVariant): void => {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  const colors = getVariantColors(variant);
  const { theme, mode } = parseVariant(variant);

  // Apply CSS variables
  Object.entries(colors).forEach(([colorName, states]) => {
    Object.entries(states).forEach(([state, value]) => {
      root.style.setProperty(`--color-${colorName}-${state}`, value);
    });
  });

  // Apply class variants - remove all theme and mode classes
  root.classList.remove("default-light", "default-dark", "training-light", "training-dark", "ocean-light", "ocean-dark", "light", "dark", "training", "ocean");
  
  // Add theme and mode classes
  if (variant !== "default-light") {
    root.classList.add(`${theme}-${mode}`);
  }
  
  // Also add mode class for backward compatibility and CSS targeting
  root.classList.add(mode);
  if (theme !== "default") {
    root.classList.add(theme);
  }
};

// Function to get all available color classes
export const getAvailableColorClasses = (): string[] => {
  return colorSystem.map((c) => c.name);
};

export const getAvailableThemes = (): Theme[] => {
  return ["default", "training", "ocean"];
};

export const getAvailableModes = (): Mode[] => {
  return ["light", "dark"];
};

export const getAvailableVariants = (): ColorVariant[] => {
  const themes = getAvailableThemes();
  const modes = getAvailableModes();
  return themes.flatMap(theme => modes.map(mode => createVariant(theme, mode)));
};

export const isValidColorClass = (colorName: string): boolean => {
  return colorSystem.some((c) => c.name === colorName);
};

export const createColorClass = (
  name: string,
  themes: ColorClass["themes"]
): ColorClass => {
  return { name, themes };
};

// Export color system
export const exportColorSystem = (): string => {
  return JSON.stringify(colorSystem, null, 2);
};

// Import color system
export const importColorSystem = (json: string): ColorClass[] => {
  try {
    const imported = JSON.parse(json);
    if (!Array.isArray(imported)) {
      throw new Error("Color system must be an array");
    }
    return imported;
  } catch (error) {
    throw new Error(
      `Error importing: ${
        error instanceof Error ? error.message : "Invalid format"
      }`
    );
  }
};
