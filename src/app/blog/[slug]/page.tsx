"use client";

import Image from "next/image";
import { Github, Twitter, Linkedin, Copy, ChevronLeft, ChevronRight} from "lucide-react";
import { useEffect, useState, useRef, useCallback, memo } from "react";
import { CodeBlock } from "@/components/blog/code-block";

// Types
interface Section {
  id: string;
  label: string;
}

interface BlogPost {
  title: string;
  subtitle: string;
  author: string;
  category: string;
  date: string;
  image: string;
  content: string[];
  galleryImages: string[];
  galleryCaptions: string[];
  codeExample: string;
  acknowledgements: string;
  sections: Section[];
}

// Reusable components
const ShareButton = memo(({ icon: Icon, label }: { icon: any; label: string }) => (
  <button 
    className="p-2 border border-bg3 text-fg1 hover:text-fg3 hover:border-fg1 transition-all"
    aria-label={label}
  >
    <Icon className="h-5 w-5" />
  </button>
));

const GalleryNavigation = memo(({ 
  currentIndex, 
  totalImages, 
  onPrev, 
  onNext, 
  onIndexChange 
}: { 
  currentIndex: number;
  totalImages: number;
  onPrev: () => void;
  onNext: () => void;
  onIndexChange: (index: number) => void;
}) => (
  <>
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-bg1/90 backdrop-blur px-3 py-2">
      <button
        onClick={onPrev}
        className="text-fg2 hover:text-fg3 bg-bg2 hover:bg-bg3 transition-colors p-1"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <button
        onClick={onNext}
        className="text-fg2 hover:text-fg3 bg-bg2 hover:bg-bg3 transition-colors p-1"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>

    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: totalImages }).map((_, index) => (
        <button
          key={index}
          onClick={() => onIndexChange(index)}
          className={`w-2 h-2 transition-all ${
            index === currentIndex 
              ? 'bg-fg3 w-6' 
              : 'bg-bg3 hover:bg-fg1'
          }`}
          aria-label={`Go to image ${index + 1}`}
        />
      ))}
    </div>
  </>
));

const TableOfContents = memo(({ 
  sections, 
  activeSection, 
  showToc, 
  tocTranslateY 
}: { 
  sections: Section[];
  activeSection: string;
  showToc: boolean;
  tocTranslateY: number;
}) => (
  <div 
    className={`fixed left-4 top-0 h-full w-48 flex flex-col justify-center transition-opacity duration-500 ${
      showToc ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
    style={{ zIndex: 40, transform: `translateY(-${tocTranslateY}px)` }}
  >
    <div className="flex flex-col h-full" style={{ position: 'sticky', top: 32 }}>
      <nav className="flex-1 flex items-center">
        <ul className="space-y-2 w-full">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block py-2 px-4 text-sm transition-all ${
                  activeSection === section.id 
                    ? 'bg-bg2 text-fg3 font-medium' 
                    : 'text-fg1 hover:text-fg2'
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto flex flex-col items-start pl-4 mb-4">
        <div className="mb-2">
          <div className="text-ignore mb-1 font-normal text-xs" style={{ letterSpacing: 0 }}>contact</div>
          <a href="mailto:contact@nyoom.engineering" className="text-fg1 hover:text-fg3 transition-colors block font-normal text-xs">
            contact@nyoom.engineering
          </a>
        </div>
      </div>
    </div>
  </div>
));

export default function BlogPostSlugPage() {
  // State
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showToc, setShowToc] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [tocTranslateY, setTocTranslateY] = useState(0);

  // Refs
  const contentRef = useRef<HTMLDivElement>(null);
  const tocRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  // Mock data - In a real app, this would come from an API or CMS
  const post: BlogPost = {
    title: "This is my Title and its clearly the best title of all time I'll have you know",
    subtitle: "This is my Subtitle and its clearly the best title of all time I'll have you know",
    author: "Your Name Here",
    category: "Category",
    date: "June 07, 2025",
    image: "/blog-banner.jpg",
    content: [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    ],
    galleryImages: [
      "/lasers.png",
      "/planet.png",
      "/heatmap.png"
    ],
    galleryCaptions: [
      "Drivers can choose from a curated set of instrument cluster themes, and tailor the colors and wallpapers of those themes to match their individual tastes",
      "Second image caption here",
      "Third image caption here"
    ],
    codeExample: `// Initialize quantum field 
let quantum_field = init_field();
let number_of_particles = 100;

// Create particle system
let mut particle_system = ParticleSystem::new(quantum_field);
for i in 0..number_of_particles {
    let particle = Particle::new()
        .with_mass(1.0 + i as f32 * 0.1)
        .with_charge(if i % 2 == 0 { 1.0 } else { -1.0 })
        .with_spin(0.5);
    
    particle_system.add(particle);
}

// Run simulation
while !particle_system.is_stable() {
    particle_system.step(0.01);
    if particle_system.entropy() > MAX_ENTROPY {
        particle_system.cool_down(0.1);
    }
}`,
    acknowledgements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    sections: [
      { id: "motivation", label: "Motivation" },
      { id: "modelling", label: "Modelling asdlkfjh" },
      { id: "why-want", label: "Why would you want this sdf" },
      { id: "lol-lmao", label: "lol. lmao even." },
    ],
  };

  // Handlers
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    let heroBottom = 0;
    
    if (heroRef.current) {
      heroBottom = heroRef.current.getBoundingClientRect().bottom + window.scrollY;
    }
    
    setShowToc(scrollY > heroBottom - 80);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        setActiveSection(section.id);
      }
    });

    if (footerRef.current) {
      const footerRect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const footerVisibleHeight = Math.max(0, windowHeight - footerRect.top);
      setTocTranslateY(footerVisibleHeight);
    }
  }, []);

  // Effects
  useEffect(() => {
    const footer = document.querySelector('footer');
    footerRef.current = footer as HTMLElement;

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    const observer = new ResizeObserver(handleScroll);
    observer.observe(document.body);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      observer.disconnect();
    };
  }, [handleScroll]);

  // Gallery navigation
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % post.galleryImages.length);
  }, [post.galleryImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + post.galleryImages.length) % post.galleryImages.length);
  }, [post.galleryImages.length]);

  return (
    <div className="flex flex-col bg-background min-h-screen">
      {/* Hero Section */}
      <div ref={heroRef} className="h-screen flex flex-col">
        <div className="relative h-1/2">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="h-1/2 bg-background flex items-center">
          <div className="max-container padding-container w-full">
            <div className="max-w-4xl mx-auto py-12">
              <div className="text-fg3 text-sm font-medium mb-2">
                {post.category}
              </div>
              <div className="text-fg1 text-sm mb-8">
                {post.date}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-fg3 mb-8 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl lg:text-2xl text-fg2 leading-relaxed">
                {post.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <TableOfContents
        sections={post.sections}
        activeSection={activeSection}
        showToc={showToc}
        tocTranslateY={tocTranslateY}
      />

      {/* Main Content */}
      <div ref={contentRef} className="max-container padding-container py-16">
        <div className="max-w-4xl mx-auto">
          {/* First paragraph */}
          <div className="text-fg1 space-y-6 leading-relaxed mb-16">
            <p>{post.content[0]}</p>
          </div>

          {/* Content Sections */}
          {post.sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-fg3 mb-6">{section.label}</h2>
              <div className="text-fg1 space-y-6 leading-relaxed">
                <p>{post.content[1]}</p>
              </div>
            </section>
          ))}

          {/* Image Gallery */}
          <div className="my-16">
            <div className="relative bg-black">
              <Image
                src={post.galleryImages[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="text-fg1 text-base mt-6 text-center max-w-3xl mx-auto">
              {post.galleryCaptions[currentImageIndex]}
            </div>
            {/* Chevrons and Dots below the image */}
            <div className="flex justify-center items-center gap-4 mt-4">
              <button
                onClick={prevImage}
                className="text-fg2 hover:text-fg3 bg-bg2 hover:bg-bg3 transition-colors p-1"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {post.galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 transition-all ${
                      index === currentImageIndex 
                        ? 'bg-fg3 w-6' 
                        : 'bg-bg3 hover:bg-fg1'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextImage}
                className="text-fg2 hover:text-fg3 bg-bg2 hover:bg-bg3 transition-colors p-1"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Code Block */}
          <div className="my-16">
            <CodeBlock code={post.codeExample} language="rust" />
          </div>

          {/* More Content */}
          <div className="text-fg1 space-y-6 leading-relaxed mb-16">
            <p>{post.content[1]}</p>
          </div>

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-bg3">
            <h3 className="text-sm uppercase text-fg2 mb-4 tracking-wider">Share Article</h3>
            <div className="flex gap-4">
              <ShareButton icon={Github} label="Share on GitHub" />
              <ShareButton icon={Twitter} label="Share on Twitter" />
              <ShareButton icon={Linkedin} label="Share on LinkedIn" />
              <ShareButton icon={Copy} label="Copy link" />
            </div>
          </div>

          {/* Acknowledgements */}
          <div className="mt-12 p-6 bg-bg2 border-l-4 border-accent1">
            <h3 className="text-fg3 font-medium mb-3">Acknowledgements</h3>
            <p className="text-sm text-fg1 leading-relaxed">
              {post.acknowledgements}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
