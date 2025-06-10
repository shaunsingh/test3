import Image from "next/image";
import Link from "next/link";

interface BlogPostCardProps {
  image: string;
  title: string;
  description: string;
  date: Date;
  link: string;
}

export function BlogPageCard({
  image,
  title,
  description,
  date,
  link,
}: BlogPostCardProps) {
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });

  return (
    <div className="block bg-bg2 hover:bg-bg3/70 transition-colors group relative">

      <Link href={link}>
        <div className="relative w-full h-48 bg-black">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="p-4">
          <h3 className="text-fg3 mb-2">{title}</h3>
          <p className="text-sm text-fg1 mb-6">{description}</p>
          <p className="text-xs text-fg1/50">{formattedDate}</p>
        </div>
      </Link>
    </div>
  );
}

