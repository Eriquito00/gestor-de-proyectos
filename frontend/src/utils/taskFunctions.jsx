import React, { StrictMode } from "react"

import Menu from "../components/CreateEditMenu.jsx"

import {
  warning,
  compruebaTitulo,
  cerrarMenu
} from "./warnsTest.jsx"

import {
  cargarListArray
} from "./listFunctions.jsx"

export function abrirMenuTasks (listsArray, index, root, warnings, lists) {
  root.render(
    <StrictMode>
      <Menu
        create={true}
        msgTitle={"Nombre de la tarea"}
        msgDescription={"Descripcion de la tarea"}
        titleLenght={15}
        descriptionLenght={150}
        onCreate={(title, description) => addTask(listsArray, index, title.trim(), description.trim(), root, warnings, lists)}
        onClose={() => cerrarMenu(root)}
        buttonL={"Crear"}
        buttonR={"Cancelar"}
        withDescription={true}
      />
    </StrictMode>
  )
}

export function editMenuTasks (listsArray, index, indexTask, root, warnings, lists) {
  root.render(
    <StrictMode>
      <Menu
        create={false}
        msgTitle={"Introduce el nuevo nombre de la tarea"}
        msgDescription={"Introduce la nueva descripcion de la tarea"}
        oldTitle={listsArray[index].tasks[indexTask].title}
        oldDescription={listsArray[index].tasks[indexTask].description}
        titleLenght={15}
        descriptionLenght={150}
        onCreate={(newTitle, newDescripcion) => editTask(listsArray, index, indexTask, newTitle, newDescripcion, root, warnings, lists)}
        onClose={() => cerrarMenu(root)}
        buttonL={"Actualizar"}
        buttonR={"Cancelar"}
        withDescription={true}
      />
    </StrictMode>
  )
}

export function addTask(listsArray, index, title, description, root, warnings, lists) {
  if (listsArray[index].tasks.length >= 25) {
    warning("Maximo de tareas", "Esta lista ha llegado al maximo de 25 tareas por lista no puedes agregar mas.", false, cerrarMenu(warnings), "", warnings)
    cerrarMenu(root)
    return;
  }

  if (!compruebaTitulo("Campo obligatorio", "El titulo de la tarea no puede estar vacio", title, root, warnings)) return;

  cerrarMenu(root)

  /* enviar la info de la nueva tarea a una funcion del backend para introducirla a la bbdd */

  const newTask = { title: title, description: description }
  listsArray[index].tasks.push(newTask);

  cerrarMenu(lists)
  cargarListArray(listsArray, root, lists, warnings);
}

export function deleteTask(listsArray, index, indexTask, root, lists, warnings) {

  /* enviar la orden para eliminar a una funcion del backend para borrarla a la bbdd */

  listsArray[index].tasks.splice(indexTask, 1);

  cerrarMenu(warnings);

  cargarListArray(listsArray, root, lists, warnings);
}

export function editTask(listsArray, index, indexTask, newTitle, newDescription, root, warnings, lists) {

  /* enviar la orden para eliminar a una funcion del backend para borrarla a la bbdd */

  const task = listsArray[index].tasks[indexTask];

  task.title = newTitle;
  task.description = newDescription;

  cerrarMenu(root)
  cargarListArray(listsArray, root, lists, warnings)
}