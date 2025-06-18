"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { Github, Twitter, Linkedin, LucideIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { BlogPost } from "@/lib/blog";

interface Section {
  id: string;
  label: string;
  level: number;
}

interface BlogPostClientProps {
  metadata: BlogPost;
  children: React.ReactNode;
}

const ShareButton = ({
  icon: Icon,
  label,
  href,
}: {
  icon: LucideIcon;
  label: string;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-2 border border-bg3 text-fg1 hover:text-fg3 hover:border-fg1 transition-colors"
  >
    <Icon className="h-5 w-5" />
  </a>
);

const TableOfContents = ({
  sections,
  active,
  visible,
}: {
  sections: Section[];
  active: string;
  visible: boolean;
}) => (
  <aside
    className={`fixed left-4 top-1/2 -translate-y-1/2 w-56 transition-opacity duration-300 hidden xl:block ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    style={{ zIndex: 40 }}
  >
    <div className="bg-background/80 backdrop-blur-sm border border-bg3 rounded-lg p-4">
      <nav>
        <div className="text-xs mb-4 opacity-60 uppercase tracking-wide">Contents</div>
        <ul className="space-y-1">
          {sections.map(({ id, label, level }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(id);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                    window.history.pushState(null, "", `#${id}`);
                  }
                }}
                className={`block py-2 px-3 text-sm transition-colors rounded-sm ${level === 2 ? "ml-0" : "ml-4"
                  } ${active === id
                    ? "bg-bg2 text-fg3"
                    : "text-fg1 hover:text-fg2 hover:bg-bg1"
                  }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-6 pt-4 border-t border-bg3">
        <div className="text-xs mb-1 opacity-60">Contact</div>
        <a
          href="mailto:contact@nyoom.engineering"
          className="text-fg1 hover:text-fg3 text-xs transition"
        >
          contact@nyoom.engineering
        </a>
      </div>
    </div>
  </aside>
);

export default function BlogPostClient({ metadata, children }: BlogPostClientProps) {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeSection, setActiveSection] = useState("");
  const [tocVisible, setTocVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Extract headings from content
  const extractHeadings = useCallback(() => {
    if (!contentRef.current) return;

    const headings = contentRef.current.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const extractedSections: Section[] = [];

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      let id = heading.id;

      // Generate ID if not present
      if (!id) {
        id = heading.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") || `heading-${index}`;
        heading.id = id;
      }

      extractedSections.push({
        id,
        label: heading.textContent || "",
        level,
      });
    });

    setSections(extractedSections);
  }, []);

  // Handle scroll events
  const handleScroll = useCallback(() => {
    if (!contentRef.current) return;

    const scrollY = window.scrollY;

    // Show TOC after hero section
    const heroBottom = heroRef.current
      ? heroRef.current.getBoundingClientRect().bottom + scrollY
      : 0;
    setTocVisible(scrollY > heroBottom - 100);

    // Find active section
    const headings = contentRef.current.querySelectorAll("h1, h2, h3, h4, h5, h6");
    let currentActive = "";

    for (let i = headings.length - 1; i >= 0; i--) {
      const heading = headings[i] as HTMLElement;
      const rect = heading.getBoundingClientRect();

      if (rect.top <= 150) {
        currentActive = heading.id;
        break;
      }
    }

    setActiveSection(currentActive);
  }, []);

  useEffect(() => {
    // Extract headings after content is mounted
    const timer = setTimeout(extractHeadings, 100);

    // Setup scroll listener
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [extractHeadings, handleScroll]);

  return (
    <div className="flex flex-col bg-background min-h-screen">
      {/* TOC */}
      <TableOfContents sections={sections} active={activeSection} visible={tocVisible} />

      {/* Banner */}
      <div ref={heroRef} className="relative w-full h-[40vh] md:h-[50vh]">
        <Image
          src={metadata.image}
          alt={metadata.title}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>

      {/* Main content */}
      <main className="w-full max-w-[80ch] mx-auto px-4">
        {/* Metadata */}
        <div className="pt-12">
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
          {metadata.description && (
            <p className="text-lg lg:text-xl text-fg2 leading-relaxed max-w-prose">
              {metadata.description}
            </p>
          )}
        </div>

        <Separator className="my-6" />

        {/* Article content */}
        <div ref={contentRef}>{children}</div>

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
          {metadata.tags?.length ? (
            <ul className="flex flex-wrap gap-2 mt-3">
              {metadata.tags.map((tag) => (
                <li key={tag} className="px-2 py-1 bg-bg3 text-fg2 text-xs">
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      </main>
    </div>
  );
}
