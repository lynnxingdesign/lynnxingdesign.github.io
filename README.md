# Lynn Xing portfolio

The existing React/Vite design is driven by **`src/data/site.json`**.

## Edit your website

1. Open `src/data/site.json` on GitHub and click the pencil to edit.
2. Edit the text inside quotation marks. Keep commas, brackets, and quotation marks intact.
3. Commit to `main` to trigger validation, build, and publishing. To review first, make a branch and open a pull request, then merge when ready.
4. Follow **Actions → Publish portfolio**. Failed validation prevents deployment and leaves the previous published site available.

### Content guide

- `site`: name, browser title, search description, and logo image paths.
- `navigation`: menu labels and links to existing pages.
- `home`: greeting, headline, button label, and carousel interval in milliseconds.
- `works`: project listing heading and headline.
- `contacts`: contact page heading and message.
- `labels`: shared project buttons and detail labels.
- `projects`: ordered list used by the home carousel, featured works, and next-project links. Reorder entries to reorder the site; remove an entry to remove a project.
- Each project includes `brand`, `title` (event), `year`, `category`, `summary`, `disciplines`, and `accent` (six-digit hex color).
- Keep existing `slug` values to preserve shared URLs, even when an event year changes.
- `images`: ordered image objects with `src` and descriptive `alt` text. Paths are relative to `src/assets`, for example `Bae/BaeProject2.avif`.
- `heroImage` and `coverImage`: exact image paths from that project's `images` list.
- Optional `sections`: heading, description, and image paths for individual events. Section images appear under their descriptions; remaining images appear in the main gallery. An empty list is allowed while awaiting images.

Add image files under `src/assets` before referencing them. AVIF, SVG, PNG, JPG, JPEG, and WebP are supported. Copy an existing project object to add a project, assign a unique slug, and update its fields.

Content and project colors are editable in JSON. Layout, typography, animations, and new page types remain in the React components and CSS.

## Add a project using the spare slot

The last project in `src/data/site.json` is an inactive template with `"enabled": false`. JSON does not support comments, so this switch serves as the commented-out slot.

1. Fill in its project text and choose a unique `slug`.
2. Upload your images under `src/assets`, then update `images`, `heroImage`, and `coverImage` to match their paths.
3. Set `"enabled": true` and commit to `main`. The project automatically appears in the carousel, project list, detail page, and next-project links.
4. Duplicate the inactive slot whenever you need another template. Move it within the array to choose its display position.

Disabled projects are hidden and their placeholder image paths are not validated. Enabled projects must pass all content checks before publication. Existing projects without an `enabled` field remain visible. You can also hide an existing project by setting `"enabled": false`.

## Preview and validate

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

The build validates JSON, image paths, hero/cover references, navigation, slugs, colors, and carousel timing before producing `dist/`. `public/404.html` restores direct project URLs on GitHub Pages.

## Publishing

The **Publish portfolio** GitHub Actions workflow publishes the site on pushes to `main`. Deployment has been verified with the existing Pages configuration; no manual settings change is required. Avoid pushing old builds to the legacy `gh-pages` branch. The workflow publishes the validated `dist` artifact using GitHub's official Pages actions. See [GitHub's workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

Future pushes changing the JSON, image assets, source, or build configuration publish automatically. You can also run **Publish portfolio** manually from Actions. Revert a content commit to restore earlier content and trigger another deployment.

## Current review notes

- BAE's existing renders are provisionally grouped under AUSA. The AFA description is ready, with an empty image list awaiting identification or additional assets.
- Electrolit's event is spelled `NASS` as supplied (previously `NACS`).
- Dell occupies the fifth project position. The existing Audi project remains included.
