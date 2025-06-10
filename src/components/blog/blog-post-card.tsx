import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
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
          <div className="flex items-center justify-between">
            <h3 className="text-white">{title}</h3>
            <Dropdown />
          </div>
          <p className="text-sm text-fg1 mb-8">{description}</p>
          <p className="text-xs text-fg1">{formattedDate}</p>
        </div>
      </Link>
    </div>
  );
}

function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className="bg-bg3 hover:bg-bg4 text-white mb-2 h-8 w-8"
        >
          <MoreVertical className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32 bg-bg4 border-none">
        <DropdownMenuItem className="cursor-pointer focus:bg-white/10">
          Download
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer focus:bg-white/10">
          Save for later
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer focus:bg-white/10">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
