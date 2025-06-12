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
  const [prevImageIndex, setPrevImageIndex] = useState<number | null>(null);
  // Indicates whether the newly-selected image has finished loading
  const [isCurrentLoaded, setIsCurrentLoaded] = useState(true);

  // Helper to start a transition to a given index
  const transitionTo = useCallback(
    (newIndex: number) => {
      if (newIndex === currentImageIndex) return;

      // Keep track of the image that should fade out
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex(newIndex);

      // Reset load state so the new image starts hidden until it finishes loading
      setIsCurrentLoaded(false);
      // Note: prevImageIndex will be cleared after the fade completes (handled in onLoadingComplete)

      // Do NOT clear prevImageIndex yet; we'll remove it after the fade completes in onLoadingComplete
    },
    [currentImageIndex]
  );

  // Gallery navigation
  const nextImage = useCallback(() => {
    transitionTo((currentImageIndex + 1) % images.length);
  }, [currentImageIndex, images.length, transitionTo]);

  const prevImage = useCallback(() => {
    transitionTo((currentImageIndex - 1 + images.length) % images.length);
  }, [currentImageIndex, images.length, transitionTo]);

  const currentImage = images[currentImageIndex];

  return (
    <div className="my-16">
      <div className="relative bg-bg1">
        <div className="relative w-full max-w-[80ch] mx-auto aspect-[16/10]">
          {/* Previous image stays visible while the new one fades in */}
          {prevImageIndex !== null && (
            <Image
              key={images[prevImageIndex].src}
              src={images[prevImageIndex].src}
              alt={images[prevImageIndex].alt}
              fill
              sizes="(max-width: 80ch) 100vw, 80ch"
              placeholder="empty"
              className={`object-contain absolute inset-0 transition-opacity duration-300 ease-in-out ${
                isCurrentLoaded ? 'opacity-0' : 'opacity-100'
              }`}
            />
          )}

          {/* Current image fades in over the previous once loaded */}
          <Image
            key={currentImage.src}
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            sizes="(max-width: 80ch) 100vw, 80ch"
            onLoadingComplete={() => {
              // Start the cross-fade once the image is ready
              setIsCurrentLoaded(true);

              // Remove previous image after the fade duration
              setTimeout(() => {
                setPrevImageIndex(null);
              }, 300);
            }}
            placeholder="empty"
            className={`object-contain absolute inset-0 z-10 transition-opacity duration-300 ease-in-out ${
              isCurrentLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
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
            disabled={currentImageIndex === 0}
            className={`text-fg2 hover:text-fg3 bg-bg2 hover:bg-bg3 transition-colors p-1 ${
              currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => transitionTo(index)}
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
            disabled={currentImageIndex === images.length - 1}
            className={`text-fg2 hover:text-fg3 bg-bg2 hover:bg-bg3 transition-colors p-1 ${
              currentImageIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
