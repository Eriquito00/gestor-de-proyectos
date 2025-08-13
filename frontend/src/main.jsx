import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import CreateProjectButton from './components/createProjectButton.jsx'
import CreateProjectMenu from './components/createProjectMenu.jsx'
import CreateProject from './components/createProject.jsx'


import icono from './assets/plus.svg';

const root = createRoot(document.getElementById('root'))
const projects = createRoot(document.getElementById('projects'))
const footer = createRoot(document.getElementById('footer'))

let menuAbierto = false;
let arrayProjects = [];

footer.render (
  <StrictMode>
    <CreateProjectButton msg="Crear Proyecto" icon={ icono } onClick={ abrirMenu } />
  </StrictMode>
)

function abrirMenu() {
  if (!menuAbierto) {
    root.render(
      <StrictMode>
        <CreateProjectMenu title={ "Nombre del proyecto" } description={ "Descripción del proyecto" } onClose={ cerrarMenu } onCreate={ crearProyecto } />
      </StrictMode>
    )
    menuAbierto = true
  }
}

function cerrarMenu() {
  root.render(null)
  menuAbierto = false
}

function crearProyecto(nombre, descripcion) {

  /* Enviar la info al Java i a la BBDD i comprobar que se ha creado el proyecto, una vez hecho seguir con lo siguiente */

  if (arrayProjects.length >= 8) {
    alert("No puedes crear más de 8 proyectos") /* Perfeccionar porque no quiero que sea un alert quiero hacer mi propio popup */
    return;
  }

  /* Aqui pillo directamente la informacion recien introducida pero en verdad como tendre que mostrar todos los proyectos
  lo suyo es que cuando este el backend hecho hacer un bucle cojer toda la info de todos los proyectos y mostrarlos todos
  desde la bbdd */
  arrayProjects.push(<CreateProject title={ nombre } description={ descripcion } />)

  projects.render(
    <StrictMode>
      { arrayProjects }
    </StrictMode>
  )
}