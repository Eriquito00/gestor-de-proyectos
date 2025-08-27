import "./styles/List.css"

import Task from "./Task.jsx"
import MenuButtons from "./MenuButtons.jsx"

import plus from "../assets/plus.svg"
import pencil from "../assets/pencil.svg"
import trash from "../assets/trash.svg"

export default function List( { name, tasks, onCreate, onEdit, onDelete, onEditTask, onChangeTask, onDeleteTask } ) {
  const handleCreateList = () => onCreate();
  const handleEditList = () => onEdit();
  const handleDeleteList = () => onDelete();

  const handleEditTask = (index) => onEditTask(index);
  const handleChangeTask = () => onChangeTask();
  const handleDeleteTask = (index) => onDeleteTask(index);

  return (
    <div className="list">
      <div className="header_list">
        <h2 className="h2_list">{ name }</h2>
        <MenuButtons
          direction="column"
          MenuButtons={[
            { logo: plus, color: "white", onClick: handleCreateList },
            { logo: pencil, color: "white", onClick: handleEditList },
            { logo: trash, color: "white", onClick: handleDeleteList }
          ]}
        />
      </div>
      <section className="section_list">
        {tasks.map((task, index) => (
          <Task 
            key={index}
            title={task.title}
            description={task.description}
            onEdit={() => handleEditTask(index)}
            onChangeList={handleChangeTask}
            onDelete={() => handleDeleteTask(index)}
          />
        ))}
      </section>
    </div>
  )
}