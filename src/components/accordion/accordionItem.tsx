import Icon from "../../icons";
import { clsx } from "clsx";
import { IAccordionListItem } from './interfaces';

export function AccordionItem(props: IAccordionListItem) {
    const { item, onCollapseHandler } = props;
    const { id, headerBadgeContent, headerTitle, bodyContent, isActive, disabled } = item || {};

    return (
        <div
            className={clsx(
                'w-full mb-5',
                isActive
                    ? "border-t-4 border-accordion-border-accent-active"
                    : disabled
                        ? "border-t border-accordion-border-accent-disabled"
                        : "border-t border-accordion-border-accent"
            )}
        >
            <button
                type="button"
                disabled={disabled}
                aria-expanded={isActive}
                onClick={() => onCollapseHandler(id)}
                className={clsx(
                    'w-full min-h-16 p-4 border-b flex items-center text-left',
                    disabled
                        ? "cursor-not-allowed border-accordion-border-accent-disabled text-accordion-border-accent-disabled"
                        : "cursor-pointer",
                    isActive
                        ? "border-accordion-border-accent-active text-accordion-border-accent-active"
                        : !disabled && "border-accordion-border-accent text-text-primary hover:text-accordion-border-accent-active"
                )}
            >
                {headerBadgeContent && (
                    <span
                        className={clsx(
                            'inline-flex w-9 h-9 mr-2.5 border rounded-full items-center justify-center shrink-0',
                            isActive
                                ? "bg-accordion-border-accent-active border-accordion-border-accent-active text-white"
                                : disabled
                                    ? "border-accordion-border-accent-disabled text-accordion-border-accent-disabled"
                                    : "border-accordion-border-accent"
                        )}
                    >
                        {headerBadgeContent}
                    </span>
                )}
                <span className="flex-1">{headerTitle}</span>
                <span className="inline-flex w-6 h-6 items-center justify-center shrink-0 ml-2">
                    <Icon
                        name={"ChevronTop"}
                        className={clsx(
                            'transition-transform duration-300',
                            isActive ? 'rotate-0' : 'rotate-180'
                        )}
                    />
                </span>
            </button>
            {isActive && (
                <div className={clsx('p-4')}>
                    {bodyContent}
                </div>
            )}
        </div>
    );
}
