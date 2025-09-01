import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  demoLink?: string;
  image?: string;
  category: string;
}

const projects: Project[] = [
  {
    title: 'Product Store App',
    description:
      'Modern ürün mağazası uygulaması. JavaScript ile geliştirilmiş kullanıcı dostu e-ticaret platformu.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'E-commerce'],
    link: 'https://github.com/someoxygen/product-store-app',
    category: 'Frontend'
  },
  {
    title: 'Chat App',
    description:
      'Gerçek zamanlı mesajlaşma uygulaması. TypeScript ile geliştirilmiş modern chat platformu.',
    technologies: ['TypeScript', 'React', 'Real-time', 'WebSocket'],
    link: 'https://github.com/someoxygen/chat-app',
    category: 'Full-Stack'
  },
  {
    title: 'City Guide',
    description:
      'Angular ve .NET Core ile geliştirilmiş şehir rehberi uygulaması. TypeScript kullanılarak modern frontend teknolojileri ile oluşturuldu.',
    technologies: ['Angular', '.NET Core', 'TypeScript', 'Bootstrap'],
    link: 'https://github.com/someoxygen/city-guide',
    category: 'Full-Stack'
  },
  {
    title: 'Messaging App',
    description:
      'Gerçek zamanlı mesajlaşma uygulaması. Flutter ile geliştirilmiş modern mesajlaşma uygulaması.',
    technologies: ['Firebase', 'Flutter', 'Real-time', 'WebSocket'],
    link: 'https://github.com/someoxygen/messaging-app',
    category: 'Frontend'
  },
  {
    title: 'Çarşı Pazar Project',
    description:
      'Çarşı Pazar web uygulaması projesi. C# ile geliştirilmiş modern e-ticaret ve pazar yeri platformu.',
    technologies: ['C#', '.NET', 'MSSQL', 'Bootstrap'],
    link: 'https://github.com/someoxygen/CarsiPazarProject',
    category: 'Full-Stack'
  },
  {
    title: 'Notefy',
    description:
      'Modern not defteri uygulaması. Kullanıcı dostu arayüz ve güçlü backend altyapısı ile geliştirilmiş tam özellikli not alma uygulaması.',
    technologies: ['TypeScript', 'Angular', '.NET Core', 'Entity Framework'],
    link: 'https://github.com/someoxygen/Notefy',
    category: 'Full-Stack'
  },
  {
    title: 'Çarşı Pazar',
    description:
      'Çarşı Pazar web uygulaması. C# ile geliştirilmiş modern e-ticaret ve pazar yeri platformu.',
    technologies: ['C#', '.NET', 'MSSQL', 'Bootstrap'],
    link: 'https://github.com/someoxygen/CarsiPazar',
    category: 'Full-Stack'
  },
  {
    title: 'Movie App',
    description:
      'Basit film web sitesi. C# ile geliştirilmiş film bilgileri, kullanıcı yorumları ve admin paneli özellikleri.',
    technologies: ['C#', '.NET MVC', 'MSSQL', 'Bootstrap'],
    link: 'https://github.com/someoxygen/MovieApp',
    category: 'Full-Stack'
  },
  {
    title: 'Inventor Automation',
    description:
      'Autodesk Inventor uygulama otomasyonu. C# ile geliştirilmiş CAD yazılımı entegrasyonu ve otomasyon projesi.',
    technologies: ['C#', 'Autodesk Inventor API', '.NET', 'Automation'],
    link: 'https://github.com/someoxygen/InventorAutomation',
    category: 'Backend'
  },
  {
    title: 'Phone Book App',
    description:
      'Telefon rehberi uygulaması. C# ile geliştirilmiş kullanıcı dostu rehber yönetim sistemi.',
    technologies: ['C#', '.NET', 'MSSQL', 'Windows Forms'],
    link: 'https://github.com/someoxygen/PhoneBookApp',
    category: 'Backend'
  },
  {
    title: 'Paper.js Project',
    description:
      'Paper.js Angular projesi. TypeScript ile geliştirilmiş interaktif çizim ve animasyon uygulaması.',
    technologies: ['TypeScript', 'Angular', 'Paper.js', 'Canvas'],
    link: 'https://github.com/someoxygen/paperjs-project',
    category: 'Frontend'
  },
  {
    title: 'Product List API',
    description:
      'Ürün listeleme API\'si. JavaScript ile geliştirilmiş RESTful API ve ürün yönetim sistemi.',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'REST API'],
    link: 'https://github.com/someoxygen/product-list-api',
    category: 'Backend'
  },
  {
    title: 'Portfolio Website',
    description:
      'React ve TypeScript ile geliştirilmiş modern portfolyo sitesi. Responsive tasarım ve performans odaklı yaklaşım.',
    technologies: ['React', 'TypeScript', 'Bootstrap', 'CSS3'],
    link: 'https://github.com/someoxygen/my-portfolio',
    category: 'Frontend'
  }
];

const Projects: React.FC = () => {
  const categories = ['Tümü', 'Frontend', 'Backend', 'Full-Stack'];
  const [selectedCategory, setSelectedCategory] = React.useState('Tümü');

  const filteredProjects = selectedCategory === 'Tümü' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 animate-fade-in-up">
              <h1 className="display-4 fw-bold mb-4">
                Projelerim
              </h1>
              <p className="lead mb-5 opacity-90">
                Modern teknolojilerle geliştirdiğim projeler ve çözümler. 
                Her proje, kullanıcı deneyimi ve performans odaklı yaklaşımla tasarlandı.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-5 section-light">
        <div className="container">
          {/* Category Filter */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <div className="d-flex justify-content-center flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`btn rounded-pill px-4 py-2 ${
                      selectedCategory === category
                        ? 'btn-primary'
                        : 'btn-outline-primary'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="row g-4">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="col-md-6 col-lg-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card h-100 border-0 shadow-sm project-card">
                  <div className="card-body d-flex flex-column">
                    <div className="mb-3">
                      <span className="badge bg-primary rounded-pill mb-2">
                        {project.category}
                      </span>
                    </div>
                    
                    <h5 className="card-title fw-semibold mb-3">{project.title}</h5>
                    <p className="card-text text-muted flex-grow-1">{project.description}</p>

                    <div className="mt-auto">
                      <div className="mb-3 d-flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="badge bg-secondary rounded-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="d-flex gap-2">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline-primary rounded-pill flex-fill"
                          >
                            <FaGithub className="me-1" />
                            GitHub
                          </a>
                        )}
                        {project.demoLink && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-primary rounded-pill flex-fill"
                          >
                            <FaEye className="me-1" />
                            Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8 text-center animate-fade-in-up">
              <div className="card border-0 shadow-sm bg-gradient text-white">
                <div className="card-body py-5">
                  <h3 className="fw-bold mb-3">Yeni Proje Fikriniz mi Var?</h3>
                  <p className="mb-4 opacity-90">
                    Birlikte harika projeler geliştirebiliriz. İletişime geçin ve fikirlerinizi paylaşın.
                  </p>
                  <a href="/my-portfolio/contact" className="btn btn-light btn-lg rounded-pill px-4">
                    İletişime Geç
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
