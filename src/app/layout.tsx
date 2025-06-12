import "./globals.css";
import type { Metadata } from "next";
import { LayoutScrollWrapper } from "@/components/layout-scroll-wrapper";

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
        <LayoutScrollWrapper>
          {children}
        </LayoutScrollWrapper>
      </body>
    </html>
  );
}
