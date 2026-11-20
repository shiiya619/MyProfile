"use client";

import { useState } from "react";
import {
  categoryLabels,
  type TimelineCategory,
  type TimelineItem,
} from "@/data/profile";

const categoryOrder = Object.keys(categoryLabels) as TimelineCategory[];

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function monthLabel(date: string) {
  const month = date.split("-")[1];
  return month ? MONTHS[Number(month) - 1] : "";
}

type Filter = "all" | TimelineCategory;

export function Timeline({ items }: { items: TimelineItem[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [order, setOrder] = useState<"desc" | "asc">("desc");

  const filters: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: "All", count: items.length },
    ...categoryOrder
      .map((c) => ({
        key: c,
        label: categoryLabels[c],
        count: items.filter((i) => i.category === c).length,
      }))
      .filter((f) => f.count > 0),
  ];

  const visible = items
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => filter === "all" || item.category === filter)
    .sort((a, b) => {
      const byDate = a.item.date.localeCompare(b.item.date);
      const diff = byDate !== 0 ? byDate : a.index - b.index;
      return order === "desc" ? -diff : diff;
    })
    .map(({ item }) => item);

  const years = new Map<string, TimelineItem[]>();
  for (const item of visible) {
    const year = item.date.slice(0, 4);
    years.set(year, [...(years.get(year) ?? []), item]);
  }

  return (
    <div>
      <div className="mb-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-line pb-4 font-mono text-xs tracking-wider uppercase">
        <div role="group" aria-label="Filter" className="contents">
          {filters.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.key)}
                className={`relative pb-1 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-sky after:transition-transform ${
                  active
                    ? "text-foreground after:scale-x-100"
                    : "text-muted after:scale-x-0 hover:text-foreground"
                }`}
              >
                {f.label}
                <sup className="ml-0.5 text-[10px] text-muted">{f.count}</sup>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setOrder(order === "desc" ? "asc" : "desc")}
          className="ml-auto pb-1 text-muted transition-colors hover:text-accent"
        >
          {order === "desc" ? "Newest ↓" : "Oldest ↑"}
        </button>
      </div>

      <div className="space-y-14 sm:space-y-20">
        {[...years].map(([year, list]) => (
          <div key={year} className="grid gap-4 sm:grid-cols-[7rem_1fr] sm:gap-8">
            <div>
              <h3 className="font-display text-5xl leading-none font-semibold tracking-tight text-accent tabular-nums sm:sticky sm:top-24">
                {year}
              </h3>
            </div>
            <ol>
              {list.map((item, i) => {
                const last = i === list.length - 1;
                return (
                  <li
                    key={`${item.date}-${item.title}`}
                    className="reveal relative grid grid-cols-[3rem_1.5rem_1fr] gap-x-3 py-3 sm:grid-cols-[3.5rem_1.5rem_1fr] sm:gap-x-4 sm:py-4"
                  >
                    {!last && (
                      <span
                        aria-hidden
                        className="absolute top-[23px] -bottom-[23px] left-[4.5rem] w-px bg-line sm:top-[27px] sm:-bottom-[27px] sm:left-[5.25rem]"
                      />
                    )}
                    <time
                      dateTime={item.date}
                      className="pt-1 font-mono text-xs tracking-wider text-muted uppercase"
                    >
                      {monthLabel(item.date)}
                    </time>
                    <span className="relative flex justify-center pt-1.5">
                      <span
                        className={
                          item.award
                            ? "size-3 rounded-full bg-sky ring-4 ring-sky-soft"
                            : "size-2.5 rounded-full border-2 border-sky bg-background"
                        }
                      />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] tracking-wider text-muted uppercase">
                        {categoryLabels[item.category]}
                      </p>
                      <h4 className="mt-1 text-lg leading-snug font-medium sm:text-xl">
                        {item.title}
                      </h4>
                      {item.organization && (
                        <p className="mt-1 text-sm text-muted">
                          {item.organization}
                        </p>
                      )}
                      {item.note && (
                        <p className="mt-2 text-sm leading-relaxed">
                          {item.note}
                        </p>
                      )}
                      {item.award && (
                        <p className="mt-3 font-bold">
                          <span className="marker">{item.award} 受賞</span>
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
