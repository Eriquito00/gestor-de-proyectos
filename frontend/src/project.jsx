import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import List from "./components/List.jsx";

import {
  warning,
  cerrarMenu
} from "./utils/warnsTest.jsx";

import {
  createList
} from "./utils/listFunctions.jsx"

import ButtonMenu from './components/ButtonMenu.jsx';

import plus from './assets/plus.svg';

const root = createRoot(document.getElementById('root'))
const header = createRoot(document.getElementById('header'))
const lists = createRoot(document.getElementById('lists'))
const warnings = createRoot(document.getElementById('warnings'))

header.render(
  <StrictMode>
    <div className='main_header'>
      <h1>"Nombre del proyecto"</h1>
      <ButtonMenu 
        msg={ "Crear Lista" }
        icon={ plus }
        onClick={() => createList(root)}
      />
    </div>
  </StrictMode>
)

lists.render(
  <StrictMode>
    <>
      <List
        name={"Test List1"}
        onEdit={ "" }
        onDelete={() => warning(
          "Eliminar lista",
          "¿Estás seguro de que quieres eliminar la lista ?",
          true,
          () => cerrarMenu(warnings),
          () => cerrarMenu(warnings),
          warnings
          ) }
      />
    </>
  </StrictMode>
)