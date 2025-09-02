import "./styles/Task.css"

import MenuButtons from "./MenuButtons.jsx"

import trash from "../assets/trash.svg"
import pencil from "../assets/pencil.svg"

export default function Task({ title, description, onEdit, onDelete }) {
  const handleEditTask = () => onEdit();
  const handleDeleteTask = () => onDelete();

  return (
    <div className="task">
      <div className="task_header">
        <h2 className="task_h2">{title}</h2>
        <MenuButtons
          direction="row"
          MenuButtons={[
            { logo: trash, color: "white", onClick: handleDeleteTask },
            { logo: pencil, color: "white", onClick: handleEditTask }
          ]}
        />
      </div>
      <p className="task_p">{description}</p>
    </div>
  )
}
