import Link from "next/link";
import { Compass } from "lucide-react";
import Header from "./components/Header";

export default function NotFound() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern bg-grid-size" aria-hidden="true" />
      <Header />

      <main className="relative mx-auto flex max-w-screen-2xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <div className="w-full max-w-md animate-fade-up rounded-2xl border border-ink-200 bg-white px-8 py-12 shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100">
            <Compass className="h-7 w-7 text-brand-600" />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-600">Error 404</p>
          <h1 className="mt-2 text-3xl font-bold text-ink-900">Page not found</h1>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-500">
            That page doesn&apos;t exist, or may have moved. Double-check the link, or head back home.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-ink-950 shadow-sm shadow-brand-500/20 transition-all hover:bg-brand-600 active:scale-[0.98]"
          >
            Back home
          </Link>
        </div>
      </main>
    </div>
  );
}
