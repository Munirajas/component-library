import { useEffect, useRef } from "react";
import { TreeNode } from "./interfaces";
import './styles.css'


export const MorePopover = ({anchor,node,onClose,onEdit,onDelete,onPin,onMove,onAdd}: {
    anchor: HTMLElement | null;
    node: TreeNode;
    onClose(): void;
    onEdit?(node: TreeNode) : void;
    onDelete?(node: TreeNode) : void;
    onPin?(node: TreeNode) : void;
    onMove?(node: TreeNode) : void;
    onAdd?(node: TreeNode) : void;
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if(ref.current && !ref.current.contains(e.target as Node) && anchor && !anchor.contains(e.target as Node)) {
                onClose();
            }
        };
        document.addEventListener("mousedown",handler);
        return () => document.removeEventListener("mousedown", handler);
    },[onClose,anchor]);

    if(!anchor) return null;

    const rect = anchor.getBoundingClientRect();
    const isClientNode = node.type === 'client';

    return (
        <div ref={ref} style={{top: rect.bottom+ window.screenY + 4,left: rect.left + window.scrollX - 40}} className="popoverStyle">
            <div className="arrowStyle" />
            {onAdd && <button className="popoverBtn" onClick={() => {onAdd?.(node);onClose()}} > Add Location</button>}
            {onEdit && !isClientNode && <button className="popoverBtn" onClick={() => {onEdit?.(node);onClose()}} >Edit </button> }
            {onDelete && !isClientNode && <button className="popoverBtn" onClick={() => {onDelete?.(node);onClose()}} >Delete </button>}
            {onPin &&  !isClientNode && <button className="popoverBtn" onClick={() => {onPin?.(node);onClose()}} >Pin </button>}
            {onMove &&  !isClientNode &&  <button className="popoverBtn" onClick={() => {onMove?.(node);onClose()}} >Move </button>}
        </div>
    )
}