import "./styles/Task.css"

import MenuButtons from "./MenuButtons.jsx"

import trash from "../assets/trash.svg"
import change from "../assets/change.svg"
import pencil from "../assets/pencil.svg"

export default function Task({ title, description, onEdit, onChangeList, onDelete }) {
  const handleEditTask = () => onEdit();
  const handleChangeList = () => onChangeList();
  const handleDeleteTask = () => onDelete();

  return (
    <div className="task">
      <h2 className="task_h2">{title}</h2>
      <p className="task_p">{description}</p>
      
      <MenuButtons
        direction="row"
        MenuButtons={[
          { logo: trash, color: "white", onClick: handleDeleteTask },
          { logo: change, color: "white", onClick: handleChangeList },
          { logo: pencil, color: "white", onClick: handleEditTask }
        ]}
      />
    </div>
  )
}
