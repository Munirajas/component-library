'use client'
import { useState } from "react";
import { AccordionItem } from "./accordionItem";
import { clsx } from "clsx";
import { AccordionProps, IAccordionItem } from './interfaces';

function initialOpenIds(
    data: IAccordionItem[],
    defaultActive?: number | string,
    isSingleActive?: boolean,
): Array<string | number> {
    if (defaultActive !== undefined && defaultActive !== null && defaultActive !== '') {
        return [defaultActive];
    }

    const activeIds = data.filter((item) => item.isActive).map((item) => item.id);
    if (isSingleActive) {
        return activeIds.slice(0, 1);
    }
    return activeIds;
}

export function Accordion({
    className = "", data = [], defaultActive, isSingleActive = false, onActiveChange
}: AccordionProps) {
    const [openIds, setOpenIds] = useState<Array<string | number>>(() =>
        initialOpenIds(data, defaultActive, isSingleActive)
    );
    const [syncedDefaultActive, setSyncedDefaultActive] = useState(defaultActive);

    if (defaultActive !== syncedDefaultActive) {
        setSyncedDefaultActive(defaultActive);
        if (defaultActive !== undefined && defaultActive !== null && defaultActive !== '') {
            setOpenIds((current) => {
                if (isSingleActive) {
                    return current.length === 1 && current[0] === defaultActive
                        ? current
                        : [defaultActive];
                }
                return current.includes(defaultActive)
                    ? current
                    : [...current, defaultActive];
            });
        }
    }

    const onCollapseHandler = (id: string | number) => {
        const isOpen = openIds.includes(id);
        const next = isSingleActive
            ? isOpen ? [] : [id]
            : isOpen
                ? openIds.filter((openId) => openId !== id)
                : [...openIds, id];

        setOpenIds(next);
        onActiveChange?.(isSingleActive ? (next[0] ?? null) : id);
    };

    return (
        <div className={clsx('flex flex-col w-full min-w-[320px]', className)}>
            {data.map((item: IAccordionItem) => (
                <AccordionItem
                    key={item.id}
                    item={{
                        ...item,
                        isActive: openIds.includes(item.id),
                    }}
                    onCollapseHandler={onCollapseHandler}
                />
            ))}
        </div>
    );
}
