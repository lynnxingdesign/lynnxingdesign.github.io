import { siteContent, assetUrl } from '../data/projects';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const getNavClass = ({ isActive }) => `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`;

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand" onClick={closeMenu} aria-label={`${siteContent.site.name} home`}>
          <img src={assetUrl(siteContent.site.logo)} alt={siteContent.site.name} />
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
          {siteContent.navigation.map(item => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={getNavClass} onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="site-mobile-nav" aria-label="Mobile navigation">
          {siteContent.navigation.map(item => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={getNavClass} onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
