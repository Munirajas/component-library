import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TreeNode, TreeViewProps } from "./interfaces";
import Icon from "../../icons";
import { clsx } from "clsx";
import './styles.css'
import { MorePopover } from "./morePopover";
import { filterTree } from '../../utils/filterTree'


export const TreeView: React.FC<TreeViewProps> = ({
    className = "", data,
    activeId,
    defaultActiveId,
    onActiveChange,
    expandedIds,
    defaultExpandedIds,
    onExpandedChange,
    onMoreClick,
    renderLabel,
    indent = 16,
    showMoreButton = false,
    onEdit,
    onDelete,
    onPin,
    onMove,
    onAdd,
    showActiveId = false,
    showSearchbar = false
}) => {
    const [internalActiveId, setInternalActiveId] = useState<string | undefined>(defaultActiveId);
    const isActiveControlled = activeId !== undefined;
    const currentActiveId = isActiveControlled ? activeId : internalActiveId;

    const [internalExpandedIds, setInternalExpandedIds] = useState<string[]>(() => defaultExpandedIds ?? []);
    const [popup, setPopup] = useState<{ anchor: HTMLElement | null; node: TreeNode | null }>({ anchor: null, node: null });
    const [searchInput, setSearchInput] = useState<string>("");
    const isSearching = searchInput.trim().length > 0;

    const isExpandedControlled = expandedIds !== undefined;

    const expandedIdsToUse = isExpandedControlled ? expandedIds! : internalExpandedIds;

    const expandedSet = useMemo(() => new Set(expandedIdsToUse), [expandedIdsToUse]);

    const handleToggleExpand = useCallback((id: string) => {
        const set = new Set(expandedIdsToUse);
        if (set.has(id)) {
            set.delete(id);
        } else {
            set.add(id);
        }
        const next = Array.from(set);

        if (!isExpandedControlled) {
            setInternalExpandedIds(next);
        }

    }, [expandedIdsToUse, isExpandedControlled, onExpandedChange]);

    const handleSelect = useCallback((node: TreeNode) => {
        if (!isActiveControlled) {
            setInternalActiveId(node.id)
        }
        onActiveChange?.(node);
    }, [isActiveControlled, onActiveChange]);

    const openPopup = (node: TreeNode, event: React.MouseEvent<HTMLButtonElement>) => {
        setPopup({ anchor: event.currentTarget, node });
    };

    const closePopup = () => setPopup({ anchor: null, node: null });

    const filteredData = useMemo(() => {
        return isSearching ? filterTree(data, searchInput) : data;
    }, [data, searchInput, isSearching]);

    useEffect(() => {
        if (!searchInput) return;
        const expanded: string[] = [];

        const collectExpandedIds = (nodes: TreeNode[]) => {
            for (const node of nodes) {
                if (node.children?.length) {
                    expanded.push(node.id);
                    collectExpandedIds(node.children);
                }
            }
        };
        collectExpandedIds(filteredData);

        if (!isExpandedControlled) {
            setInternalExpandedIds(expanded);
        }
        onExpandedChange?.(expanded);
    }, [isSearching, filteredData]);

    const renderNodes = useCallback((nodes: TreeNode[], depth: number) => {
        return nodes.map((node) => {
            const hasChildren = !!(node.children && node.children.length);
            const isExpanded = expandedSet.has(node.id);
            const isActive = node.id === currentActiveId;
            const paddingLeft = depth * indent;
            
            return (
                <div key={node.id} role="none" >
                    <div style={{ paddingLeft: paddingLeft }} className={'rowStyle'} role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined} aria-selected={isActive}>
                        {hasChildren ? (
                            <button type="button" aria-label={isExpanded ? "Collapse" : "Expand"}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleToggleExpand(node.id);
                                }}
                                className={'expandButtonStyle'}
                            >
                                <Icon
                                    name={"Chevron Down"}
                                    className={clsx(
                                        'transition-transform duration-300',
                                        isExpanded ? 'rotate-0' : '-rotate-90'
                                    )}
                                />
                            </button>
                        ) : (<span className={'expandSpacerStyle'} />)}
                        <button type="button" className={clsx("labelButtonBase", (isActive ? "labelButtonActive" : ""))} onClick={() => handleSelect(node)}>
                            {node.icon && (
                                <span className={"iconWrapperStyle"}> {node.icon}</span>
                            )}
                            <span>{renderLabel ? renderLabel(node) : (node.label ?? node.id)}</span>
                        </button>
                        {showMoreButton && (
                            <button type="button" aria-label="More Actions" className={'moreButtonStyle'} onClick={(event) => {
                                event.stopPropagation();
                                //onMoreClickHanlder(node, event);
                                openPopup(node, event);
                            }}
                            >...</button>
                        )}
                    </div>
                    {hasChildren && isExpanded && (
                        <div role="group">{renderNodes(node.children!, depth + 1)}</div>
                    )}
                </div>
            );
        });
    }, [currentActiveId, expandedSet, handleSelect, handleToggleExpand, indent, onMoreClick, renderLabel]);

    const treeHeightStyles = showSearchbar ? 'calc(100% - 50px)' : '100%';

    return (
        <>
            {showActiveId && <h2 className="activeIdWrapper">Active Element id: <b>{currentActiveId}</b> </h2>}
            <div role="tree" className={clsx("treeWrapper", className)} >
                {showSearchbar &&
                    <div className="searchWrapper">
                        <input type="text" placeholder="Search here .." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                    </div>
                }
                <div style={{height: treeHeightStyles}} className="overflow-auto">
                    {renderNodes(filteredData, 0)}
                </div>
                {popup.node && popup.anchor && (
                    <MorePopover
                        anchor={popup.anchor}
                        node={popup.node}
                        onClose={closePopup}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        onPin={onPin}
                        onMove={onMove}
                        onAdd={onAdd}
                    />
                )}
            </div>
        </>
    );
}

