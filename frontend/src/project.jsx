import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  abrirMenu
} from "./utils/listFunctions.jsx"

import ButtonMenu from './components/ButtonMenu.jsx';

import plus from './assets/plus.svg';

const root = createRoot(document.getElementById('root'))
const header = createRoot(document.getElementById('header'))
const lists = createRoot(document.getElementById('lists'))
const warnings = createRoot(document.getElementById('warnings'))

const listsArray = [];

const projectTitle = new URLSearchParams(window.location.search).get("name");

header.render(
  <StrictMode>
    <div className='main_header'>
      <h1>{projectTitle}</h1>
      <ButtonMenu 
        msg={ "Crear Lista" }
        icon={ plus }
        onClick={() => abrirMenu(listsArray, root, warnings, lists)}
      />
    </div>
  </StrictMode>
)