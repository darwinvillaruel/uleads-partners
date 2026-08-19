import Link from "next/link";
import { KeyRound, Rocket, ShieldAlert } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CodeBlock, MethodBadge, StatusBadge, Field, FieldTable, Section } from "../components/DocsUI";

const BASE_URL = "https://api.uleads.com/v1";

const AUTH_EXAMPLE = `curl ${BASE_URL}/feedback \\
  -H "Authorization: Bearer YOUR_API_KEY"`;

const REQUEST_EXAMPLE = `curl -X POST ${BASE_URL}/feedback \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "leadId": 4821936,
    "disposition": "accepted",
    "notes": "Confirmed contact, booking scheduled"
  }'`;

const RESPONSE_EXAMPLE = `{
  "id": "fb_7c31e0",
  "leadId": 4821936,
  "disposition": "accepted",
  "receivedAt": "2026-08-19T10:22:03Z"
}`;

const ERROR_EXAMPLE = `{
  "error": {
    "code": "rate_limited",
    "message": "Too many requests. Retry after 12 seconds."
  }
}`;

const VERTICAL_CATEGORIES = [
  {
    name: "B2B",
    verticals: [
      "POS",
      "Payroll",
      "Payments",
      "Copiers",
      "VOIP",
      "Business Insurance",
      "Business Loans",
      "Fleet",
      "Fuel Cards",
      "Energy",
    ],
  },
  {
    name: "Home Services",
    verticals: ["Solar", "HVAC", "Windows", "Gutters", "Security", "Heat Pumps", "Doors"],
  },
  {
    name: "Insurance",
    verticals: ["Health", "Life", "Home", "Auto", "Pet", "Funeral", "Travel"],
  },
  {
    name: "Legal",
    verticals: ["TPD", "MVA", "Injury"],
  },
  {
    name: "Consumer Finance",
    verticals: ["SMSF", "Super", "Refi", "Property", "FHB"],
  },
  {
    name: "Seniors",
    verticals: ["Hearing", "Medical Alert"],
  },
];

export default function FeedbackPage() {
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
            <h1 className="text-2xl font-bold text-ink-900 sm:text-3xl">Buyer feedback API</h1>
            <p className="mt-2 max-w-2xl text-sm text-ink-500">
              Everything you need to send buyer feedback on your leads back into Uleads. Looking for
              the data fields we send per vertical instead?{" "}
              <Link href="/docs" className="font-medium text-brand-700 underline underline-offset-2">
                See the vertical fields reference
              </Link>
              .
            </p>
          </div>

          <Section title="Getting started" delay={0}>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100">
                  <KeyRound className="h-4 w-4 text-brand-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">1. Receive your key</p>
                  <p className="mt-0.5 text-xs text-ink-500">
                    Uleads issues your API key directly — no signup flow required.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100">
                  <Rocket className="h-4 w-4 text-brand-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">2. Send feedback</p>
                  <p className="mt-0.5 text-xs text-ink-500">
                    POST a disposition for each lead you receive, with your key in the Authorization header.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100">
                  <ShieldAlert className="h-4 w-4 text-brand-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">3. Handle errors</p>
                  <p className="mt-0.5 text-xs text-ink-500">
                    Check status codes and back off on 429s (see Rate limits below).
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Base URL" delay={40}>
            <p className="mb-3 text-sm text-ink-600">
              All requests are made against a single base URL:
            </p>
            <CodeBlock code={BASE_URL} />
          </Section>

          <Section title="Authentication" subtitle="API key via Bearer token" delay={80}>
            <p className="mb-3 text-sm text-ink-600">
              We issue you an API key directly — nothing to generate or request through this page.
              Pass it as a Bearer token in the <code className="rounded bg-ink-100 px-1 py-0.5 text-xs">Authorization</code> header
              on every request.
            </p>
            <CodeBlock code={AUTH_EXAMPLE} />
          </Section>

          <Section title="Available verticals" subtitle="Categories you can receive leads across" delay={110}>
            <div className="space-y-5">
              {VERTICAL_CATEGORIES.map((category) => (
                <div key={category.name}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-ink-400">
                    {category.name}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.verticals.map((vertical) => (
                      <span
                        key={vertical}
                        className="rounded-full border border-ink-200 bg-ink-50 px-3 py-1 text-xs font-medium text-ink-700"
                      >
                        {vertical}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Example endpoint" subtitle="Submit buyer feedback" delay={140}>
            <div className="mb-4 flex items-center gap-2">
              <MethodBadge method="POST" />
              <code className="font-mono text-sm text-ink-900">/feedback</code>
            </div>

            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-ink-400">
              Body parameters
            </p>
            <div className="mb-5 overflow-hidden border rounded-xl border-ink-200">
              <FieldTable>
                <Field name="leadId" type="integer">
                  The lead ID you received from Uleads.
                </Field>
                <Field name="disposition" type="string">
                  One of <code>accepted</code>, <code>rejected</code>, <code>duplicate</code>, <code>converted</code>.
                </Field>
                <Field name="notes" type="string (optional)">
                  Free-text context for the disposition.
                </Field>
              </FieldTable>
            </div>

            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-ink-400">
              Example request
            </p>
            <div className="mb-5">
              <CodeBlock code={REQUEST_EXAMPLE} />
            </div>

            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-ink-400">
              Example response
            </p>
            <CodeBlock code={RESPONSE_EXAMPLE} />
          </Section>

          <Section title="Errors" delay={180}>
            <div className="mb-4 overflow-hidden border rounded-xl border-ink-200">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-ink-200">
                    <th className="px-5 py-3 text-xs font-medium tracking-widest text-ink-400">
                      Status
                    </th>
                    <th className="px-5 py-3 text-xs font-medium tracking-widest text-ink-400">
                      Meaning
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-ink-100">
                    <td className="px-5 py-3"><StatusBadge code="200" /></td>
                    <td className="px-5 py-3 text-sm text-ink-600">Request succeeded.</td>
                  </tr>
                  <tr className="border-b border-ink-100">
                    <td className="px-5 py-3"><StatusBadge code="401" /></td>
                    <td className="px-5 py-3 text-sm text-ink-600">Missing or invalid API key.</td>
                  </tr>
                  <tr className="border-b border-ink-100">
                    <td className="px-5 py-3"><StatusBadge code="404" /></td>
                    <td className="px-5 py-3 text-sm text-ink-600">Resource not found.</td>
                  </tr>
                  <tr className="border-b border-ink-100">
                    <td className="px-5 py-3"><StatusBadge code="429" /></td>
                    <td className="px-5 py-3 text-sm text-ink-600">Rate limit exceeded — back off and retry.</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3"><StatusBadge code="500" /></td>
                    <td className="px-5 py-3 text-sm text-ink-600">Something went wrong on our end.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-ink-400">
              Example error body
            </p>
            <CodeBlock code={ERROR_EXAMPLE} />
          </Section>

          <Section title="Rate limits" delay={220}>
            <p className="text-sm text-ink-600">
              Requests are limited to <strong>60 per minute</strong> per API key. Exceeding this
              returns a <StatusBadge code="429" /> response — check the response body for a suggested
              retry delay.
            </p>
          </Section>

          <div className="text-center">
            <p className="text-xs text-ink-400">
              Questions? Contact your Uleads partner manager.
            </p>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}
