"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Footer } from "@/components/home/footer";

interface LayoutScrollWrapperProps {
  children: React.ReactNode;
}

export function LayoutScrollWrapper({ children }: LayoutScrollWrapperProps) {
  const footerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const headerEl = document.querySelector('header') as HTMLElement | null;
    if (!headerEl) return;

    // Hint browsers to optimize for transform animations
    headerEl.style.willChange = 'transform';
    const headerHeight = headerEl.offsetHeight;

    // Cache expensive calculations
    const pageIsScrollable = () => document.documentElement.scrollHeight > window.innerHeight + headerHeight;
    let isScrollable = pageIsScrollable();
    const heroEl = document.querySelector<HTMLElement>('main header.h-screen');
    let lastTranslate = -1;

    // Optimized translate calculation with cached values
    const computeTranslate = () => {
      if (!footerRef.current) return 0;
      let translate = 0;

      // Hero calculation (only if element exists)
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        const halfway = rect.height / 2;
        const delta = halfway - rect.bottom;
        translate = Math.max(translate, Math.min(Math.max(delta, 0), headerHeight));
      }

      // Footer calculation
      const footerRect = footerRef.current.getBoundingClientRect();
      const visibleHeight = Math.max(0, window.innerHeight - footerRect.top);
      return Math.max(translate, Math.min(visibleHeight, headerHeight));
    };

    let ticking = false;
    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!isScrollable) {
          headerEl.style.transform = "";
          detachListeners();
          ticking = false;
          return;
        }

        const translate = computeTranslate();
        if (translate !== lastTranslate) {
          headerEl.style.transform = translate ? `translate3d(0, -${translate}px, 0)` : 'translate3d(0, 0, 0)';
          lastTranslate = translate;
        }
        ticking = false;
      });
    };

    // Combined resize handler
    const updateScrollable = () => {
      isScrollable = pageIsScrollable();
      onScrollOrResize();
    };

    const detachListeners = () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', updateScrollable);
    };

    // Smooth scroll handler
    const handleSmoothScroll = (targetId: string) => {
      const element = document.getElementById(targetId);
      if (!element) return;

      const elementRect = element.getBoundingClientRect();
      const offset = window.scrollY + elementRect.top - headerHeight;

      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    };

    (window as Window & { smoothScrollTo?: (id: string) => void }).smoothScrollTo = handleSmoothScroll;

    // Initial setup
    onScrollOrResize();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', updateScrollable);

    return () => {
      detachListeners();
      delete (window as Window & { smoothScrollTo?: (id: string) => void }).smoothScrollTo;
    };
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <main className="flex-1">
        {children}
      </main>
      <footer ref={footerRef}>
        <Footer />
      </footer>
    </div>
  );
}