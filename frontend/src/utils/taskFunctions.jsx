import { v4 as uuidv4 } from "uuid";

import Menu from "../components/CreateEditMenu.jsx"

import {
  warning,
  compruebaTitulo
} from "./warnsTest.jsx"

export function abrirMenuTasks (listsArray, index, setMenu, setWarning) {
  setMenu(
    <Menu
      create={true}
      msgTitle={"Nombre de la tarea"}
      msgDescription={"Descripcion de la tarea"}
      titleLenght={15}
      descriptionLenght={150}
      onCreate={(title, description) => addTask(listsArray, index, title.trim(), description.trim(), setMenu, setWarning)}
      onClose={() => setMenu(null)}
      buttonL={"Crear"}
      buttonR={"Cancelar"}
      withDescription={true}
    />
  )
}

export function editMenuTasks (listsArray, index, indexTask, setMenu, setWarning) {
  setMenu(
    <Menu
      create={false}
      msgTitle={"Introduce el nuevo nombre de la tarea"}
      msgDescription={"Introduce la nueva descripcion de la tarea"}
      oldTitle={listsArray[index].tasks[indexTask].title}
      oldDescription={listsArray[index].tasks[indexTask].description}
      titleLenght={15}
      descriptionLenght={150}
      onCreate={(newTitle, newDescripcion) => editTask(listsArray, index, indexTask, newTitle, newDescripcion, setMenu, setWarning)}
      onClose={() => setMenu(null)}
      buttonL={"Actualizar"}
      buttonR={"Cancelar"}
      withDescription={true}
    />
  )
}

export function addTask(listsArray, index, title, description, setMenu, setWarning) {
  if (listsArray[index].tasks.length >= 25) {
    warning("Maximo de tareas", "Esta lista ha llegado al maximo de 25 tareas por lista no puedes agregar mas.", false, setWarning(null), "", setWarning)
    setMenu(null)
    return;
  }

  if (!compruebaTitulo("Campo obligatorio", "El titulo de la tarea no puede estar vacio", title, setMenu, setWarning)) return;

  setMenu(null)

  /* enviar la info de la nueva tarea a una funcion del backend para introducirla a la bbdd */

  const newTask = { id: uuidv4(), title: title, description: description }
  listsArray[index].tasks.push(newTask);
}

export function deleteTask(listsArray, index, indexTask, setWarning) {

  /* enviar la orden para eliminar a una funcion del backend para borrarla a la bbdd */

  listsArray[index].tasks.splice(indexTask, 1);

  setWarning(null);
}

export function editTask(listsArray, index, indexTask, newTitle, newDescription, setMenu, setWarning) {

  /* enviar la orden para eliminar a una funcion del backend para borrarla a la bbdd */

  const task = listsArray[index].tasks[indexTask];

  task.title = newTitle;
  task.description = newDescription;

  setMenu(null)
}