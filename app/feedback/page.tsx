import Link from "next/link";
import { KeyRound, Rocket, ListChecks } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  CodeBlock,
  MethodBadge,
  Field,
  FieldTable,
  Section,
} from "../components/DocsUI";

const BASE_URL = "https://ulead.leadbyte.co.uk/restapi/v1.3";

const AUTH_EXAMPLE = `curl -X PUT ${BASE_URL}/leads/feedback \\
  -H "Content-Type: application/json" \\
  -d '{
    "key": "YOUR_API_KEY",
    "leads": [8419714],
    "feedback": "INTER"
  }'`;

const REQUEST_EXAMPLE = `curl -X PUT ${BASE_URL}/leads/feedback \\
  -H "Content-Type: application/json" \\
  -d '{
    "key": "YOUR_API_KEY",
    "leads": [8419714, 8419715],
    "BID": "BUY-A",
    "feedback": "INTER",
    "notes": "stuff",
    "overwrite": "yes"
  }'`;

const RESPONSE_EXAMPLE = `{
  "status": "Success",
  "message": "Feedback submitted",
  "details": {
    "8419714": "Feedback submitted",
    "8419715": "Feedback submitted"
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
    verticals: [
      "Solar",
      "HVAC",
      "Windows",
      "Gutters",
      "Security",
      "Heat Pumps",
      "Doors",
    ],
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
      <div
        className="fixed inset-0 pointer-events-none bg-grid-pattern bg-grid-size"
        aria-hidden="true"
      />

      <div className="relative">
        <Header />

        <main className="relative mx-auto max-w-screen-2xl px-4 py-8 sm:px-6">
          <div className="mb-8 animate-fade-up">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-600">
              API Reference
            </p>
            <h1 className="text-2xl font-bold text-ink-900 sm:text-3xl">
              Buyer feedback API
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-ink-500">
              Send buyer feedback on one or more leads back into Uleads via our
              Leadbyte-hosted endpoint. Looking for the data fields we send per
              vertical instead?{" "}
              <Link
                href="/docs"
                className="font-medium text-brand-700 underline underline-offset-2">
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
                  <p className="text-sm font-semibold text-ink-900">
                    1. Receive your key
                  </p>
                  <p className="mt-0.5 text-xs text-ink-500">
                    Uleads issues your API key directly — no signup flow
                    required.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100">
                  <Rocket className="h-4 w-4 text-brand-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">
                    2. Send feedback
                  </p>
                  <p className="mt-0.5 text-xs text-ink-500">
                    PUT one or more lead IDs and a feedback code, with your key
                    in the request body.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100">
                  <ListChecks className="h-4 w-4 text-brand-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">
                    3. Check the response
                  </p>
                  <p className="mt-0.5 text-xs text-ink-500">
                    Read the per-lead{" "}
                    <code className="rounded bg-ink-100 px-1 py-0.5 text-[11px]">
                      details
                    </code>{" "}
                    map to confirm every lead was accepted.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Base URL" delay={40}>
            <p className="mb-3 text-sm text-ink-600">
              All requests are made against our Leadbyte-hosted API:
            </p>
            <CodeBlock code={BASE_URL} />
          </Section>

          <Section
            title="Authentication"
            subtitle="API key in the request body"
            delay={80}>
            <p className="mb-3 text-sm text-ink-600">
              We issue you an API key directly — nothing to generate or request
              through this page. Include it as the{" "}
              <code className="rounded bg-ink-100 px-1 py-0.5 text-xs">
                key
              </code>{" "}
              field in the JSON request body on every call.
            </p>
            <CodeBlock code={AUTH_EXAMPLE} />
          </Section>

          {/* <Section
            title="Available verticals"
            subtitle="Categories you can receive leads across"
            delay={110}>
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
                        className="rounded-full border border-ink-200 bg-ink-50 px-3 py-1 text-xs font-medium text-ink-700">
                        {vertical}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section> */}

          <Section
            title="Example endpoint"
            subtitle="Add buyer feedback for a lead"
            delay={140}>
            <div className="mb-4 flex items-center gap-2">
              <MethodBadge method="PUT" />
              <code className="font-mono text-sm text-ink-900">
                /leads/feedback
              </code>
            </div>

            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-ink-400">
              Body parameters
            </p>
            <div className="mb-5 overflow-hidden border rounded-xl border-ink-200">
              <FieldTable>
                <Field name="key" type="string">
                  Your API key.
                </Field>
                <Field name="leads" type="integer[]">
                  One or more lead IDs to add buyer feedback to.
                </Field>
                <Field name="feedback" type="string">
                  Buyer feedback reference code — confirm valid codes with your
                  Uleads partner manager.
                </Field>
                <Field name="BID" type="string (optional)">
                  Single buyer ID to attribute the feedback to.
                </Field>
                <Field name="notes" type="string (optional)">
                  Free-text note attached to the feedback.
                </Field>
                <Field name="overwrite" type="string (optional)">
                  <code>yes</code> replaces all previous feedback on the
                  lead(s); <code>no</code> (default) adds a new feedback entry.
                </Field>
                <Field name="debug" type="string (optional)">
                  <code>yes</code> pretty-prints the JSON response;{" "}
                  <code>no</code> (default, recommended) returns compact output.
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

          <Section title="Response status" delay={180}>
            <div className="overflow-hidden border rounded-xl border-ink-200">
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
                  <tr>
                    <td className="px-5 py-3">
                      <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-700">
                        Success
                      </span>
                    </td>
                    <td className="px-5 py-3 text-sm text-ink-600">
                      Feedback submitted — check <code>details</code> for the
                      per-lead result.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-ink-500">
              Other status values aren&apos;t published here yet — confirm with
              your Uleads partner manager.
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
