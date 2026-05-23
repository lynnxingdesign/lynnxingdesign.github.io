import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/Logo/LN_Logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const getNavClass = ({ isActive }) => `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`;

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand" onClick={closeMenu} aria-label="Lynn Xing home">
          <img src={Logo} alt="Lynn Xing" />
        </Link>

        <button
          className="site-header__menu-button"
          onClick={() => setIsMenuOpen(open => !open)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <span className={isMenuOpen ? 'is-open' : ''} />
        </button>

        <nav className="site-nav" aria-label="Primary navigation">
          <NavLink to="/" end className={getNavClass}>
            HOME
          </NavLink>
          <NavLink to="/featured-works" className={getNavClass}>
            FEATURED WORKS
          </NavLink>
          <NavLink to="/contacts" className={getNavClass}>
            CONTACTS
          </NavLink>
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="site-mobile-nav" aria-label="Mobile navigation">
          <NavLink to="/" end className={getNavClass} onClick={closeMenu}>
            HOME
          </NavLink>
          <NavLink to="/featured-works" className={getNavClass} onClick={closeMenu}>
            FEATURED WORKS
          </NavLink>
          <NavLink to="/contacts" className={getNavClass} onClick={closeMenu}>
            CONTACTS
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
