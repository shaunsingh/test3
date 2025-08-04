import { WritingsCard } from "../cards/writings-card";

const BLOG_POSTS = [
  {
    image: "/caida/lar-gr-l-7.png",
    title: "Sustainable Code In The Wild",
    description:
      "Exploring parallels between ecological sustainability and long-term software maintenance.",
    date: "May 01, 2025",
    link: "/blog/sustainable-code",
  },
  {
    image: "/caida/med-gr-l-4.png",
    title: "Functional Design Principles",
    description:
      "A deep dive into functional thinking and how it shapes resilient system architecture.",
    date: "April 18, 2025",
    link: "/blog/functional-design",
  },
  {
    image: "/caida/ries-t.png",
    title: "Nature-Inspired Algorithms",
    description:
      "From ant colonies to neural forests — lessons nature teaches us about computation.",
    date: "March 30, 2025",
    link: "/blog/nature-algorithms",
  },
] as const;

export function WritingsSection() {
  return <WritingsCard id="writings" posts={BLOG_POSTS} />;
} 