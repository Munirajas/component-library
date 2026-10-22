/* ===================================
   DARK MODE TOGGLE COMPONENT
   =================================== */

import React from "react";
import { useColorSystem } from "../../hooks/useColorSystem";

export interface DarkModeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  className = "",
  showLabel = true,
}) => {
  const { currentMode, setMode } = useColorSystem();
  const isDark = currentMode === "dark";

  const toggle = () => {
    setMode(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      className={`
        inline-flex items-center gap-2 px-3 py-2 rounded-lg
        bg-surface-secondary
        text-text-primary
        hover:bg-surface-secondary-hover
        border border-button-grey
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-cta-accent focus:ring-offset-2
        ${className}
      `}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Sun Icon */}
      {isDark &&
        <svg
          className={`w-5 h-5 transition-opacity duration-200 ${!isDark ? "opacity-100" : "opacity-50"
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      }
      {/* Moon Icon */}
      {!isDark &&
        <svg
          className={`w-5 h-5 transition-opacity duration-200 ${isDark ? "opacity-100" : "opacity-50"
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      }

      {showLabel && (
        <span className="text-sm font-medium">{isDark ? "Light" : "Dark"}</span>
      )}
    </button>
  );
};

export default DarkModeToggle;
