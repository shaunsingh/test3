import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function WritingsSection() {
  return (
    <section className="w-full ">
      <div className="container bg-card mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="text-gray-400 text-sm mb-2">WRITINGS</div>
            <h2 className="text-3xl font-mono text-white">Thoughts On<br />Cars And Stuff</h2>
          </div>
          <Link href="#" className="bg-white text-black px-4 py-2 text-sm font-medium flex items-center">
            SEE ALL POSTS <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogPostCard
            image="/heatmap.png" // Placeholder image
            title="TTILE - Title Title Title Word Word Word Word Word"
            description="Lorem ipsum dolor sit amet, consectetur elit Lorem ipsum dolor sit amet, consectetur elit Lorem ipsum dolor sit amet, consectetur"
            date="June 07, 2025"
            link="#"
          />
          <BlogPostCard
            image="/heatmap.png" // Placeholder image
            title="TTILE - Title Title Title Word Word Word Word Word"
            description="Lorem ipsum dolor sit amet, consectetur elit Lorem ipsum dolor sit amet, consectetur elit Lorem ipsum dolor sit amet, consectetur"
            date="June 07, 2025"
            link="#"
          />
          <BlogPostCard
            image="/heatmap.png" // Placeholder image
            title="TTILE - Title Title Title Word Word Word Word Word"
            description="Lorem ipsum dolor sit amet, consectetur elit Lorem ipsum dolor sit amet, consectetur elit Lorem ipsum dolor sit amet, consectetur"
            date="June 07, 2025"
            link="#"
          />
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
      <div className="relative w-full h-68 mb-4">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="bg-black" />
      </div>
      <h3 className="text-xl font-mono text-fg2 mb-2 leading-tight">{title}</h3>
      <p className="text-sm text-fg1 mb-4">{description}</p>
      <p className="text-xs text-fg1">{date}</p>
    </Link>
  );
} 
