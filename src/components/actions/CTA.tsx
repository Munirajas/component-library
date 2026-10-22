/* ===================================
   CTA Component
   =================================== */

import React, { forwardRef, ReactNode } from "react";
import { clsx } from "clsx";

export interface CtaProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "xs" | "sm" | "md" | "lg" | "wide";
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const CTA = forwardRef<HTMLButtonElement, CtaProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      leftIcon = null,
      rightIcon = null,
      children,
      className,
      onClick,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex justify-center items-center gap-2 rounded-lg font-bold font-['Muli'] uppercase tracking-widest course ";

    // Variant classes based on the design
    const variantClasses = {
      primary:
        "bg-cta-accent hover:bg-cta-accent-hover active:bg-cta-accent-active disabled:bg-cta-accent-disabled text-base text-white px-4 py-2 rounded-lg",
      secondary:
        "outline outline-2 outline-offset-[-2px] outline-sky-500 text-text-secondary",
      tertiary: "bg-gray-300 text-text-primary text-base",
    };

    // sizes
    const sizeClasses = {
      xs: "h-10 px-2 text-sm",
      sm: "h-12 px-2 text-base",
      md: "h-14 px-4 text-base",
      lg: "h-16 px-6 text-base",
      wide: "h-16 px-8 text-base",
    };

    // conditional
    const conditionalClasses = {
      loading: loading ? "opacity-75 cursor-not-allowed" : "",
      disabled: disabled ? "opacity-50 cursor-not-allowed" : "",
    };

    const classes = clsx(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      conditionalClasses.loading,
      conditionalClasses.disabled,
      className
    );

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        onClick={onClick}
        type={type}
        {...props}
      >
        {leftIcon && leftIcon}
        {loading && (
          <span className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full"></span>
        )}
        <div className="p-2.5 flex justify-center items-center gap-2.5 focus:outline focus:outline-1 focus:outline-offset-[-1px] focus:outline-violet-500">
          <div className="justify-center">{children}</div>
        </div>
        {rightIcon && rightIcon}
      </button>
    );
  }
);

CTA.displayName = "CTA";

export default CTA;
