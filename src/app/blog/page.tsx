"use client";

import { BlogPageCard } from "@/components/blog/blog-post-card";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
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

type ViewType = "grid" | "list";

interface ViewComboboxProps {
  view: ViewType;
  onViewChange: (view: ViewType) => void;
}

function ViewCombobox({ view, onViewChange }: ViewComboboxProps) {
  const [open, setOpen] = useState(false);

  const viewOptions = [
    { value: "grid" as ViewType, label: "Grid View" },
    { value: "list" as ViewType, label: "List View" },
  ];

  const currentView = viewOptions.find((option) => option.value === view);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between border-none bg-bg3 hover:bg-bg3/70 text-white"
        >
          {currentView?.label || "Choose a view"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent sideOffset={0} className="w-[200px] p-0">
        <Command className="bg-bg3">
          <CommandList>
            <CommandEmpty>No view found.</CommandEmpty>
            <CommandGroup>
              {viewOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => {
                    onViewChange(option.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={`mr-2 h-4 w-4 ${
                      view === option.value ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

interface BlogListItemProps {
  image: string;
  title: string;
  description: string;
  date: Date;
  link: string;
  isLast?: boolean;
}

function BlogListItem({
  image,
  title,
  description,
  date,
  link,
  isLast = false,
}: BlogListItemProps) {
  return (
    <a
      href={link}
      className={`block p-6 hover:bg-bg2/50 transition-colors cursor-pointer ${
        !isLast ? "border-b border-border" : ""
      }`}
    >
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>
      <p className="text-xs text-muted-foreground">
        {date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        })}
      </p>
    </a>
  );
}

export default function BlogPage() {
  const [view, setView] = useState<ViewType>("grid");

  return (
    <div className="flex flex-col ">
      <div className="flex-grow container mx-auto px-4 py-20 pt-[72px]">
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
                image={post.image}
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
