import type { LexicalCommand, LexicalNode, NodeKey, SerializedLexicalNode, Spread } from "lexical";
import { DecoratorNode } from "lexical";
import type { ReactElement } from "react";
export interface ImagePayload {
    src: string;
    altText: string;
    key?: NodeKey;
}
export type SerializedImageNode = Spread<{
    src: string;
    altText: string;
    type: "image";
    version: 1;
}, SerializedLexicalNode>;
export declare class ImageNode extends DecoratorNode<ReactElement> {
    __src: string;
    __altText: string;
    static getType(): string;
    static clone(node: ImageNode): ImageNode;
    static importJSON(serializedNode: SerializedImageNode): ImageNode;
    exportJSON(): SerializedImageNode;
    constructor(src: string, altText: string, key?: NodeKey);
    createDOM(): HTMLElement;
    updateDOM(): false;
    decorate(): ReactElement;
}
export declare function $createImageNode({ src, altText, key }: ImagePayload): ImageNode;
export declare function $isImageNode(node: LexicalNode | null | undefined): node is ImageNode;
export declare const INSERT_IMAGE_COMMAND: LexicalCommand<ImagePayload>;
//# sourceMappingURL=imageNode.d.ts.map