"use client";

import Image from "next/image";
import { Github, Twitter, Linkedin, LucideIcon } from "lucide-react";

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

const ShareButton = ({ icon: Icon, label, href }: { icon: LucideIcon; label: string; href: string }) => (
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

export default function BlogPostClient({ metadata, children }: BlogPostClientProps) {

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <header className="flex flex-col">
        <div className="relative h-[40vh] md:h-[50vh]">
          <Image
            src={metadata.image}
            alt={metadata.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        <div className="flex items-center bg-background py-12">
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
            {metadata.description && (
              <p className="text-lg lg:text-xl text-fg2 leading-relaxed max-w-prose">
                {metadata.description}
              </p>
            )}
          </div>
        </div>
      </header>

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
