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

export type PopoverPlacement = OverlayPlacement;
export type PopoverTriggerType = 'click' | 'hover';
export type PopoverBackdrop = 'transparent' | 'opaque' | 'blur';

export interface PopoverTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export interface PopoverContentProps {
  children: React.ReactNode;
  className?: string;
  placement?: PopoverPlacement;
  offset?: number;
  shouldFlip?: boolean;
  showArrow?: boolean;
}

export interface PopoverProps {
  isOpen?: boolean;
  onClose?: () => void;
  anchorRect?: DOMRect | null;
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'right';
  trigger?: React.ReactNode;
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  placement?: PopoverPlacement;
  offset?: number;
  showArrow?: boolean;
  shouldFlip?: boolean;
  isDismissable?: boolean;
  shouldCloseOnBlur?: boolean;
  isDisabled?: boolean;
  triggerType?: PopoverTriggerType;
  backdrop?: PopoverBackdrop;
  contentClassName?: string;
  triggerClassName?: string;
  portalContainer?: Element | null;
}

export function PopoverTrigger({ children }: PopoverTriggerProps) {
  return <>{children}</>;
}

PopoverTrigger.displayName = 'PopoverTrigger';

export function PopoverContent({ children }: PopoverContentProps) {
  return <>{children}</>;
}

PopoverContent.displayName = 'PopoverContent';

function isElementOfType(
  child: React.ReactNode,
  type: React.ElementType,
): child is React.ReactElement {
  return React.isValidElement(child) && child.type === type;
}

function useOpenState(
  isOpen: boolean | undefined,
  defaultOpen: boolean,
  onOpenChange?: (open: boolean) => void,
  onClose?: () => void,
) {
  const isControlled = isOpen !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = isControlled ? isOpen : uncontrolledOpen;

  const setOpen = useCallback(
    (next: boolean) => {
      if (open === next) return;
      if (!isControlled) {
        setUncontrolledOpen(next);
      }
      onOpenChange?.(next);
      if (!next) {
        onClose?.();
      }
    },
    [open, isControlled, onOpenChange, onClose],
  );

  return { open, setOpen };
}

function AnchoredPopover({
  isOpen,
  onClose,
  anchorRect,
  children,
  className,
  align = 'right',
}: Pick<
  PopoverProps,
  'isOpen' | 'onClose' | 'anchorRect' | 'children' | 'className' | 'align'
>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose?.();
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose?.();
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !anchorRect) return null;

  const position =
    align === 'right'
      ? { top: anchorRect.bottom + 4, right: window.innerWidth - anchorRect.right }
      : { top: anchorRect.bottom + 4, left: anchorRect.left };

  return (
    <div
      ref={ref}
      style={{ position: 'fixed', zIndex: 50, ...position }}
      className={`rounded-lg border border-gray-200 bg-white shadow-lg ${className ?? ''}`}
    >
      {children}
    </div>
  );
}

function TriggeredPopover({
  isOpen,
  onClose,
  children,
  className,
  trigger,
  defaultOpen = false,
  onOpenChange,
  placement = 'bottom',
  offset = 8,
  showArrow = false,
  shouldFlip = true,
  isDismissable = true,
  shouldCloseOnBlur = true,
  isDisabled = false,
  triggerType = 'click',
  backdrop = 'transparent',
  contentClassName,
  triggerClassName,
  portalContainer,
}: PopoverProps) {
  const { open, setOpen } = useOpenState(isOpen, defaultOpen, onOpenChange, onClose);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const popoverId = useId();

  const childArray = React.Children.toArray(children);
  const triggerChild = childArray.find((child) => isElementOfType(child, PopoverTrigger));
  const contentChild = childArray.find((child) => isElementOfType(child, PopoverContent));
  const triggerNode = trigger ?? (triggerChild ? triggerChild.props.children : null);
  const contentNode = contentChild
    ? contentChild.props.children
    : triggerChild
      ? childArray.filter((child) => !isElementOfType(child, PopoverTrigger) && !isElementOfType(child, PopoverContent))
      : children;
  const contentPlacement = contentChild?.props.placement ?? placement;
  const contentOffset = contentChild?.props.offset ?? offset;
  const contentShouldFlip = contentChild?.props.shouldFlip ?? shouldFlip;
  const contentShowArrow = contentChild?.props.showArrow ?? showArrow;
  const contentExtraClass = contentChild?.props.className;
  const coords = useOverlayPosition(
    triggerRef,
    contentRef,
    open,
    contentPlacement,
    contentOffset,
    contentShouldFlip,
  );

  useEffect(() => {
    if (!open || !isDismissable) return;

    function handlePointerDown(e: PointerEvent) {
      const target = e.target as Node;
      if (
        contentRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }

    function handleBlur() {
      if (!shouldCloseOnBlur) return;
      requestAnimationFrame(() => {
        const active = document.activeElement;
        if (
          contentRef.current?.contains(active) ||
          triggerRef.current?.contains(active)
        ) {
          return;
        }
        setOpen(false);
      });
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    if (shouldCloseOnBlur) {
      document.addEventListener('focusin', handleBlur);
    }
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleBlur);
    };
  }, [open, isDismissable, shouldCloseOnBlur, setOpen]);

  useEffect(() => {
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, []);

  const toggle = () => {
    if (isDisabled) return;
    setOpen(!open);
  };

  const openPopover = () => {
    if (isDisabled) return;
    setOpen(true);
  };

  const scheduleClose = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const cancelClose = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };

  const hoverHandlers =
    triggerType === 'hover'
      ? {
          onMouseEnter: () => {
            cancelClose();
            openPopover();
          },
          onMouseLeave: scheduleClose,
        }
      : {};

  const clickHandlers =
    triggerType === 'click'
      ? {
          onClick: toggle,
        }
      : {};

  const side = coords ? getPlacementSide(coords.placement) : getPlacementSide(contentPlacement);
  const arrowSideClass = {
    top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
    bottom: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
    left: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
    right: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
  }[side];

  const overlay =
    open ? (
      <>
        {backdrop !== 'transparent' && (
          <div
            className={clsx(
              'fixed inset-0 z-40',
              backdrop === 'blur' ? 'bg-black/20 backdrop-blur-sm' : 'bg-black/40',
            )}
            onClick={() => isDismissable && setOpen(false)}
          />
        )}
        <div
          ref={contentRef}
          id={popoverId}
          role="dialog"
          data-placement={coords?.placement ?? contentPlacement}
          style={{
            position: 'fixed',
            zIndex: 50,
            top: coords?.top ?? -9999,
            left: coords?.left ?? -9999,
            visibility: coords ? 'visible' : 'hidden',
          }}
          className={clsx(
            'rounded-lg border border-gray-200 bg-white shadow-lg',
            className,
            contentClassName,
            contentExtraClass,
          )}
          onMouseEnter={triggerType === 'hover' ? cancelClose : undefined}
          onMouseLeave={triggerType === 'hover' ? scheduleClose : undefined}
        >
          {contentShowArrow && (
            <span
              className={clsx(
                'pointer-events-none absolute h-2.5 w-2.5 rotate-45 border-gray-200 bg-white',
                side === 'top' && 'border-b border-r',
                side === 'bottom' && 'border-t border-l',
                side === 'left' && 'border-t border-r',
                side === 'right' && 'border-b border-l',
                arrowSideClass,
              )}
            />
          )}
          {contentNode}
        </div>
      </>
    ) : null;

  const container =
    portalContainer ?? (typeof document !== 'undefined' ? document.body : null);

  return (
    <>
      <span
        ref={triggerRef}
        className={clsx('inline-flex', triggerClassName, isDisabled && 'opacity-50')}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? popoverId : undefined}
        {...clickHandlers}
        {...hoverHandlers}
      >
        {triggerNode}
      </span>
      {overlay && container ? createPortal(overlay, container) : overlay}
    </>
  );
}

export function Popover(props: PopoverProps) {
  if ('anchorRect' in props) {
    return (
      <AnchoredPopover
        isOpen={props.isOpen}
        onClose={props.onClose}
        anchorRect={props.anchorRect}
        className={props.className}
        align={props.align}
      >
        {props.children}
      </AnchoredPopover>
    );
  }

  return <TriggeredPopover {...props} />;
}

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;

export default Popover;
