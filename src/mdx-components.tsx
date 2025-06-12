import type { MDXComponents } from "mdx/types";

// Import client MDX components that interact with hero context
import HeroH1 from "@/components/blog/mdx-hero-h1";
import HeroBlockquote from "@/components/blog/mdx-hero-blockquote";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: HeroH1,
    h2: ({ children, ...props }) => (
      <h2 className="text-2xl font-mediumtext-fg3 mb-4 scroll-mt-20" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-xl text-fg3 mb-4 mt-12" {...props}>
        {children}
      </h3>
    ),
    blockquote: HeroBlockquote,
    p: ({ children, ...props }) => (
      <p className="text-fg1 leading-relaxed mb-6" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="text-fg1 space-y-2 mb-6 pl-6 list-disc" {...props}>
        {children}
      </ul>
    ),
    li: ({ children, ...props }) => (
      <li className="text-fg1 leading-relaxed" {...props}>
        {children}
      </li>
    ),
    strong: ({ children, ...props }) => (
      <strong className="text-fg3 font-semibold" {...props}>
        {children}
      </strong>
    ),
    em: ({ children, ...props }) => (
      <em className="text-fg2 italic" {...props}>
        {children}
      </em>
    ),
    code: ({ children, ...props }) => (
      <code className="bg-bg2 text-fg3 px-2 py-1 text-sm font-mono" {...props}>
        {children}
      </code>
    ),
    ...components,
  };
}
