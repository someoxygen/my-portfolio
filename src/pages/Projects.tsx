import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: 'E-Ticaret Platformu',
    description:
      'React ve .NET Core ile geliştirilmiş modern bir e-ticaret altyapısı. Kullanıcılar ürünleri inceleyip sepetlerine ekleyebilir.',
    technologies: ['React', '.NET Core', 'MSSQL'],
    link: 'https://github.com/mustafayucel/ecommerce-platform',
  },
  {
    title: 'Portfolyo Sitesi',
    description:
      'Kişisel projelerimi, CV’mi ve blog yazılarımı yayınladığım bu portfolyo sitesini React + Bootstrap ile oluşturdum.',
    technologies: ['React', 'Bootstrap', 'TypeScript'],
    link: 'https://github.com/mustafayucel/portfolio-site',
  },
  {
    title: 'API Entegrasyon Projesi',
    description:
      'Kurumsal sistemler için JWT destekli mikroservis altyapısı. Finansal veri akışını güvenli hale getiriyor.',
    technologies: ['.NET 6', 'PostgreSQL', 'Swagger'],
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center">Projelerim</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm project-card">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>

                  <div className="mt-auto">
                    <div className="mb-3 d-flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="badge rounded-pill bg-secondary text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-primary rounded-pill"
                      >
                        GitHub’da Gör
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
