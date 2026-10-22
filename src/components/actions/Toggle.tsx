import { useState } from 'react';

interface ToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}

export function Toggle({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = 'md',
  label,
  className = '',
}: ToggleProps) {
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const isChecked = isControlled ? checked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;
    const newValue = !isChecked;
    if (!isControlled) {
      setInternalChecked(newValue);
    }
    onChange?.(newValue);
  };

  const sizeClasses = {
    sm: 'w-12 h-6',
    md: 'w-16 h-8',
    lg: 'w-20 h-10',
  };

  const thumbSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const thumbTranslateClasses = {
    sm: isChecked ? 'translate-x-6' : 'translate-x-1',
    md: isChecked ? 'translate-x-8' : 'translate-x-1',
    lg: isChecked ? 'translate-x-10' : 'translate-x-1',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <button
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        className={`
          relative inline-flex items-center
          ${sizeClasses[size]}
          rounded-full transition-colors duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
          ${isChecked
            ? 'bg-cta-accent hover:bg-cta-hover'
            : 'bg-gray-200 hover:bg-gray-300'
          }
        `}
        role="switch"
        aria-checked={isChecked}
        aria-label={label || 'Toggle'}
      >
        <div
          className={`
            ${thumbSizeClasses[size]}
            bg-white rounded-full shadow-md
            transform transition-transform duration-200 ease-in-out
            ${thumbTranslateClasses[size]}
          `}
        />
      </button>

      {label && (
        <span className={`text-sm dark:text-gray-200 font-medium ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
          {label}
        </span>
      )}
    </div>
  );
}

export default Toggle;
