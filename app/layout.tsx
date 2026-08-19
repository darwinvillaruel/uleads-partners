import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uleads Partner Integration Portal",
  description: "Integrate with Uleads' API — documentation and resources for partners.",
  openGraph: {
    title: "Uleads Partner Integration Portal",
    description: "Integrate with Uleads' API — documentation and resources for partners.",
    siteName: "Uleads Partner Integration Portal",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Uleads Partner Integration Portal",
    description: "Integrate with Uleads' API — documentation and resources for partners.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
