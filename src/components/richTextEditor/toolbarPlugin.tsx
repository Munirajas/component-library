import { useCallback, useEffect, useRef, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  $createParagraphNode,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  INDENT_CONTENT_COMMAND,
  OUTDENT_CONTENT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  CAN_UNDO_COMMAND,
  CAN_REDO_COMMAND,
  COMMAND_PRIORITY_LOW,
  LexicalNode,
  TextFormatType,
} from "lexical";
import {
  $isListNode,
  ListNode,
  INSERT_UNORDERED_LIST_COMMAND,
  INSERT_ORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from "@lexical/list";
import {
  $isHeadingNode,
  $createHeadingNode,
  $createQuoteNode,
} from "@lexical/rich-text";
import { $createCodeNode, $isCodeNode } from "@lexical/code";
import { $setBlocksType, $patchStyleText } from "@lexical/selection";
import { $findMatchingParent, mergeRegister } from "@lexical/utils";
import { TOGGLE_LINK_COMMAND } from "@lexical/link";
import type { ChangeEvent } from "react";
import { INSERT_IMAGE_COMMAND } from "./imageNode";
import type { ToolbarBlockType } from "./interfaces";
import { InsertImage, Link, List, ListIndentDecrease, ListIndentIncrease, ListOrdered, TextAlignCenter, TextAlignEnd, TextAlignJustify, TextAlignStart, UnLink, Eraser, Undo, Redo, Bold, ItalicIcon, UnderlineIcon, Superscript, Strikethrough, Braces, Subscript } from "./icons";

const LOW_PRIORITY = COMMAND_PRIORITY_LOW;

const FONT_SIZE_OPTIONS = ["12px", "14px", "15px", "16px", "18px", "20px", "24px", "28px", "32px"];
const FONT_FAMILY_OPTIONS = ["Arial", "Georgia", "Impact", "Tahoma", "Times New Roman", "Verdana"];

export function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [blockType, setBlockType] = useState<ToolbarBlockType>("paragraph");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isCode, setIsCode] = useState(false);
  const [isSuperscript, setIsSuperscript] = useState(false);
  const [isSubscript, setIsSubscript] = useState(false);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return;

    setIsBold(selection.hasFormat("bold"));
    setIsItalic(selection.hasFormat("italic"));
    setIsUnderline(selection.hasFormat("underline"));
    setIsStrikethrough(selection.hasFormat("strikethrough"));
    setIsCode(selection.hasFormat("code"));
    setIsSuperscript(selection.hasFormat("superscript"));
    setIsSubscript(selection.hasFormat("subscript"));

    const anchorNode = selection.anchor.getNode();
    const targetNode =
      anchorNode.getKey() === "root"
        ? anchorNode
        : $findMatchingParent(anchorNode, (e) => {
          const parent = e.getParent();
          return parent !== null && parent.getKey() === "root";
        }) ?? anchorNode;

    const element = targetNode.getTopLevelElementOrThrow
      ? targetNode.getTopLevelElementOrThrow()
      : targetNode;

    if ($isListNode(element)) {
      const parentList = $findMatchingParent(anchorNode, $isListNode) as
        | ListNode
        | null;
      const type = parentList ? parentList.getListType() : element.getListType();
      setBlockType(type === "bullet" ? "bullet" : "number");
    } else if ($isHeadingNode(element)) {
      setBlockType(element.getTag() as ToolbarBlockType);
    } else if ($isCodeNode(element)) {
      setBlockType("code");
    } else {
      const type = (element as LexicalNode).getType?.();
      setBlockType(type === "quote" ? "quote" : "paragraph");
    }
  }, []);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => updateToolbar());
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateToolbar();
          return false;
        },
        LOW_PRIORITY
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        LOW_PRIORITY
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        LOW_PRIORITY
      )
    );
  }, [editor, updateToolbar]);

  const formatHeading = (tag: "h1" | "h2" | "h3") => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(tag));
      }
    });
  };

  const formatParagraph = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createParagraphNode());
      }
    });
  };

  const formatQuote = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createQuoteNode());
      }
    });
  };

  const formatCodeBlock = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createCodeNode());
      }
    });
  };

  const applyFontSize = (value: string) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, { "font-size": value });
      }
    });
  };

  const applyFontFamily = (value: string) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, { "font-family": value });
      }
    });
  };

  const applyColor = (value: string) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, { color: value });
      }
    });
  };

  const clearFormatting = () => {
    editor.update(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) return;
      ["bold", "italic", "underline", "strikethrough", "code", "superscript", "subscript"].forEach(
        (format) => {
          if (selection.hasFormat(format as TextFormatType)) {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, format as TextFormatType);
          }
        }
      );
      $patchStyleText(selection, {
        "font-size": "",
        "font-family": "",
        color: "",
      });
      $setBlocksType(selection, () => $createParagraphNode());
    });
  };

  const insertLink = () => {
    const url = window.prompt("Enter URL");
    if (!url) return;
    editor.dispatchCommand(TOGGLE_LINK_COMMAND, url);
  };

  const removeLink = () => {
    editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
  };

  const handleImageButtonClick = () => fileInputRef.current?.click();

  const handleImageFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
        src: reader.result as string,
        altText: file.name,
      });
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  return (
    <div className="rte-toolbar" role="toolbar" aria-label="Text formatting">
      <div className="rte-toolbar__row">
        <button
          type="button"
          aria-label="Bold"
          aria-pressed={isBold}
          className={`rte-toolbar__btn ${isBold ? "is-active" : ""}`}
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
        >
          {Bold}
        </button>
        <button
          type="button"
          aria-label="Italic"
          aria-pressed={isItalic}
          className={`rte-toolbar__btn ${isItalic ? "is-active" : ""}`}
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}
        >
          {ItalicIcon}
        </button>
        <button
          type="button"
          aria-label="Underline"
          aria-pressed={isUnderline}
          className={`rte-toolbar__btn ${isUnderline ? "is-active" : ""}`}
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")}
        >
          {UnderlineIcon}
        </button>
        <button
          type="button"
          aria-label="Strikethrough"
          aria-pressed={isStrikethrough}
          className={`rte-toolbar__btn ${isStrikethrough ? "is-active" : ""}`}
          onClick={() =>
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough")
          }
        >
          {Strikethrough}
        </button>
        <button
          type="button"
          aria-label="Inline code"
          aria-pressed={isCode}
          className={`rte-toolbar__btn ${isCode ? "is-active" : ""}`}
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code")}
        >
          {Braces}
        </button>
        <button
          type="button"
          aria-label="Superscript"
          aria-pressed={isSuperscript}
          className={`rte-toolbar__btn ${isSuperscript ? "is-active" : ""}`}
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "superscript")}
        >
          {Superscript}
        </button>
        <button
          type="button"
          aria-label="Subscript"
          aria-pressed={isSubscript}
          className={`rte-toolbar__btn ${isSubscript ? "is-active" : ""}`}
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "subscript")}
        >
          {Subscript}
        </button>
        <select
          aria-label="Block type"
          className="rte-toolbar__select"
          value={blockType}
          onChange={(e) => {
            const value = e.target.value as ToolbarBlockType;
            if (value === "paragraph") formatParagraph();
            else if (value === "h1" || value === "h2" || value === "h3")
              formatHeading(value);
            else if (value === "quote") formatQuote();
            else if (value === "code") formatCodeBlock();
          }}
        >
          <option value="paragraph">Normal</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="quote">Quote</option>
          <option value="code">Code block</option>
        </select>

        <select
          aria-label="Font size"
          className="rte-toolbar__select rte-toolbar__select--sm"
          defaultValue="16px"
          onChange={(e) => applyFontSize(e.target.value)}
        >
          {FONT_SIZE_OPTIONS.map((size) => (
            <option key={size} value={size}>
              {size.replace("px", "")}
            </option>
          ))}
        </select>

        <select
          aria-label="Font family"
          className="rte-toolbar__select"
          defaultValue=""
          onChange={(e) => applyFontFamily(e.target.value)}
        >
          <option value="">Font</option>
          {FONT_FAMILY_OPTIONS.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>

      <div className="rte-toolbar__row">
        <button
          type="button"
          aria-label="Bulleted list"
          aria-pressed={blockType === "bullet"}
          className={`rte-toolbar__btn ${blockType === "bullet" ? "is-active" : ""}`}
          onClick={() =>
            blockType === "bullet"
              ? editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined)
              : editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
          }
        >
          {List}
        </button>
        <button
          type="button"
          aria-label="Numbered list"
          aria-pressed={blockType === "number"}
          className={`rte-toolbar__btn ${blockType === "number" ? "is-active" : ""}`}
          onClick={() =>
            blockType === "number"
              ? editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined)
              : editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)
          }
        >
          {ListOrdered}
        </button>
        <button
          type="button"
          aria-label="Indent"
          className="rte-toolbar__btn"
          onClick={() => editor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined)}
        >
          {ListIndentIncrease}
        </button>
        <button
          type="button"
          aria-label="Outdent"
          className="rte-toolbar__btn"
          onClick={() => editor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined)}
        >
          {ListIndentDecrease}
        </button>
        <button
          type="button"
          aria-label="Align left"
          className="rte-toolbar__btn"
          onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left")}
        >
          {TextAlignStart}
        </button>
        <button
          type="button"
          aria-label="Align center"
          className="rte-toolbar__btn"
          onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center")}
        >
          {TextAlignCenter}
        </button>
        <button
          type="button"
          aria-label="Align right"
          className="rte-toolbar__btn"
          onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right")}
        >
          {TextAlignEnd}
        </button>
        <button
          type="button"
          aria-label="Justify"
          className="rte-toolbar__btn"
          onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify")}
        >
          {TextAlignJustify}
        </button>
        <label className="rte-toolbar__color" aria-label="Text color">
          <span aria-hidden="true">A</span>
          <input
            type="color"
            defaultValue="#101828"
            onChange={(e) => applyColor(e.target.value)}
          />
        </label>
        <button
          type="button"
          aria-label="Insert link"
          className="rte-toolbar__btn"
          onClick={insertLink}
        >
          {Link}
        </button>
        <button
          type="button"
          aria-label="Remove link"
          className="rte-toolbar__btn"
          onClick={removeLink}
        >
          {UnLink}
        </button>
        <button
          type="button"
          aria-label="Insert image"
          className="rte-toolbar__btn"
          onClick={handleImageButtonClick}
        >
          {InsertImage}
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="rte-hidden-input"
          onChange={handleImageFileChange}
        />
        <button
          type="button"
          aria-label="Clear formatting"
          className="rte-toolbar__btn"
          onClick={clearFormatting}
        >
          {Eraser}
        </button>
        <button
          type="button"
          aria-label="Undo"
          disabled={!canUndo}
          onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
          className="rte-toolbar__btn"
        >
          {Undo}
        </button>
        <button
          type="button"
          aria-label="Redo"
          disabled={!canRedo}
          onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
          className="rte-toolbar__btn"
        >
          {Redo}
        </button>
      </div>
    </div>
  );
}