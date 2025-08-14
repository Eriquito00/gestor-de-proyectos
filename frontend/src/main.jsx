import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ButtonMenu from './components/ButtonMenu.jsx'
import ProjectMenu from './components/CreateProjectMenu.jsx'
import ProjectInfo from './components/ProjectInfo.jsx'


import plus from './assets/plus.svg';
import trash from './assets/trash.svg'

const root = createRoot(document.getElementById('root'))
const projects = createRoot(document.getElementById('projects'))
const footer = createRoot(document.getElementById('footer'))

let menuAbierto = false;
let arrayProjects = [];

footer.render (
  <StrictMode>
    <ButtonMenu msg="Crear Proyecto" icon={ plus } onClick={ abrirMenu } />
  </StrictMode>
)

function abrirMenu() {
  if (!menuAbierto) {
    root.render(
      <StrictMode>
        <ProjectMenu title={ "Nombre del proyecto" } description={ "Descripción del proyecto" } onClose={ cerrarMenu } onCreate={ crearProyecto } />
      </StrictMode>
    )
    menuAbierto = true
  }
}

function cerrarMenu() {
  root.render(null)
  menuAbierto = false
}

/* Funcion temporal hasta tener la parte del backend */
function crearProyecto(nombre, descripcion) {

  /* Enviar la info al Java i a la BBDD i comprobar que se ha creado el proyecto, una vez hecho seguir con lo siguiente */

  if (arrayProjects.length >= 12) {
    alert("No puedes crear más de 12 proyectos") /* Perfeccionar porque no quiero que sea un alert quiero hacer mi propio popup */
    cerrarMenu();
    return;
  }

  if (nombre.trim() === '') {
    alert("El proyecto debe tener un titulo obligatoriamente.")  /* Perfeccionar porque no quiero que sea un alert quiero hacer mi propio popup */
    return;
  }

  cerrarMenu();

  /* Aqui pillo directamente la informacion recien introducida pero en verdad como tendre que mostrar todos los proyectos
  lo suyo es que cuando este el backend hecho hacer un bucle cojer toda la info de todos los proyectos y mostrarlos todos
  desde la bbdd */
  arrayProjects.push(<ProjectInfo title={ nombre.trim() } description={ descripcion.trim() } img={ trash } />)

  projects.render(
    <StrictMode>
      { arrayProjects }
    </StrictMode>
  )
}