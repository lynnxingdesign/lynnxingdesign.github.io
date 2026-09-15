import { siteContent } from '../data/projects';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getProjectBySlug, projects } from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/featured-works" replace />;
  }

  const projectIndex = projects.findIndex(item => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const galleryImages = project.images.filter(image => image.src !== project.hero.src && !project.sections?.some(section => section.images.some(item => item.src === image.src)));

  return (
    <main className="project-page" style={{ '--project-accent': project.accent }}>
      <section className="project-hero">
        <div className="project-hero__image-wrap">
          <img
            src={project.hero.src}
            alt={project.hero.alt}
            className="project-hero__image"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="project-hero__content">
          <Link to="/featured-works" className="project-back-link" aria-label="Back to featured works">
            <span aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M15.5 5 8.5 12l7 7" />
              </svg>
            </span>
            <span>{siteContent.works.heading}</span>
          </Link>
          <p className="project-kicker">{project.category}</p>
          <h1>{project.brand}</h1>
          <div className="project-hero__meta">
            <span>{project.title}</span>
            <span>{project.year}</span>
          </div>
        </div>
      </section>

      <section className="project-intro" aria-label={`${project.brand} project overview`}>
        <p>{project.summary}</p>
        <div className="project-stats" aria-label="Project details">
          <div>
            <span>{siteContent.labels.images}</span>
            <strong>{project.images.length}</strong>
          </div>
          <div>
            <span>{siteContent.labels.focus}</span>
            <strong>{project.category}</strong>
          </div>
          <div>
            <span>{siteContent.labels.year}</span>
            <strong>{project.year}</strong>
          </div>
        </div>
        <ul className="project-disciplines" aria-label="Project disciplines">
          {project.disciplines.map(discipline => (
            <li key={discipline}>{discipline}</li>
          ))}
        </ul>
      </section>

      {project.sections?.map(section => (
        <section key={section.title} className="project-story">
          <h2>{section.title}</h2>
          <p>{section.description}</p>
          <div className="project-gallery">
            {section.images.map((image, index) => (
              <figure key={image.src} className={`project-gallery__item ${index % 5 === 0 || index % 7 === 0 ? 'project-gallery__item--wide' : ''}`}>
                <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        </section>
      ))}

      <section className="project-gallery" aria-label={`${project.brand} image gallery`}>
        {galleryImages.map((image, index) => (
          <figure
            key={image.src}
            className={`project-gallery__item ${
              index % 5 === 0 || index % 7 === 0 ? 'project-gallery__item--wide' : ''
            }`}
          >
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
          </figure>
        ))}
      </section>

      <section className="project-next" aria-label="Next project">
        <Link to={`/featured-works/${nextProject.slug}`} className="project-next__link">
          <span>{siteContent.labels.nextProject}</span>
          <strong>{nextProject.brand}</strong>
          <small>{nextProject.title}</small>
        </Link>
      </section>
    </main>
  );
};

export default ProjectDetail;
