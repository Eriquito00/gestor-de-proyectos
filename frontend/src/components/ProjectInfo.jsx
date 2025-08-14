import "./styles/ProjectInfo.css"
import "./ButtonLogo.jsx"
import ButtonLogo from "./ButtonLogo.jsx"

export default function ProjectInfo( { title, description, img, onClick } ) {
  return (
    <button className="project_info">
      <h2 className="h2_project_info">{ title }</h2>
      <p className="p_project_info">{ description }</p>
      <ButtonLogo color={ "white" } logo={ img } onClick={onClick} />
    </button>
  )
}