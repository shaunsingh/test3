import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Blog post type with content included
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: Date;
  category: string;
  author: string;
  tags: string[];
  content: string;
}

// Define base directory for MDX posts
const postsDirectory = path.join(process.cwd(), "src/markdown");

export function getBlogPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    console.warn(`Post not found: ${fullPath}`);
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  if (!data.title || !data.date) {
    console.warn(`Missing required metadata in ${realSlug}.mdx`);
    return null;
  }

  // Strip import statements from content for next-mdx-remote
  const cleanContent = content
    .split('\n')
    .filter(line => !line.trim().startsWith('import '))
    .join('\n')
    .trim();

  return {
    slug: realSlug,
    title: data.title,
    description: data.description || "",
    image: data.image || "",
    date: new Date(data.date),
    category: data.category || "",
    author: data.author || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    content: cleanContent,
  };
}



export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogPostSlugs();
  const posts = slugs
    .map(getBlogPostBySlug)
    .filter((post): post is BlogPost => post !== null);

  posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  return posts;
}

export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
  const posts = getAllBlogPosts();
  return posts.slice(0, limit);
}
