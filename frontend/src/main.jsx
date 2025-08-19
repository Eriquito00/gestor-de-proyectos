import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ButtonMenu from './components/ButtonMenu.jsx'

import plus from './assets/plus.svg';

import {
  abrirMenu,
} from "./utils/projectFunctions.jsx"

import {
  cargarArray
} from "./utils/warnsTest.jsx"

const root = createRoot(document.getElementById('root'))
const projects = createRoot(document.getElementById('projects'))
const footer = createRoot(document.getElementById('footer'))
export const warnings = createRoot(document.getElementById('warnings'))

let arrayProjects = [];

cargarArray(arrayProjects, projects, root, warnings);

footer.render (
  <StrictMode>
    <ButtonMenu 
      msg="Crear Proyecto" 
      icon={ plus } 
      onClick={ () => abrirMenu(root, arrayProjects, warnings, projects) } 
    />
  </StrictMode>
)