import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-[1440px] mx-auto px-4 pb-4">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
