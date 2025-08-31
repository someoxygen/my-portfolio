import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/someoxygen',
      title: 'GitHub',
      color: 'hover:text-gray-400'
    },
    {
      icon: <FaLinkedin />,
      url: 'http://linkedin.com/in/mstfycl',
      title: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:mustafaycl37@gmail.com',
      title: 'E-posta',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <footer className="bg-dark text-light position-relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
           style={{
             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
           }}>
      </div>
      
      <div className="container position-relative">
        <div className="row py-5">
          {/* Brand Section */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="animate-fade-in-up">
              <h4 className="fw-bold mb-3">
                <span className="text-gradient">Mustafa Yücel</span>
              </h4>
              <p className="text-muted mb-4">
                4 yıllık endüstri deneyimine sahip, yaratıcı ve çözüm odaklı bir Full Stack Developer'ım. 
                C#, Node.js, Angular, React ve modern web teknolojileri ile projeler geliştiriyorum.
              </p>
              <div className="d-flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon-link"
                    title={social.title}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h6 className="fw-bold mb-3">Hızlı Linkler</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/my-portfolio/" className="text-muted text-decoration-none hover-text-white">
                    Hakkımda
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/my-portfolio/projects" className="text-muted text-decoration-none hover-text-white">
                    Projelerim
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/my-portfolio/resume" className="text-muted text-decoration-none hover-text-white">
                    CV
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/my-portfolio/contact" className="text-muted text-decoration-none hover-text-white">
                    İletişim
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h6 className="fw-bold mb-3">Hizmetler</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="text-muted">Full Stack Geliştirme</span>
                </li>
                <li className="mb-2">
                  <span className="text-muted">API & Web Servisleri</span>
                </li>
                <li className="mb-2">
                  <span className="text-muted">Veritabanı Yönetimi</span>
                </li>
                <li className="mb-2">
                  <span className="text-muted">Sistem Entegrasyonu</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h6 className="fw-bold mb-3">İletişim</h6>
              <div className="mb-3">
                <p className="text-muted mb-1">
                  <FaEnvelope className="me-2" />
                  mustafaycl37@gmail.com
                </p>
              </div>
              <div className="mb-3">
                <p className="text-muted mb-1">
                  <FaGithub className="me-2" />
                  github.com/someoxygen
                </p>
              </div>
              <div className="mb-3">
                <p className="text-muted mb-0">
                  Bayrampaşa / İSTANBUL
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-top border-secondary pt-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 text-muted">
                &copy; {currentYear} Mustafa Yücel. Tüm hakları saklıdır.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0 text-muted">
                Made with <FaHeart className="text-danger mx-1" /> in React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
