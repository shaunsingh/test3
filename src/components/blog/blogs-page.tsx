"use client";

import { BlogPageCard } from "@/components/blog/grid-card";
import { BlogListItem } from "@/components/blog/list-item";
import { ViewCombobox, ViewType } from "@/components/blog/view-switch";
import { BlogPost } from "@/lib/blog";
import { useState } from "react";

export function BlogPage({ posts }: { posts: BlogPostMetadata[] }) {

  const [view, setView] = useState<ViewType>("grid");
  return (
    <div className="flex flex-col ">
      <div className="flex-grow max-container px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Blog</h1>
          <ViewCombobox view={view} onViewChange={setView} />
        </div>

        {view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {posts.map((post) => (
              <BlogPageCard
                key={post.slug}
                image={post.image}
                title={post.title}
                description={post.description}
                date={post.date}
                link={`/blog/${post.slug}`}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-0">
            {posts.map((post, index) => (
              <BlogListItem
                key={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                link={`/blog/${post.slug}`}
                isLast={index === posts.length - 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
