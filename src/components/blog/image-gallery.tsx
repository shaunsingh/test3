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
  // Track the natural aspect ratio of the current image so the wrapper height matches it exactly
  const [containerAspectRatio, setContainerAspectRatio] = useState(16 / 10);

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
    <div className="mb-8">
    <div className="relative bg-bg1">
      {/*
        We want the gallery to extend slightly beyond the normal 80ch post width.
        Use a calculated width that is 4rem wider than the parent (2rem on each side)
        and apply matching negative margins so the element remains centred.
        We still cap the absolute width at 96ch so it can't grow indefinitely.
      */}
      <div
        className="relative"
        style={{
          maxWidth: "100ch",
          width: "calc(100% + 5rem)",
          marginLeft: "calc(-2.5rem)",
          marginRight: "calc(-2.5rem)",
          aspectRatio: containerAspectRatio,
        }}
      >
        {/* Previous image stays visible while the new one fades in */}
        {prevImageIndex !== null && (
          <Image
            key={images[prevImageIndex].src}
            src={images[prevImageIndex].src}
            alt={images[prevImageIndex].alt}
            fill
            sizes="(max-width: 100ch) 100vw, 100ch"
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
          sizes="(max-width: 100ch) 100vw, 100ch"
          onLoadingComplete={(img) => {
            // Update wrapper aspect ratio to match the natural size of the loaded image
            if (img?.naturalWidth && img?.naturalHeight) {
              setContainerAspectRatio(img.naturalWidth / img.naturalHeight);
            }

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
      <div className="text-fg1 text-sm mt-2 text-center max-w-3xl mx-auto">
        {currentImage.caption}
      </div>
    )}
    
    {/* Navigation controls - only show if more than 1 image */}
    {images.length > 1 && (
      <div className="flex justify-center items-center gap-3 mt-3">
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
