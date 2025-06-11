import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/home/header";
import { Footer } from "@/components/home/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Nyoom Engineering",
    default: "Nyoom Engineering",
  },
  description: "Functional Design for the Modern age",
  keywords: ["organization", "blog"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased dark">
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
