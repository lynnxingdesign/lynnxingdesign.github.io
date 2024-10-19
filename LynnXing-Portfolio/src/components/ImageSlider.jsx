import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(goToNext, 6000);
      return () => clearInterval(interval);
    }
  }, [isPaused, images]);

  return (
    <div 
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer">
        <ChevronLeft 
          onClick={goToPrevious} 
          size={48} 
          className="text-[#ff99e2] hover:bg-pink-200 hover:bg-opacity-50 rounded-full transition-colors duration-300" 
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer">
        <ChevronRight 
          onClick={goToNext} 
          size={48} 
          className="text-[#ff99e2] hover:bg-pink-200 hover:bg-opacity-50 rounded-full transition-colors duration-300" 
        />
      </div>
    </div>
  );
};

export default ImageSlider;