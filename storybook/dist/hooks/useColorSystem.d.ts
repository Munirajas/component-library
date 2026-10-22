import { type ColorVariant, type ColorState, type Theme, type Mode } from "../themes/colorSystem";
interface UseColorSystemReturn {
    currentVariant: ColorVariant;
    currentTheme: Theme;
    currentMode: Mode;
    setVariant: (variant: ColorVariant) => void;
    setTheme: (theme: Theme) => void;
    setMode: (mode: Mode) => void;
    setThemeAndMode: (theme: Theme, mode: Mode) => void;
    getColorValue: (colorName: string, state?: ColorState) => string | null;
    getVariantColors: (variant?: ColorVariant) => Record<string, Partial<Record<ColorState, string>>>;
    generateCSS: (variant?: ColorVariant) => string;
    availableVariants: ColorVariant[];
    availableThemes: Theme[];
    availableModes: Mode[];
    availableColorClasses: string[];
}
export declare const useColorSystem: (defaultVariant?: ColorVariant, storageKey?: string) => UseColorSystemReturn;
export default useColorSystem;
//# sourceMappingURL=useColorSystem.d.ts.map