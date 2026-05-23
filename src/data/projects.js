const assetModules = import.meta.glob('../assets/**/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});

const getProjectNumber = path => {
  const match = path.match(/Project(\d+)/i);
  return match ? Number(match[1]) : 0;
};

const getImages = (folder, label) =>
  Object.entries(assetModules)
    .filter(([path]) => path.includes(`../assets/${folder}/`))
    .sort(([pathA], [pathB]) => getProjectNumber(pathA) - getProjectNumber(pathB))
    .map(([, src], index) => ({
      src,
      alt: `${label} project view ${index + 1}`,
    }));

const projectDefinitions = [
  {
    slug: 'milwaukee-tool-dib-2025',
    folder: 'Milwaukee Tool',
    brand: 'MILWAUKEE TOOL',
    title: 'DIB 2025',
    year: '2025',
    category: 'Trade show environment',
    summary:
      'A high-impact branded exhibit system built around product presence, rhythm, and clear visitor movement.',
    disciplines: ['Spatial planning', 'Brand expression', 'Visual storytelling'],
    accent: '#D2362A',
    coverIndex: 1,
  },
  {
    slug: 'ads-ausa-2025',
    folder: 'ADS',
    brand: 'ADS, INC',
    title: 'AUSA 2025',
    year: '2025',
    category: 'Exhibit experience',
    summary:
      'A layered environment that turns technical offerings into an organized, confident visitor journey.',
    disciplines: ['Exhibit strategy', 'Graphic hierarchy', 'Environmental design'],
    accent: '#1F6F78',
    coverIndex: 1,
  },
  {
    slug: 'honeywell-nrf-2024',
    folder: 'Honeywell',
    brand: 'HONEYWELL',
    title: 'NRF 2024',
    year: '2024',
    category: 'Brand experience',
    summary:
      'A refined brand space balancing large-format messaging with focused demonstration moments.',
    disciplines: ['Experience design', 'Spatial planning', 'Presentation zones'],
    accent: '#E0A32E',
    coverIndex: 1,
  },
  {
    slug: 'electrolit-nacs-2024',
    folder: 'Electrolit',
    brand: 'ELECTROLIT',
    title: 'NACS 2024',
    year: '2024',
    category: 'Retail activation',
    summary:
      'A bright, product-forward activation shaped for quick recognition and immersive brand energy.',
    disciplines: ['Retail storytelling', 'Color strategy', 'Activation design'],
    accent: '#EE6A38',
    coverIndex: 1,
  },
  {
    slug: 'dell-technologies-sc-2024',
    folder: 'Dell SC 24',
    brand: 'DELL TECHNOLOGIES',
    title: 'SC 2024',
    year: '2024',
    category: 'Technology exhibit',
    summary:
      'A polished technology environment with structured content areas and a strong architectural frame.',
    disciplines: ['Spatial systems', 'Brand architecture', 'Experience flow'],
    accent: '#2B73B9',
    coverIndex: 1,
  },
  {
    slug: 'audi-showroom-2023',
    folder: 'Audi',
    brand: 'AUDI SHOWROOM',
    title: '2023',
    year: '2023',
    category: 'Showroom environment',
    summary:
      'A showroom concept emphasizing premium materiality, clean sightlines, and vehicle-focused storytelling.',
    disciplines: ['Showroom planning', 'Material direction', 'Brand atmosphere'],
    accent: '#8F8F8F',
    coverIndex: 1,
  },
];

export const projects = projectDefinitions.map(project => {
  const images = getImages(project.folder, project.brand);
  const safeCoverIndex = Math.min(project.coverIndex, Math.max(images.length - 1, 0));

  return {
    ...project,
    images,
    cover: images[safeCoverIndex] || images[0],
    hero: images[0],
  };
});

export const getProjectBySlug = slug => projects.find(project => project.slug === slug);
