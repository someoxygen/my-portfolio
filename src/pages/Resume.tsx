import React from 'react';
import { FaDownload, FaGraduationCap, FaBriefcase, FaCode, FaTools, FaLanguage, FaCertificate } from 'react-icons/fa';

const Resume: React.FC = () => {
  const skills = {
    frontend: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'Angular', 'React', 'JavaScript', 'TypeScript'],
    backend: ['C#', '.NET', '.NET Core', '.NET MVC', 'Node.js', 'Web API', 'REST API', 'SOAP API'],
    database: ['MSSQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Entity Framework', 'EF Core', 'LINQ', 'ADO.NET'],
    tools: ['Git', 'GitHub', 'GitLab', 'Azure DevOps', 'RabbitMQ', 'Kafka', 'JIRA', 'Agile', 'OOP', 'SOLID', 'gRPC']
  };

  const languages = [
    { name: 'Türkçe', level: 'Ana Dil' },
    { name: 'İngilizce', level: 'İleri Seviye' }
  ];

  const education = [
    {
      degree: 'Bilgisayar Mühendisliği',
      school: 'Kocaeli Üniversitesi',
      period: '2013–2018',
      description: 'Yazılım geliştirme, veri yapıları ve algoritmalar üzerine odaklanan müfredat.'
    }
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Çuhadaroğlu Metal A.Ş.',
      period: 'Nisan 2025–Günümüz',
      description: 'Şirket içinde geliştirilen gizli bir uygulamada, JavaScript tabanlı frontend, Node.js ve .NET ile oluşturulmuş backend projeleri üzerinde müşteri ihtiyaçlarına göre yazılım geliştirmeleri.',
      technologies: ['JavaScript', 'Node.js', '.NET']
    },
    {
      title: 'Full Stack Developer',
      company: 'Overtech Bilgi Teknolojileri',
      period: 'Nisan 2021–Nisan 2025',
      description: 'BiletBank BBFaring, PavoPay ve OverEgov projelerinde frontend, backend, web servis ve entegrasyon geliştirmeleri. 20 farklı özel entegratörlük uygulaması ve GİB entegrasyonları.',
      technologies: ['Angular', 'React', 'C#', '.NET', 'REST API', 'SOAP API']
    },
    {
      title: 'IT Helpdesk Uzmanı',
      company: 'Türk Telekom A.Ş.',
      period: 'Kasım 2020–Nisan 2021',
      description: 'Türk Telekom personelinin bilgisayarlarındaki yazılımsal ve donanımsal sıkıntıların giderilmesi, program kurulumları ve teknik destek.',
      technologies: ['Teknik Destek', 'Sistem Yönetimi']
    }
  ];

  const projects = [
    {
      title: 'Telefon Rehberi API',
      description: 'Microservis mimarisi ve .NET Core 8 ile yazılmış telefon rehberi API\'si',
      technologies: ['.NET Core 8', 'Microservices']
    },
    {
      title: 'Notefy',
      description: 'Angular ve .NET Core 8 ile yazılmış not defteri uygulaması',
      technologies: ['Angular', '.NET Core 8']
    },
    {
      title: 'CityGuide',
      description: 'Angular ve .NET Core 8 ile yazılmış şehir rehberi uygulaması',
      technologies: ['Angular', '.NET Core 8']
    },
    {
      title: 'Film Sitesi',
      description: 'C# .NET MVC ile yazılmış bir film sitesi',
      technologies: ['C#', '.NET MVC']
    },
    {
      title: 'Ürün Listeleme API',
      description: 'Node.js ve MongoDB kullanan bir ürün listeleme API\'si',
      technologies: ['Node.js', 'MongoDB']
    }
  ];

  const certifications = [
    {
      name: 'Sistem ve Ağ Uzmanlığı Eğitimi',
      issuer: 'Bilişim Eğitim Merkezi - İŞKUR'
    },
    {
      name: 'C# ile Nesneye Yönelik Programlama',
      issuer: 'İSMEK'
    },
    {
      name: 'HTML ve CSS3 ile Responsive Kodlama',
      issuer: 'İSMEK'
    },
    {
      name: 'Bootstrap CSS Framework ile Kodlama',
      issuer: 'İSMEK'
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
                Özgeçmiş
              </h1>
              <p className="lead mb-5 opacity-90">
                4 yıllık endüstri deneyimine sahip, yaratıcı ve çözüm odaklı bir Full Stack Developer'ım. 
                C#, Node.js, Angular, React ve modern web teknolojileri ile kullanıcı deneyimini ön planda 
                tutan projeler geliştiriyorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-5 section-light">
        <div className="container">
          <div className="row g-5">
            {/* Education */}
            <div className="col-lg-6 animate-slide-in-left">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="me-3 text-primary">
                      <FaGraduationCap className="fa-2x" />
                    </div>
                    <h3 className="fw-bold mb-0">Eğitim</h3>
                  </div>
                  
                  {education.map((item, index) => (
                    <div key={index} className="mb-4 pb-4 border-bottom border-light">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="fw-semibold mb-1">{item.degree}</h5>
                        <span className="badge bg-primary rounded-pill">{item.period}</span>
                      </div>
                      <h6 className="text-primary mb-2">{item.school}</h6>
                      <p className="text-muted mb-0">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="col-lg-6 animate-slide-in-right">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="me-3 text-primary">
                      <FaBriefcase className="fa-2x" />
                    </div>
                    <h3 className="fw-bold mb-0">İş Deneyimi</h3>
                  </div>
                  
                  {experience.map((item, index) => (
                    <div key={index} className="mb-4 pb-4 border-bottom border-light">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="fw-semibold mb-1">{item.title}</h5>
                        <span className="badge bg-primary rounded-pill">{item.period}</span>
                      </div>
                      <h6 className="text-primary mb-2">{item.company}</h6>
                      <p className="text-muted mb-2">{item.description}</p>
                      <div className="d-flex flex-wrap gap-1">
                        {item.technologies.map((tech, i) => (
                          <span key={i} className="badge bg-secondary rounded-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="col-12 animate-fade-in-up">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="me-3 text-primary">
                      <FaCode className="fa-2x" />
                    </div>
                    <h3 className="fw-bold mb-0">Teknik Yetenekler</h3>
                  </div>
                  
                  <div className="row g-4">
                    <div className="col-md-6">
                      <h5 className="fw-semibold mb-3">
                        <FaCode className="me-2 text-primary" />
                        Frontend
                      </h5>
                      <div className="d-flex flex-wrap gap-2">
                        {skills.frontend.map((skill, index) => (
                          <span key={index} className="badge bg-primary rounded-pill px-3 py-2">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <h5 className="fw-semibold mb-3">
                        <FaBriefcase className="me-2 text-primary" />
                        Backend
                      </h5>
                      <div className="d-flex flex-wrap gap-2">
                        {skills.backend.map((skill, index) => (
                          <span key={index} className="badge bg-primary rounded-pill px-3 py-2">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <h5 className="fw-semibold mb-3">
                        <FaTools className="me-2 text-primary" />
                        Veritabanı & Araçlar
                      </h5>
                      <div className="d-flex flex-wrap gap-2">
                        {[...skills.database, ...skills.tools].map((skill, index) => (
                          <span key={index} className="badge bg-secondary rounded-pill px-3 py-2">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <h5 className="fw-semibold mb-3">
                        <FaLanguage className="me-2 text-primary" />
                        Diller
                      </h5>
                      <div className="d-flex flex-column gap-2">
                        {languages.map((lang, index) => (
                          <div key={index} className="d-flex justify-content-between align-items-center">
                            <span className="fw-medium">{lang.name}</span>
                            <span className="badge bg-success rounded-pill">{lang.level}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="col-12 animate-fade-in-up">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="me-3 text-primary">
                      <FaCode className="fa-2x" />
                    </div>
                    <h3 className="fw-bold mb-0">Kişisel Projeler</h3>
                  </div>
                  
                  <div className="row g-4">
                    {projects.map((project, index) => (
                      <div key={index} className="col-md-6">
                        <div className="card border-0 bg-light h-100">
                          <div className="card-body">
                            <h5 className="fw-semibold mb-2">{project.title}</h5>
                            <p className="text-muted mb-3">{project.description}</p>
                            <div className="d-flex flex-wrap gap-1">
                              {project.technologies.map((tech, i) => (
                                <span key={i} className="badge bg-primary rounded-pill">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="col-12 animate-fade-in-up">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="me-3 text-primary">
                      <FaCertificate className="fa-2x" />
                    </div>
                    <h3 className="fw-bold mb-0">Sertifikalar</h3>
                  </div>
                  
                  <div className="row g-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="col-md-6">
                        <div className="d-flex align-items-start">
                          <div className="me-3 text-primary">
                            <FaCertificate />
                          </div>
                          <div>
                            <h6 className="fw-semibold mb-1">{cert.name}</h6>
                            <p className="text-muted mb-0">{cert.issuer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
