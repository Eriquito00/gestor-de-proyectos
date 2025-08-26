/**
 * Añade una tarea a la lista indicada
 * @param {Array} listsArray - El array completo de listas
 * @param {Text} taskTitle - Titulo de la tarea
 * @param {Object} task - La tarea nueva { title, description }
 * @returns {Array} Nuevo array de listas actualizado
 */
export function addTask(listsArray, taskTitle, task) {
  return listsArray.map(list =>
    list.title === taskTitle
      ? { ...list, tasks: [...list.tasks, task] }
      : list
  )
}

/**
 * Elimina una tarea de una lista por índice
 * @param {Array} listsArray
 * @param {Text} taskTitle
 * @param {Number} taskIndex
 * @returns {Array}
 */
export function deleteTask(listsArray, taskTitle, taskIndex) {
  return listsArray.map(list =>
    list.title === taskTitle
      ? { ...list, tasks: list.tasks.filter((_, i) => i !== taskIndex) }
      : list
  )
}

/**
 * Edita una tarea de una lista
 * @param {Array} listsArray
 * @param {Number} taskTitle
 * @param {Number} taskIndex
 * @param {Object} newTask - tarea reemplazada { title, description }
 * @returns {Array}
 */
export function editTask(listsArray, taskTitle, taskIndex, newTask) {
  return listsArray.map(list =>
    list.title === taskTitle
      ? {
          ...list,
          tasks: list.tasks.map((t, i) =>
            i === taskIndex ? newTask : t
          ),
        }
      : list
  )
}