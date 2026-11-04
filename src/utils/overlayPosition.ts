export type OverlayPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end';

export interface OverlaySize {
  width: number;
  height: number;
}

export interface OverlayPosition {
  top: number;
  left: number;
  placement: OverlayPlacement;
}

const FLIP_MAP: Record<OverlayPlacement, OverlayPlacement> = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',
  'top-start': 'bottom-start',
  'top-end': 'bottom-end',
  'bottom-start': 'top-start',
  'bottom-end': 'top-end',
  'left-start': 'right-start',
  'left-end': 'right-end',
  'right-start': 'left-start',
  'right-end': 'left-end',
};

function place(
  trigger: DOMRect,
  overlay: OverlaySize,
  placement: OverlayPlacement,
  offset: number,
): { top: number; left: number } {
  switch (placement) {
    case 'top':
      return {
        top: trigger.top - overlay.height - offset,
        left: trigger.left + trigger.width / 2 - overlay.width / 2,
      };
    case 'top-start':
      return {
        top: trigger.top - overlay.height - offset,
        left: trigger.left,
      };
    case 'top-end':
      return {
        top: trigger.top - overlay.height - offset,
        left: trigger.right - overlay.width,
      };
    case 'bottom':
      return {
        top: trigger.bottom + offset,
        left: trigger.left + trigger.width / 2 - overlay.width / 2,
      };
    case 'bottom-start':
      return {
        top: trigger.bottom + offset,
        left: trigger.left,
      };
    case 'bottom-end':
      return {
        top: trigger.bottom + offset,
        left: trigger.right - overlay.width,
      };
    case 'left':
      return {
        top: trigger.top + trigger.height / 2 - overlay.height / 2,
        left: trigger.left - overlay.width - offset,
      };
    case 'left-start':
      return {
        top: trigger.top,
        left: trigger.left - overlay.width - offset,
      };
    case 'left-end':
      return {
        top: trigger.bottom - overlay.height,
        left: trigger.left - overlay.width - offset,
      };
    case 'right':
      return {
        top: trigger.top + trigger.height / 2 - overlay.height / 2,
        left: trigger.right + offset,
      };
    case 'right-start':
      return {
        top: trigger.top,
        left: trigger.right + offset,
      };
    case 'right-end':
      return {
        top: trigger.bottom - overlay.height,
        left: trigger.right + offset,
      };
    default:
      return {
        top: trigger.bottom + offset,
        left: trigger.left,
      };
  }
}

function overflowAmount(
  top: number,
  left: number,
  overlay: OverlaySize,
  padding: number,
): number {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const overflowTop = Math.max(0, padding - top);
  const overflowLeft = Math.max(0, padding - left);
  const overflowRight = Math.max(0, left + overlay.width + padding - vw);
  const overflowBottom = Math.max(0, top + overlay.height + padding - vh);
  return overflowTop + overflowLeft + overflowRight + overflowBottom;
}

export function computeOverlayPosition(
  trigger: DOMRect,
  overlay: OverlaySize,
  placement: OverlayPlacement,
  offset = 8,
  shouldFlip = true,
  padding = 8,
): OverlayPosition {
  let nextPlacement = placement;
  let coords = place(trigger, overlay, nextPlacement, offset);
  let amount = overflowAmount(coords.top, coords.left, overlay, padding);

  if (shouldFlip && amount > 0) {
    const flipped = FLIP_MAP[nextPlacement];
    const flippedCoords = place(trigger, overlay, flipped, offset);
    const flippedAmount = overflowAmount(
      flippedCoords.top,
      flippedCoords.left,
      overlay,
      padding,
    );
    if (flippedAmount < amount) {
      nextPlacement = flipped;
      coords = flippedCoords;
      amount = flippedAmount;
    }
  }

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const left = Math.min(
    Math.max(padding, coords.left),
    Math.max(padding, vw - overlay.width - padding),
  );
  const top = Math.min(
    Math.max(padding, coords.top),
    Math.max(padding, vh - overlay.height - padding),
  );

  return { top, left, placement: nextPlacement };
}

export function getPlacementSide(
  placement: OverlayPlacement,
): 'top' | 'bottom' | 'left' | 'right' {
  if (placement.startsWith('top')) return 'top';
  if (placement.startsWith('bottom')) return 'bottom';
  if (placement.startsWith('left')) return 'left';
  return 'right';
}
