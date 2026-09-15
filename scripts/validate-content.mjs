import fs from 'node:fs';
import assert from 'node:assert/strict';
const content = JSON.parse(fs.readFileSync(new URL('../src/data/site.json', import.meta.url)));
const checkText = (value, label) => assert(typeof value === 'string' && value.trim(), `${label} must be nonempty text`);
const checkAsset = path => {
  checkText(path, 'Image path');
  assert(fs.existsSync(new URL(`../src/assets/${path}`, import.meta.url)), `Missing image: ${path}`);
};
for (const field of ['title', 'description', 'name']) checkText(content.site[field], `site.${field}`);
for (const field of ['logo', 'introLogo', 'worksLogo']) checkAsset(content.site[field]);
for (const group of ['home', 'works', 'contacts', 'labels']) {
  for (const [key, value] of Object.entries(content[group])) if (key !== 'carouselInterval') checkText(value, `${group}.${key}`);
}
assert(Number.isFinite(content.home.carouselInterval) && content.home.carouselInterval >= 1000, 'Carousel interval must be at least 1000 milliseconds');
assert(content.projects.some(project => project.enabled !== false), 'Add at least one enabled project');
const slugs = new Set();
for (const project of content.projects) {
  assert(project.enabled === undefined || typeof project.enabled === 'boolean', 'Project enabled must be true or false');
  if (project.enabled === false) continue;
  for (const field of ['slug', 'brand', 'title', 'year', 'category', 'summary']) checkText(project[field], `${project.slug}.${field}`);
  assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug), `Invalid slug: ${project.slug}`);
  assert(!slugs.has(project.slug), `Duplicate slug: ${project.slug}`);
  slugs.add(project.slug);
  assert(/^#[a-f0-9]{6}$/i.test(project.accent), `Invalid accent: ${project.slug}`);
  assert(project.disciplines.length > 0, 'Add project disciplines');
  project.disciplines.forEach(value => checkText(value, 'Discipline'));
  assert(project.images.length > 0, `No images: ${project.slug}`);
  const paths = new Set();
  for (const image of project.images) {
    checkAsset(image.src); checkText(image.alt, 'Image alt');
    assert(!paths.has(image.src), `Duplicate image: ${image.src}`); paths.add(image.src);
  }
  for (const key of ['heroImage', 'coverImage']) assert(paths.has(project[key]), `${project.slug}.${key} must reference a project image`);
  const sectionPaths = new Set();
  for (const section of project.sections || []) {
    checkText(section.title, 'Section title'); checkText(section.description, 'Section description');
    assert(Array.isArray(section.images), `Images must be an array in ${section.title}`);
    for (const path of section.images) {
      assert(paths.has(path), `Unknown section image: ${path}`);
      assert(!sectionPaths.has(path), `Repeated section image: ${path}`); sectionPaths.add(path);
    }
  }
}
assert(content.navigation.length > 0, 'Navigation cannot be empty');
for (const item of content.navigation) {
  checkText(item.label, 'Navigation label');
  assert(['/', '/featured-works', '/contacts', ...[...slugs].map(slug => `/featured-works/${slug}`)].includes(item.to), `Unknown navigation route: ${item.to}`);
}
console.log(`Validated site content and ${slugs.size} projects.`);
