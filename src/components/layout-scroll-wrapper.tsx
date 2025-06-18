"use client";

// — Keeps the fixed <Header /> at the top.

import { Header } from "@/components/home/header";
import { Footer } from "@/components/home/footer";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function LayoutScrollWrapper({ children }: { children: React.ReactNode }) {
  const footerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const headerEl = document.querySelector('header') as HTMLElement | null;
    if (!headerEl) return;

    const headerHeight = headerEl.offsetHeight;

    // Early-exit for non-scrollable pages
    const pageIsScrollable = () => document.documentElement.scrollHeight > window.innerHeight + headerHeight;

    // If the page fits in the viewport, skip installing listeners entirely.
    if (!pageIsScrollable()) {
      headerEl.style.transform = "";
      return;
    }

    // Cache DOM references
    const heroEl = document.querySelector<HTMLElement>('main header.h-screen');

    // State to avoid unnecessary DOM writes
    let lastTranslate = -1;

    const computeTranslate = () => {
      if (!footerRef.current) return 0;

      let translate = 0;

      // hero
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        const halfway = rect.height / 2;
        const delta = halfway - rect.bottom; // >0 after scrolling past halfway
        translate = Math.max(translate, Math.min(Math.max(delta, 0), headerHeight));
      }

      // footer
      const footerRect = footerRef.current.getBoundingClientRect();
      const visibleHeight = Math.max(0, window.innerHeight - footerRect.top);
      translate = Math.max(translate, Math.min(visibleHeight, headerHeight));

      return translate;
    };

    // RAF throttle
    let ticking = false;
    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        // If the page has become non-scrollable (e.g. after a viewport resize
        // that increased height), clean up and bail.
        if (!pageIsScrollable()) {
          headerEl.style.transform = "";
          detachListeners();
          ticking = false;
          return;
        }

        const translate = computeTranslate();
        if (translate !== lastTranslate) {
          headerEl.style.transform = translate ? `translateY(-${translate}px)` : 'translateY(0)';
          lastTranslate = translate;
        }
        ticking = false;
      });
    };

    const detachListeners = () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };

    // Initial position
    onScrollOrResize();

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      detachListeners();
    };
  }, [pathname]);

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen pt-16">
        <main className="flex-1">
          {children}
        </main>
        <footer ref={footerRef}>
          <Footer />
        </footer>
      </div>
    </>
  );
} 