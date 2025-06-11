"use client";

import { BlogPageCard } from "@/components/blog/grid-card";
import { BlogListItem } from "@/components/blog/list-item";
import { ViewCombobox, ViewType } from "@/components/blog/view-switch";
import { useState } from "react";

const blogPosts = [
  {
    image: "/heatmap.png",
    title: "Blog Post Title 1",
    description:
      "This is a short description for blog post 1. It gives a brief overview of the content.",
    date: new Date("2025-06-10"),
    link: "/blog/post-1",
  },
  {
    image: "/heatmap.png",
    title: "Blog Post Title 2",
    description:
      "This is a short description for blog post 2. It gives a brief overview of the content.",
    date: new Date("2025-06-15"),
    link: "/blog/post-2",
  },
  {
    image: "/heatmap.png",
    title: "Blog Post Title 3",
    description:
      "This is a short description for blog post 3. It gives a brief overview of the content.",
    date: new Date("2025-06-20"),
    link: "/blog/post-3",
  },
  {
    image: "/heatmap.png",
    title: "Blog Post Title 4",
    description:
      "This is a short description for blog post 4. It gives a brief overview of the content.",
    date: new Date("2025-06-25"),
    link: "/blog/post-4",
  },
  {
    image: "/heatmap.png",
    title: "Blog Post Title 5",
    description:
      "This is a short description for blog post 1. It gives a brief overview of the content.",
    date: new Date("2025-06-10"),
    link: "/blog/post-5",
  },
  {
    image: "/heatmap.png",
    title: "Blog Post Title 6",
    description:
      "This is a short description for blog post 2. It gives a brief overview of the content.",
    date: new Date("2025-06-15"),
    link: "/blog/post-6",
  },
  {
    image: "/heatmap.png",
    title: "Blog Post Title 7",
    description:
      "This is a short description for blog post 3. It gives a brief overview of the content.",
    date: new Date("2025-06-20"),
    link: "/blog/post-7",
  },
  {
    image: "/heatmap.png",
    title: "Blog Post Title 8",
    description:
      "This is a short description for blog post 4. It gives a brief overview of the content.",
    date: new Date("2025-06-25"),
    link: "/blog/post-8",
  },
];

export default function BlogPage() {
  const [view, setView] = useState<ViewType>("grid");

  return (
    <div className="flex flex-col ">
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Blog</h1>
          <ViewCombobox view={view} onViewChange={setView} />
        </div>

        {view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post) => (
              <BlogPageCard
                key={post.title}
                image={post.image}
                title={post.title}
                description={post.description}
                date={post.date}
                link={post.link}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-0">
            {blogPosts.map((post, index) => (
              <BlogListItem
                key={post.title}
                title={post.title}
                description={post.description}
                date={post.date}
                link={post.link}
                isLast={index === blogPosts.length - 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
