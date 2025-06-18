"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect, useRef } from "react";

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
  const [isCurrentLoaded, setIsCurrentLoaded] = useState(true);
  const [maxAspectRatio, setMaxAspectRatio] = useState(0); // width / height

  // Ref for mounted state to prevent race conditions
  const hasCalculatedMax = useRef(false);

  const transitionTo = useCallback(
    (newIndex: number) => {
      if (newIndex === currentImageIndex) return;
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex(newIndex);
      setIsCurrentLoaded(false);
    },
    [currentImageIndex]
  );

  const nextImage = useCallback(() => {
    transitionTo((currentImageIndex + 1) % images.length);
  }, [currentImageIndex, images.length, transitionTo]);

  const prevImage = useCallback(() => {
    transitionTo((currentImageIndex - 1 + images.length) % images.length);
  }, [currentImageIndex, images.length, transitionTo]);

  const currentImage = images[currentImageIndex];

  // Calculate max aspect ratio (to fix container height)
  useEffect(() => {
    if (hasCalculatedMax.current || images.length === 0) return;

    let maxRatio = 0;
    let loadedCount = 0;

    images.forEach(({ src }) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        const aspect = img.naturalWidth / img.naturalHeight;
        if (aspect > maxRatio) {
          maxRatio = aspect;
        }
        loadedCount++;
        if (loadedCount === images.length) {
          hasCalculatedMax.current = true;
          setMaxAspectRatio(maxRatio);
        }
      };
    });
  }, [images]);

  const containerStyle = maxAspectRatio
    ? { paddingTop: `${100 / maxAspectRatio}%` } // height = width / aspect => (h/w)*100 = padding-top %
    : { aspectRatio: "4 / 3" }; // fallback

  return (
    <div className="mb-8">
      <div className="relative bg-bg1">
        <div
          className="relative w-full max-w-[100ch] mx-auto"
          style={containerStyle}
        >
          <div className="absolute inset-0 overflow-hidden">
            {prevImageIndex !== null && (
              <Image
                key={images[prevImageIndex].src}
                src={images[prevImageIndex].src}
                alt={images[prevImageIndex].alt}
                fill
                sizes="(max-width: 100ch) 100vw, 100ch"
                className={`object-contain absolute inset-0 transition-opacity duration-300 ease-in-out ${isCurrentLoaded ? "opacity-0" : "opacity-100"
                  }`}
              />
            )}

            <Image
              key={currentImage.src}
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              sizes="(max-width: 100ch) 100vw, 100ch"
              onLoadingComplete={() => {
                setIsCurrentLoaded(true);
                setTimeout(() => setPrevImageIndex(null), 300);
              }}
              className={`object-contain absolute inset-0 z-10 transition-opacity duration-300 ease-in-out ${isCurrentLoaded ? "opacity-100" : "opacity-0"
                }`}
            />
          </div>
        </div>
      </div>

      {currentImage.caption && (
        <div className="text-fg1 text-sm mt-2 text-center max-w-3xl mx-auto">
          {currentImage.caption}
        </div>
      )}

      {/* Buttons placed outside so they don't shift */}
      {images.length > 1 && (
        <div className="flex justify-center items-center gap-3 mt-3">
          <button
            onClick={prevImage}
            disabled={currentImageIndex === 0}
            className={`text-fg2 hover:text-fg3 bg-bg2 hover:bg-bg3 transition-colors p-1 ${currentImageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
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
                className={`w-2 h-2 transition-all ${index === currentImageIndex
                    ? "bg-fg3 w-6"
                    : "bg-bg3 hover:bg-fg1"
                  }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextImage}
            disabled={currentImageIndex === images.length - 1}
            className={`text-fg2 hover:text-fg3 bg-bg2 hover:bg-bg3 transition-colors p-1 ${currentImageIndex === images.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
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
