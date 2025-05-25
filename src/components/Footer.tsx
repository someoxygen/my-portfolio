import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-3">&copy; {new Date().getFullYear()} Mustafa Yücel. Tüm hakları saklıdır.</p>

        <div className="d-flex justify-content-center gap-4 fs-4">
          <a
            href="https://github.com/mustafayucel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light footer-icon-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/mustafayucel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light footer-icon-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:mustafa@example.com"
            className="text-light footer-icon-link"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
