import React, { useEffect, useRef, useState } from 'react';
import ImageSlider from './ImageSlider';

const ProjectItem = ({ images, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`relative h-[600px] w-full shadow-xl shadow-gray-400 rounded-xl transform transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`}
    >
      <ImageSlider images={images} />
      <div className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 rounded-b-xl
        transition-all duration-700 delay-300 transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h3 className="text-2xl font-bold text-white tracking-wider">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ProjectItem;