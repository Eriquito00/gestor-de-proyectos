import "./styles/Task.css"

import ButtonLogo  from "./ButtonLogo.jsx"

import pencil from "../assets/pencil.svg"
import trash from "../assets/trash.svg"

export default function Task({ title, description, onEdit, onDelete }) {
  return (
    <div className="task">
      <h2 className="task_h2">{title}</h2>
      <p className="task_p">{description}</p>
    </div>
  )
}
