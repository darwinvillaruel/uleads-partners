"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { REGIONS, VERTICALS } from "./verticals-data";

export default function DocsToc() {
  const [activeSlug, setActiveSlug] = useState<string>(VERTICALS[0]?.slug ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveSlug(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );

    VERTICALS.forEach((vertical) => {
      const el = document.getElementById(vertical.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="space-y-5 text-sm">
      {REGIONS.map((region) => {
        const verticals = VERTICALS.filter((v) => v.region === region.id);
        if (verticals.length === 0) return null;
        return (
          <div key={region.id}>
            <p className="mb-1.5 px-2 text-xs font-semibold uppercase tracking-widest text-ink-400">
              {region.label}
            </p>
            <ul>
              {verticals.map((vertical) => (
                <li key={vertical.slug}>
                  <a
                    href={`#${vertical.slug}`}
                    className={clsx(
                      "block rounded-lg px-2 py-1.5 text-xs transition-colors",
                      activeSlug === vertical.slug
                        ? "bg-brand-100 font-medium text-brand-700"
                        : "text-ink-500 hover:bg-ink-100 hover:text-ink-900",
                    )}
                  >
                    {vertical.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
