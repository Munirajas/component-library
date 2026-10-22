/* ===================================
   BUTTON COMPONENT
   =================================== */

import React, { forwardRef } from "react";
import { clsx } from "clsx";

export interface ButtonProps {
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "outline"
    | "ghost"
    | "link"
    | "info"
    | "success"
    | "warning"
    | "error";
  size?: "xs" | "sm" | "md" | "lg" | "wide";
  state?: "default" | "hover" | "outline";
  outlineStyle?: "thin" | "normal" | "thick";
  loading?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  id?:string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      id,
      size = "md",
      state = "default",
      outlineStyle = "normal",
      loading = false,
      disabled = false,
      rounded = false,
      fullWidth = false,
      children,
      className,
      onClick,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "btn inline-flex justify-center items-center gap-2 rounded-lg font-bold font-['Muli'] uppercase tracking-widest";

    // Variantes de color basadas en el sistema de diseño
    const variantClasses = {
      primary: "bg-cta-accent hover:bg-cta-hover",
      secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
      accent:
        "bg-CTA-and-buttons-Colors-cta-accent text-Text-Txt-Colors-Text-reverse",
      outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
      ghost: "bg-transparent text-Text-Txt-Colors-Text-primary",
      link: "bg-transparent text-CTA-and-buttons-Colors-cta-accent underline",
      info: "bg-blue-500 text-white",
      success: "bg-green-500 text-white",
      warning: "bg-yellow-500 text-white",
      error: "bg-red-500 text-white",
    };

    // Estados del botón
    const stateClasses = {
      default: "",
      hover: {
        primary: "bg-CTA-and-buttons-Colors-cta-hover",
        secondary: "bg-CTA-and-buttons-Colors-button-grey-hover",
        accent: "bg-CTA-and-buttons-Colors-cta-hover",
        outline: "bg-transparent",
        ghost: "bg-transparent",
        link: "bg-transparent",
        info: "bg-blue-600",
        success: "bg-green-600",
        warning: "bg-yellow-600",
        error: "bg-red-600",
      },
      outline: {
        primary:
          "outline outline-2 outline-offset-[-2px] outline-CTA-and-buttons-Colors-cta-accent",
        secondary:
          "outline outline-2 outline-offset-[-2px] outline-CTA-and-buttons-Colors-button-grey-default",
        accent:
          "outline outline-2 outline-offset-[-2px] outline-CTA-and-buttons-Colors-cta-accent",
        outline:
          "outline outline-2 outline-offset-[-2px] outline-CTA-and-buttons-Colors-cta-accent",
        ghost:
          "outline outline-2 outline-offset-[-2px] outline-CTA-and-buttons-Colors-cta-accent",
        link: "outline outline-2 outline-offset-[-2px] outline-CTA-and-buttons-Colors-cta-accent",
        info: "outline outline-2 outline-offset-[-2px] outline-blue-500",
        success: "outline outline-2 outline-offset-[-2px] outline-green-500",
        warning: "outline outline-2 outline-offset-[-2px] outline-yellow-500",
        error: "outline outline-2 outline-offset-[-2px] outline-red-500",
      },
    };

    // Estilos de outline
    const outlineStyleClasses = {
      thin: "outline-1 outline-offset-[-1px]",
      normal: "outline-2 outline-offset-[-2px]",
      thick: "outline-4 outline-offset-[-4px]",
    };

    // Tamaños específicos basados en el HTML
    const sizeClasses = {
      xs: "h-10 px-2 text-sm",
      sm: "h-12 px-2 text-base",
      md: "h-14 px-4 text-base",
      lg: "h-16 px-6 text-base",
      wide: "h-16 px-8 text-base",
    };

    // Clases condicionales
    const conditionalClasses = {
      loading: loading ? "opacity-75 cursor-not-allowed" : "",
      disabled: disabled ? "opacity-50 cursor-not-allowed" : "",
      rounded: rounded ? "rounded-full" : "",
      fullWidth: fullWidth ? "w-full" : "",
    };

    // Aplicar clases de estado
    const getStateClasses = () => {
      if (state === "outline") {
        const baseOutline =
          stateClasses.outline[variant] || stateClasses.outline.primary;
        const outlineStyleClass = outlineStyleClasses[outlineStyle];
        return `${baseOutline} ${outlineStyleClass}`;
      }

      if (state === "hover") {
        return stateClasses.hover[variant] || stateClasses.hover.primary;
      }

      return "";
    };

    const classes = clsx(
      baseClasses,
      variantClasses[variant],
      getStateClasses(),
      sizeClasses[size],
      conditionalClasses.loading,
      conditionalClasses.disabled,
      conditionalClasses.rounded,
      conditionalClasses.fullWidth,
      className
    );

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        onClick={onClick}
        type={type}
        id={id}
        {...props}
      >
        {loading && (
          <span className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full"></span>
        )}
        <div className="p-2.5 flex justify-center items-center gap-2.5">
          <div className="justify-center">{children}</div>
        </div>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
