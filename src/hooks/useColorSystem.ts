/* ===================================
   HOOK FOR THE COLOR SYSTEM
   =================================== */
'use client'

import { useState, useEffect, useCallback, useRef } from "react";
import {
  colorSystem,
  getColor,
  getVariantColors,
  applyVariantToDOM,
  generateVariantCSS,
  type ColorVariant,
  type ColorState,
  type Theme,
  type Mode,
  parseVariant,
  createVariant,
  getAvailableThemes,
  getAvailableModes,
} from "../themes/colorSystem";

interface UseColorSystemReturn {
  currentVariant: ColorVariant;
  currentTheme: Theme;
  currentMode: Mode;
  setVariant: (variant: ColorVariant) => void;
  setTheme: (theme: Theme) => void;
  setMode: (mode: Mode) => void;
  setThemeAndMode: (theme: Theme, mode: Mode) => void;
  getColorValue: (colorName: string, state?: ColorState) => string | null;
  getVariantColors: (
    variant?: ColorVariant
  ) => Record<string, Partial<Record<ColorState, string>>>;
  generateCSS: (variant?: ColorVariant) => string;
  availableVariants: ColorVariant[];
  availableThemes: Theme[];
  availableModes: Mode[];
  availableColorClasses: string[];
}

export const useColorSystem = (
  defaultVariant: ColorVariant = "default-light",
  storageKey: string = "color-system-variant"
): UseColorSystemReturn => {
  // Always start with defaultVariant to ensure SSR/client match
  const [currentVariant, setCurrentVariant] =
    useState<ColorVariant>(defaultVariant);
  const isInitialMount = useRef(true);
  const isMounted = useRef(false);
  const hasHydrated = useRef(false);
  
  const { theme: currentTheme, mode: currentMode } = parseVariant(currentVariant);

  // Function to set the variant
  const setVariant = useCallback(
    (variant: ColorVariant) => {
      setCurrentVariant(variant);
      applyVariantToDOM(variant);

      // Save in localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, variant);
      }
    },
    [storageKey]
  );

  // Function to set theme (keeps current mode)
  const setTheme = useCallback(
    (theme: Theme) => {
      setCurrentVariant((prevVariant) => {
        const { mode } = parseVariant(prevVariant);
        const newVariant = createVariant(theme, mode);
        applyVariantToDOM(newVariant);
        if (typeof window !== "undefined") {
          localStorage.setItem(storageKey, newVariant);
        }
        return newVariant;
      });
    },
    [storageKey]
  );

  // Function to set mode (keeps current theme)
  const setMode = useCallback(
    (mode: Mode) => {
      setCurrentVariant((prevVariant) => {
        const { theme } = parseVariant(prevVariant);
        const newVariant = createVariant(theme, mode);
        applyVariantToDOM(newVariant);
        if (typeof window !== "undefined") {
          localStorage.setItem(storageKey, newVariant);
        }
        return newVariant;
      });
    },
    [storageKey]
  );

  // Function to set both theme and mode
  const setThemeAndMode = useCallback(
    (theme: Theme, mode: Mode) => {
      const newVariant = createVariant(theme, mode);
      setVariant(newVariant);
    },
    [setVariant]
  );

  // Get a color
  const getColorValue = useCallback(
    (colorName: string, state: ColorState = "default"): string | null => {
      return getColor(colorName, currentVariant, state);
    },
    [currentVariant]
  );

  // Get all the colors
  const getVariantColorsCallback = useCallback(
    (variant?: ColorVariant) => {
      return getVariantColors(variant || currentVariant);
    },
    [currentVariant]
  );

  // Generate CSS variants
  const generateCSS = useCallback(
    (variant?: ColorVariant) => {
      return generateVariantCSS(variant || currentVariant);
    },
    [currentVariant]
  );

  // Mark as mounted on client side and sync with localStorage
  useEffect(() => {
    isMounted.current = true;
    
    // Only read from localStorage after hydration to avoid SSR mismatch
    if (!hasHydrated.current && typeof window !== "undefined") {
      hasHydrated.current = true;
      try {
        const savedVariant = localStorage.getItem(storageKey) as ColorVariant;
        if (savedVariant) {
          const { theme, mode } = parseVariant(savedVariant);
          if (theme && mode) {
            const variant = createVariant(theme, mode);
            setCurrentVariant(variant);
            applyVariantToDOM(variant);
          }
        }
      } catch {
        // Ignore localStorage errors
      }
    }
  }, [storageKey]);

  // Apply CSS variables on initial mount (classes are already set by inline script)
  useEffect(() => {
    if (!isMounted.current || typeof window === "undefined") return;
    
    if (isInitialMount.current) {
      isInitialMount.current = false;
      // Apply CSS variables immediately since classes are already set
      const root = document.documentElement;
      const colors = getVariantColors(currentVariant);
      Object.entries(colors).forEach(([colorName, states]) => {
        Object.entries(states).forEach(([state, value]) => {
          root.style.setProperty(`--color-${colorName}-${state}`, value);
        });
      });
    }
  }, [currentVariant]);

  // Apply variant on change - but only if it's different from what's already applied
  useEffect(() => {
    if (!isMounted.current || typeof window === "undefined") return;
    
    const root = document.documentElement;
    const currentClasses = Array.from(root.classList);
    const { theme, mode } = parseVariant(currentVariant);
    
    // Check if theme classes are already applied
    const hasThemeClass = currentVariant === "default-light" || currentClasses.includes(`${theme}-${mode}`);
    const hasModeClass = currentClasses.includes(mode);
    const hasThemeNameClass = theme === "default" || currentClasses.includes(theme);
    
    // Always apply CSS variables (they might not be set yet)
    // But skip class manipulation if classes are already correct
    if (hasThemeClass && hasModeClass && hasThemeNameClass) {
      // Classes are correct, but ensure CSS variables are set
      const colors = getVariantColors(currentVariant);
      Object.entries(colors).forEach(([colorName, states]) => {
        Object.entries(states).forEach(([state, value]) => {
          root.style.setProperty(`--color-${colorName}-${state}`, value);
        });
      });
    } else {
      // Apply everything
      applyVariantToDOM(currentVariant);
    }
  }, [currentVariant]);

  return {
    currentVariant,
    currentTheme,
    currentMode,
    setVariant,
    setTheme,
    setMode,
    setThemeAndMode,
    getColorValue,
    getVariantColors: getVariantColorsCallback,
    generateCSS,
    availableVariants: getAvailableThemes().flatMap(theme => 
      getAvailableModes().map(mode => createVariant(theme, mode))
    ),
    availableThemes: getAvailableThemes(),
    availableModes: getAvailableModes(),
    availableColorClasses: colorSystem.map((c) => c.name),
  };
};

export default useColorSystem;
