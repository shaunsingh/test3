import Link from "next/link";
import Image from "next/image";

interface BlogPostCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

export function BlogPageCard({ image, title, description, date, link }: BlogPostCardProps) {
  return (
    <Link href={link} className="block bg-card  hover:bg-card/80 transition-colors group">
      <div className="relative w-full h-48 mb-4">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-mono text-white mb-2 leading-tight">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </Link>
  );
} 
