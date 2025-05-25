import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: 'React ile Component Yapısı',
    summary: 'Fonksiyonel ve class component yapılarının farklarını ve kullanım alanlarını öğrenin.',
    date: '2025-05-10',
  },
  {
    id: 2,
    title: 'TypeScript ile Güvenli Kodlama',
    summary: 'TypeScript’in güçlü tip sistemi sayesinde daha sağlam uygulamalar geliştirin.',
    date: '2025-04-28',
  },
  {
    id: 3,
    title: '.NET ve PostgreSQL ile REST API',
    summary: 'Modern .NET uygulamaları için PostgreSQL destekli REST API nasıl geliştirilir?',
    date: '2025-04-12',
  },
];

const Blog: React.FC = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Blog Yazılarım</h2>
        <div className="row g-4">
          {posts.map(post => (
            <div key={post.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm blog-card">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{post.title}</h5>
                  <small className="text-muted mb-2">
                    {new Date(post.date).toLocaleDateString('tr-TR')}
                  </small>
                  <p className="card-text text-muted flex-grow-1">{post.summary}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="btn btn-sm btn-outline-primary mt-2 rounded-pill align-self-start"
                  >
                    Devamını oku
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
