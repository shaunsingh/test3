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
  link: string;
}

export function BlogPageCard({
  image,
  title,
  description,
  link,
}: BlogPostCardProps) {
  return (
    <div className="block bg-bg3 hover:bg-bg3/80 transition-colors group relative">

      <Link href={link}>
        <div className="relative w-full h-48 bg-black">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white">{title}</h3>
            <Dropdown />
          </div>
          <p className="text-sm text-gray-400 mb-8">{description}</p>
          <p className="text-xs text-blue1">Text link</p>

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
          className="bg-bg4 hover:bg-bg4/50 text-white mb-2 h-8 w-8"
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
