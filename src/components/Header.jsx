import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo/LN_Logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white fixed top-0 z-50 overflow-visible">
      <div className="max-w-[1440px] h-16 md:h-12 mx-auto px-4 md:px-8 lg:px-[50px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img className="w-8 h-7 md:w-9 md:h-8" src={Logo} alt="Logo" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsMenuOpen(open => !open)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 lg:space-x-16">
          <Link to="/" className="text-black text-xs font-['Lato'] hover:text-gray-600">HOME</Link>
          <Link to="/featured-works" className="text-black text-xs font-['Lato'] hover:text-gray-600">FEATURED WORKS</Link>
          <Link to="/contacts" className="text-black text-xs font-['Lato'] hover:text-gray-600">CONTACTS</Link>
        </nav>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-40">
          <div className="flex flex-col py-4">
            <Link to="/" className="px-4 py-3 text-black text-sm font-['Lato'] hover:bg-gray-100">
              HOME
            </Link>
            <Link to="/featured-works" className="px-4 py-3 text-black text-sm font-['Lato'] hover:bg-gray-100">
              FEATURED WORKS
            </Link>
            <Link to="/contacts" className="px-4 py-3 text-black text-sm font-['Lato'] hover:bg-gray-100">
              CONTACTS
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
