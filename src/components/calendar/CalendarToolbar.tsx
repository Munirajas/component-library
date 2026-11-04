import type { ReactNode } from 'react';
import { clsx } from 'clsx';
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '../../icons/icons';
import {
  CALENDAR_VIEW_LABELS,
  type CalendarToolbarConfig,
  type CalendarToolbarContext,
  type CalendarViewType,
} from './interfaces';

interface CalendarToolbarProps {
  context: CalendarToolbarContext;
  toolbar?: CalendarToolbarConfig;
  searchPlaceholder: string;
}

function NavButton({
  onClick,
  label,
  children,
}: {
  onClick: () => void;
  label: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 transition-colors hover:border-[var(--hl-calendar-primary)] hover:bg-[var(--hl-calendar-secondary)] hover:text-[var(--hl-calendar-primary)]"
    >
      {children}
    </button>
  );
}

export function CalendarToolbar({
  context,
  toolbar,
  searchPlaceholder,
}: CalendarToolbarProps) {
  const items = {
    navigation: true,
    today: true,
    title: true,
    search: true,
    viewSelector: true,
    ...toolbar?.items,
  };

  const defaultLeft = (
    <div className="flex items-center gap-2">
      {items.navigation && (
        <NavButton onClick={context.goPrev} label="Previous">
          <ChevronLeftIcon className="h-4 w-4" />
        </NavButton>
      )}
      {items.today && (
        <button
          type="button"
          onClick={context.goToday}
          className="h-10 rounded-lg border border-gray-200 bg-white px-4 text-sm font-semibold uppercase tracking-wide text-gray-700 transition-colors hover:border-[var(--hl-calendar-primary)] hover:bg-[var(--hl-calendar-secondary)] hover:text-[var(--hl-calendar-primary)]"
        >
          Today
        </button>
      )}
      {items.navigation && (
        <NavButton onClick={context.goNext} label="Next">
          <ChevronRightIcon className="h-4 w-4" />
        </NavButton>
      )}
      {items.title && (
        <div className="px-2 text-base font-semibold text-gray-900">
          {context.title}
        </div>
      )}
      {toolbar?.extraLeft}
    </div>
  );

  const defaultCenter = (
    <div className="flex w-full items-center justify-center gap-2">
      {items.search && (
        <div className="relative w-full max-w-md">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            value={context.searchValue}
            onChange={(e) => context.setSearchValue(e.target.value)}
            placeholder={searchPlaceholder}
            className="h-10 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-3 text-sm text-gray-800 outline-none transition-shadow placeholder:text-gray-400 focus:border-[var(--hl-calendar-primary)] focus:ring-2 focus:ring-[var(--hl-calendar-primary)]"
          />
        </div>
      )}
      {toolbar?.extraCenter}
    </div>
  );

  const defaultRight = (
    <div className="flex items-center gap-2">
      {toolbar?.extraRight}
      {items.viewSelector && (
        <div className="inline-flex overflow-hidden rounded-lg border border-gray-200 bg-white">
          {context.views.map((viewType) => {
            const active = context.view === viewType;
            return (
              <button
                key={viewType}
                type="button"
                onClick={() => context.changeView(viewType)}
                className={clsx(
                  'h-10 px-4 text-sm font-semibold uppercase tracking-wide transition-colors',
                  active
                    ? 'bg-[var(--hl-calendar-primary)] text-[var(--hl-calendar-primary-foreground)]'
                    : 'bg-white text-gray-600 hover:bg-[var(--hl-calendar-secondary)] hover:text-[var(--hl-calendar-primary)]',
                )}
              >
                {CALENDAR_VIEW_LABELS[viewType]}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );

  const left = toolbar?.renderLeft
    ? toolbar.renderLeft(context)
    : toolbar?.left ?? defaultLeft;
  const center = toolbar?.renderCenter
    ? toolbar.renderCenter(context)
    : toolbar?.center ?? defaultCenter;
  const right = toolbar?.renderRight
    ? toolbar.renderRight(context)
    : toolbar?.right ?? defaultRight;

  return (
    <div className="mb-4 grid grid-cols-1 items-center gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1fr)]">
      <div className="flex items-center justify-start">{left}</div>
      <div className="flex items-center justify-center">{center}</div>
      <div className="flex items-center justify-end">{right}</div>
    </div>
  );
}

export type { CalendarViewType };
