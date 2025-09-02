import { StrictMode } from 'react';
import { v4 as uuidv4 } from "uuid";

import Menu from "../components/CreateEditMenu.jsx"

import {
    warning,
    compruebaExistente,
    compruebaTitulo
} from "./warnsTest.jsx"

export function abrirMenu (arrayListsTasks, setArrayListsTasks, setMenu, setWarning) {
  setMenu(
    <Menu
      create={true}
      msgTitle={"Nombre de la lista"}
      titleLenght={15}
      onCreate={(title) => crearLista(title, arrayListsTasks, setArrayListsTasks, setMenu, setWarning)}
      onClose={() => setMenu(null)}
      buttonL={"Crear"}
      buttonR={"Cancelar"}
      withDescription={false}
    />
  )
}

export function editMenu(titulo, setMenu, array, setWarning) {
  setMenu(
    <Menu 
      create={false}
      msgTitle={`Introduce el nuevo titulo para la lista '${titulo}'`}
      oldTitle={titulo}
      titleLenght={15}
      onCreate={(newTitle) => actualizarLista(newTitle, titulo, array, setMenu, setWarning)}
      onClose={() => setMenu(null)}
      buttonL="Actualizar"
      buttonR="Cancelar"
      withDescription={false}
    />
  )
}

export function crearLista(title, arrayListsTasks, setArrayListsTasks, setMenu, setWarning) {
  if (arrayListsTasks.length >= 8) {
    warning("Maximo de proyectos", "No puedes crear más de 12 proyectos", false, () => setWarning(null), null, setWarning);
    setMenu(null);
    return;
  }

  if (!compruebaTitulo("Campo obligatorio", "El titulo de la lista no puede estar vacio", title, setMenu, setWarning) || !compruebaExistente("Lista existente",  `Ya existe una lista con el titulo '${title.trim()}' elige otro.`, title, arrayListsTasks, setWarning)) return;

  setMenu(null);

  /* llamar a la funcion que envia el nombre de la lista a la bbdd */

  const newList = { id: uuidv4(), title: title.trim(), tasks: [] }

  setArrayListsTasks([...arrayListsTasks, newList]);
}

export function eliminarLista(array, titulo, setWarning) {
  setWarning(null);

  for (let i = 0; i < array.length; i++){
    if (array[i].title === titulo) {

      /* llamar a la funcion que elimina la lista de la bbdd */

      array.splice(i, 1);
      break;
    }
  }

  cargarListArray(array, root, lists, warnings)
}

export function actualizarLista(titulo, tituloAntiguo, array, setMenu, setWarning) {
  setMenu(null);

  if (!compruebaTitulo("Campo obligatorio", "El nombre de la lista es obligatorio", titulo, setMenu, setWarning) || !compruebaExistente("Lista existente", `Ya existe una lista con el titulo '${titulo.trim()}' elige otro.` , titulo, array, setWarning, tituloAntiguo)) return;

  for (let i = 0; i < array.length; i++) {
    if (array[i].title === tituloAntiguo) {

      /* llamar a la funcion que actualiza la lista en la bbdd */

      array[i] = {
        title: titulo.trim(),
        tasks: array[i].tasks
      }
      break;
    }
  }
}