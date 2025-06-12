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

// For client-side usage, we maintain a static list of available posts
// This needs to be updated when you add new posts
const availablePosts: BlogPostMetadata[] = [
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
  // Add more posts here as you create them
];

// Utility function to get all blog posts
export function getAllBlogPosts(): BlogPostMetadata[] {
  // Sort by date (newest first)
  return availablePosts.sort((a, b) => b.date.getTime() - a.date.getTime());
}

// Utility function to get a blog post by slug
export function getBlogPostBySlug(slug: string): BlogPostMetadata | undefined {
  return availablePosts.find(post => post.slug === slug);
}

// Utility function to get recent blog posts
export function getRecentBlogPosts(limit: number = 3): BlogPostMetadata[] {
  return getAllBlogPosts().slice(0, limit);
}

// Utility function to get blog posts by category
export function getBlogPostsByCategory(category: string): BlogPostMetadata[] {
  return getAllBlogPosts().filter(post => post.category === category);
}

// Utility function to get blog posts by tag
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

// Utility function to get all unique categories
export function getAllCategories(): string[] {
  const categories = getAllBlogPosts().map(post => post.category);
  return Array.from(new Set(categories));
}

// Utility function to get all unique tags
export function getAllTags(): string[] {
  const tags = getAllBlogPosts().flatMap(post => post.tags || []);
  return Array.from(new Set(tags));
}
