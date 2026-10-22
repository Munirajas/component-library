import React, { useEffect, useRef } from 'react';

export interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  /** DOMRect of the trigger element used to anchor the popover. */
  anchorRect?: DOMRect | null;
  children: React.ReactNode;
  className?: string;
  /**
   * Which edge of the anchor to align the popover to.
   * - 'right': popover's right edge aligns with anchor's right edge (default)
   * - 'left': popover's left edge aligns with anchor's left edge
   */
  align?: 'left' | 'right';
}

export function Popover({
  isOpen,
  onClose,
  anchorRect,
  children,
  className,
  align = 'right',
}: PopoverProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
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

export default Popover;
