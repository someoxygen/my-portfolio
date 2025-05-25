import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Mustafa Yücel
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Hakkımda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link">
                Projelerim
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resume" className="nav-link">
                CV
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                İletişim
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
