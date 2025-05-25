import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form verileri:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">İletişim</h2>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow rounded-4 p-4 border-0">
              {submitted && (
                <div className="alert alert-success" role="alert">
                  Mesajınız başarıyla gönderildi!
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Adınız
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    E-posta
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-pill"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Mesajınız
                  </label>
                  <textarea
                    className="form-control rounded-4"
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary rounded-pill py-2">
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
