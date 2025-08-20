import "./styles/ProjectInfo.css"
import "./ButtonLogo.jsx"
import ButtonLogo from "./ButtonLogo.jsx"

export default function ProjectInfo( { title, description, onClick, imgTrash, onClickTrash, imgEdit, onClickEdit } ) {
  return (
    <button className="project_info" onClick={onClick}>
      <h2 className="h2_project_info">{ title }</h2>
      <p className="p_project_info">{ description }</p>
      <div className="buttons_project_info">
        <ButtonLogo color={ "white" } logo={ imgEdit } onClick={onClickEdit} />
        <ButtonLogo color={ "white" } logo={ imgTrash } onClick={onClickTrash} />
      </div>      
    </button>
  )
}