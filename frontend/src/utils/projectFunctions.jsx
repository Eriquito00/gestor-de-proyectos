import { StrictMode } from 'react';
import ProjectMenu from "../components/CreateEditMenu.jsx";

import {
  warning,
  cargarArray,
  compruebaTitulo,
  compruebaExistente,
  cerrarMenu
} from "./warnsTest.jsx"

export function abrirMenu(root, arrayProjects, warnings, projects) {
  root.render(
    <StrictMode>
      <ProjectMenu
        create={true}
        msgTitle="Nombre del proyecto"
        msgDescription="Descripción del proyecto"
        titleLenght={50}
        descriptionLenght={150}
        onCreate={(nombre, descripcion) => crearProyecto(nombre, descripcion, root, arrayProjects, warnings, projects)}
        onClose={() => cerrarMenu(root)}
        buttonL="Crear"
        buttonR="Cancelar"
        withDescription={true}
      />
    </StrictMode>
  )
}

export function editMenu(titulo, descripcion, root, arrayProjects, warnings, projects) {
  root.render(
    <StrictMode>
      <ProjectMenu 
        create={false}
        msgTitle={`Introduce el nuevo titulo para el proyecto '${titulo}'`}
        msgDescription={`Introduce la nueva descripción para el proyecto '${titulo}'`}
        oldTitle={titulo}
        oldDescription={descripcion}
        titleLenght={50}
        descriptionLenght={150}
        onCreate={(newTitle, newDescription) => actualizarProyecto(newTitle, newDescription, titulo, root, arrayProjects, warnings, projects)}
        onClose={() => cerrarMenu(root)}
        buttonL="Actualizar"
        buttonR="Cancelar"
        withDescription={true}
      />
    </StrictMode>
  )
}

export function crearProyecto(nombre, descripcion, root, arrayProjects, warnings, projects) {
  if (arrayProjects.length >= 12) {
    warning("Maximo de proyectos", "No puedes crear más de 12 proyectos", false, () => cerrarMenu(warnings), null, warnings);
    cerrarMenu(root);
    return;
  }

  if (!compruebaTitulo(nombre, root, warnings) || !compruebaExistente(nombre, arrayProjects, warnings)) return;

  cerrarMenu(root);

  arrayProjects.push({
    title: nombre.trim(),
    description: descripcion.trim()
  })
  cargarArray(arrayProjects, projects, root, warnings);
}

export function eliminarProyecto(array, nombre, projects, warnings, root) {
  cerrarMenu(warnings);

  for (let i = 0; i < array.length; i++){
    if (array[i].title === nombre) {
      array.splice(i, 1);
      break;
    }
  }
  cargarArray(array, projects, root, warnings);
}

export function actualizarProyecto(titulo, descripcion, tituloAntiguo, root, arrayProjects, warnings, projects) {
  cerrarMenu(root);

  if (!compruebaTitulo(titulo, root, warnings) || !compruebaExistente(titulo, arrayProjects, warnings, tituloAntiguo)) return;

  for (let i = 0; i < arrayProjects.length; i++) {
    if (arrayProjects[i].title === tituloAntiguo) {
      arrayProjects[i] = {
        title: titulo.trim(),
        description: descripcion.trim()
      };
      break;
    }
  }
  cargarArray(arrayProjects, projects, root, warnings);
}