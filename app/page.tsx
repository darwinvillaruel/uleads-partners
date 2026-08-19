import Link from "next/link";
import { KeyRound, MessageSquareText, Gauge } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const VALUE_PROPS = [
  {
    icon: KeyRound,
    title: "Simple API-key auth",
    body: "Authenticate with the API key we issue you directly — no signup flow required.",
  },
  {
    icon: MessageSquareText,
    title: "Feedback API",
    body: "Report buyer feedback for one or more leads back to Uleads in a single request.",
  },
  {
    icon: Gauge,
    title: "Clear, versioned docs",
    body: "Every endpoint, field, and error code is documented with runnable examples.",
  },
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 pointer-events-none bg-grid-pattern bg-grid-size"
        aria-hidden="true"
      />

      <div className="relative">
        <Header />

        <main className="relative mx-auto max-w-screen-2xl px-4 py-8 sm:px-6">
          {/* Hero */}
          <section className="animate-fade-up py-20 text-center sm:py-28">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-600">
              Partner Integration Portal
            </p>
            <h1 className="mx-auto max-w-2xl text-4xl font-bold text-ink-900 sm:text-5xl">
              Build on Uleads
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-500 sm:text-lg">
              Receive leads across the verticals you serve, and report buyer
              feedback straight back into Uleads via a simple API.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link
                href="/docs"
                className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-ink-950 shadow-sm shadow-brand-500/20 transition-all hover:bg-brand-600 active:scale-95">
                Read the Docs
              </Link>
              <a
                href="mailto:partners@uleads.com.au"
                className="rounded-lg border border-ink-200 bg-white px-5 py-2.5 text-sm font-medium text-ink-500 transition-colors hover:border-ink-300 hover:text-ink-900">
                Contact us
              </a>
            </div>
          </section>

          {/* Value props */}
          <section className="grid gap-4 pb-16 sm:grid-cols-3">
            {VALUE_PROPS.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className="animate-fade-up rounded-2xl border border-ink-200 bg-white p-5 shadow-sm"
                style={{ animationDelay: `${i * 80}ms` }}>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-100">
                  <Icon className="h-5 w-5 text-brand-700" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-ink-900">
                  {title}
                </h3>
                <p className="text-sm text-ink-500">{body}</p>
              </div>
            ))}
          </section>

          {/* Bottom CTA */}
          <section className="animate-fade-up rounded-2xl border border-ink-200 bg-white p-8 text-center shadow-sm">
            <h2 className="mb-2 text-xl font-bold text-ink-900">
              Ready to integrate?
            </h2>
            <p className="mb-6 text-sm text-ink-500">
              Check out the API integration docs to get started.
            </p>
            <Link
              href="/feedback"
              className="inline-block rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-ink-950 shadow-sm shadow-brand-500/20 transition-all hover:bg-brand-600 active:scale-95">
              Read the Docs
            </Link>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
