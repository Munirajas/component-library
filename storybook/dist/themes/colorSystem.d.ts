export type Theme = "default" | "training" | "ocean";
export type Mode = "light" | "dark";
export type ColorState = "default" | "hover" | "active" | "disabled";
export type ColorVariant = `${Theme}-${Mode}` | "default-light" | "default-dark" | "training-light" | "training-dark" | "ocean-light" | "ocean-dark";
export interface ColorClass {
    name: string;
    themes: {
        [K in Theme]: {
            [M in Mode]: {
                [S in ColorState]?: string;
            };
        };
    };
}
export declare const parseVariant: (variant: ColorVariant) => {
    theme: Theme;
    mode: Mode;
};
export declare const createVariant: (theme: Theme, mode: Mode) => ColorVariant;
export declare const colorSystem: ColorClass[];
export declare const getColor: (colorName: string, variant?: ColorVariant, state?: ColorState) => string | null;
export declare const getVariantColors: (variant: ColorVariant) => Record<string, Partial<Record<ColorState, string>>>;
export declare const generateVariantCSS: (variant: ColorVariant) => string;
export declare const applyVariantToDOM: (variant: ColorVariant) => void;
export declare const getAvailableColorClasses: () => string[];
export declare const getAvailableThemes: () => Theme[];
export declare const getAvailableModes: () => Mode[];
export declare const getAvailableVariants: () => ColorVariant[];
export declare const isValidColorClass: (colorName: string) => boolean;
export declare const createColorClass: (name: string, themes: ColorClass["themes"]) => ColorClass;
export declare const exportColorSystem: () => string;
export declare const importColorSystem: (json: string) => ColorClass[];
//# sourceMappingURL=colorSystem.d.ts.map