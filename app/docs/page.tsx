import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Section, SpecTable, SpecField, WipNotice } from "../components/DocsUI";
import { REGIONS, VERTICALS } from "./verticals-data";
import DocsToc from "./DocsToc";

export default function DocsPage() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern bg-grid-size" aria-hidden="true" />

      <div className="relative">
        <Header />

        <main className="relative mx-auto max-w-screen-2xl px-4 py-8 sm:px-6">
          <div className="mb-8 animate-fade-up">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-600">
              API Reference
            </p>
            <h1 className="text-2xl font-bold text-ink-900 sm:text-3xl">Vertical fields reference</h1>
            <p className="mt-2 max-w-2xl text-sm text-ink-500">
              The data fields Uleads collects and can map into your CRM, per vertical. Ready to
              integrate?{" "}
              <Link href="/feedback" className="font-medium text-brand-700 underline underline-offset-2">
                See the buyer feedback API
              </Link>
              .
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
            <aside className="hidden lg:block">
              <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-ink-200 bg-white p-3 shadow-sm">
                <DocsToc />
              </div>
            </aside>

            <div>
              {REGIONS.map((region) => {
                const verticals = VERTICALS.filter((v) => v.region === region.id);
                if (verticals.length === 0) return null;
                return (
                  <div key={region.id} className="mb-8">
                    <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-400">
                      {region.label}
                    </h2>
                    {verticals.map((vertical, i) => (
                      <Section
                        key={vertical.slug}
                        id={vertical.slug}
                        title={vertical.name}
                        subtitle={vertical.kind === "rich" ? `${vertical.fields.length} fields` : "Work in progress"}
                        delay={i * 20}
                      >
                        {vertical.kind === "rich" ? (
                          <div className="overflow-hidden border rounded-xl border-ink-200">
                            <SpecTable>
                              {vertical.fields.map((field) => (
                                <SpecField
                                  key={field.apiKey}
                                  label={field.label}
                                  apiKey={field.apiKey}
                                  baseType={field.baseType}
                                  picklist={field.picklist}
                                  multiple={field.multiple}
                                  sample={field.sample}
                                />
                              ))}
                            </SpecTable>
                          </div>
                        ) : (
                          <WipNotice />
                        )}
                      </Section>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-ink-400">
              Field data sourced from the Uleads API documentation. Confirm exact specs for your
              verticals with your Uleads partner manager.
            </p>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}
