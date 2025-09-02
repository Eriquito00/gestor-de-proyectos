import { DragDropContext } from "@hello-pangea/dnd";

import "./styles/ListsContainer.css";

import List from "./List";

import {
    abrirMenuTasks,
    editMenuTasks,
    deleteTask,
} from "../utils/taskFunctions"

import {
    editMenu,
    eliminarLista
} from "../utils/listFunctions"

import {
    warning
} from "../utils/warnsTest"

export default function ListsContainer({ array, setArray, setMenu, setWarning }) {
    const onDragEnd = (result) => {
        if (!result.destination) return;

        const { source, destination } = result;

        const updated = array.map((list) => ({
            ...list,
            tasks: [...list.tasks],
        }));

        // buscar las listas por ID, no por parseInt
        const sourceListIndex = updated.findIndex(
            (l) => String(l.id) === source.droppableId
        );
        const destListIndex = updated.findIndex(
            (l) => String(l.id) === destination.droppableId
        );

        if (sourceListIndex === -1 || destListIndex === -1) return;

        const [moved] = updated[sourceListIndex].tasks.splice(source.index, 1);
        updated[destListIndex].tasks.splice(destination.index, 0, moved);

        setArray(updated);
    };

  return (
    <section className="main_section">
      <DragDropContext onDragEnd={onDragEnd}>
        {array.map((item, index) => (
          <List
            key={item.id}
            droppableId={item.id}
            name={item.title}
            tasks={item.tasks}
            onCreate={() => abrirMenuTasks(array, index, setMenu, setWarning)}
            onEdit={() => editMenu(item.title, setMenu, array, setWarning)}
            onDelete={() =>
              warning(
                "Eliminar lista",
                `¿Estás seguro de que quieres eliminar la lista '${item.title}'? Tambien se eliminaran todas las tareas.`,
                true,
                () => setWarning(null),
                () => eliminarLista(array, item.title, setWarning),
                setWarning
              )
            }
            onEditTask={(indexTask) => editMenuTasks(array, index, indexTask, setMenu, setWarning)}
            onDeleteTask={(indexTask) =>
              warning(
                "Eliminar tarea",
                "¿Estás seguro de que quieres eliminar la tarea?",
                true,
                () => setWarning(null),
                () => deleteTask(array, index, indexTask, setWarning),
                setWarning
              )
            }
          />
        ))}
      </DragDropContext>
    </section>
  );
}