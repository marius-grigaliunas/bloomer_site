'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const images = [
  '/images/app-screenshots/image1.jpeg',
  '/images/app-screenshots/image2.jpeg',
  '/images/app-screenshots/image3.jpeg',
  '/images/app-screenshots/image4.jpeg',
  '/images/app-screenshots/image5.jpeg',
];

export default function AppCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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



  const getImagePosition = (index: number) => {
    // Calculate the relative position considering wrapping
    let diff = index - currentIndex;
    
    // Handle wrapping for infinite loop
    if (diff > 2) diff -= images.length;
    if (diff < -2) diff += images.length;
    
    const positions = {
      '-2': 'translate-x-[-640px] scale-75 opacity-30',
      '-1': 'translate-x-[-320px] scale-90 opacity-50',
      '0': 'translate-x-0 scale-100 opacity-100',
      '1': 'translate-x-[320px] scale-90 opacity-50',
      '2': 'translate-x-[640px] scale-75 opacity-30',
    };
    return positions[diff.toString() as keyof typeof positions] || 'translate-x-[960px] scale-75 opacity-30';
  };

  const isImageVisible = (index: number) => {
    // Calculate the relative position considering wrapping
    let diff = index - currentIndex;
    
    // Handle wrapping for infinite loop
    if (diff > 2) diff -= images.length;
    if (diff < -2) diff += images.length;
    
    // Only show images that are within the visible range (-2 to +2)
    return diff >= -2 && diff <= 2;
  };

  return (
    <div className="w-full max-w-7xl mx-auto mb-12">
      <div className="relative">
        {/* Main carousel container */}
        <div className="relative h-96 md:h-[600px] flex items-center justify-center overflow-visible">
          {/* All images container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {images.map((image, index) => {
              const position = getImagePosition(index);
              const isVisible = isImageVisible(index);
              
              return (
                <Image
                  key={index}
                  src={image}
                  alt={`Bloomer app screenshot ${index + 1}`}
                  width={500}
                  height={500}
                  className={`absolute transition-all duration-1500 ease-in-out object-contain rounded-lg shadow-lg max-w-96 max-h-96 md:max-w-[500px] md:max-h-[500px] ${position}`}
                  style={{ 
                    zIndex: index === currentIndex ? 10 : 5,
                    display: isVisible ? 'block' : 'none',
                    width: 'auto',
                    height: 'auto'
                  }}
                  priority={index === 0}
                />
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

      </div>
    </div>
  );
}
