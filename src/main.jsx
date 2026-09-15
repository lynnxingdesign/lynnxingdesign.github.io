import { siteContent, assetUrl } from './data/projects'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

document.title = siteContent.site.title
document.querySelector('link[rel="icon"]').href = assetUrl(siteContent.site.logo)

const redirectPath = window.sessionStorage.getItem('redirectPath')

if (redirectPath) {
  window.sessionStorage.removeItem('redirectPath')
  window.history.replaceState(null, '', redirectPath)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
