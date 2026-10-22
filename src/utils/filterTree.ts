import { TreeNode } from "../components/treeView/interfaces";


export const filterTree = (nodes: TreeNode[], term: string): TreeNode[] => {
    if(!term.trim()) return nodes;

    const lower = term.toLowerCase();
    const result: TreeNode[] = [];

    for(const node of nodes) {
        const labelMatches = node.label.toLowerCase().includes(lower);

        const filteredChildren = node.children ? filterTree(node.children,term) : [];

        if(labelMatches || filteredChildren.length > 0) {
            result.push({
                ...node,
                children: filteredChildren.length ? filteredChildren : undefined,
            });
        }
    }

    return result;
}