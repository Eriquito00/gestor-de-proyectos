import "./styles/List.css"

import ButtonLogo from "./ButtonLogo.jsx"

import plus from "../assets/plus.svg"
import pencil from "../assets/pencil.svg"
import trash from "../assets/trash.svg"

export default function List( { name, onCreate, onEdit, onDelete } ) {
  return (
    <div className="list">
      <h2 className="h2_list">{ name }</h2>
      <div className="buttons_list">
        <ButtonLogo 
          logo={ plus }
          color={ "while" }
          onClick={ onCreate }
        />
        <ButtonLogo 
          logo={ pencil }
          color={ "while" }
          onClick={ onEdit }
        />
        <ButtonLogo 
          logo={ trash }
          color={ "while" }
          onClick={ onDelete }
        />
      </div>
      <section className="section_list">
        {/* componentes tarea */}
      </section>
    </div>
  )
}