import { siteContent, assetUrl } from '../data/projects';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex(index => (index + 1) % projects.length);
    }, siteContent.home.carouselInterval);

    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = index => {
    setCurrentIndex((index + projects.length) % projects.length);
  };

  return (
    <main className="home-page" style={{ '--project-accent': currentProject.accent }}>
      <section className="home-intro" aria-label="Portfolio introduction">
        <img className="home-intro__logo" src={assetUrl(siteContent.site.introLogo)} alt={`${siteContent.site.name} logo`} width="140" height="140" decoding="async" fetchPriority="high" />
        <p>{siteContent.home.greeting}</p>
        <h1>{siteContent.home.headline}</h1>
        <Link to="/featured-works" className="text-link">
          {siteContent.home.cta}
        </Link>
      </section>

      <section className="home-stage" aria-label="Featured project preview">
        <div
          className="home-stage__track"
          style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
        >
          {projects.map((project, index) => (
            <Link
              to={`/featured-works/${project.slug}`}
              className="home-stage__slide"
              key={project.slug}
              tabIndex={project.slug === currentProject.slug ? 0 : -1}
            >
              <img
                src={project.hero.src}
                alt={project.hero.alt}
                decoding="async"
                fetchPriority={index === 0 ? 'high' : 'low'}
              />
            </Link>
          ))}
        </div>

        <div className="home-stage__caption">
          <span>{currentProject.category}</span>
          <h2>{currentProject.brand}</h2>
          <p>{currentProject.title} | {currentProject.year}</p>
          <Link to={`/featured-works/${currentProject.slug}`}>{siteContent.labels.viewProject}</Link>
        </div>

        <div className="home-stage__controls" aria-label="Carousel controls">
          <button type="button" onClick={() => goToSlide(currentIndex - 1)} aria-label="Previous project">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M15.5 5 8.5 12l7 7" />
            </svg>
          </button>
          <div className="home-stage__dots">
            {projects.map((project, index) => (
              <button
                type="button"
                key={project.slug}
                className={index === currentIndex ? 'is-active' : ''}
                onClick={() => goToSlide(index)}
                aria-label={`Show ${project.brand}`}
              />
            ))}
          </div>
          <button type="button" onClick={() => goToSlide(currentIndex + 1)} aria-label="Next project">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="m8.5 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
