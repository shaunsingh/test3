import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/home/header";
import { LayoutScrollWrapper } from "@/components/layout-scroll-wrapper";

export const metadata: Metadata = {
  title: {
    template: "%s | Nyoom Engineering",
    default: "Nyoom Engineering",
  },
  description: "Functional Design for the Modern age",
  keywords: ["blog", "engineering", "rust", "ocaml", "lisp"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Nyoom Engineering",
    description: "Functional Design for the Modern age",
    siteName: "Nyoom Engineering",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyoom Engineering",
    description: "Functional Design for the Modern age",
  },
  other: {
    'theme-color': '#161616',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/logo-baked.svg" as="image" type="image/svg+xml" />
        <meta name="theme-color" content="#161616" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="antialiased dark">
        {/* Assign a stable key so React preserves the Header instance across route changes */}
        <Header key="site-header" />
        <LayoutScrollWrapper>
          {children}
        </LayoutScrollWrapper>
      </body>
    </html>
  );
}
