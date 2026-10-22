import type {
  LexicalCommand,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from "lexical";
import { DecoratorNode, createCommand } from "lexical";
import type { ReactElement } from "react";

export interface ImagePayload {
  src: string;
  altText: string;
  key?: NodeKey;
}

export type SerializedImageNode = Spread<
  {
    src: string;
    altText: string;
    type: "image";
    version: 1;
  },
  SerializedLexicalNode
>;

function ImageComponent({ src, altText }: { src: string; altText: string }) {
  return <img src={src} alt={altText} className="rte-image" />;
}

export class ImageNode extends DecoratorNode<ReactElement> {
  __src: string;
  __altText: string;

  static getType(): string {
    return "image";
  }

  static clone(node: ImageNode): ImageNode {
    return new ImageNode(node.__src, node.__altText, node.__key);
  }

  static importJSON(serializedNode: SerializedImageNode): ImageNode {
    return $createImageNode({
      src: serializedNode.src,
      altText: serializedNode.altText,
    });
  }

  exportJSON(): SerializedImageNode {
    return {
      src: this.__src,
      altText: this.__altText,
      type: "image",
      version: 1,
    };
  }

  constructor(src: string, altText: string, key?: NodeKey) {
    super(key);
    this.__src = src;
    this.__altText = altText;
  }

  createDOM(): HTMLElement {
    const div = document.createElement("div");
    div.className = "rte-image-wrapper";
    return div;
  }

  updateDOM(): false {
    return false;
  }

  decorate(): ReactElement {
    return <ImageComponent src={this.__src} altText={this.__altText} />;
  }
}

export function $createImageNode({ src, altText, key }: ImagePayload): ImageNode {
  return new ImageNode(src, altText, key);
}

export function $isImageNode(
  node: LexicalNode | null | undefined
): node is ImageNode {
  return node instanceof ImageNode;
}

export const INSERT_IMAGE_COMMAND: LexicalCommand<ImagePayload> = createCommand(
  "INSERT_IMAGE_COMMAND"
);