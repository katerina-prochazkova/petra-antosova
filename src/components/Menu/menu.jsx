import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => setMenuOpen(false);

  return (
    <header>
      <div className="navigation-container">
        <button
          id="nav-btn"
          className={menuOpen ? 'nav-btn nav-btn-open' : 'nav-btn'}
          onClick={() => setMenuOpen(!menuOpen)}
        ></button>
        <div className="menu-vlevo">
          <Link to="/" id="logo-btn" className="logo">
            www.petraantosova.com
          </Link>
          <p className="motto">Blíže k lesu</p>
        </div>
        <nav
          className={menuOpen ? 'nav-large nav-open' : 'nav-large nav-closed'}
        >
          <Link to="/" className="nav-polozky" onClick={handleClick}>
            Úvodní stránka
          </Link>
          <Link to="/o-mne" className="nav-polozky" onClick={handleClick}>
            Kdo jsem
          </Link>
          <Link to="/nabidka" className="nav-polozky" onClick={handleClick}>
            Co nabízím
          </Link>
          <Link to="/blog" className="nav-polozky" onClick={handleClick}>
            Blog
          </Link>
          <Link to="/reference" className="nav-polozky" onClick={handleClick}>
            Reference
          </Link>
          <Link to="/kontakt" className="nav-polozky" onClick={handleClick}>
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
};
