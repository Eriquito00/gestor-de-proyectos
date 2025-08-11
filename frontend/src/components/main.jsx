import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import createProject from "./createProject.jsx"

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    { createProject() }
  </StrictMode>
)