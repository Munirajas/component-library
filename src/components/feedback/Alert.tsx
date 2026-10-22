import { ReactNode } from "react";
import { getAlertClasses } from "../ui/BaseComponents";
import { ExclamationCircleIcon, CloseCircleIcon } from "../../icons/icons";

export interface AlertProps {
  type?: "info" | "success" | "warning" | "error";
  title?: string;
  children: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: ReactNode;
  className?: string;
  variant?: "soft" | "solid" | "outline";
}

export function Alert({
  type = "info",
  title,
  children,
  dismissible = false,
  onDismiss,
  icon,
  className = "",
  variant = "soft",
}: AlertProps) {
  const alertClasses = getAlertClasses({ type, variant, className });

  const iconColors = {
    info: "text-blue-500",
    success: "text-green-500",
    warning: "text-yellow-500",
    error: "text-red-500",
  };

  const defaultIcons = {
    info: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
    ),
    success: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    warning: (
      <ExclamationCircleIcon className="w-5 h-5" />
    ),
    error: (
      <CloseCircleIcon className="w-5 h-5" />
    ),
  };

  return (
    <div className={`w-full ${alertClasses}`}>
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className={`flex-shrink-0 ${iconColors[type]}`}>
          {icon || defaultIcons[type]}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {title && (
            <h3 className="font-semibold mb-1 text-sm">
              {title}
            </h3>
          )}
          <div className="text-sm">
            {children}
          </div>
        </div>

        {/* Dismiss Button */}
        {dismissible && onDismiss && (
          <div className="flex-shrink-0">
            <button
              className="p-1 rounded-full hover:bg-black hover:bg-opacity-10 transition-colors"
              onClick={onDismiss}
              aria-label="Close alert"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Alert;
