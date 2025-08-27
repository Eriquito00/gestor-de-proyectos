import { StrictMode } from 'react';

import Menu from "../components/CreateEditMenu.jsx"
import List from "../components/List.jsx"

import {
    warning,
    cerrarMenu,
    compruebaExistente,
    compruebaTitulo
} from "./warnsTest.jsx"

import {
  abrirMenuTasks,
  editMenuTasks,
  deleteTask
} from "./taskFunctions.jsx"

export function abrirMenu (listsArray, root, warnings, lists) {
    root.render(
        <StrictMode>
            <Menu
                create={true}
                msgTitle={"Nombre de la lista"}
                titleLenght={15}
                onCreate={(title) => crearLista(title, listsArray, root, warnings, lists)}
                onClose={() => cerrarMenu(root)}
                buttonL={"Crear"}
                buttonR={"Cancelar"}
                withDescription={false}
            />
        </StrictMode>
    )
}

export function editMenu(titulo, root, listsArray, warnings, lists) {
  root.render(
    <StrictMode>
      <Menu 
        create={false}
        msgTitle={`Introduce el nuevo titulo para la lista '${titulo}'`}
        oldTitle={titulo}
        titleLenght={15}
        onCreate={(newTitle) => actualizarLista(newTitle, titulo, root, listsArray, warnings, lists)}
        onClose={() => cerrarMenu(root)}
        buttonL="Actualizar"
        buttonR="Cancelar"
        withDescription={false}
      />
    </StrictMode>
  )
}

export function crearLista(nombre, listsArray, root, warnings, lists) {
  if (listsArray.length >= 8) {
    warning("Maximo de listas", "No puedes crear más de 8 listas en un proyecto.", false, () => cerrarMenu(warnings), null, warnings);
    cerrarMenu(root);
    return;
  }

  if (!compruebaTitulo("Campo obligatorio", "El titulo de la lista no puede estar vacio", nombre, root, warnings) || !compruebaExistente("Lista existente", `Ya existe una lista con el titulo '${nombre.trim()}' elige otro.`, nombre, listsArray, warnings)) return;

  cerrarMenu(root);

  /* llamar a la funcion que envia el nombre de la lista a la bbdd */

  listsArray.push({
    title: nombre.trim(),
    tasks: []
  })

  cargarListArray(listsArray, root, lists, warnings)
}

export function cargarListArray (array, root, lists, warnings) {
  lists.render(
    <StrictMode>
      {array.map((item, index) => 
        <List
          key={index}
          name={item.title}
          tasks={item.tasks}
          onCreate={() => abrirMenuTasks(array, index, root, warnings, lists)}
          onEdit={() => editMenu(item.title, root, array, warnings, lists)}
          onDelete={() => warning(
          "Eliminar lista",
          "¿Estás seguro de que quieres eliminar la lista?",
          true,
          () => cerrarMenu(warnings),
          () => eliminarLista(array, item.title, warnings, lists),
          warnings)}
          onEditTask={(indexTask) => editMenuTasks(array, index, indexTask, root, warnings, lists)}
          onChangeTask={""}
          onDeleteTask={() => warning(
          "Eliminar tarea",
          "¿Estás seguro de que quieres eliminar la tarea?",
          true,
          () => cerrarMenu(warnings),
          (indexTask) => deleteTask(array, index, indexTask, root, lists, warnings),
          warnings)}
        />
      )}
    </StrictMode>
  )
}

export function eliminarLista(array, titulo, warnings, lists) {
  cerrarMenu(warnings);

  for (let i = 0; i < array.length; i++){
    if (array[i].title === titulo) {

      /* llamar a la funcion que elimina la lista de la bbdd */

      array.splice(i, 1);
      break;
    }
  }

  cargarListArray(array, root, lists, warnings)
}

export function actualizarLista(titulo, tituloAntiguo, root, listsArray, warnings, lists) {
  cerrarMenu(root);

  if (!compruebaTitulo("Campo obligatorio", "El nombre de la lista es obligatorio", titulo, root, warnings) || !compruebaExistente("Lista existente", `Ya existe una lista con el titulo '${titulo.trim()}' elige otro.` , titulo, listsArray, warnings, tituloAntiguo)) return;

  for (let i = 0; i < listsArray.length; i++) {
    if (listsArray[i].title === tituloAntiguo) {

      /* llamar a la funcion que actualiza la lista en la bbdd */

      listsArray[i] = {
          title: titulo.trim(),
          tasks: listsArray[i].tasks
      }
      break;
    }
  }
  cargarListArray(listsArray, root, lists, warnings)
}