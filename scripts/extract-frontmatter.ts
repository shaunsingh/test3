import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Script to extract frontmatter from MDX files and create clean MDX files
const markdownDir = path.join(process.cwd(), "src/markdown");
const cleanMdxDir = path.join(process.cwd(), "src/content");

// Create clean MDX directory if it doesn't exist
if (!fs.existsSync(cleanMdxDir)) {
  fs.mkdirSync(cleanMdxDir, { recursive: true });
}

// Get all MDX files
const mdxFiles = fs.readdirSync(markdownDir).filter(file => file.endsWith('.mdx'));

console.log(`Processing ${mdxFiles.length} MDX files...`);

mdxFiles.forEach(file => {
  const filePath = path.join(markdownDir, file);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Parse frontmatter
  const { data, content } = matter(fileContents);
  
  // Create clean MDX file (content only)
  const cleanMdxPath = path.join(cleanMdxDir, file);
  fs.writeFileSync(cleanMdxPath, content.trim());
  
  console.log(`✅ Processed ${file}`);
  console.log(`   - Frontmatter extracted: ${Object.keys(data).join(', ')}`);
  console.log(`   - Clean MDX created at: src/content/${file}`);
});

console.log('\\n🎉 All files processed successfully!');
console.log('\\nNext steps:');
console.log('1. Update your import paths from @/markdown to @/content');
console.log('2. Your blog.ts file will continue to read metadata from src/markdown/*.mdx');
console.log('3. Your page components will import clean MDX from src/content/*.mdx');
