import React from 'react';
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
export declare function Popover({ isOpen, onClose, anchorRect, children, className, align, }: PopoverProps): import("react/jsx-runtime").JSX.Element | null;
export default Popover;
//# sourceMappingURL=Popover.d.ts.map