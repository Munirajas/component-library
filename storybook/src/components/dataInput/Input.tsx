/* ===================================
   INPUT COMPONENT
   =================================== */

import React, { forwardRef, useState } from 'react'
import { FormControl, getInputClasses } from '../ui/BaseComponents'

export interface InputProps {
  autocomplete?: string
  autofocus?: boolean
  label?: string
  id?: string
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'textarea' | 'datetime-local' | 'time' | 'file' | 'hidden' | 'week' | 'month' | 'checkbox' | 'color' | 'image' | 'radio' | 'range' | 'reset' | 'submit'
  name?: string
  value?: string
  defaultValue?: string
  disabled?: boolean
  error?: string
  helpText?: string
  clearable?: boolean
  required?: boolean
  className?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onClear?: () => void
  rows?: number
  cols?: number
}

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(({
  id,
  autocomplete,
  autofocus = false,
  label,
  placeholder,
  type = 'text',
  name,
  value,
  defaultValue,
  disabled = false,
  error,
  helpText,
  clearable = false,
  required = false,
  className,
  leftIcon,
  rightIcon,
  onChange,
  onClear,
  rows,
  cols,
  ...props
}, ref) => {
  // Determine if component is controlled or uncontrolled
  const isControlled = value !== undefined
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue || '')

  // Use controlled value if provided, otherwise use internal state
  const inputValue = isControlled ? value : uncontrolledValue

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value
    if (!isControlled) {
      setUncontrolledValue(newValue)
    }
    onChange?.(e)
  }

  const handleClear = () => {
    if (!isControlled) {
      setUncontrolledValue('')
    }
    onClear?.()
    // Trigger onChange with empty value
    if (onChange) {
      const syntheticEvent = {
        target: { value: '' },
        currentTarget: { value: '' }
      } as React.ChangeEvent<HTMLInputElement>
      onChange(syntheticEvent)
    }
  }

  const inputClasses = getInputClasses({
    variant: 'default',
    size: 'md',
    error: !!error,
    disabled,
    className
  })

  return (
    <FormControl
      label={label}
      required={required}
      error={error}
      helpText={helpText}
    >
      <div className="relative">
        {/* Left Icon */}
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            {leftIcon}
          </div>
        )}
        {type === 'textarea' ?
          <textarea
            id={id}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            name={name}
            value={inputValue || ''}
            placeholder={placeholder}
            rows={rows ?? 3}
            cols={cols}
            disabled={disabled}
            required={required}
            className={`bg-white w-full *:${inputClasses} ${leftIcon ? 'pl-10' : ''} ${(rightIcon || (clearable && inputValue)) ? 'pr-10' : ''}`}
            onChange={handleChange}
            autoComplete={autocomplete}
            autoFocus={autofocus}
            {...props}
          ></textarea>
          :
          <input
            id={id}
            ref={ref as React.Ref<HTMLInputElement>}
            type={type}
            name={name}
            value={inputValue || ''}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            className={`bg-white w-full *:${inputClasses} ${leftIcon ? 'pl-10' : ''} ${(rightIcon || (clearable && inputValue)) ? 'pr-10' : ''}`}
            onChange={handleChange}
            autoComplete={autocomplete}
            autoFocus={autofocus}
            {...props}
          />}

        {/* Right Icon or Clear Button */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          {clearable && inputValue && !disabled ? (
            <button
              type="button"
              onClick={handleClear}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Limpiar campo"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ) : rightIcon ? (
            <div className="text-gray-400 pointer-events-none">
              {rightIcon}
            </div>
          ) : null}
        </div>
      </div>
    </FormControl>
  )
})

Input.displayName = 'Input'

export default Input