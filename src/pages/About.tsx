import React from 'react';
import profilePic from '../assets/profile.jpg'; // Fotoğraf varsa buraya ekle (isteğe bağlı)

const About: React.FC = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Profil Fotoğrafı */}
          <div className="col-md-4 text-center">
            <img
              src={profilePic}
              alt="Profil"
              className="img-fluid rounded-circle shadow-sm"
              style={{ maxWidth: '200px' }}
            />
          </div>

          {/* Hakkımda Metni */}
          <div className="col-md-8">
            <h2 className="fw-bold mb-3">Merhaba, ben Mustafa Yücel</h2>
            <p className="lead">
              Yazılım geliştiricisiyim. Web teknolojileri, kullanıcı arayüzü tasarımı ve backend sistemleri üzerine projeler geliştiriyorum.
            </p>
            <p>
              React, TypeScript, Angular, .NET Core ve PostgreSQL gibi teknolojilerle full-stack projeler geliştiriyorum.
              Temiz kod yazımına, sürdürülebilirliğe ve kullanıcı deneyimine önem veririm.
            </p>
            <p>
              Yeni şeyler öğrenmeye ve açık kaynak katkılar yapmaya bayılırım. Boş zamanlarımda blog yazarım, GitHub'da aktifim.
            </p>

            <a href="/resume" className="btn btn-primary rounded-pill px-4 mt-3">
              CV’mi Görüntüle
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
