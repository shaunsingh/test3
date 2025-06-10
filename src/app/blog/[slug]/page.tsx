"use client";

import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { useEffect } from "react";

export default function BlogPostSlugPage() {
  // For now, we'll hardcode the content, ignoring the slug
  const post = {
    title: "This is my Title and its clearly the best title of all time I'll have you know",
    author: "Your Name Here",
    category: "Catagory",
    date: "June 07, 2025",
    image: "/blog-banner.jpg",
    content: [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,",
    ],
    acknowledgements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    sidebarLinks: [
      { label: "Motivation", link: "#" },
      { label: "Modelling asdlkfjh", link: "#" },
      { label: "Why would you want this sdf", link: "#" },
      { label: "lol. lmao even.", link: "#" },
      { label: "Motivation", link: "#" },
      { label: "Modelling asdlkfjh", link: "#" },
      { label: "Why would you want this sdf", link: "#" },
      { label: "lol. lmao even.", link: "#" },
    ],
  };

  useEffect(() => {
    const header = document.querySelector('header') as HTMLElement;
    const heroImage = document.getElementById('hero-image');
    if (!header || !heroImage) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = heroImage.offsetHeight;
      const headerHeight = header.offsetHeight;

      if (scrollY > heroHeight - headerHeight) {
        header.style.position = 'absolute';
        header.style.top = `${heroHeight - headerHeight}px`;
      } else {
        header.style.position = 'fixed';
        header.style.top = '0';
      }
    };

    // Call once to set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col bg-background">
      <main className="flex-grow">
        {/* Top Image */}
        <div 
          id="hero-image"
          className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
        >
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Author, Category, Date */}
            <div className="flex justify-between items-center text-gray-400 text-sm mb-6">
              <div>
                <div className="uppercase">Authors</div>
                <div>{post.author}</div>
              </div>
              <div className="text-right">
                <div className="uppercase">{post.category}</div>
                <div>{post.date}</div>
              </div>
            </div>

            {/* Main Content */}
            <div>
              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold font-mono text-white mb-8">
                {post.title}
              </h1>
              <div className="text-gray-300 space-y-6 text-lg leading-relaxed">
                {post.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                {/* Share */}
                <div className="pt-8">
                  <div className="text-sm text-gray-400 mb-2">Share</div>
                  <Link href="#" className="text-white hover:text-gray-400">
                    <Github className="h-6 w-6" />
                  </Link>
                </div>

                {/* Acknowledgements */}
                <div className="pt-8 text-sm text-gray-400 italic leading-loose">
                  <div className="text-white font-medium mb-2 not-italic">Acknowledgements</div>
                  {post.acknowledgements}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
