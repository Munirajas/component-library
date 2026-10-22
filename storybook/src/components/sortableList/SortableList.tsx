"use client";

/* ===================================
   SORTABLE LIST
   Drop the row on another row to reorder.
   Arrow up/down on the drag handle does the same thing.
   =================================== */

import {
  type DragEvent,
  type KeyboardEvent,
  type ReactNode,
  useRef,
  useState,
} from "react";

export interface SortableListItemContext {
  index: number;
  isDragging: boolean;
  isDropTarget: boolean;
  dragHandleProps: {
    draggable: boolean;
    onDragStart: (event: DragEvent<HTMLElement>) => void;
    onDragEnd: () => void;
    onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
    tabIndex: number;
    role: "button";
    "aria-label": string;
  };
}

export interface SortableListProps<T> {
  items: T[];
  getId: (item: T) => string | number;
  onReorder: (items: T[]) => void;
  renderItem: (item: T, context: SortableListItemContext) => ReactNode;
  disabled?: boolean;
  className?: string;
  itemClassName?:
    | string
    | ((item: T, context: SortableListItemContext) => string);
}

export function moveItem<T>(
  items: T[],
  fromIndex: number,
  toIndex: number,
): T[] {
  if (
    fromIndex === toIndex ||
    fromIndex < 0 ||
    toIndex < 0 ||
    fromIndex >= items.length ||
    toIndex >= items.length
  ) {
    return items;
  }

  const next = [...items];
  const [moved] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, moved);
  return next;
}

export function SortableList<T>({
  items,
  getId,
  onReorder,
  renderItem,
  disabled = false,
  className = "",
  itemClassName = "",
}: SortableListProps<T>) {
  const [draggingId, setDraggingId] = useState<string | number | null>(null);
  const [dropTargetId, setDropTargetId] = useState<string | number | null>(
    null,
  );
  const dragIndexRef = useRef<number | null>(null);

  function resolveClassName(item: T, context: SortableListItemContext): string {
    if (typeof itemClassName === "function") {
      return itemClassName(item, context);
    }
    return itemClassName;
  }

  function startDrag(index: number) {
    if (disabled) return;
    dragIndexRef.current = index;
    setDraggingId(getId(items[index]));
  }

  function finishDrag() {
    dragIndexRef.current = null;
    setDraggingId(null);
    setDropTargetId(null);
  }

  function dropOn(toIndex: number) {
    const fromIndex = dragIndexRef.current;
    finishDrag();
    if (fromIndex === null || disabled) return;
    onReorder(moveItem(items, fromIndex, toIndex));
  }

  function moveByKeyboard(index: number, direction: -1 | 1) {
    if (disabled) return;
    onReorder(moveItem(items, index, index + direction));
  }

  return (
    <ul
      data-testid="components-sortable-list-sortablelist--ul--list"
      className={`list-none p-0 m-0 ${className}`}
      role="list"
      aria-disabled={disabled || undefined}
    >
      {items.map((item, index) => {
        const id = getId(item);
        const context: SortableListItemContext = {
          index,
          isDragging: draggingId === id,
          isDropTarget: dropTargetId === id,
          dragHandleProps: {
            draggable: !disabled,
            tabIndex: disabled ? -1 : 0,
            role: "button",
            "aria-label": "Drag to reorder",
            onDragStart: (event) => {
              if (disabled) {
                event.preventDefault();
                return;
              }
              event.dataTransfer.effectAllowed = "move";
              event.dataTransfer.setData("text/plain", String(id));
              // Drag the whole row, not just the grip.
              const preview = event.currentTarget.closest("li");
              if (preview) {
                const rect = preview.getBoundingClientRect();
                event.dataTransfer.setDragImage(
                  preview,
                  event.clientX - rect.left,
                  event.clientY - rect.top,
                );
              }
              startDrag(index);
            },
            onDragEnd: finishDrag,
            onKeyDown: (event) => {
              if (event.key === "ArrowUp") {
                event.preventDefault();
                moveByKeyboard(index, -1);
              }
              if (event.key === "ArrowDown") {
                event.preventDefault();
                moveByKeyboard(index, 1);
              }
            },
          },
        };

        return (
          <li
            data-testid="components-sortable-list-sortablelist--li--i1"
            key={String(id)}
            className={resolveClassName(item, context)}
            onDragOver={(event) => {
              if (disabled || dragIndexRef.current === null) return;
              event.preventDefault();
              event.dataTransfer.dropEffect = "move";
              setDropTargetId(id);
            }}
            onDragLeave={(event) => {
              if (event.currentTarget.contains(event.relatedTarget as Node)) {
                return;
              }
              if (dropTargetId === id) setDropTargetId(null);
            }}
            onDrop={(event) => {
              event.preventDefault();
              dropOn(index);
            }}
          >
            {renderItem(item, context)}
          </li>
        );
      })}
    </ul>
  );
}
