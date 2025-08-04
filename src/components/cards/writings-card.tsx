import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";

export interface BlogPostSummary {
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

interface WritingsCardProps {
  id?: string;
  posts: readonly BlogPostSummary[];
  seeAllLink?: string;
}

export function WritingsCard({ id, posts, seeAllLink = "/blog" }: WritingsCardProps) {
  // Ensure exactly three cards are shown, fill remaining with placeholders.
  const filledPosts: BlogPostSummary[] = [
    ...posts,
    ...Array.from({ length: Math.max(0, 3 - posts.length) }).map(() => ({
      image: "/heatmap.png",
      title: "Coming Soon - New Article",
      description:
        "We're working on new content. Stay tuned for more interesting articles about technology, nature, and everything in between.",
      date: "Coming Soon",
      link: "#",
    })),
  ].slice(0, 3);

  return (
    <section id={id} className="scroll-mt-20">
      <div className="bg-bg2 p-4 flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-start sm:items-center">
          <div>
            <div className="text-ignore">WRITINGS</div>
            <h1 className="section-heading">
              Thoughts On
              <br />
              Tech And Nature
            </h1>
          </div>
          <ButtonLink href={seeAllLink} className="text-sm">
            SEE ALL POSTS
          </ButtonLink>
        </div>

        {/* Blog post cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filledPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogPostCard({ image, title, description, date, link }: BlogPostSummary) {
  return (
    <Link
      href={link}
      className="block bg-bg3 p-4 hover:bg-bg4 transition-colors group"
    >
      <div className="relative w-full aspect-video mb-4">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover bg-black"
        />
      </div>
      <h3 className="text-lg font-medium text-fg2 mb-2 leading-tight truncate">
        {title}
      </h3>
      <p className="text-sm text-fg1 mb-4 line-clamp-3">{description}</p>
      <p className="text-xs text-fg1">{date}</p>
    </Link>
  );
}
