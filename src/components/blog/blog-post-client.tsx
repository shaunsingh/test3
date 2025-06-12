"use client";

import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";
import { useEffect, useState, useRef, useCallback, memo } from "react";

// Types
interface Section {
  id: string;
  label: string;
}

interface BlogPostMetadata {
  title: string;
  description: string;
  image: string;
  date: Date;
  category: string;
  author: string;
  slug: string;
  tags?: string[];
}

interface BlogPostClientProps {
  metadata: BlogPostMetadata;
  children: React.ReactNode;
}

// Reusable components
const ShareButton = memo(({ icon: Icon, label }: { icon: any; label: string }) => (
  <button
    className="p-2 border border-bg3 text-fg1 hover:text-fg3 hover:border-fg1 transition-all"
    aria-label={label}
  >
    <Icon className="h-5 w-5" />
  </button>
));

const TableOfContents = memo(({
  sections,
  activeSection,
  showToc,
  tocTranslateY
}: {
  sections: Section[];
  activeSection: string;
  showToc: boolean;
  tocTranslateY: number;
}) => (
  <div
    className={`fixed left-4 top-0 h-full w-48 flex flex-col justify-center transition-opacity duration-500 ${showToc ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    style={{ zIndex: 40, transform: `translateY(-${tocTranslateY}px)` }}
  >
    <div className="flex flex-col h-full" style={{ position: 'sticky', top: 32 }}>
      <nav className="flex-1 flex items-center">
        <ul className="space-y-2 w-full">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block py-2 px-4 text-sm transition-all ${activeSection === section.id
                  ? 'bg-bg2 text-fg3 font-medium'
                  : 'text-fg1 hover:text-fg2'
                  }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto flex flex-col items-start pl-4 mb-4">
        <div className="mb-2">
          <div className="text-ignore mb-1 font-normal text-xs" style={{ letterSpacing: 0 }}>contact</div>
          <a href="mailto:contact@nyoom.engineering" className="text-fg1 hover:text-fg3 transition-colors block font-normal text-xs">
            contact@nyoom.engineering
          </a>
        </div>
      </div>
    </div>
  </div>
));

export default function BlogPostClient({ metadata, children }: BlogPostClientProps) {
  // State
  const [showToc, setShowToc] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [tocTranslateY, setTocTranslateY] = useState(0);

  // Refs
  const heroRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  // Mock sections - in a real implementation, these could be extracted from MDX
  const sections: Section[] = [
    { id: "introduction", label: "Introduction to Natural Beauty" },
    { id: "gallery", label: "Image Gallery" },
    { id: "science", label: "The Science Behind Nature's Beauty" },
    { id: "creativity", label: "How Nature Inspires Creativity" },
    { id: "tips", label: "Tips for Connecting with Nature" },
    { id: "conclusion", label: "Conclusion" },
  ];

  // Handlers
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    let heroBottom = 0;

    if (heroRef.current) {
      heroBottom = heroRef.current.getBoundingClientRect().bottom + window.scrollY;
    }

    setShowToc(scrollY > heroBottom - 80);

    const sections = document.querySelectorAll('section[id], h2[id]');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        setActiveSection(section.id);
      }
    });

    if (footerRef.current) {
      const footerRect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const footerVisibleHeight = Math.max(0, windowHeight - footerRect.top);
      setTocTranslateY(footerVisibleHeight);
    }
  }, []);

  // Effects
  useEffect(() => {
    const footer = document.querySelector('footer');
    footerRef.current = footer as HTMLElement;

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    const observer = new ResizeObserver(handleScroll);
    observer.observe(document.body);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      observer.disconnect();
    };
  }, [handleScroll]);

  return (
    <div className="flex flex-col bg-background min-h-screen">
      {/* Hero Section */}
      <div ref={heroRef} className="h-screen flex flex-col">
        <div className="relative h-1/2">
          <Image
            src={metadata.image}
            alt={metadata.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="h-1/2 bg-background flex items-center">
          <div className="max-container padding-container w-full flex justify-center">
            <div className="max-w-[80ch] w-full mx-auto ">
              <div className="text-fg3 text-sm font-medium mb-2">
                {metadata.category}
              </div>
              <div className="text-fg1 text-sm mb-8">
                {metadata.date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                })}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-fg3 mb-8 leading-tight max-w-[80ch] mx-auto">
                {metadata.title}
              </h1>
              <p className="text-xl lg:text-2xl text-fg2 leading-relaxed max-w-[80ch] mx-auto">
                {metadata.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <TableOfContents
        sections={sections}
        activeSection={activeSection}
        showToc={showToc}
        tocTranslateY={tocTranslateY}
      />

      {/* Main Content */}
      <div className="max-container padding-container flex justify-center">
        <div className="w-full max-w-[80ch] mx-auto">
          {children}

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-bg3">
            <h3 className="text-sm uppercase text-fg2 mb-4 tracking-wider">Share Article</h3>
            <div className="flex gap-4">
              <ShareButton icon={Github} label="Share on GitHub" />
              <ShareButton icon={Twitter} label="Share on Twitter" />
              <ShareButton icon={Linkedin} label="Share on LinkedIn" />
            </div>
          </div>

          {/* Author info */}
          <div className="my-12 p-6 bg-bg2 border-l-4 border-accent1 max-w-[80ch] mx-auto">
            <h3 className="text-fg3 font-medium mb-3">About the Author</h3>
            <p className="text-sm text-fg1 leading-relaxed">
              Written by {metadata.author} on {metadata.date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              })}
            </p>
            {metadata.tags && (
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {metadata.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-bg3 text-fg2 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
