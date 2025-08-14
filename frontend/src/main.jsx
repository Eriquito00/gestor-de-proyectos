import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ButtonMenu from './components/ButtonMenu.jsx'
import ProjectMenu from './components/CreateProjectMenu.jsx'
import ProjectInfo from './components/ProjectInfo.jsx'
import WarningPanel from './components/WarningPanel.jsx'

import plus from './assets/plus.svg';
import trash from './assets/trash.svg'

const root = createRoot(document.getElementById('root'))
const projects = createRoot(document.getElementById('projects'))
const footer = createRoot(document.getElementById('footer'))
const warnings = createRoot(document.getElementById('warnings'))

let arrayProjects = [];

footer.render (
  <StrictMode>
    <ButtonMenu 
      msg="Crear Proyecto" 
      icon={ plus } 
      onClick={ abrirMenu } 
    />
  </StrictMode>
)

function abrirMenu() {
  root.render(
    <StrictMode>
      <ProjectMenu 
        title={ "Nombre del proyecto" } 
        description={ "Descripción del proyecto" } 
        onClose={ () => cerrarMenu(root) } 
        onCreate={ crearProyecto } 
      />
    </StrictMode>
  )
}

function cerrarMenu(rend) {
  rend.render(null)
}

function warning(title, description, withOptions, onClose, func) {
  warnings.render(
    <StrictMode>
      <WarningPanel 
        title={title} 
        description={description} 
        withOptions={withOptions} 
        onClose={onClose} 
        func={func} 
      />
    </StrictMode>
  )
}

/* Funcion temporal hasta tener la parte del backend */
function crearProyecto(nombre, descripcion) {

  /* Enviar la info al Java i a la BBDD i comprobar que se ha creado el proyecto, una vez hecho seguir con lo siguiente */

  if (arrayProjects.length >= 12) {
    warning("Maximo de proyectos", "No puedes crear más de 12 proyectos", false, () => cerrarMenu(warnings), null);
    cerrarMenu(root);
    return;
  }

  if (nombre.trim() === '') {
    warning("Campo obligatorio", "El nombre del proyecto es obligatorio", false, () => cerrarMenu(warnings), null);
    cerrarMenu(root);
    return;
  }

  cerrarMenu(root);

  /* Aqui pillo directamente la informacion recien introducida pero en verdad como tendre que mostrar todos los proyectos
  lo suyo es que cuando este el backend hecho hacer un bucle cojer toda la info de todos los proyectos y mostrarlos todos
  desde la bbdd */
  arrayProjects.push(
    <ProjectInfo 
      title={ nombre.trim() } 
      description={ descripcion.trim() } 
      img={ trash } 
      onClick={ () => warning(
        "Eliminar proyecto",
        "¿Estas seguro que quieres eliminar el proyecto '" + nombre.trim() + "'?", 
        true,
        () => cerrarMenu(warnings),
        () => eliminarProyecto()
      ) }
    />
  )

  projects.render(
    <StrictMode>
      { arrayProjects }
    </StrictMode>
  )
}

function eliminarProyecto() {
  cerrarMenu(warnings)

  /* Aqui sera donde llamamos a una funcion externa para mandar la orden al backend
  de que ese proyecto tiene que ser eliminado de la bbdd */
}