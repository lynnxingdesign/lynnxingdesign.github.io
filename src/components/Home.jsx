import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo/Logo_White.png';
import { projects } from '../data/projects';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  useEffect(() => {
    projects.forEach(project => {
      [project.hero, project.cover].forEach(image => {
        if (!image) return;
        const loader = new Image();
        loader.src = image.src;
      });
    });
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex(index => (index + 1) % projects.length);
    }, 4600);

    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = index => {
    setCurrentIndex((index + projects.length) % projects.length);
  };

  return (
    <main className="home-page" style={{ '--project-accent': currentProject.accent }}>
      <section className="home-intro" aria-label="Portfolio introduction">
        <img className="home-intro__logo" src={Logo} alt="Lynn Xing logo" />
        <p>Hi, I'm Lynn Xing</p>
        <h1>Visual Storytelling | Spatial Planning | Brand Expression</h1>
        <Link to="/featured-works" className="text-link">
          View Featured Works
        </Link>
      </section>

      <section className="home-stage" aria-label="Featured project preview">
        <div
          className="home-stage__track"
          style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
        >
          {projects.map(project => (
            <Link
              to={`/featured-works/${project.slug}`}
              className="home-stage__slide"
              key={project.slug}
              tabIndex={project.slug === currentProject.slug ? 0 : -1}
            >
              <img src={project.hero.src} alt={project.hero.alt} />
            </Link>
          ))}
        </div>

        <div className="home-stage__caption">
          <span>{currentProject.category}</span>
          <h2>{currentProject.brand}</h2>
          <p>{currentProject.title}</p>
          <Link to={`/featured-works/${currentProject.slug}`}>View Project</Link>
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
