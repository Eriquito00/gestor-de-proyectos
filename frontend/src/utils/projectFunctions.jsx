import { StrictMode } from 'react';

import ProjectMenu from "../components/CreateEditMenu.jsx";
import ProjectInfo from "../components/ProjectInfo.jsx";

import trash from "../assets/trash.svg";
import pencil from "../assets/pencil.svg";

import {
  warning,
  compruebaTitulo,
  compruebaExistente,
  cerrarMenu,
  projectName
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

  if (!compruebaTitulo("Campo obligatorio", "El nombre del proyecto es obligatorio", nombre, root, warnings) || !compruebaExistente("Proyecto existente",  `Ya existe un proyecto con el titulo '${nombre.trim()}' elige otro.`, nombre, arrayProjects, warnings)) return;

  cerrarMenu(root);

  arrayProjects.push({
    title: nombre.trim(),
    description: descripcion.trim()
  })
  cargarProjectArray(arrayProjects, projects, root, warnings);
}

export function cargarProjectArray(array, projects, root, warnings) {
  projects.render(
    <StrictMode>
      {array.map((item, index) => (
        <ProjectInfo
          key={index}
          title={item.title}
          description={item.description}
          onClick={() => projectName(item.title)}
          imgTrash={trash}
          imgEdit={pencil}
          onClickTrash={() => warning(
            "Eliminar proyecto", 
            "¿Estas seguro que quieres eliminar el proyecto '" + item.title + "'?", 
            true, 
            () => cerrarMenu(warnings), 
            () => eliminarProyecto(array, item.title, projects, warnings, root),
            warnings)}
          onClickEdit={() => editMenu(item.title, item.description, root, array, warnings, projects)}
        />
      ))}
    </StrictMode>
  )
}

export function eliminarProyecto(array, nombre, projects, warnings, root) {
  cerrarMenu(warnings);

  for (let i = 0; i < array.length; i++){
    if (array[i].title === nombre) {
      array.splice(i, 1);
      break;
    }
  }
  cargarProjectArray(array, projects, root, warnings);
}

export function actualizarProyecto(titulo, descripcion, tituloAntiguo, root, arrayProjects, warnings, projects) {
  cerrarMenu(root);

  if (!compruebaTitulo("Campo obligatorio", "El nombre del proyecto es obligatorio", titulo, root, warnings) || !compruebaExistente("Proyecto existente", `Ya existe un proyecto con el titulo '${titulo.trim()}' elige otro.` , titulo, arrayProjects, warnings, tituloAntiguo)) return;

  for (let i = 0; i < arrayProjects.length; i++) {
    if (arrayProjects[i].title === tituloAntiguo) {
      arrayProjects[i] = {
        title: titulo.trim(),
        description: descripcion.trim()
      };
      break;
    }
  }
  cargarProjectArray(arrayProjects, projects, root, warnings);
}