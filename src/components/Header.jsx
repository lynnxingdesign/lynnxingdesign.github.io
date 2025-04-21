import React from 'react';
import Logo from '../assets/Logo/LN_Logo.svg';

const Header = () => {
  return (
    <div className="w-full h-12 bg-white overflow-hidden fixed top-0 z-10">
      <div className="max-w-[1440px] h-full mx-auto relative flex items-center">
        <img className="w-9 h-8 absolute left-[86px] top-[10px]" src={Logo} alt="Logo" />
        <div className="flex absolute right-[86px]">
          <div className="mr-16 text-black text-xs font-['Lato']">GALLERY</div>
          <div className="mr-16 text-black text-xs font-['Lato']">FEATURED WORKS</div>
          <div className="text-black text-xs font-['Lato']">CONTACTS</div>
        </div>
      </div>
    </div>
  );
};

export default Header;