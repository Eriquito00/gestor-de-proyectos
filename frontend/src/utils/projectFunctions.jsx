import ProjectMenu from "../components/CreateEditMenu.jsx";
import { v4 as uuidv4 } from "uuid";

import {
  warning,
  compruebaTitulo
} from "./warnsTest.jsx"

export function abrirMenu(arrayProjects, setarrayProjects, setMenu, setWarning) {
  setMenu(
    <ProjectMenu
      create={true}
      msgTitle="Nombre del proyecto"
      msgDescription="Descripción del proyecto"
      titleLenght={25}
      descriptionLenght={150}
      onCreate={(nombre, descripcion) => crearProyecto(nombre, descripcion, arrayProjects, setarrayProjects, setMenu, setWarning)}
      onClose={() => setMenu(null)}
      buttonL="Crear"
      buttonR="Cancelar"
      withDescription={true}
    />
  );
}

export function editMenu(titulo, descripcion, id, arrayProjects, setMenu, setArrayProjects, setWarning) {
  setMenu(
    <ProjectMenu 
      create={false}
      msgTitle={`Introduce el nuevo titulo para el proyecto '${titulo}'`}
      msgDescription={`Introduce la nueva descripción para el proyecto '${titulo}'`}
      oldTitle={titulo}
      oldDescription={descripcion}
      titleLenght={25}
      descriptionLenght={150}
      onCreate={(newTitle, newDescription) => actualizarProyecto(newTitle, newDescription, id, setMenu, arrayProjects, setWarning, setArrayProjects)}
      onClose={() => setMenu(null)}
      buttonL="Actualizar"
      buttonR="Cancelar"
      withDescription={true}
    />
  )
}

export function crearProyecto(nombre, descripcion, arrayProjects, setarrayProjects, setMenu, setWarning) {
  if (arrayProjects.length >= 12) {
    warning("Maximo de proyectos", "No puedes crear más de 12 proyectos", false, () => setWarning(null), null, setWarning);
    setMenu(null);
    return;
  }

  if (!compruebaTitulo("Campo obligatorio", "El nombre del proyecto es obligatorio", nombre, setMenu, setWarning)) return;

  setMenu(null);

  /* llamar a la funcion que crea el proyecto en la bbdd */

  const newProject = { id: uuidv4(), title: nombre.trim(), description: descripcion.trim() }

  setarrayProjects([...arrayProjects, newProject]);
}

export function eliminarProyecto(array, id, setArrayProjects, setWarning) {
  setWarning(null);

  for (let i = 0; i < array.length; i++){
    if (array[i].id === id) {
      /* llamar a la funcion que elimina el proyecto de la bbdd */
      array.splice(i, 1);
      break;
    }
  }

  setArrayProjects([...array]);
}

export function actualizarProyecto(titulo, descripcion, id, setMenu, arrayProjects, setWarning, setArrayProjects) {
  setMenu(null);

  if (!compruebaTitulo("Campo obligatorio", "El nombre del proyecto es obligatorio", titulo, setMenu, setWarning)) return;

  for (let i = 0; i < arrayProjects.length; i++) {
    if (arrayProjects[i].id === id) {
      /* llamar a la funcion que actualiza el proyecto en la bbdd */
      arrayProjects[i] = {
        title: titulo.trim(),
        description: descripcion.trim()
      };
      break;
    }
  }

  setArrayProjects([...arrayProjects]);
}