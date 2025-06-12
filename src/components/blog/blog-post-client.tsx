"use client";

import Image from "next/image";
import { Github, Twitter, Linkedin, LucideIcon } from "lucide-react";
import { useEffect, useState, useRef, useCallback, memo } from "react";

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

const ShareButton = memo(
  ({ icon: Icon, label, href }: { icon: LucideIcon; label: string; href: string }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2 border border-bg3 text-fg1 hover:text-fg3 hover:border-fg1 transition-colors"
    >
      <Icon className="h-5 w-5" />
    </a>
  )
);

const TableOfContents = memo(
  ({
    sections,
    active,
    visible,
    offsetY,
  }: {
    sections: Section[];
    active: string;
    visible: boolean;
    offsetY: number;
  }) => (
    <aside
      className={`fixed left-4 top-0 h-full w-48 flex flex-col justify-center transition-opacity ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      style={{ zIndex: 40, transform: `translateY(-${offsetY}px)` }}
    >
      <div className="flex flex-col h-full sticky top-8">
        <nav className="flex-1">
          <ul className="space-y-2">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`block py-1.5 px-3 text-sm transition-colors ${active === id ? "bg-bg2 text-fg3 font-medium" : "text-fg1 hover:text-fg2"
                    }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto pl-3 pb-4">
          <div className="text-xs mb-1 opacity-60">contact</div>
          <a
            href="mailto:contact@nyoom.engineering"
            className="text-fg1 hover:text-fg3 text-xs transition"
          >
            contact@nyoom.engineering
          </a>
        </div>
      </div>
    </aside>
  )
);

export default function BlogPostClient({ metadata, children }: BlogPostClientProps) {
  const [tocVisible, setTocVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [tocOffsetY, setTocOffsetY] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const headingsRef = useRef<HTMLElement[]>([]);

  /* sections list is static / mocked */
  const sections: Section[] = [
    { id: "introduction", label: "Introduction" },
    { id: "gallery", label: "Gallery" },
    { id: "science", label: "Science" },
    { id: "creativity", label: "Creativity" },
    { id: "tips", label: "Tips" },
    { id: "conclusion", label: "Conclusion" },
  ];

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const viewportBottom = scrollY + window.innerHeight;

    /* show TOC after hero */
    const heroBottom = heroRef.current
      ? heroRef.current.getBoundingClientRect().bottom + scrollY
      : 0;
    setTocVisible(scrollY > heroBottom - 80);

    /* highlight active heading */
    for (const el of headingsRef.current) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        setActiveSection(el.id);
        break;
      }
    }

    /* push TOC up when footer overlaps */
    if (footerRef.current) {
      const footerTop = footerRef.current.offsetTop;
      const overlap = Math.max(0, viewportBottom - footerTop);
      setTocOffsetY(overlap);
    } else {
      setTocOffsetY(0);
    }
  }, []);

  useEffect(() => {
    footerRef.current = document.querySelector("footer");
    headingsRef.current = Array.from(
      document.querySelectorAll<HTMLElement>("section[id], h2[id]")
    );

    /* initial calculation */
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <header ref={heroRef} className="h-screen flex flex-col">
        <div className="relative h-1/2">
          <Image src={metadata.image} alt={metadata.title} fill priority className="object-cover" />
        </div>

        <div className="h-1/2 flex items-center bg-background">
          <div className="w-full max-w-[80ch] mx-auto px-4">
            <span className="text-fg3 font-medium">{metadata.category}</span>
            <span className="block text-sm opacity-60 mb-4">
              {metadata.date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              })}
            </span>
            <h1 className="text-3xl lg:text-4xl font-medium text-fg3 mb-3 leading-tight">
              {metadata.title}
            </h1>
            <p className="text-lg lg:text-xl text-fg2 leading-relaxed">{metadata.description}</p>
          </div>
        </div>
      </header>

      {/* TOC */}
      <TableOfContents
        sections={sections}
        active={activeSection}
        visible={tocVisible}
        offsetY={tocOffsetY}
      />

      {/* Main */}
      <main className="w-full max-w-[80ch] mx-auto px-4">
        {children}

        {/* Share */}
        <h3 className="text-sm text-fg2 mt-12 mb-3">Share Article</h3>
        <div className="flex gap-3">
          <ShareButton
            icon={Github}
            label="Share on GitHub"
            href={`https://github.com/nyoom-engineering/${metadata.slug}`}
          />
          <ShareButton
            icon={Twitter}
            label="Share on Twitter"
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              `https://nyoom.engineering/blog/${metadata.slug}`
            )}&text=${encodeURIComponent(metadata.title)}`}
          />
          <ShareButton
            icon={Linkedin}
            label="Share on LinkedIn"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              `https://nyoom.engineering/blog/${metadata.slug}`
            )}`}
          />
        </div>

        {/* Author */}
        <section className="my-12 p-6 bg-bg2 border-l-4 border-accent1">
          <h3 className="text-fg3 font-medium mb-2">About the Author</h3>
          <p className="text-sm text-fg1">
            Written by {metadata.author} on{" "}
            {metadata.date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })}
          </p>
          {metadata.tags?.length && (
            <ul className="flex flex-wrap gap-2 mt-3">
              {metadata.tags.map((tag) => (
                <li key={tag} className="px-2 py-1 bg-bg3 text-fg2 text-xs">
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}