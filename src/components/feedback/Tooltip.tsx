'use client';

import React, {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { clsx } from 'clsx';
import { useOverlayPosition } from '../../hooks/useOverlayPosition';
import { getPlacementSide, type OverlayPlacement } from '../../utils/overlayPosition';

export type TooltipPlacement = OverlayPlacement;
export type TooltipTriggerMode = 'hover' | 'focus' | 'both';
export type TooltipColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';
export type TooltipSize = 'sm' | 'md' | 'lg';
export type TooltipRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';

export interface TooltipTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export interface TooltipContentProps {
  children: React.ReactNode;
  className?: string;
  placement?: TooltipPlacement;
  offset?: number;
  showArrow?: boolean;
}

export interface TooltipProps {
  children: React.ReactNode;
  content?: React.ReactNode;
  placement?: TooltipPlacement;
  offset?: number;
  showArrow?: boolean;
  delay?: number;
  closeDelay?: number;
  trigger?: TooltipTriggerMode;
  isDisabled?: boolean;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  className?: string;
  triggerClassName?: string;
  color?: TooltipColor;
  size?: TooltipSize;
  radius?: TooltipRadius;
  portalContainer?: Element | null;
}

export function TooltipTrigger({ children }: TooltipTriggerProps) {
  return <>{children}</>;
}

TooltipTrigger.displayName = 'TooltipTrigger';

export function TooltipContent({ children }: TooltipContentProps) {
  return <>{children}</>;
}

TooltipContent.displayName = 'TooltipContent';

function isElementOfType(
  child: React.ReactNode,
  type: React.ElementType,
): child is React.ReactElement {
  return React.isValidElement(child) && child.type === type;
}

const colorClasses: Record<TooltipColor, string> = {
  default: 'bg-gray-900 text-white',
  primary: 'bg-blue-600 text-white',
  secondary: 'bg-gray-600 text-white',
  success: 'bg-green-600 text-white',
  warning: 'bg-amber-500 text-gray-900',
  danger: 'bg-red-600 text-white',
};

const arrowColorClasses: Record<TooltipColor, string> = {
  default: 'bg-gray-900',
  primary: 'bg-blue-600',
  secondary: 'bg-gray-600',
  success: 'bg-green-600',
  warning: 'bg-amber-500',
  danger: 'bg-red-600',
};

const sizeClasses: Record<TooltipSize, string> = {
  sm: 'px-2 py-1 text-xs max-w-48',
  md: 'px-2.5 py-1.5 text-sm max-w-64',
  lg: 'px-3 py-2 text-base max-w-80',
};

const radiusClasses: Record<TooltipRadius, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

export function Tooltip({
  children,
  content,
  placement = 'top',
  offset,
  showArrow = false,
  delay = 300,
  closeDelay = 100,
  trigger = 'both',
  isDisabled = false,
  isOpen,
  defaultOpen = false,
  onOpenChange,
  className,
  triggerClassName,
  color = 'default',
  size = 'md',
  radius = 'md',
  portalContainer,
}: TooltipProps) {
  const isControlled = isOpen !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = isControlled ? isOpen : uncontrolledOpen;
  const triggerRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const delayRef = useRef(delay);
  const closeDelayRef = useRef(closeDelay);
  const tooltipId = useId();
  delayRef.current = delay;
  closeDelayRef.current = closeDelay;

  const childArray = React.Children.toArray(children);
  const triggerChild = childArray.find((child) => isElementOfType(child, TooltipTrigger));
  const contentChild = childArray.find((child) => isElementOfType(child, TooltipContent));
  const triggerNode = triggerChild ? triggerChild.props.children : children;
  const contentNode = content ?? (contentChild ? contentChild.props.children : null);
  const contentPlacement = contentChild?.props.placement ?? placement;
  const contentOffset = contentChild?.props.offset ?? offset ?? (showArrow || contentChild?.props.showArrow ? 10 : 6);
  const contentShowArrow = contentChild?.props.showArrow ?? showArrow;
  const contentExtraClass = contentChild?.props.className;
  const hasContent =
    contentNode !== null &&
    contentNode !== undefined &&
    contentNode !== false &&
    !(typeof contentNode === 'string' && contentNode.trim() === '');
  const coords = useOverlayPosition(
    triggerRef,
    contentRef,
    open && hasContent && !isDisabled,
    contentPlacement,
    contentOffset,
  );

  const setOpen = useCallback(
    (next: boolean) => {
      if (open === next) return;
      if (!isControlled) {
        setUncontrolledOpen(next);
      }
      onOpenChange?.(next);
    },
    [open, isControlled, onOpenChange],
  );

  const clearTimers = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleOpen = useCallback(() => {
    if (isDisabled || !hasContent) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    openTimer.current = setTimeout(() => setOpen(true), delayRef.current);
  }, [hasContent, isDisabled, setOpen]);

  const scheduleClose = useCallback(() => {
    if (openTimer.current) clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), closeDelayRef.current);
  }, [setOpen]);

  useEffect(() => {
    return () => clearTimers();
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, setOpen]);

  const hoverEnabled = trigger === 'hover' || trigger === 'both';
  const focusEnabled = trigger === 'focus' || trigger === 'both';

  const side = coords ? getPlacementSide(coords.placement) : getPlacementSide(contentPlacement);
  const arrowSideClass = {
    top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
    bottom: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
    left: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
    right: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
  }[side];

  const overlay =
    open && hasContent && !isDisabled ? (
      <div
        ref={contentRef}
        id={tooltipId}
        role="tooltip"
        data-placement={coords?.placement ?? contentPlacement}
        style={{
          position: 'fixed',
          zIndex: 60,
          top: coords?.top ?? -9999,
          left: coords?.left ?? -9999,
          visibility: coords ? 'visible' : 'hidden',
        }}
        className={clsx(
          'pointer-events-none z-60 font-sans shadow-lg',
          colorClasses[color],
          sizeClasses[size],
          radiusClasses[radius],
          className,
          contentExtraClass,
        )}
      >
        {contentShowArrow && (
          <span
            className={clsx(
              'absolute h-2 w-2 rotate-45',
              arrowColorClasses[color],
              arrowSideClass,
            )}
          />
        )}
        <div className="relative z-10 break-words">{contentNode}</div>
      </div>
    ) : null;

  const container =
    portalContainer ?? (typeof document !== 'undefined' ? document.body : null);

  return (
    <>
      <span
        ref={triggerRef}
        className={clsx('inline-flex', triggerClassName)}
        aria-describedby={open && hasContent ? tooltipId : undefined}
        onMouseEnter={hoverEnabled ? scheduleOpen : undefined}
        onMouseLeave={hoverEnabled ? scheduleClose : undefined}
        onFocus={focusEnabled ? scheduleOpen : undefined}
        onBlur={focusEnabled ? scheduleClose : undefined}
      >
        {triggerNode}
      </span>
      {overlay && container ? createPortal(overlay, container) : overlay}
    </>
  );
}

Tooltip.Trigger = TooltipTrigger;
Tooltip.Content = TooltipContent;

export default Tooltip;
