export interface RichTextEditorProps {
    /** Placeholder text shown when the editor is empty */
    placeholder?: string;
    /**
     * Changes that originated from this component's own `onChange` are
     * ignored, so normal typing never gets interrupted or cursor-jumped.
     */
    initialHtml?: string;
    /** Disables editing and hides the toolbar */
    disabled?: boolean;
    /** Fires on every content change, giving back HTML + plain text */
    onChange?: (value: {
        html: string;
        text: string;
    }) => void;
    /**
     * Fires when focus leaves the editor (toolbar clicks don't count, only
     * leaving the whole component). Wire this to React Hook Form's
     * `field.onBlur` so blur-triggered validation and `touched` state work.
     */
    onBlur?: () => void;
    /** Field name — useful for RHF's `Controller`, testing hooks, and debugging */
    name?: string;
    /** Adds an error/invalid style to the editor border, e.g. from `fieldState.invalid` */
    invalid?: boolean;
    /** Minimum height of the editable area (px or any CSS unit) */
    minHeight?: string;
    /** Optional className passed to the outer wrapper for layout control */
    className?: string;
}
export type ToolbarBlockType = "paragraph" | "h1" | "h2" | "h3" | "bullet" | "number" | "quote" | "code";
//# sourceMappingURL=interfaces.d.ts.map