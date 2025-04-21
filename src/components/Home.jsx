import React from 'react';
import Logo from '../assets/Logo/Logo_White.png';

const Home = () => {
  return (
    <div className="w-[1440px] h-[1115px] relative bg-[#F7F7F7] overflow-hidden">
      {/* Content Section - Positioned absolutely based on the Figma spec */}
      <div className="w-20 h-40 left-[89px] top-[81px] absolute bg-[#EDEDED]" />
      <div className="w-36 h-40 left-[134.97px] top-[81px] absolute bg-[#EDEDED]" />
      {/* Logo on top of the gray area */}
      <img 
        className="w-[185px] h-[160px] left-[90px] top-[81px] absolute" 
        src={Logo} 
        alt="Lynn Xing Logo" 
      />
      
      <div className="left-[135px] top-[161px] absolute text-[#A5A5A5] text-4xl font-normal font-['Lato']">Hi, I'm Lynn Xing</div>
      <div className="left-[137px] top-[213px] absolute text-[#424242] text-2xl font-black font-['Lato']">Visual Storytelling | Spatial Planning | Brand Expression</div>
      
      {/* Background Image - Positioned absolutely as per Figma spec */}
      <img className="w-[1440px] h-[810px] left-0 top-[272px] absolute" src="https://placehold.co/1440x810" alt="Background" />
      
      {/* Navigation arrows */}
      <div className="w-9 h-16 left-[1385px] top-[644px] absolute bg-white flex items-center justify-center">
        <span>→</span>
      </div>
      <div className="w-9 h-16 left-[57px] top-[710px] absolute origin-top-left -rotate-180 bg-white flex items-center justify-center">
        <span>←</span>
      </div>
    </div>
  );
};

export default Home;