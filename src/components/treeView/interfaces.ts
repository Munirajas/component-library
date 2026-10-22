import { ReactNode, MouseEvent, CSSProperties } from "react";

export interface TreeNode {
    id: string;
    label: string;
    icon?: ReactNode;
    type?: string;
    parentId: string | null;
    children?: TreeNode[];
    [key: string]: string | number | ReactNode | TreeNode[];
}


export interface TreeViewProps {
    data: TreeNode[];
    activeId?: string;
    defaultActiveId?: string;
    onActiveChange?(node: TreeNode): void;
    expandedIds?: string[];
    defaultExpandedIds?: string[];
    defaultExpandedChange?(expandedIds: string[]): void;
    onMoreClick?(node: TreeNode, event: MouseEvent<HTMLButtonElement>): void;
    renderLabel?(node: TreeNode): ReactNode;
    onExpandedChange?(expandedIds: string[]): void;
    indent?: number;
    className?: string;
    style?: CSSProperties;
    showMoreButton?: boolean;
    onEdit?(node: TreeNode): void;
    onDelete?(node: TreeNode): void;
    onPin?(node: TreeNode): void;
    onMove?(node: TreeNode): void;
    onAdd?(node: TreeNode): void;
    showActiveId?: boolean;
    showSearchbar?: boolean
}

