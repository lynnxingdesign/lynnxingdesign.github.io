import React, { useState, useEffect, useRef  } from 'react';
import Logo from '../assets/Logo/Logo_White.png';
import  Milwaukee from '../assets/Milwaukee Tool/MilwaukeeToolProject1.jpg'
import Ads  from '../assets/ADS/AdsProject1.jpg'
import Honeywell  from '../assets/Honeywell/HoneywellProject1.jpg'
import Electrolit  from '../assets/Electrolit/ElectrolitProject1.jpg'
import Dell  from '../assets/Dell SC 24/DellProject1.jpg'
import Audi  from '../assets/Audi/AudiProject1.jpg'


const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex]       = useState(1);
    const [isAnimating, setIsAnimating]   = useState(false);
    const [slideDirection, setSlideDirection] = useState('left');
    const [isLoading, setIsLoading]       = useState(true);
    const wrapperRef = useRef(null);
  
    const images = [
      { src: Milwaukee, alt: 'Milwaukee Tool Project' },
      { src: Ads,      alt: 'ADS Project'            },
      { src: Honeywell,alt: 'Honeywell Project'      },
      { src: Electrolit,alt: 'Electrolit Project'   },
      { src: Dell,     alt: 'Dell Project'           },
      { src: Audi,     alt: 'Audi Project'           },
    ];
  
    // 1) preload
    useEffect(() => {
      Promise.all(
        images.map(img =>
          new Promise(res => {
            const i = new Image();
            i.src = img.src;
            i.onload = res;
            i.onerror = res;
          })
        )
      ).then(() => setIsLoading(false));
    }, []);
  
    // 2) auto‑rotate
    useEffect(() => {
      if (isLoading) return;
      const id = setInterval(() => slideToNext(), 3000);
      return () => clearInterval(id);
    }, [currentIndex, isLoading]);
  
    // 3) handle the end of the CSS transition
    const handleTransitionEnd = () => {
      setCurrentIndex(nextIndex);
      setIsAnimating(false);
    };
  
    const initiateSlide = (direction, newIndex) => {
      setSlideDirection(direction);
      setNextIndex(newIndex);
      // trigger CSS animation
      setIsAnimating(true);
    };
  
    const slideToNext = () => {
      if (isAnimating) return;
      const ni = (currentIndex + 1) % images.length;
      initiateSlide('left', ni);
    };
  
    const slideToPrevious = () => {
      if (isAnimating) return;
      const pi = (currentIndex - 1 + images.length) % images.length;
      initiateSlide('right', pi);
    };
  
    const slideToIndex = idx => {
      if (isAnimating || idx === currentIndex) return;
      initiateSlide(idx > currentIndex ? 'left' : 'right', idx);
    };
  
    return (
      <div className="w-full min-h-[1115px] relative bg-[#EDEDED] overflow-hidden">
        <div className="max-w-[1440px] mx-auto h-[1115px] relative">
          {/* Gray overlays + logo + text */}
          <div className="w-20 h-40 left-[89px] top-[81px] absolute bg-[#EDEDED]" />
          <div className="w-36 h-40 left-[134.97px] top-[81px] absolute bg-[#EDEDED]" />
          <img
            className="w-[185px] h-[160px] left-[50px] top-[81px] absolute"
            src={Logo}
            alt="Lynn Xing Logo"
          />
          <div className="left-[50px] top-[161px] absolute text-[#A5A5A5] text-4xl font-normal font-['Lato']">
            Hi, I'm Lynn Xing
          </div>
          <div className="left-[50px] top-[213px] absolute text-[#424242] text-2xl font-black font-['Lato']">
            Visual Storytelling | Spatial Planning | Brand Expression
          </div>
  
          {/* === Carousel === */}
          <div className="w-[1440px] h-[810px] left-0 top-[272px] absolute overflow-hidden">
            {isLoading ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <div className="text-gray-600">Loading...</div>
              </div>
            ) : (
              <div className="w-full h-full relative overflow-hidden">
                {/* Two‐pane wrapper */}
                <div
                  ref={wrapperRef}
                  onTransitionEnd={handleTransitionEnd}
                  style={{
                    width: '200%',
                    display: 'flex',
                    height: '100%',
                    transform: isAnimating
                      ? slideDirection === 'left'
                        ? 'translateX(-50%)'
                        : 'translateX(50%)'
                      : 'translateX(0)',
                    transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none',
                  }}
                >
                  {/* Pane 1: current */}
                  <div className="w-1/2 h-full flex-shrink-0">
                    <img
                      className="w-full h-full object-cover hidden md:block"
                      src={images[currentIndex].src}
                      alt={images[currentIndex].alt}
                    />
                    <img
                      className="w-full h-full object-cover md:hidden"
                      src={images[currentIndex].src}
                      alt={images[currentIndex].alt}
                      style={{ transform: 'scale(1.2)', objectPosition: 'center' }}
                    />
                  </div>
                  {/* Pane 2: next */}
                  <div className="w-1/2 h-full flex-shrink-0">
                    <img
                      className="w-full h-full object-cover hidden md:block"
                      src={images[nextIndex].src}
                      alt={images[nextIndex].alt}
                    />
                    <img
                      className="w-full h-full object-cover md:hidden"
                      src={images[nextIndex].src}
                      alt={images[nextIndex].alt}
                      style={{ transform: 'scale(1.2)', objectPosition: 'center' }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
  
          {/* Arrows */}
          <button
            onClick={slideToPrevious}
            disabled={isAnimating || isLoading}
            className="w-16 h-16 left-[20px] top-[677px] absolute bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition duration-300 disabled:opacity-50"
          >
            <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={slideToNext}
            disabled={isAnimating || isLoading}
            className="w-16 h-16 right-[20px] top-[677px] absolute bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition duration-300 disabled:opacity-50"
          >
            <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
  
          {/* Dots */}
          <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => slideToIndex(idx)}
                disabled={isAnimating || isLoading}
                className={`w-3 h-3 rounded-full transition-transform duration-300 ${
                  currentIndex === idx ? 'bg-white scale-125' : 'bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;