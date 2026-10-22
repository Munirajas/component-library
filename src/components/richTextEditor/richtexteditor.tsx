import { useEffect, useRef } from "react";
import {
  $getRoot,
  $insertNodes,
  EditorState,
  LexicalEditor,
} from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListItemNode, ListNode } from "@lexical/list";
import { LinkNode, AutoLinkNode } from "@lexical/link";
import type { MutableRefObject } from "react";
import { CodeNode } from "@lexical/code";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";

import { ToolbarPlugin } from "./toolbarPlugin";
import { ImageNode } from "./imageNode";
import { ImagesPlugin } from "./imagesPlugin";
import type { RichTextEditorProps } from "./interfaces";
import "./richtexteditor.css";

const editorNodes = [
  HeadingNode,
  QuoteNode,
  ListNode,
  ListItemNode,
  LinkNode,
  AutoLinkNode,
  CodeNode,
  ImageNode,
];

function htmlToNodes(editor: LexicalEditor, html: string) {
  const parser = new DOMParser();
  const dom = parser.parseFromString(html, "text/html");
  return $generateNodesFromDOM(editor, dom);
}

function SyncExternalContentPlugin({
  html,
  lastEmittedHtml,
}: {
  html?: string;
  lastEmittedHtml: MutableRefObject<string | undefined>;
}) {
  const [editor] = useLexicalComposerContext();
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      // initialConfig.editorState already handled the first paint
      isFirstRun.current = false;
      return;
    }
    if (html === undefined || html === lastEmittedHtml.current) return;

    editor.update(() => {
      $getRoot().clear();
      const nodes = htmlToNodes(editor, html);
      $getRoot().select();
      $insertNodes(nodes);
    });
    lastEmittedHtml.current = html;
  }, [html, editor, lastEmittedHtml]);

  return null;
}

export function RichTextEditor({
  placeholder = "Start typing...",
  initialHtml,
  disabled = false,
  onChange,
  onBlur,
  name,
  invalid = false,
  minHeight = "160px",
  className = "",
}: RichTextEditorProps) {
  const lastEmittedHtml = useRef<string | undefined>(initialHtml);

  const initialConfig = {
    namespace: "RichTextEditor",
    theme: {},
    nodes: editorNodes,
    editable: !disabled,
    onError(error: Error) {
      throw error;
    },
    editorState: initialHtml
      ? (editor: LexicalEditor) => {
          const nodes = htmlToNodes(editor, initialHtml);
          $getRoot().select();
          $insertNodes(nodes);
        }
      : undefined,
  };

  const handleChange = (editorState: EditorState, editor: LexicalEditor) => {
    if (!onChange) return;
    editorState.read(() => {
      const html = $generateHtmlFromNodes(editor, null);
      const text = $getRoot().getTextContent();
      lastEmittedHtml.current = html;
      onChange({ html, text });
    });
  };

  return (
    <div
      className={`rte ${invalid ? "rte--invalid" : ""} ${className}`}
      data-field-name={name}
      onBlur={onBlur}
    >
      <LexicalComposer initialConfig={initialConfig}>
        {!disabled && <ToolbarPlugin />}
        <div className="rte-editor" style={{ minHeight }}>
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="rte-content" />
            }
            placeholder={<div className="rte-placeholder">{placeholder}</div>}
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
        <HistoryPlugin />
        <ListPlugin />
        <LinkPlugin />
        <ImagesPlugin />
        <SyncExternalContentPlugin html={initialHtml} lastEmittedHtml={lastEmittedHtml} />
        {onChange && <OnChangePlugin onChange={handleChange} />}
      </LexicalComposer>
    </div>
  );
}
