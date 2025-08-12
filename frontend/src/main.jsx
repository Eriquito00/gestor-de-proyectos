import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import CreateProjectButton from './components/createProjectButton.jsx'
import CreateProjectMenu from './components/createProjectMenu.jsx'


const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <CreateProjectMenu />
  </StrictMode>
)

const footer = createRoot(document.getElementById('footer'))

footer.render(
  <StrictMode>
    <CreateProjectButton msg='Crear Proyecto' />
  </StrictMode>
)