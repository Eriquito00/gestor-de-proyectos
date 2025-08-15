import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ButtonMenu from './components/ButtonMenu.jsx'
import ProjectMenu from './components/CreateProjectMenu.jsx'
import ProjectInfo from './components/ProjectInfo.jsx'
import WarningPanel from './components/WarningPanel.jsx'

import plus from './assets/plus.svg';
import trash from './assets/trash.svg';
import pencil from "./assets/pencil.svg";

const root = createRoot(document.getElementById('root'))
const projects = createRoot(document.getElementById('projects'))
const footer = createRoot(document.getElementById('footer'))
const warnings = createRoot(document.getElementById('warnings'))

let arrayProjects = [];

projects.render(
  <StrictMode>
    { arrayProjects }
  </StrictMode>
)

footer.render (
  <StrictMode>
    <ButtonMenu 
      msg="Crear Proyecto" 
      icon={ plus } 
      onClick={ () => abrirMenu() } 
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
        buttonL={"Crear"}
        buttonR={"Cancelar"}
      />
    </StrictMode>
  )
}

function editMenu(titulo) {
  root.render(
    <StrictMode>
      <ProjectMenu 
        title={ "Introduce el nuevo titulo para el proyecto '" + titulo + "'" } 
        description={ "Introduce la nueva descripción para el proyecto '" + titulo + "'" } 
        onClose={ () => cerrarMenu(root) } 
        onCreate={ (newTitle, newDescription) => actualizarProyecto(newTitle, newDescription, titulo) }
        buttonL={"Actualizar"}
        buttonR={"Cancelar"}
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

  if (!compruebaTitulo(nombre) || !compruebaProyectoExistente(nombre)) return;

  cerrarMenu(root);

  /* Aqui pillo directamente la informacion recien introducida pero en verdad como tendre que mostrar todos los proyectos
  lo suyo es que cuando este el backend hecho hacer un bucle cojer toda la info de todos los proyectos y mostrarlos todos
  desde la bbdd */
  arrayProjects.push(
    <ProjectInfo 
      title={ nombre.trim() } 
      description={ descripcion.trim() } 
      imgTrash={ trash } 
      onClickTrash={ () => warning(
        "Eliminar proyecto",
        "¿Estas seguro que quieres eliminar el proyecto '" + nombre.trim() + "'?", 
        true,
        () => cerrarMenu(warnings),
        () => eliminarProyecto(arrayProjects, nombre.trim())
      ) }
      imgEdit={ pencil }
      onClickEdit={ () => editMenu(nombre.trim(), descripcion.trim()) }
    />
  )

  cargarProyectos();
}

function eliminarProyecto(array, nombre) {
  cerrarMenu(warnings);

  /* Aqui sera donde llamamos a una funcion externa para mandar la orden al backend
  de que ese proyecto tiene que ser eliminado de la bbdd */

  for (let i = 0; i < array.length; i++){
    if (array[i].props.title === nombre) {
      array.splice(i, 1);
      break;
    }
  }

  cargarProyectos();
}

function actualizarProyecto(titulo, descripcion, tituloAntiguo) {
  cerrarMenu(root);

  /* enviar a una funcion del backend que compruebe que el nuevo titulo esta disponible y que no hay proyecto que lo tenga ya */

  if (!compruebaTitulo(titulo) || !compruebaProyectoExistente(titulo)) return;

  for (let i = 0; i < arrayProjects.length; i++) {
    if (arrayProjects[i].props.title === tituloAntiguo) {
      arrayProjects[i] = (
        <ProjectInfo
          title={titulo.trim()}
          description={descripcion.trim()}
          imgTrash={trash}
          onClickTrash={() =>
            warning(
              "Eliminar proyecto",
              "¿Estas seguro que quieres eliminar el proyecto '" + titulo.trim() + "'?",
              true,
              () => cerrarMenu(warnings),
              () => eliminarProyecto(arrayProjects, titulo.trim())
            )
          }
          imgEdit={ pencil }
          onClickEdit={() => editMenu(titulo.trim(), descripcion.trim())}
        />
      );
      break;
    }
  }
  cargarProyectos();
}

function cargarProyectos() {
  projects.render(
    <StrictMode>
      { arrayProjects }
    </StrictMode>
  )
}

function compruebaTitulo(titulo) {
  if (titulo.trim() === '') {
    warning("Campo obligatorio", "El nombre del proyecto es obligatorio", false, () => cerrarMenu(warnings), null);
    cerrarMenu(root);
    return false;
  }
  return true;
}

function compruebaProyectoExistente(titulo) {
  for (let i = 0; i < arrayProjects.length; i++) {
    if (arrayProjects[i].props.title === titulo.trim()) {
      warning("Proyecto existente", "Ya existe un proyecto con el titulo '" + titulo.trim() + "' elige otro.", false, () => cerrarMenu(warnings), null);
      return false;
    }
  }
  return true;
}