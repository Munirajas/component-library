import type { ReactNode } from 'react';

export interface IAccordionItem {
    id: string | number,
    headerTitle: string,
    bodyContent: ReactNode,
    headerBadgeContent: string,
    isActive: boolean,
    disabled?: boolean
}

export interface AccordionProps {
  data: IAccordionItem[],
  className?: string;
  isSingleActive?: boolean,
  defaultActive?: number | string;
  onActiveChange?: (id: string | number | null) => void;
}

export interface IAccordionListItem {
    item: IAccordionItem,
    onCollapseHandler: (id:string | number) => void;
}
