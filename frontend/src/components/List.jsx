import "./styles/List.css"

import Task from "./Task.jsx"
import { MenuButtons } from "./MenuButtons.jsx"

export default function List( { name, tasks, onCreate, onEdit, onDelete } ) {
  return (
    <div className="list">
      <div className="header_list">
        <h2 className="h2_list">{ name }</h2>
        <MenuButtons 
          onCreate={ onCreate }
          onEdit={ onEdit }
          onDelete={ onDelete }
        />
      </div>
      <section className="section_list">
        {tasks.map((task, index) => (
          <Task 
            key={index}
            title={task.title}
            description={task.description}
          />
        ))}
      </section>
    </div>
  )
}