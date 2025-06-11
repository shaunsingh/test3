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

      // Check if the page is scrollable
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const isScrollable = documentHeight > windowHeight;

      // Only apply the effect if the page is scrollable
      if (!isScrollable) {
        header.style.transform = 'translateY(0)';
        return;
      }

      const footerRect = footerRef.current.getBoundingClientRect();
      const headerHeight = header.offsetHeight;

      // Calculate how much of the footer is visible
      const footerVisibleHeight = Math.max(0, windowHeight - footerRect.top);

      // Move header up by the same amount the footer is visible
      if (footerVisibleHeight > 0) {
        const translateY = Math.min(footerVisibleHeight, headerHeight);
        header.style.transform = `translateY(-${translateY}px)`;
      } else {
        header.style.transform = 'translateY(0)';
      }
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