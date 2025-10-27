'use client'
import React, { useMemo, useState } from "react";

type Props = {
  initialDate?: Date;
  onSelect?: (date: Date) => void;
  locale?: string; // ex: "pt-BR"
  weekStart?: 0 | 1; // 0 = Sunday, 1 = Monday
};

export default function Calendar({
  initialDate = new Date(),
  onSelect,
  locale = "pt-BR",
  weekStart = 1,
}: Props) {
  const [current, setCurrent] = useState(() => startOfMonth(initialDate));
  const [selected, setSelected] = useState<Date | null>(initialDate ?? null);

  const monthName = useMemo(
    () => current.toLocaleString(locale, { month: "long", year: "numeric" }),
    [current, locale]
  );

  const weeks = useMemo(() => buildMonthGrid(current, weekStart), [current, weekStart]);

  function handlePrev() {
    setCurrent(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  }
  function handleNext() {
    setCurrent(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  }

  function handleSelect(d: Date) {
    setSelected(d);
    onSelect?.(d);
  }

  const weekdays = getWeekdayLabels(locale, weekStart);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrev}
          className="px-3 py-1 rounded hover:bg-gray-100"
          aria-label="Mês anterior"
        >
          ‹
        </button>

        <div className="text-center">
          <div className="text-sm text-gray-500">{monthName}</div>
        </div>

        <button
          onClick={handleNext}
          className="px-3 py-1 rounded hover:bg-gray-100"
          aria-label="Próximo mês"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-xs text-center text-gray-600 mb-1">
        {weekdays.map(d => (
          <div key={d} className="font-medium">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {weeks.map((week, wi) =>
          week.map((day, di) => {
            const isCurrentMonth = day.getMonth() === current.getMonth();
            const isToday = isSameDay(day, new Date());
            const isSelected = selected ? isSameDay(day, selected) : false;

            return (
              <button
                key={`${wi}-${di}`}
                onClick={() => handleSelect(day)}
                className={`h-10 flex items-center justify-center rounded-md focus:outline-none
                  ${isCurrentMonth ? "" : "text-gray-400"}
                  ${isSelected ? "bg-[#091068] text-white font-semibold" : "hover:bg-gray-100"}
                  ${isToday && !isSelected ? "ring-1 ring-gray-300" : ""}
                `}
                aria-pressed={isSelected}
              >
                <span className={isCurrentMonth ? "" : "opacity-80"}>{day.getDate()}</span>
              </button>
            );
          })
        )}
      </div>

      <div className="mt-4 text-xs text-gray-500">
        <div>Selecionado: {selected ? selected.toLocaleDateString(locale) : "—"}</div>
      </div>
    </div>
  );
}

// ---------- Helpers ----------

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function endOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function getWeekdayLabels(locale = "pt-BR", weekStart: 0 | 1 = 1) {
  // short weekday labels, starting on weekStart
  const base = [] as string[];
  // 2023-01-01 is a Sunday; we can generate from an arbitrary week
  const ref = new Date(Date.UTC(2023, 0, 1));
  for (let i = 0; i < 7; i++) {
    const day = new Date(ref);
    day.setDate(ref.getDate() + i + (weekStart === 1 ? 1 : 0));
    base.push(day.toLocaleDateString(locale, { weekday: "short" }));
  }

  // Normalize: keep 2-letter (e.g., "seg", "ter") or the short form
  return base.map(s => s.replace(/\./g, ""));
}

function buildMonthGrid(current: Date, weekStart: 0 | 1 = 1) {
  // returns array of weeks, each week is array of 7 Date objects
  const firstOfMonth = startOfMonth(current);
  const lastOfMonth = endOfMonth(current);

  // find the first day to show (start of first week)
  const firstWeekday = firstOfMonth.getDay(); // 0 (Sun) - 6 (Sat)
  const offset = (firstWeekday - weekStart + 7) % 7;
  const gridStart = new Date(firstOfMonth);
  gridStart.setDate(firstOfMonth.getDate() - offset);

  const days: Date[] = [];
  // show 6 weeks (6*7=42) to keep consistent height
  for (let i = 0; i < 42; i++) {
    const d = new Date(gridStart);
    d.setDate(gridStart.getDate() + i);
    days.push(d);
  }

  const weeks: Date[][] = [];
  for (let w = 0; w < 6; w++) {
    weeks.push(days.slice(w * 7, w * 7 + 7));
  }

  return weeks;
}
