import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
      isScrolled ? 'navbar-scrolled' : 'navbar-transparent'
    }`}>
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <span className="brand-text">Mustafa Yücel</span>
        </Link>
        
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                end
              >
                <span className="nav-link-text">Hakkımda</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/projects" 
                className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
              >
                <span className="nav-link-text">Projelerim</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/resume" 
                className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`}
              >
                <span className="nav-link-text">CV</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                <span className="nav-link-text">İletişim</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
