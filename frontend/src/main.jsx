import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import CreateProjectButton from './components/createProjectButton.jsx'
import CreateProjectMenu from './components/createProjectMenu.jsx'

import icono from './assets/plus.svg';

const root = createRoot(document.getElementById('root'))

const footer = createRoot(document.getElementById('footer'))

footer.render(
  <StrictMode>
    <CreateProjectButton msg='Crear Proyecto' icon={ icono } onClick={ createMenu } />
  </StrictMode>
)

function createMenu (){
  root.render(
    <StrictMode>
      <CreateProjectMenu />
    </StrictMode>
  )
}