import { BlogPage } from "@/components/blog/blogs-page";
import { getAllBlogPosts } from "@/lib/blog";

export default function Page() {
  const posts = getAllBlogPosts();

  return (
    <BlogPage posts={posts} />
  );
}
