import type { CSSProperties } from "react";
import type { TableColumn } from "./Table";

const CSS_LENGTH = /^-?\d+(\.\d+)?(px|rem|em|%|ch|vw|vh)$/;

function isCssLength(value?: string): value is string {
  return !!value && CSS_LENGTH.test(value.trim());
}

/**
 * Fixed width stays put. min/max clamp a column that can still flex.
 * Columns with no size share whatever width is left.
 */
export function columnLayout(
  column: Pick<TableColumn, "width" | "minWidth" | "maxWidth">,
): { className: string; style?: CSSProperties } {
  const width = column.width?.trim();
  const minWidth = column.minWidth?.trim();
  const maxWidth = column.maxWidth?.trim();
  const style: CSSProperties = {};
  const classes = ["overflow-hidden"];

  const widthIsCss = isCssLength(width);
  const minIsCss = isCssLength(minWidth);
  const maxIsCss = isCssLength(maxWidth);
  const fixed = !!width && !minWidth && !maxWidth;

  if (!width && !minWidth && !maxWidth) {
    return { className: "min-w-0 flex-1 basis-0" };
  }

  if (!minWidth || minIsCss) classes.push("min-w-0");

  if (fixed) {
    classes.push("flex-none", "shrink-0");
  } else {
    classes.push("flex-auto");
  }

  if (width) {
    if (widthIsCss) style.width = width;
    else classes.push(width);
  }
  if (minWidth) {
    if (minIsCss) style.minWidth = minWidth;
    else classes.push(minWidth);
  }
  if (maxWidth) {
    if (maxIsCss) style.maxWidth = maxWidth;
    else classes.push(maxWidth);
  }

  return {
    className: classes.join(" "),
    style: Object.keys(style).length ? style : undefined,
  };
}
