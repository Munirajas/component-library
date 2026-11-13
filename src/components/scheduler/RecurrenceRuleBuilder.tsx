"use client";

import {
  forwardRef,
  useId,
  useImperativeHandle,
  useState,
} from "react";
import {
  addMonths,
  DEFAULT_RECURRENCE_MONTHS,
  getDurationMinutes,
  getEndFromDuration,
} from "./recurrence-defaults";
import { hasDailyFrequency } from "./recurrence-engine";
import {
  isRecurrenceRuleValid,
  type RecurrenceRuleErrors,
  validateRecurrenceRule,
} from "./recurrence-validation";
import { ScheduleOptionFields } from "./ScheduleOptionFields";
import { TimeInput } from "./TimeInput";
import type {
  DailyIntervalUnit,
  Frequency,
  RecurrenceRuleValues,
  ScheduleOption,
  SetPosition,
  WeekDay,
} from "./types";
import { EMPTY_RECURRENCE_RULE } from "./types";

const ALL_DAYS: { key: WeekDay; label: string }[] = [
  { key: "SUN", label: "Sun" },
  { key: "MON", label: "Mon" },
  { key: "TUE", label: "Tue" },
  { key: "WED", label: "Wed" },
  { key: "THU", label: "Thu" },
  { key: "FRI", label: "Fri" },
  { key: "SAT", label: "Sat" },
];

const SET_POSITIONS: { value: SetPosition; label: string }[] = [
  { value: 1, label: "First" },
  { value: 2, label: "Second" },
  { value: 3, label: "Third" },
  { value: 4, label: "Fourth" },
  { value: -1, label: "Last" },
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function SectionHeader({ label, testId }: { label: string; testId: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        data-testid={testId}
        className="shrink-0 text-sm font-medium text-gray-700"
      >
        {label}
      </span>
      <div className="h-px flex-1 bg-gray-300" />
    </div>
  );
}

function parseNumberInput(raw: string): number {
  if (raw.trim() === "") return 0;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : 0;
}

function numberFieldValue(value: number | undefined): number | "" {
  return value ? value : "";
}

interface SwitchProps {
  label: string;
  checked: boolean;
  disabled?: boolean;
  testId: string;
  onChange: (checked: boolean) => void;
}

function ScheduleSwitch({
  label,
  checked,
  disabled,
  testId,
  onChange,
}: SwitchProps) {
  return (
    <div className="flex h-[38px] items-center gap-3">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <button
        data-testid={testId}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        disabled={disabled}
        className={`relative h-[26px] w-[50px] shrink-0 cursor-pointer rounded-full transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${
          checked ? "bg-[#3b82f6]" : "bg-[#ccc]"
        }`}
      >
        <span
          className={`absolute bottom-[3px] left-[3px] h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

export interface RecurrenceRuleBuilderHandle {
  validate: () => Promise<boolean>;
}

interface Props {
  value: RecurrenceRuleValues;
  onChange: (value: RecurrenceRuleValues) => void;
  error?: string | null;
  disabled?: boolean;
  /** The Active switch is shown when `onActiveChange` is set. */
  isActive?: boolean;
  onActiveChange?: (isActive: boolean) => void;
  /** Type dropdown shown in the same row as Recurring / Active when options exist. */
  types?: ScheduleOption[];
  typeId?: string;
  onTypeChange?: (typeId: string) => void;
  showRecurrence?: boolean;
  /** Months between the start date and the default "End by" date. */
  recurrenceMonths?: number;
}

export const RecurrenceRuleBuilder = forwardRef<
  RecurrenceRuleBuilderHandle,
  Props
>(function RecurrenceRuleBuilder(
  {
    value: rawValue,
    onChange,
    error,
    disabled = false,
    isActive = true,
    onActiveChange,
    types,
    typeId = "",
    onTypeChange,
    showRecurrence = true,
    recurrenceMonths = DEFAULT_RECURRENCE_MONTHS,
  },
  ref,
) {
  const showType = Boolean(types?.length && onTypeChange);
  const showSwitchRow = showType || showRecurrence || Boolean(onActiveChange);
  const fieldId = useId();
  const idFor = (name: string) => `${fieldId}${name}`;
  const value: RecurrenceRuleValues = {
    ...EMPTY_RECURRENCE_RULE,
    ...(rawValue ?? {}),
    daysOfWeek: rawValue?.daysOfWeek ?? EMPTY_RECURRENCE_RULE.daysOfWeek,
  };

  function patch(partial: Partial<RecurrenceRuleValues>) {
    onChange({ ...value, ...partial });
  }

  function toggleDay(day: WeekDay) {
    const has = value.daysOfWeek.includes(day);
    patch({
      daysOfWeek: has
        ? value.daysOfWeek.filter((d) => d !== day)
        : [...value.daysOfWeek, day],
    });
  }

  const isRecurring = value.frequency !== "NONE";
  const durationMinutes = getDurationMinutes(value);

  function handleDurationChange(raw: string) {
    const minutes = parseNumberInput(raw);
    if (minutes < 0) return;
    const end = getEndFromDuration(value, minutes);
    if (end) patch(end);
  }

  function handleRecurringToggle(checked: boolean) {
    if (checked) {
      patch({
        frequency: "DAILY",
        recurrenceEndDate:
          value.recurrenceEndDate ||
          (value.startDate ? addMonths(value.startDate, recurrenceMonths) : ""),
      });
    } else {
      patch({ frequency: "NONE" });
    }
  }

  const [attempted, setAttempted] = useState(false);
  const errors: RecurrenceRuleErrors = attempted
    ? validateRecurrenceRule(value)
    : {};

  useImperativeHandle(ref, () => ({
    validate: async () => {
      setAttempted(true);
      return isRecurrenceRuleValid(value);
    },
  }));

  return (
    <div className="flex flex-col gap-4 ">
      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-3">
        <div className="flex flex-col gap-1">
          <label
            data-testid="modules-amenities-components-schedule-recurrencerulebuilder--label--i1"
            className="text-sm font-medium text-gray-700"
          >
            Start
          </label>
          <div className="flex gap-2">
            <input
              data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--date"
              type="date"
              className="w-32 rounded-md border border-gray-300 px-2 py-2 text-sm bg-white disabled:bg-gray-50"
              value={value.startDate ?? ""}
              onChange={(e) => patch({ startDate: e.target.value })}
              disabled={disabled}
            />

            <TimeInput
              data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--time"
              className="w-28"
              value={value.startTime ?? ""}
              onChange={(next) => patch({ startTime: next })}
              disabled={disabled}
            />
          </div>
          {(errors.startDate || errors.startTime) && (
            <p className="text-xs text-red-600 mt-1">
              {errors.startDate ?? errors.startTime}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            data-testid="modules-amenities-components-schedule-recurrencerulebuilder--label--i2"
            className="text-sm font-medium text-gray-700"
          >
            End
          </label>
          <div className="flex gap-2">
            <input
              data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--date"
              type="date"
              className="w-32 rounded-md border border-gray-300 px-2 py-2 text-sm bg-white disabled:bg-gray-50"
              value={value.endDate}
              onChange={(e) => patch({ endDate: e.target.value })}
              disabled={disabled}
            />

            <TimeInput
              data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--time"
              className="w-28"
              value={value.endTime ?? ""}
              onChange={(next) => patch({ endTime: next })}
              disabled={disabled}
            />
          </div>
          {(errors.endDate || errors.endTime) && (
            <p className="text-xs text-red-600 mt-1">
              {errors.endDate ?? errors.endTime}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            data-testid="modules-amenities-components-schedule-recurrencerulebuilder--label--duration"
            className="text-sm font-medium text-gray-700"
          >
            Duration
          </label>
          <div className="flex items-center gap-2">
            <input
              data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--duration"
              type="number"
              min={0}
              className="w-16 rounded-md border border-gray-300 px-2 py-2 text-sm bg-white disabled:bg-gray-50"
              value={
                durationMinutes && durationMinutes > 0 ? durationMinutes : ""
              }
              onChange={(e) => handleDurationChange(e.target.value)}
              disabled={disabled}
            />

            <span className="text-sm text-gray-600">min</span>
          </div>
        </div>
      </div>
      {showSwitchRow && (
        <div className="flex flex-wrap items-end gap-6">
          {showType ? (
            <div className="min-w-[180px] flex-1">
              <ScheduleOptionFields
                types={types}
                typeId={typeId}
                disabled={disabled}
                onTypeChange={onTypeChange!}
              />
            </div>
          ) : null}
          {showRecurrence && (
            <ScheduleSwitch
              label="Recurring"
              checked={isRecurring}
              disabled={disabled}
              testId="modules-amenities-components-schedule-recurrencerulebuilder--button--switch"
              onChange={handleRecurringToggle}
            />
          )}
          {onActiveChange && (
            <ScheduleSwitch
              label="Active"
              checked={isActive}
              disabled={disabled}
              testId="modules-amenities-components-schedule-recurrencerulebuilder--button--active"
              onChange={onActiveChange}
            />
          )}
        </div>
      )}

      {showRecurrence && isRecurring && (
        <>
          <SectionHeader
            data-testid="modules-amenities-components-schedule-recurrencerulebuilder--sectionheader--frequency"
            label="Frequency"
            testId="modules-amenities-components-schedule-recurrencerulebuilder--label--pattern"
          />

          <div className="flex flex-col gap-1">
            <label
              data-testid="modules-amenities-components-schedule-recurrencerulebuilder--label--i3"
              className="text-sm font-medium text-gray-700"
            >
              Occurs
            </label>
            <select
              data-testid="modules-amenities-components-schedule-recurrencerulebuilder--select--i1"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white disabled:bg-gray-50"
              value={value.frequency}
              disabled={disabled}
              onChange={(e) =>
                patch({ frequency: e.target.value as Frequency })
              }
            >
              <option
                data-testid="modules-amenities-components-schedule-recurrencerulebuilder--option--i1"
                value="DAILY"
              >
                Daily
              </option>
              <option
                data-testid="modules-amenities-components-schedule-recurrencerulebuilder--option--i2"
                value="WEEKLY"
              >
                Weekly
              </option>
              <option
                data-testid="modules-amenities-components-schedule-recurrencerulebuilder--option--i3"
                value="MONTHLY"
              >
                Monthly
              </option>
              <option
                data-testid="modules-amenities-components-schedule-recurrencerulebuilder--option--i4"
                value="YEARLY"
              >
                Yearly
              </option>
            </select>
          </div>

          {value.frequency === "DAILY" && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">Recurs Every</span>
              <input
                data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--number"
                type="number"
                min={0}
                className="w-20 rounded-md border border-gray-300 px-3 py-2 text-sm bg-white disabled:bg-gray-50"
                value={numberFieldValue(value.interval)}
                disabled={disabled}
                onChange={(e) =>
                  patch({ interval: parseNumberInput(e.target.value) })
                }
              />

              <span className="text-sm text-gray-600">day(s)</span>
              {errors.interval && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.interval}
                </p>
              )}
            </div>
          )}

          {value.frequency === "WEEKLY" && (
            <>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Recurs Every</span>
                <input
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--number"
                  type="number"
                  min={0}
                  className="w-20 rounded-md border border-gray-300 px-3 py-2 text-sm bg-white disabled:bg-gray-50"
                  value={numberFieldValue(value.interval)}
                  disabled={disabled}
                  onChange={(e) =>
                    patch({ interval: parseNumberInput(e.target.value) })
                  }
                />

                <span className="text-sm text-gray-600">week(s)</span>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--label--i4"
                  className="text-sm font-medium text-gray-700"
                >
                  Days of the week
                </label>
                <div className="flex flex-wrap gap-2">
                  {ALL_DAYS.map((day) => {
                    const active = value.daysOfWeek.includes(day.key);
                    return (
                      <button
                        data-testid="modules-amenities-components-schedule-recurrencerulebuilder--button--button"
                        key={day.key}
                        type="button"
                        onClick={() => toggleDay(day.key)}
                        disabled={disabled}
                        className={`text-xs px-3 py-1.5 rounded-full border ${
                          active
                            ? "bg-blue-600 text-white border-blue-600 disabled:opacity-40"
                            : "bg-white text-gray-600 border-gray-300"
                        }`}
                      >
                        {day.label}
                      </button>
                    );
                  })}
                </div>
                {errors.daysOfWeek && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.daysOfWeek}
                  </p>
                )}
              </div>
            </>
          )}

          {hasDailyFrequency(value) && (
            <div className="flex flex-col gap-2">
              <SectionHeader
                data-testid="modules-amenities-components-schedule-recurrencerulebuilder--sectionheader--daily-frequency"
                label="Daily frequency"
                testId="modules-amenities-components-schedule-recurrencerulebuilder--label--dailyfrequency"
              />

              <div className="flex items-center gap-2 flex-wrap">
                <input
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--dailyonce"
                  type="radio"
                  id={idFor("dailyOnce")}
                  checked={value.dailyFrequency === "ONCE"}
                  onChange={() => patch({ dailyFrequency: "ONCE" })}
                  disabled={disabled}
                />

                <label
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--label--dailyonce"
                  htmlFor={idFor("dailyOnce")}
                  className="text-sm text-gray-700 w-28"
                >
                  Occurs once at
                </label>
                <TimeInput
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--onceat"
                  value={value.startTime ?? ""}
                  onChange={(next) => patch({ startTime: next })}
                  disabled={disabled || value.dailyFrequency !== "ONCE"}
                />
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <input
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--dailyevery"
                  type="radio"
                  id={idFor("dailyEvery")}
                  checked={value.dailyFrequency === "EVERY"}
                  onChange={() => patch({ dailyFrequency: "EVERY" })}
                  disabled={disabled}
                />

                <label
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--label--dailyevery"
                  htmlFor={idFor("dailyEvery")}
                  className="text-sm text-gray-700 w-28"
                >
                  Occurs every
                </label>
                <input
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--dailyinterval"
                  type="number"
                  min={0}
                  disabled={disabled || value.dailyFrequency !== "EVERY"}
                  className="w-16 rounded-md border border-gray-300 px-2 py-1.5 text-sm disabled:bg-gray-50 bg-white"
                  value={numberFieldValue(value.dailyInterval)}
                  onChange={(e) =>
                    patch({
                      dailyInterval: parseNumberInput(e.target.value),
                    })
                  }
                />

                <select
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--select--dailyintervalunit"
                  disabled={disabled || value.dailyFrequency !== "EVERY"}
                  className="rounded-md border border-gray-300 px-2 py-1.5 text-sm disabled:bg-gray-50 bg-white"
                  value={value.dailyIntervalUnit}
                  onChange={(e) =>
                    patch({
                      dailyIntervalUnit: e.target.value as DailyIntervalUnit,
                    })
                  }
                >
                  <option
                    data-testid="modules-amenities-components-schedule-recurrencerulebuilder--option--minute"
                    value="MINUTE"
                  >
                    minute(s)
                  </option>
                  <option
                    data-testid="modules-amenities-components-schedule-recurrencerulebuilder--option--hour"
                    value="HOUR"
                  >
                    hour(s)
                  </option>
                </select>
              </div>

              <div className="flex items-center gap-2 flex-wrap pl-6">
                <span className="text-sm text-gray-700 w-24">Starting at</span>
                <TimeInput
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--startingat"
                  value={value.startTime ?? ""}
                  onChange={(next) => patch({ startTime: next })}
                  disabled={disabled || value.dailyFrequency !== "EVERY"}
                />

                <span className="text-sm text-gray-700">Ending at</span>
                <TimeInput
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--endingat"
                  value={value.dailyEndTime ?? ""}
                  onChange={(next) => patch({ dailyEndTime: next })}
                  invalid={
                    value.dailyFrequency === "EVERY" && !!errors.dailyEndTime
                  }
                  disabled={disabled || value.dailyFrequency !== "EVERY"}
                />
              </div>
              {value.dailyFrequency === "EVERY" &&
                (errors.dailyInterval || errors.dailyEndTime) && (
                  <p className="text-xs text-red-600">
                    {errors.dailyInterval ??
                      errors.dailyEndTime}
                  </p>
                )}
            </div>
          )}

          {value.frequency === "MONTHLY" && (
            <div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-3">
              <label
                data-testid="modules-amenities-components-schedule-recurrencerulebuilder--label--i5"
                className="text-sm font-medium text-gray-700"
              >
                Recurrence pattern
              </label>

              <div className="flex items-center gap-3 flex-wrap">
                <input
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--monthlydaymode"
                  type="radio"
                  id={idFor("monthlyDayMode")}
                  checked={value.monthlyMode === "DAY_OF_MONTH"}
                  onChange={() => patch({ monthlyMode: "DAY_OF_MONTH" })}
                  disabled={disabled}
                  className="disabled:bg-gray-50"
                />

                <label
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--label--monthlydaymode"
                  htmlFor={idFor("monthlyDayMode")}
                  className="text-sm text-gray-700"
                >
                  Day
                </label>
                <input
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--number"
                  type="number"
                  min={1}
                  max={31}
                  disabled={disabled || value.monthlyMode !== "DAY_OF_MONTH"}
                  className="w-16 rounded-md border border-gray-300 px-2 py-1.5 text-sm disabled:bg-gray-50 bg-white"
                  value={value.monthlyDayOfMonth}
                  onChange={(e) =>
                    patch({ monthlyDayOfMonth: Number(e.target.value) || 1 })
                  }
                />

                <span className="text-sm text-gray-600">of every</span>
                <input
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--number"
                  type="number"
                  min={0}
                  disabled={disabled || value.monthlyMode !== "DAY_OF_MONTH"}
                  className="w-16 rounded-md border border-gray-300 px-2 py-1.5 text-sm disabled:bg-gray-50 bg-white "
                  value={numberFieldValue(value.interval)}
                  onChange={(e) =>
                    patch({ interval: parseNumberInput(e.target.value) })
                  }
                />

                <span className="text-sm text-gray-600">month(s)</span>
              </div>
              {value.monthlyMode === "DAY_OF_MONTH" &&
                errors.monthlyDayOfMonth && (
                  <p className="text-xs text-red-600">
                    {errors.monthlyDayOfMonth}
                  </p>
                )}

              <div className="flex items-center gap-2 flex-wrap">
                <input
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--monthlyposmode"
                  type="radio"
                  id={idFor("monthlyPosMode")}
                  disabled={disabled}
                  checked={value.monthlyMode === "WEEKDAY_POSITION"}
                  onChange={() => patch({ monthlyMode: "WEEKDAY_POSITION" })}
                />

                <label
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--label--monthlyposmode"
                  htmlFor={idFor("monthlyPosMode")}
                  className="text-sm text-gray-700"
                >
                  The
                </label>
                <select
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--select--i2"
                  disabled={
                    disabled || value.monthlyMode !== "WEEKDAY_POSITION"
                  }
                  className="rounded-md border border-gray-300 px-2 py-1.5 text-sm disabled:bg-gray-50 bg-white"
                  value={value.monthlySetPosition}
                  onChange={(e) =>
                    patch({
                      monthlySetPosition: Number(e.target.value) as SetPosition,
                    })
                  }
                >
                  {SET_POSITIONS.map((p) => (
                    <option
                      data-testid="modules-amenities-components-schedule-recurrencerulebuilder--option--i5"
                      key={p.value}
                      value={p.value}
                    >
                      {p.label}
                    </option>
                  ))}
                </select>
                <select
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--select--i3"
                  disabled={
                    disabled || value.monthlyMode !== "WEEKDAY_POSITION"
                  }
                  className="rounded-md border border-gray-300 px-2 py-1.5 text-sm disabled:bg-gray-50 bg-white"
                  value={value.monthlyWeekday}
                  onChange={(e) =>
                    patch({ monthlyWeekday: e.target.value as WeekDay })
                  }
                >
                  {ALL_DAYS.map((d) => (
                    <option
                      data-testid="modules-amenities-components-schedule-recurrencerulebuilder--option--i6"
                      key={d.key}
                      value={d.key}
                    >
                      {d.label}
                    </option>
                  ))}
                </select>
                <span className="text-sm text-gray-600">of every</span>
                <input
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--number"
                  type="number"
                  min={0}
                  disabled={
                    disabled || value.monthlyMode !== "WEEKDAY_POSITION"
                  }
                  className="w-16 rounded-md border border-gray-300 px-2 py-1.5 text-sm disabled:bg-gray-50 bg-white"
                  value={numberFieldValue(value.interval)}
                  onChange={(e) =>
                    patch({ interval: parseNumberInput(e.target.value) })
                  }
                />

                <span className="text-sm text-gray-600">month(s)</span>
              </div>
            </div>
          )}

          {value.frequency === "YEARLY" && (
            <div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-3">
              <label
                data-testid="modules-amenities-components-schedule-recurrencerulebuilder--label--i8"
                className="text-sm font-medium text-gray-700"
              >
                Recurrence pattern
              </label>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Recurs Every</span>
                <input
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--number"
                  type="number"
                  min={0}
                  className="w-16 rounded-md border border-gray-300 px-2 py-1.5 text-sm bg-white disabled:bg-gray-50"
                  value={numberFieldValue(value.interval)}
                  disabled={disabled}
                  onChange={(e) =>
                    patch({ interval: parseNumberInput(e.target.value) })
                  }
                />

                <span className="text-sm text-gray-600">year(s)</span>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <input
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--yearlyondate"
                  type="radio"
                  id={idFor("yearlyOnDate")}
                  checked={value.yearlyMode === "ON_DATE"}
                  onChange={() => patch({ yearlyMode: "ON_DATE" })}
                  className="bg-white"
                  disabled={disabled}
                />

                <label
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--label--yearlyondate"
                  htmlFor={idFor("yearlyOnDate")}
                  className="text-sm text-gray-700 w-12"
                >
                  On:
                </label>
                <select
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--select--i4"
                  disabled={disabled || value.yearlyMode !== "ON_DATE"}
                  className="rounded-md border border-gray-300 px-2 py-1.5 text-sm disabled:bg-gray-50 bg-white"
                  value={value.yearlyMonth}
                  onChange={(e) =>
                    patch({ yearlyMonth: Number(e.target.value) })
                  }
                >
                  {MONTHS.map((m, i) => (
                    <option
                      data-testid="modules-amenities-components-schedule-recurrencerulebuilder--option--i7"
                      key={m}
                      value={i + 1}
                    >
                      {m}
                    </option>
                  ))}
                </select>
                <input
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--number"
                  type="number"
                  min={1}
                  max={31}
                  disabled={disabled || value.yearlyMode !== "ON_DATE"}
                  className="w-16 rounded-md border border-gray-300 px-2 py-1.5 text-sm disabled:bg-gray-50 bg-white"
                  value={value.yearlyDayOfMonth}
                  onChange={(e) =>
                    patch({ yearlyDayOfMonth: Number(e.target.value) || 1 })
                  }
                />
              </div>
              {value.yearlyMode === "ON_DATE" && errors.yearlyDayOfMonth && (
                <p className="text-xs text-red-600">
                  {errors.yearlyDayOfMonth}
                </p>
              )}

              <div className="flex items-center gap-2 flex-wrap">
                <input
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--yearlyposmode"
                  type="radio"
                  id={idFor("yearlyPosMode")}
                  checked={value.yearlyMode === "WEEKDAY_POSITION"}
                  onChange={() => patch({ yearlyMode: "WEEKDAY_POSITION" })}
                  className="bg-white"
                  disabled={disabled}
                />

                <label
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--label--yearlyposmode"
                  htmlFor={idFor("yearlyPosMode")}
                  className="text-sm text-gray-700 w-12"
                >
                  On the:
                </label>
                <select
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--select--i5"
                  disabled={
                    disabled || value.yearlyMode !== "WEEKDAY_POSITION"
                  }
                  className="rounded-md border border-gray-300 px-2 py-1.5 text-sm disabled:bg-gray-50 bg-white"
                  value={value.yearlySetPosition}
                  onChange={(e) =>
                    patch({
                      yearlySetPosition: Number(e.target.value) as SetPosition,
                    })
                  }
                >
                  {SET_POSITIONS.map((p) => (
                    <option
                      data-testid="modules-amenities-components-schedule-recurrencerulebuilder--option--i8"
                      key={p.value}
                      value={p.value}
                    >
                      {p.label}
                    </option>
                  ))}
                </select>
                <select
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--select--i6"
                  disabled={
                    disabled || value.yearlyMode !== "WEEKDAY_POSITION"
                  }
                  className="rounded-md border border-gray-300 px-2 py-1.5 text-sm disabled:bg-gray-50 bg-white"
                  value={value.yearlyWeekday}
                  onChange={(e) =>
                    patch({ yearlyWeekday: e.target.value as WeekDay })
                  }
                >
                  {ALL_DAYS.map((d) => (
                    <option
                      data-testid="modules-amenities-components-schedule-recurrencerulebuilder--option--i9"
                      key={d.key}
                      value={d.key}
                    >
                      {d.label}
                    </option>
                  ))}
                </select>
                <span className="text-sm text-gray-600">of</span>
                <select
                  data-testid="modules-amenities-components-schedule-recurrencerulebuilder--select--i7"
                  disabled={
                    disabled || value.yearlyMode !== "WEEKDAY_POSITION"
                  }
                  className="rounded-md border border-gray-300 px-2 py-1.5 text-sm disabled:bg-gray-50 bg-white"
                  value={value.yearlyMonth}
                  onChange={(e) =>
                    patch({ yearlyMonth: Number(e.target.value) })
                  }
                >
                  {MONTHS.map((m, i) => (
                    <option
                      data-testid="modules-amenities-components-schedule-recurrencerulebuilder--option--i10"
                      key={m}
                      value={i + 1}
                    >
                      {m}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <SectionHeader
            data-testid="modules-amenities-components-schedule-recurrencerulebuilder--sectionheader--range-of-recurrence"
            label="Range of recurrence"
            testId="modules-amenities-components-schedule-recurrencerulebuilder--label--i11"
          />

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input
                data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--endondate"
                type="radio"
                id={idFor("endOnDate")}
                checked={value.recurrenceEndMode === "ON_DATE"}
                onChange={() => patch({ recurrenceEndMode: "ON_DATE" })}
                disabled={disabled}
              />

              <label
                data-testid="modules-amenities-components-schedule-recurrencerulebuilder--label--endondate"
                htmlFor={idFor("endOnDate")}
                className="text-sm text-gray-700 w-20"
              >
                End by
              </label>
              <input
                data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--date"
                type="date"
                className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm disabled:bg-gray-50 bg-white"
                value={value.recurrenceEndDate ?? ""}
                onChange={(e) => patch({ recurrenceEndDate: e.target.value })}
                disabled={value.recurrenceEndMode !== "ON_DATE" || disabled}
              />
            </div>
            {value.recurrenceEndMode === "ON_DATE" &&
              errors.recurrenceEndDate && (
                <p className="text-xs text-red-600">
                  {errors.recurrenceEndDate}
                </p>
              )}

            <div className="flex items-center gap-2">
              <input
                data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--endafter"
                type="radio"
                id={idFor("endAfter")}
                checked={value.recurrenceEndMode === "AFTER_OCCURRENCES"}
                onChange={() =>
                  patch({ recurrenceEndMode: "AFTER_OCCURRENCES" })
                }
                disabled={disabled}
              />

              <label
                data-testid="modules-amenities-components-schedule-recurrencerulebuilder--label--endafter"
                htmlFor={idFor("endAfter")}
                className="text-sm text-gray-700 w-20"
              >
                End after
              </label>
              <input
                data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--number"
                type="number"
                min={1}
                disabled={
                  disabled || value.recurrenceEndMode !== "AFTER_OCCURRENCES"
                }
                className="w-24 rounded-md border border-gray-300 px-3 py-2 text-sm disabled:bg-gray-50 bg-white"
                value={value.occurrenceCount ?? ""}
                onChange={(e) =>
                  patch({
                    occurrenceCount: Number(e.target.value) || undefined,
                  })
                }
              />

              <span className="text-sm text-gray-600">occurrences</span>
            </div>
            {value.recurrenceEndMode === "AFTER_OCCURRENCES" &&
              errors.occurrenceCount && (
                <p className="text-xs text-red-600">
                  {errors.occurrenceCount}
                </p>
              )}

            <div className="flex items-center gap-2">
              <input
                data-testid="modules-amenities-components-schedule-recurrencerulebuilder--input--noenddate"
                type="radio"
                id={idFor("noEndDate")}
                checked={value.recurrenceEndMode === "NEVER"}
                onChange={() => patch({ recurrenceEndMode: "NEVER" })}
                disabled={disabled}
              />

              <label
                data-testid="modules-amenities-components-schedule-recurrencerulebuilder--label--noenddate"
                htmlFor={idFor("noEndDate")}
                className="text-sm text-gray-700"
              >
                No end date
              </label>
            </div>

            {value.recurrenceEndMode === "NEVER" && (
              <p className="text-xs text-gray-500">
                Occurrences are generated up to 1 year out; more are added
                automatically as that window approaches.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
});
