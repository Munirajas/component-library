'use client';

import { useCallback, useEffect, useLayoutEffect, useState, type RefObject } from 'react';
import {
  computeOverlayPosition,
  type OverlayPlacement,
  type OverlayPosition,
} from '../utils/overlayPosition';

function sameCoords(
  prev: OverlayPosition | null,
  next: OverlayPosition | null,
): boolean {
  if (prev === next) return true;
  if (!prev || !next) return false;
  return (
    prev.top === next.top &&
    prev.left === next.left &&
    prev.placement === next.placement
  );
}

export function useOverlayPosition(
  triggerRef: RefObject<HTMLElement | null>,
  contentRef: RefObject<HTMLElement | null>,
  open: boolean,
  placement: OverlayPlacement,
  offset: number,
  shouldFlip = true,
) {
  const [coords, setCoords] = useState<OverlayPosition | null>(null);

  const updatePosition = useCallback(() => {
    const triggerEl = triggerRef.current;
    const contentEl = contentRef.current;
    if (!triggerEl || !contentEl) return;

    const next = computeOverlayPosition(
      triggerEl.getBoundingClientRect(),
      {
        width: contentEl.offsetWidth,
        height: contentEl.offsetHeight,
      },
      placement,
      offset,
      shouldFlip,
    );

    setCoords((prev) => (sameCoords(prev, next) ? prev : next));
  }, [triggerRef, contentRef, placement, offset, shouldFlip]);

  useLayoutEffect(() => {
    if (!open) {
      setCoords((prev) => (prev === null ? prev : null));
      return;
    }
    updatePosition();
    if (contentRef.current) return;
    const frame = requestAnimationFrame(() => updatePosition());
    return () => cancelAnimationFrame(frame);
  }, [open, updatePosition, contentRef]);

  useEffect(() => {
    if (!open) return;

    const contentEl = contentRef.current;
    const observer =
      typeof ResizeObserver !== 'undefined' && contentEl
        ? new ResizeObserver(() => updatePosition())
        : null;
    if (contentEl) observer?.observe(contentEl);

    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [open, updatePosition, contentRef]);

  return coords;
}
