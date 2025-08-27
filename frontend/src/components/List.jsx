import "./styles/List.css";
import { Droppable, Draggable } from "@hello-pangea/dnd";

import Task from "./Task.jsx";
import MenuButtons from "./MenuButtons.jsx";

import plus from "../assets/plus.svg";
import pencil from "../assets/pencil.svg";
import trash from "../assets/trash.svg";

export default function List({ droppableId, name, tasks, onCreate, onEdit, onDelete, onEditTask, onDeleteTask }) {
  const handleCreateList = () => onCreate();
  const handleEditList = () => onEdit();
  const handleDeleteList = () => onDelete();

  return (
    <div className="list">
      <div className="header_list">
        <h2 className="h2_list">{name}</h2>
        <MenuButtons
          direction="column"
          MenuButtons={[
            { logo: plus, color: "white", onClick: handleCreateList },
            { logo: pencil, color: "white", onClick: handleEditList },
            { logo: trash, color: "white", onClick: handleDeleteList }
          ]}
        />
      </div>

      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <section
            className={`section_list ${snapshot.isDraggingOver ? "dragging-over" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={String(task.id)} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      marginBottom: "8px",
                      ...provided.draggableProps.style
                    }}>
                    <Task
                      title={task.title}
                      description={task.description}
                      onEdit={() => onEditTask(index)}
                      onDelete={() => onDeleteTask(index)}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </section>
        )}
      </Droppable>
    </div>
  );
}