import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form verileri:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="fa-2x" />,
      title: 'E-posta',
      value: 'mustafaycl37@gmail.com',
      link: 'mailto:mustafaycl37@gmail.com'
    },
    {
      icon: <FaPhone className="fa-2x" />,
      title: 'Telefon',
      value: '0534 661 49 92',
      link: 'tel:+905346614992'
    },
    {
      icon: <FaMapMarkerAlt className="fa-2x" />,
      title: 'Konum',
      value: 'Bayrampaşa / İSTANBUL',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      title: 'GitHub',
      url: 'https://github.com/someoxygen',
      color: 'text-dark'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      url: 'http://linkedin.com/in/mstfycl',
      color: 'text-primary'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 animate-fade-in-up">
              <h1 className="display-4 fw-bold mb-4">
                İletişime Geçin
              </h1>
              <p className="lead mb-5 opacity-90">
                Proje fikirlerinizi paylaşın, sorularınızı sorun veya sadece merhaba deyin. 
                Size en kısa sürede dönüş yapacağım.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5 section-light">
        <div className="container">
          <div className="row g-5">
            {/* Contact Information */}
            <div className="col-lg-4 animate-slide-in-left">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h3 className="fw-bold mb-4">İletişim Bilgileri</h3>
                  
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="d-flex align-items-center mb-4">
                        <div className="me-3 text-primary">
                          {info.icon}
                        </div>
                        <div>
                          <h6 className="fw-semibold mb-1">{info.title}</h6>
                          <a 
                            href={info.link} 
                            className="text-muted text-decoration-none"
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  <hr className="my-4" />

                  <h6 className="fw-semibold mb-3">Sosyal Medya</h6>
                  <div className="d-flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.color} text-decoration-none fs-4`}
                        title={social.title}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8 animate-slide-in-right">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  {submitted && (
                    <div className="alert alert-success d-flex align-items-center" role="alert">
                      <i className="fas fa-check-circle me-2"></i>
                      <div>
                        <strong>Teşekkürler!</strong> Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağım.
                      </div>
                    </div>
                  )}

                  <h3 className="fw-bold mb-4">Mesaj Gönderin</h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">
                          Adınız Soyadınız *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Adınızı girin"
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">
                          E-posta Adresiniz *
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="E-posta adresinizi girin"
                        />
                      </div>

                      <div className="col-12">
                        <label htmlFor="subject" className="form-label">
                          Konu *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Mesajınızın konusunu girin"
                        />
                      </div>

                      <div className="col-12">
                        <label htmlFor="message" className="form-label">
                          Mesajınız *
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Mesajınızı buraya yazın..."
                        ></textarea>
                      </div>

                      <div className="col-12">
                        <button 
                          type="submit" 
                          className={`btn btn-primary btn-lg rounded-pill px-5 ${
                            isSubmitting ? 'loading' : ''
                          }`}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Gönderiliyor...
                            </>
                          ) : (
                            <>
                              <FaEnvelope className="me-2" />
                              Mesaj Gönder
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
