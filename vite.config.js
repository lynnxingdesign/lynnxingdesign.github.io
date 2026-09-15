import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'

const escapeHtml = value => value.replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char])

export default defineConfig({
  plugins: [react(), tailwindcss(), {
    name: 'portfolio-metadata',
    transformIndexHtml(html) {
      const { site } = JSON.parse(fs.readFileSync(new URL('./src/data/site.json', import.meta.url)))
      return html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(site.title)}</title>`)
        .replace('</head>', `<meta name="description" content="${escapeHtml(site.description)}" /></head>`)
    },
  }],
})
