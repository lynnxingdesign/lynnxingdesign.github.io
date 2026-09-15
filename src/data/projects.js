import content from './site.json';

const assetModules = import.meta.glob('../assets/**/*.{avif,svg,png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});

export const assetUrl = path => assetModules[`../assets/${path}`] || path;
export const siteContent = content;
export const projects = content.projects.filter(project => project.enabled !== false).map(project => {
  const images = project.images.map(image => ({ ...image, src: assetUrl(image.src) }));
  return {
    ...project,
    images,
    cover: images[project.images.findIndex(image => image.src === project.coverImage)],
    hero: images[project.images.findIndex(image => image.src === project.heroImage)],
    sections: project.sections?.map(section => ({
      ...section,
      images: section.images.map(path => images[project.images.findIndex(image => image.src === path)]),
    })),
  };
});

export const getProjectBySlug = slug => projects.find(project => project.slug === slug);
