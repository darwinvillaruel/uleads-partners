"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import clsx from "clsx";

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative">
      <pre className="px-4 py-3 overflow-x-auto text-xs leading-relaxed rounded-xl bg-ink-900 text-ink-50">
        <code>{code}</code>
      </pre>
      <button
        onClick={() => {
          navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          });
        }}
        className={clsx(
          "absolute right-2 top-2 flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium transition-colors",
          copied
            ? "bg-brand-500 text-ink-950"
            : "bg-ink-800 text-ink-300 hover:bg-ink-700 hover:text-white",
        )}>
        {copied ? (
          <Check className="h-3.5 w-3.5" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

const CODE_TAB_LABELS: Record<string, string> = {
  curl: "cURL",
  json: "JSON",
  javascript: "JavaScript",
  python: "Python",
};

export function CodeTabs({
  examples,
}: {
  examples: Partial<Record<"curl" | "json" | "javascript" | "python", string>>;
}) {
  const languages = Object.keys(examples) as Array<keyof typeof examples>;
  const [active, setActive] = useState(languages[0]);

  return (
    <div>
      <div className="mb-2 flex w-fit gap-1 rounded-lg bg-ink-100 p-1">
        {languages.map((lang) => (
          <button
            key={lang}
            type="button"
            onClick={() => setActive(lang)}
            className={clsx(
              "rounded-md px-3 py-1 text-xs font-medium transition-colors",
              active === lang
                ? "bg-white text-ink-900 shadow-sm"
                : "text-ink-500 hover:text-ink-700",
            )}>
            {CODE_TAB_LABELS[lang]}
          </button>
        ))}
      </div>
      <CodeBlock code={examples[active] ?? ""} />
    </div>
  );
}

export function MethodBadge({ method }: { method: string }) {
  return (
    <span className="rounded-md bg-brand-100 px-2 py-0.5 text-xs font-bold tracking-wide text-brand-700">
      {method}
    </span>
  );
}

export function StatusBadge({ code }: { code: string }) {
  const isSuccess = code.startsWith("2");
  const isClientError = code.startsWith("4");
  return (
    <span
      className={clsx(
        "rounded-full px-2 py-0.5 text-xs font-semibold",
        isSuccess && "bg-brand-100 text-brand-700",
        isClientError && "bg-amber-100 text-amber-700",
        !isSuccess && !isClientError && "bg-red-100 text-red-700",
      )}>
      {code}
    </span>
  );
}

export function Field({
  name,
  type,
  children,
}: {
  name: string;
  type: string;
  children: React.ReactNode;
}) {
  return (
    <tr className="border-b border-ink-100 last:border-0">
      <td className="px-5 py-3 font-mono text-xs font-medium align-top whitespace-nowrap text-ink-900">
        {name}
      </td>
      <td className="px-5 py-3 font-mono text-xs align-top whitespace-nowrap text-ink-400">
        {type}
      </td>
      <td className="px-5 py-3 text-sm align-top text-ink-600">{children}</td>
    </tr>
  );
}

export function FieldTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="border-b border-ink-200">
            <th className="px-5 py-3 text-xs font-medium tracking-widest text-ink-400">
              Field
            </th>
            <th className="px-5 py-3 text-xs font-medium tracking-widest text-ink-400">
              Type
            </th>
            <th className="px-5 py-3 text-xs font-medium tracking-widest text-ink-400">
              What it means
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export function SpecTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed text-sm text-left">
        <colgroup>
          <col className="w-[24%]" />
          <col className="w-[22%]" />
          <col className="w-[32%]" />
          <col className="w-[22%]" />
        </colgroup>
        <thead>
          <tr className="border-b border-ink-200">
            <th className="px-4 py-2.5 text-xs font-medium tracking-widest text-ink-400">
              Field label
            </th>
            <th className="px-4 py-2.5 text-xs font-medium tracking-widest text-ink-400">
              API key
            </th>
            <th className="px-4 py-2.5 text-xs font-medium tracking-widest text-ink-400">
              Type
            </th>
            <th className="px-4 py-2.5 text-xs font-medium tracking-widest text-ink-400">
              Sample value
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

const BASE_TYPE_LABELS: Record<string, string> = {
  string: "String",
  integer: "Integer",
  date: "Date",
};

export function SpecField({
  label,
  apiKey,
  baseType,
  picklist,
  multiple,
  sample,
}: {
  label: string;
  apiKey: string;
  baseType: string;
  picklist?: string[];
  multiple?: boolean;
  sample?: string;
}) {
  const [open, setOpen] = useState(false);
  const hasPicklist = Boolean(picklist && picklist.length > 0);

  return (
    <tr className="border-b border-ink-100 last:border-0 align-top">
      <td className="px-4 py-2.5 text-xs font-medium break-words text-ink-900">{label}</td>
      <td className="px-4 py-2.5 font-mono text-xs break-words text-brand-700">{apiKey}</td>
      <td className="px-4 py-2.5 text-xs text-ink-500">
        <div className="flex flex-wrap items-center gap-2">
          <span className="whitespace-nowrap">
            {BASE_TYPE_LABELS[baseType] ?? baseType}
            {hasPicklist ? ` - ${multiple ? "Multi-select" : "Picklist"}` : ""}
          </span>
          {hasPicklist && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="whitespace-nowrap rounded-md border border-ink-200 bg-white px-1.5 py-0.5 text-[11px] font-medium text-ink-500 transition-colors hover:border-ink-300 hover:text-ink-900"
            >
              {open ? "Hide" : "Show"} {picklist!.length} options
            </button>
          )}
        </div>
        {hasPicklist && open && (
          <div className="mt-2 max-h-36 w-full overflow-y-auto rounded-lg border border-ink-200 bg-ink-50 p-2">
            <div className="flex flex-wrap gap-1.5">
              {picklist!.map((option, i) => (
                <span
                  key={`${option}-${i}`}
                  className="rounded-md border border-ink-100 bg-white px-2 py-0.5 text-xs text-ink-600"
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
        )}
      </td>
      <td className="px-4 py-2.5 text-xs break-words text-ink-600">{sample || "—"}</td>
    </tr>
  );
}

export function WipNotice() {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-dashed border-ink-200 bg-ink-50 px-4 py-3">
      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
        Work in progress
      </span>
      <p className="text-xs text-ink-500">
        Full field mapping for this vertical isn&apos;t published yet — check back soon, or
        contact your Uleads partner manager for the current field list.
      </p>
    </div>
  );
}

export function Section({
  id,
  title,
  subtitle,
  delay,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id}
      className="mb-6 scroll-mt-24 bg-white border rounded-2xl border-ink-200 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}>
      <div className="px-5 py-4 border-b border-ink-200">
        <h3 className="text-sm font-semibold text-ink-900">{title}</h3>
        {subtitle && <p className="mt-0.5 text-xs text-ink-500">{subtitle}</p>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
