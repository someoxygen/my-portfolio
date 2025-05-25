import React from 'react';

const Resume: React.FC = () => {
  const skills: string[] = [
    'React',
    'TypeScript',
    'Bootstrap',
    '.NET Core',
    'PostgreSQL',
    'Entity Framework',
    'Git',
    'REST API',
    'Firebase',
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center">Özgeçmiş</h2>

        <div className="row g-4">
          {/* Eğitim */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body">
                <h4 className="card-title mb-3">🎓 Eğitim</h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Bilgisayar Mühendisliği</strong><br />
                    ABC Üniversitesi (2016–2020)
                  </li>
                  <li>
                    <strong>Yazılım Geliştirme Bootcamp</strong><br />
                    Kod Akademi (2021)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Deneyim */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body">
                <h4 className="card-title mb-3">💼 Deneyim</h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Frontend Developer</strong><br />
                    X Yazılım AŞ (2022–2023)<br />
                    <small className="text-muted">React + TypeScript ile UI geliştirme</small>
                  </li>
                  <li>
                    <strong>Full Stack Developer</strong><br />
                    Freelance (2023–devam ediyor)<br />
                    <small className="text-muted">E-ticaret, yönetim panelleri, API’ler</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Yetenekler */}
          <div className="col-12">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body">
                <h4 className="card-title mb-3">🛠️ Yetenekler</h4>
                <div className="d-flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span key={index} className="badge bg-primary rounded-pill px-3 py-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
