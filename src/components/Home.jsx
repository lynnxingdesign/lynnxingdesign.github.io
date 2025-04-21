import React from 'react';

const Home = () => {
  return (
    <div className="w-full relative bg-[--color-gray-200] overflow-hidden">
      {/* Content Section */}
      <div className="max-w-[1440px] mx-auto relative pt-12">
        {/* Text Boxes */}
        <div className="relative pt-[69px]">
          <div className="w-20 h-40 absolute left-[89px] bg-[--color-neutral-100]" />
          <div className="w-36 h-40 absolute left-[134.97px] bg-[--color-neutral-100]" />
          <div className="absolute left-[135px] top-[161px] text-[--color-neutral-400] text-4xl font-normal font-[--font-family-lato]">Hi, I'm Lynn Xing</div>
          <div className="absolute left-[137px] top-[213px] text-[--color-neutral-700] text-2xl font-black font-[--font-family-lato]">Visual Storytelling | Spatial Planning | Brand Expression</div>
        </div>
        
        {/* Background Image */}
        <div className="relative">
          <img className="w-full h-[810px] mt-[60px]" src="https://placehold.co/1440x810" alt="Background" />
          
          {/* Navigation arrows */}
          <div className="w-9 h-16 absolute right-[55px] bottom-[166px] bg-[--color-white] flex items-center justify-center">
            <span>→</span>
          </div>
          <div className="w-9 h-16 absolute left-[57px] bottom-[100px] bg-[--color-white] flex items-center justify-center">
            <span>←</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;