"use client";

import { useEffect, useRef } from "react";
import { Header } from "@/components/home/header";
import { Footer } from "@/components/home/footer";

export function LayoutScrollWrapper({ children }: { children: React.ReactNode }) {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = document.querySelector('header') as HTMLElement;
    if (!header) return;

    const handleScroll = () => {
      if (!footerRef.current) return;

      const headerHeight = header.offsetHeight;
      const windowHeight = window.innerHeight;

      const heroHeader = document.querySelector('main header.h-screen') as HTMLElement | null;
      let heroTranslate = 0;
      if (heroHeader) {
        const heroRect = heroHeader.getBoundingClientRect();
        const halfway = heroRect.height / 2;

        const delta = halfway - heroRect.bottom;
        heroTranslate = Math.min(Math.max(delta, 0), headerHeight);
      }

      const footerRect = footerRef.current.getBoundingClientRect();
      const footerVisibleHeight = Math.max(0, windowHeight - footerRect.top);
      const footerTranslate = Math.min(footerVisibleHeight, headerHeight);

      const translateY = Math.max(heroTranslate, footerTranslate);
      header.style.transform = `translateY(-${translateY}px)`;
    };

    // Call once to set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Also listen for DOM changes that might affect scrollability
    const observer = new ResizeObserver(handleScroll);
    observer.observe(document.body);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <footer ref={footerRef}>
        <Footer />
      </footer>
    </>
  );
} 