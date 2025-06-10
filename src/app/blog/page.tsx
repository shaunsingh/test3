import { BlogPageCard } from "@/components/blog/blog-post-card";

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

export default function BlogPage() {
  return (
    <div className="flex flex-col ">
      <div className="flex-grow container mx-auto px-4 py-20 pt-[72px]">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
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
