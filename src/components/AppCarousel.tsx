'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const images = [
  '/images/app-screenshots/image1.jpeg',
  '/images/app-screenshots/image2.jpeg',
  '/images/app-screenshots/image3.jpeg',
  '/images/app-screenshots/image4.jpeg',
  '/images/app-screenshots/image5.jpeg',
];

// Loading skeleton component
const ImageSkeleton = ({ className, style }: { className: string; style?: React.CSSProperties }) => (
  <div 
    className={`bg-gray-200 animate-pulse rounded-2xl ${className}`}
    style={style}
  >
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse"></div>
    </div>
  </div>
);

export default function AppCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Auto-advance carousel every 4 seconds, but pause when user interacts
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const pauseAndResume = () => {
    setIsPaused(true);
    // Resume auto-advance after 6 seconds of user inactivity
    setTimeout(() => {
      setIsPaused(false);
    }, 6000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    pauseAndResume();
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    pauseAndResume();
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };



  const getImagePosition = (index: number) => {
    // Calculate the relative position considering wrapping
    let diff = index - currentIndex;
    
    // Handle wrapping for infinite loop
    if (diff > 1) diff -= images.length;
    if (diff < -1) diff += images.length;
    
    const positions = {
      '-1': 'translate-x-[-200px] scale-90',
      '0': 'translate-x-0 scale-100',
      '1': 'translate-x-[200px] scale-90',
    };
    return positions[diff.toString() as keyof typeof positions] || 'translate-x-[400px] scale-90';
  };

  const getImageOpacity = (index: number) => {
    // Calculate the relative position considering wrapping
    let diff = index - currentIndex;
    
    // Handle wrapping for infinite loop
    if (diff > 1) diff -= images.length;
    if (diff < -1) diff += images.length;
    
    const opacities = {
      '-1': 0.25,
      '0': 1,
      '1': 0.25,
    };
    return opacities[diff.toString() as keyof typeof opacities] || 0;
  };

  const isImageVisible = (index: number) => {
    // Calculate the relative position considering wrapping
    let diff = index - currentIndex;
    
    // Handle wrapping for infinite loop
    if (diff > 1) diff -= images.length;
    if (diff < -1) diff += images.length;
    
    // Show images that are within the visible range (-1 to +1)
    return diff >= -1 && diff <= 1;
  };

  return (
    <div className="w-full max-w-8xl mx-auto">
      <div className="relative">
        {/* Main carousel container */}
        <div className="relative h-[600px] md:h-[750px] flex items-center justify-center overflow-visible">
          {/* All images container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {images.map((image, index) => {
              const position = getImagePosition(index);
              const isVisible = isImageVisible(index);
              const isLoaded = loadedImages.has(index);
              const opacity = getImageOpacity(index);
              
              return (
                <React.Fragment key={index}>
                  {/* Show skeleton while image is loading */}
                  {!isLoaded && isVisible && (
                    <ImageSkeleton 
                      className={`absolute transition-all duration-1000 ease-in-out max-w-96 max-h-96 md:max-w-[600px] md:max-h-[600px] ${position}`}
                      style={{ 
                        zIndex: index === currentIndex ? 10 : 5,
                        width: 'auto',
                        height: 'auto',
                        opacity: isVisible ? opacity : 0
                      }}
                    />
                  )}
                  
                  {/* Show actual image once loaded */}
                  <Image
                    src={image}
                    alt={`Bloomer app screenshot ${index + 1}`}
                    width={700}
                    height={700}
                    className={`absolute transition-all duration-1000 ease-in-out object-contain rounded-2xl shadow-2xl max-w-96 max-h-96 md:max-w-[600px] md:max-h-[600px] ${position}`}
                    style={{ 
                      zIndex: index === currentIndex ? 10 : 5,
                      width: 'auto',
                      height: 'auto',
                      opacity: isLoaded ? opacity : 0
                    }}
                    priority={index === 0}
                    onLoad={() => handleImageLoad(index)}
                  />
                </React.Fragment>
              );
            })}
          </div>
          
          {/* Navigation arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-text-primary shadow-lg z-20"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-text-primary shadow-lg z-20"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-2 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                pauseAndResume();
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary-deep scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
