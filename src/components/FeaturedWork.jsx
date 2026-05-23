import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo/Logo_Gray.png';
import { projects } from '../data/projects';

const setPointerGlow = event => {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  card.style.setProperty('--pointer-x', `${x}%`);
  card.style.setProperty('--pointer-y', `${y}%`);
};

const FeaturedWork = () => {
  return (
    <main className="works-page">
      <section className="page-heading works-heading" aria-label="Featured works introduction">
        <img src={Logo} alt="Lynn Xing logo" />
        <p>Featured Works</p>
        <h1>Visual Storytelling | Spatial Planning | Brand Expression</h1>
      </section>

      <section className="works-list" aria-label="Featured projects">
        {projects.map((project, index) => (
          <Link
            to={`/featured-works/${project.slug}`}
            className={`work-card ${index % 2 === 1 ? 'work-card--reverse' : ''}`}
            key={project.slug}
            onPointerMove={setPointerGlow}
            style={{ '--project-accent': project.accent }}
          >
            <span className="work-card__number">{String(index + 1).padStart(2, '0')}</span>
            <span className="work-card__ghost" aria-hidden="true">
              {project.brand}
            </span>

            <div className="work-card__media">
              <img src={project.cover.src} alt={project.cover.alt} />
              <div className="work-card__thumbs" aria-hidden="true">
                {project.images.slice(0, 4).map(image => (
                  <span key={image.src}>
                    <img src={image.src} alt="" />
                  </span>
                ))}
              </div>
            </div>

            <div className="work-card__body">
              <p>{project.brand}</p>
              <h2>{project.title}</h2>
              <span>{project.category}</span>
              <small>{project.summary}</small>
              <div className="work-card__meta">
                {project.disciplines.map(discipline => (
                  <em key={discipline}>{discipline}</em>
                ))}
              </div>
              <strong>
                Open Project
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </strong>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default FeaturedWork;
