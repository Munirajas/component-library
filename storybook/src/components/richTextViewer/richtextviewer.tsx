import { useMemo } from "react";
import DOMPurify from "dompurify";
import "./richtextviewer.css";

export interface RichTextViewerProps {
  /** The stored HTML string  */
  html: string;
  /** Optional className for layout control on the outer wrapper */
  className?: string;
}

export function RichTextViewer({ html, className = "" }: RichTextViewerProps) {
  const safeHtml = useMemo(
    () =>
      DOMPurify.sanitize(html, {
        // allow the tags/attrs the editor actually produces; nothing else
        ALLOWED_TAGS: [
          "p", "br", "strong", "em", "u", "s", "code", "pre",
          "h1", "h2", "h3", "blockquote",
          "ul", "ol", "li",
          "a", "img",
        ],
        ALLOWED_ATTR: ["href", "target", "rel", "src", "alt", "style"],
      }),
    [html]
  );

  if (!html) return null;

  return (
    <div
      className={`rte-content ${className}`}
      // safeHtml has just been sanitized above 
      // dangerouslySetInnerHTML is acceptable 
      dangerouslySetInnerHTML={{ __html: safeHtml }}
    />
  );
}