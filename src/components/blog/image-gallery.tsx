"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery navigation
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const currentImage = images[currentImageIndex];

  return (
    <div className="my-16">
      <div className="relative bg-black">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          width={800}
          height={500}
          className="w-full h-auto max-w-[80ch] mx-auto"
        />
      </div>
      
      {currentImage.caption && (
        <div className="text-fg1 text-base mt-6 text-center max-w-3xl mx-auto">
          {currentImage.caption}
        </div>
      )}
      
      {/* Navigation controls - only show if more than 1 image */}
      {images.length > 1 && (
        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            onClick={prevImage}
            className="text-fg2 hover:text-fg3 bg-bg2 hover:bg-bg3 transition-colors p-1"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex gap-2">
            {images.map((_, index) => (
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
      )}
    </div>
  );
}
