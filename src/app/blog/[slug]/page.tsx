import { getBlogPostSlugs, getBlogPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";
import BlogPostClient from "@/components/blog/blog-post-client";
import { ImageGallery } from "@/components/blog/image-gallery";
import { CodeBlock } from "@/components/blog/code-block";

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

  const components = getMDXComponents({
    ImageGallery,
    CodeBlock,
  });

  return (
    <BlogPostClient metadata={blogPost}>
      <MDXRemote source={blogPost.content} components={components} />
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
