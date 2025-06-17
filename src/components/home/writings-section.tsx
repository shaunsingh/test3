import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getRecentBlogPosts } from "@/lib/blog";

export function WritingsSection() {
  const recentPosts = getRecentBlogPosts(3);

  return (
    <section id="writings" className="scroll-mt-16 w-full max-container padding-container text-white">
      <div className="bg-card p-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <div className="text-gray-400 text-sm mb-2">WRITINGS</div>
            <h2 className="text-3xl font-mono text-white">Thoughts On<br />Tech And Nature</h2>
          </div>
          <Link href="/blog" className="bg-white text-black px-4 py-2 text-sm font-medium flex items-center">
            SEE ALL POSTS <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {recentPosts.map((post) => (
            <BlogPostCard
              key={post.slug}
              image={post.image}
              title={post.title}
              description={post.description}
              date={post.date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              })}
              link={`/blog/${post.slug}`}
            />
          ))}

          {/* Fill remaining slots with placeholder if needed */}
          {Array.from({ length: Math.max(0, 3 - recentPosts.length) }).map((_, index) => (
            <BlogPostCard
              key={`placeholder-${index}`}
              image="/heatmap.png"
              title="Coming Soon - New Article"
              description="We're working on new content. Stay tuned for more interesting articles about technology, nature, and everything in between."
              date="Coming Soon"
              link="#"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface BlogPostCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

function BlogPostCard({ image, title, description, date, link }: BlogPostCardProps) {
  return (
    <Link href={link} className="block bg-bg3 p-4 hover:bg-bg4 transition-colors group">
      <div className="relative w-full aspect-video mb-4">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover bg-black"
        />
      </div>
      <h3 className="text-xl font-mono text-fg2 mb-2 leading-tight">{title}</h3>
      <p className="text-sm text-fg1 mb-4">{description}</p>
      <p className="text-xs text-fg1">{date}</p>
    </Link>
  );
} 
