import { ReactNode } from "react";
interface BaseLayoutProps {
    className?: string;
    children: ReactNode;
    leftCol: ReactNode;
    rightCol: ReactNode;
    menuOpen: boolean;
}
export declare function BaseLayout({ className, menuOpen, leftCol, rightCol, children, }: BaseLayoutProps): import("react/jsx-runtime").JSX.Element;
export default BaseLayout;
//# sourceMappingURL=BaseLayout.d.ts.map