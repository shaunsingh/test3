"use client"

import { BlogPageCard } from "@/components/blog/blog-post-card";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

const blogPosts = [
  {
    image: "/heatmap.png",
    title: "Blog Post Title 1",
    description: "This is a short description for blog post 1. It gives a brief overview of the content.",
    date: "June 10, 2025",
    link: "/blog/post-1",
  },
  {
    image: "/heatmap.png",
    title: "Blog Post Title 2",
    description: "This is a short description for blog post 2. It gives a brief overview of the content.",
    date: "June 15, 2025",
    link: "/blog/post-2",
  },
  {
    image: "/heatmap.png",
    title: "Blog Post Title 3",
    description: "This is a short description for blog post 3. It gives a brief overview of the content.",
    date: "June 20, 2025",
    link: "/blog/post-3",
  },
  {
    image: "/heatmap.png",
    title: "Blog Post Title 4",
    description: "This is a short description for blog post 4. It gives a brief overview of the content.",
    date: "June 25, 2025",
    link: "/blog/post-4",
  },
  {
    image: "/heatmap.png",
    title: "Blog Post Title 5",
    description: "This is a short description for blog post 1. It gives a brief overview of the content.",
    date: "June 10, 2025",
    link: "/blog/post-5",
  },
  {
    image: "/heatmap.png",
    title: "Blog Post Title 6",
    description: "This is a short description for blog post 2. It gives a brief overview of the content.",
    date: "June 15, 2025",
    link: "/blog/post-6",
  },
  {
    image: "/heatmap.png",
    title: "Blog Post Title 7",
    description: "This is a short description for blog post 3. It gives a brief overview of the content.",
    date: "June 20, 2025",
    link: "/blog/post-7",
  },
  {
    image: "/heatmap.png",
    title: "Blog Post Title 8",
    description: "This is a short description for blog post 4. It gives a brief overview of the content.",
    date: "June 25, 2025",
    link: "/blog/post-8",
  },
];

function BlogCombobox() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between border-none bg-bg3 hover:bg-bg3/70 text-white"
        >
          Choose an option
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent sideOffset={0} className="w-[200px] p-0">
        <Command className="bg-bg3">
          <CommandList>
            <CommandEmpty>No option found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                value="option1"
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={`mr-2 h-4 w-4 ${value === "option1" ? "opacity-100" : "opacity-0"
                    }`}
                />
                Option 1
              </CommandItem>
              <CommandItem
                value="option2"
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={`mr-2 h-4 w-4 ${value === "option2" ? "opacity-100" : "opacity-0"
                    }`}
                />
                Option 2
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default function BlogPage() {
  return (
    <div className="flex flex-col ">
      <div className="flex-grow container mx-auto px-4 py-20 pt-[72px]">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Blog</h1>
          <BlogCombobox />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <BlogPageCard
              key={post.title}
              image={post.image}
              title={post.title}
              description={post.description}
              link={post.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
