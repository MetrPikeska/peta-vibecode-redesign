import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root')!

const tree = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Hydrate the markup `scripts/prerender.mjs` wrote into the built page; mount
// from scratch when there is nothing there. The condition is the actual
// precondition rather than a build flag, which keeps `npm run dev` — where the
// dev server serves the source `index.html` with an empty #root — on this same
// file with no mode branching.
if (container.firstChild) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}
