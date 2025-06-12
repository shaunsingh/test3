import { notFound } from "next/navigation";
import { getBlogPostSlugs, getBlogPostBySlug, importBlogPost } from "@/lib/blog";
import BlogPostClient from "@/components/blog/blog-post-client";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: BlogPostPageProps) {
  const { slug } = await params;

  // Get blog post with content from filesystem
  const blogPost = getBlogPostBySlug(slug);

  if (!blogPost) {
    notFound();
  }

  // Import the MDX component at build time
  const mdxModule = await importBlogPost(slug);

  if (!mdxModule) {
    notFound();
  }

  const MDXContent = mdxModule.default;

  return (
    <BlogPostClient metadata={blogPost}>
      <MDXContent />
    </BlogPostClient>
  );
}

// Generate static params from filesystem
export function generateStaticParams() {
  const slugs = getBlogPostSlugs();
  return slugs.map((file) => ({
    slug: file.replace('.mdx', ''),
  }));
}

export const dynamicParams = false;
