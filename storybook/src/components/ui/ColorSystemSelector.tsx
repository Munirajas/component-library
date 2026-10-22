/* ===================================
   THEME SELECTOR DEMO
   =================================== */

import React from "react";
import { useColorSystem } from "../../hooks/useColorSystem";
import { colorSystem } from "../../themes/colorSystem";
import Input from "../dataInput/Input";
import {
  PaletteIcon,
  AcademicCapIcon,
  WaterDropIcon,
  SunIcon,
  MoonIcon,
} from "../../icons/icons";

interface ColorSystemSelectorProps {
  showLabels?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const ColorSystemSelector: React.FC<ColorSystemSelectorProps> = ({
  showLabels = true,
  size = "md",
  className = "",
}) => {
  const { 
    currentTheme, 
    currentMode, 
    setTheme, 
    setMode, 
    getColorValue, 
    availableThemes, 
    availableModes 
  } = useColorSystem();

  const sizeClasses = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  };

  const colorSizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const themeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    default: PaletteIcon,
    training: AcademicCapIcon,
    ocean: WaterDropIcon,
  };

  const modeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    light: SunIcon,
    dark: MoonIcon,
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <div>
        {showLabels && (
          <h3 className="text-sm font-medium text-text-primary mb-3">
            Select Theme
          </h3>
        )}
        <div className="flex gap-2">
          {availableThemes.map((theme) => (
            <button
              key={theme}
              onClick={() => setTheme(theme)}
              className={`
                ${sizeClasses[size]}
                rounded-lg border-2 transition-all duration-200
                ${
                  currentTheme === theme
                    ? "border-cta-accent bg-cta-accent/10 text-cta-accent"
                    : "border-button-grey hover:border-cta-accent/50 text-text-secondary"
                }
              `}
            >
              <div className="flex items-center gap-2">
                {React.createElement(themeIcons[theme] || PaletteIcon, {
                  className: "w-4 h-4",
                })}
                {showLabels && (
                  <span className="text-xs font-medium capitalize">
                    {theme}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        {showLabels && (
          <h3 className="text-sm font-medium text-text-primary mb-3">
            Select Mode
          </h3>
        )}
        <div className="flex gap-2">
          {availableModes.map((mode) => (
            <button
              key={mode}
              onClick={() => setMode(mode)}
              className={`
                ${sizeClasses[size]}
                rounded-lg border-2 transition-all duration-200
                ${
                  currentMode === mode
                    ? "border-cta-accent bg-cta-accent/10 text-cta-accent"
                    : "border-button-grey hover:border-cta-accent/50 text-text-secondary"
                }
              `}
            >
              <div className="flex items-center gap-2">
                {React.createElement(modeIcons[mode] || SunIcon, {
                  className: "w-4 h-4",
                })}
                {showLabels && (
                  <span className="text-xs font-medium capitalize">
                    {mode}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        {showLabels && (
          <h3 className="text-sm font-medium text-text-primary mb-3">
            Color Preview
          </h3>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {colorSystem.slice(0, 4).map((colorClass) => (
            <div
              key={colorClass.name}
              className="bg-surface-primary border border-button-grey rounded-lg p-4"
            >
              <h4 className="text-sm font-medium text-text-primary mb-3 capitalize">
                {colorClass.name.replace("-", " ")}
              </h4>
              <div className="grid grid-cols-4 gap-2">
                {(["default", "hover", "active", "disabled"] as const).map(
                  (state) => {
                    const color = getColorValue(colorClass.name, state);
                    return (
                      <div key={state} className="text-center">
                        <div
                          className={`${colorSizeClasses[size]} rounded mx-auto mb-1`}
                          style={{ backgroundColor: color || "#ccc" }}
                        />
                        <p className="text-xs text-text-secondary capitalize">
                          {state}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        {showLabels && (
          <h3 className="text-sm font-medium text-text-primary mb-3">
            Use demonstration
          </h3>
        )}
        <div className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            <button className="bg-cta-accent text-white px-4 py-2 rounded-lg hover:bg-cta-accent-hover active:bg-cta-accent-active transition-colors">
              CTA Accent
            </button>
            <button className="bg-cta-hover text-white px-4 py-2 rounded-lg hover:bg-cta-hover-hover active:bg-cta-hover-active transition-colors">
              CTA Hover
            </button>
            <button className="bg-button-grey text-text-primary px-4 py-2 rounded-lg hover:bg-button-grey-hover transition-colors">
              Button Grey
            </button>
          </div>

          <div className="space-y-2">
            <Input className="bg-cta-primary" value="This is the input" ></Input>
          </div>

          <div className="bg-surface-primary border border-button-grey rounded-lg p-4">
            <h4 className="text-text-primary font-medium mb-2">Card</h4>
            <p className="text-text-secondary text-sm">
              This is an example of a card to see the color changes.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-cta-accent/10 border border-cta-accent/20 rounded-lg p-4">
        <h4 className="text-sm font-medium text-cta-accent mb-2">
          Technical Information
        </h4>
        <div className="text-xs text-text-secondary space-y-1">
          <p>
            <strong>Current Theme:</strong> {currentTheme}
          </p>
          <p>
            <strong>Current Mode:</strong> {currentMode}
          </p>
          <p>
            <strong>Current Variant:</strong> {currentTheme}-{currentMode}
          </p>
          <p>
            <strong>Available themes:</strong> {availableThemes.join(", ")}
          </p>
          <p>
            <strong>Available modes:</strong> {availableModes.join(", ")}
          </p>
          <p>
            <strong>States:</strong> default, hover, active, disabled
          </p>
          <p>
            <strong>Tailwind use:</strong>{" "}
            <code className="bg-surface-primary px-1 rounded">
              bg-cta-accent
            </code>
            ,{" "}
            <code className="bg-surface-primary px-1 rounded">
              bg-cta-accent-hover
            </code>
            , etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorSystemSelector;
