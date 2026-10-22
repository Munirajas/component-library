import { TreeNode } from "./interfaces";
import './styles.css';
export declare const MorePopover: ({ anchor, node, onClose, onEdit, onDelete, onPin, onMove, onAdd }: {
    anchor: HTMLElement | null;
    node: TreeNode;
    onClose(): void;
    onEdit?(node: TreeNode): void;
    onDelete?(node: TreeNode): void;
    onPin?(node: TreeNode): void;
    onMove?(node: TreeNode): void;
    onAdd?(node: TreeNode): void;
}) => import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=morePopover.d.ts.map