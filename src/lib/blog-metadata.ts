// Blog post metadata type that matches the structure used in the blog pages
export interface BlogPostMetadata {
  title: string;
  description: string;
  image: string;
  date: Date;
  category: string;
  author: string;
  slug: string;
  tags?: string[];
}

// Extended interface for the full blog post including sections
export interface BlogPost extends BlogPostMetadata {
  subtitle?: string;
  sections?: Array<{
    id: string;
    label: string;
  }>;
  acknowledgements?: string;
}

// Dynamic imports for all MDX files
const mdxFiles: { [key: string]: () => Promise<any> } = {
  'exploring-wonders-of-nature': () => import('@/markdown/welcome.mdx'),
  'rust-webassembly': () => import('@/markdown/rust-webassembly.mdx'),
  'ocaml-functional-programming': () => import('@/markdown/ocaml-functional-programming.mdx'),
  // Add more MDX files here as you create them
};

// Cache for loaded metadata
let metadataCache: BlogPostMetadata[] | null = null;

// Utility function to load all blog post metadata
export async function loadAllBlogPostMetadata(): Promise<BlogPostMetadata[]> {
  if (metadataCache) {
    return metadataCache;
  }

  const posts: BlogPostMetadata[] = [];
  
  for (const [slug, importFn] of Object.entries(mdxFiles)) {
    try {
      const module = await importFn();
      if (module.metadata) {
        posts.push({
          ...module.metadata,
          slug, // Ensure slug matches the key
        });
      }
    } catch (error) {
      console.warn(`Failed to load metadata for ${slug}:`, error);
    }
  }

  // Sort by date (newest first)
  metadataCache = posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  return metadataCache;
}

// Utility function to get all blog posts (for use in components)
export function getAllBlogPosts(): BlogPostMetadata[] {
  // For now, return a static array. In a real app, you might want to preload this at build time
  // or use React Query/SWR for client-side loading
  return [
    {
      title: "Exploring the Wonders of Nature",
      description: "A deep dive into the natural world, exploring diverse landscapes, ecosystems, and the scientific patterns that make nature so captivating and inspiring.",
      image: "/planet.png",
      date: new Date("2025-06-12"),
      category: "Nature & Science",
      author: "Your Name Here",
      slug: "exploring-wonders-of-nature",
      tags: ["nature", "science", "photography", "conservation"]
    },
    // Add more posts here manually for now, or implement server-side loading
  ];
}

// Utility function to get a blog post by slug
export function getBlogPostBySlug(slug: string): BlogPostMetadata | undefined {
  return getAllBlogPosts().find(post => post.slug === slug);
}

// Utility function to get recent blog posts
export function getRecentBlogPosts(limit: number = 3): BlogPostMetadata[] {
  return getAllBlogPosts().slice(0, limit);
}

// Utility function to get posts by category
export function getBlogPostsByCategory(category: string): BlogPostMetadata[] {
  return getAllBlogPosts().filter(post => post.category === category);
}

// Utility function to get posts by tag
export function getBlogPostsByTag(tag: string): BlogPostMetadata[] {
  return getAllBlogPosts().filter(post => post.tags?.includes(tag));
}

// Utility function to search blog posts
export function searchBlogPosts(query: string): BlogPostMetadata[] {
  const lowercaseQuery = query.toLowerCase();
  return getAllBlogPosts().filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.description.toLowerCase().includes(lowercaseQuery) ||
    post.category.toLowerCase().includes(lowercaseQuery) ||
    post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

// Utility function to get all categories
export function getAllCategories(): string[] {
  const categories = new Set(getAllBlogPosts().map(post => post.category));
  return Array.from(categories).sort();
}

// Utility function to get all tags
export function getAllTags(): string[] {
  const tags = new Set(getAllBlogPosts().flatMap(post => post.tags || []));
  return Array.from(tags).sort();
}
