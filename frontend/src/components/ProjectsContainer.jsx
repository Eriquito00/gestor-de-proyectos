import ProjectInfo from "../components/ProjectInfo.jsx";

import "./styles/ProjectsContainer.css"

import {
  editMenu,
  eliminarProyecto
} from "../utils/projectFunctions.jsx"

import {
  warning
} from "../utils/warnsTest.jsx"

import trash from "../assets/trash.svg";
import pencil from "../assets/pencil.svg";

export default function ProjectsContainer ({arrayProjects, handleOpenProject, setMenu, setArrayProjects, setWarning}){
  return(
    <section className='section_projects'>
      {arrayProjects.map((item, index) => (
        <ProjectInfo
          key={index}
          title={item.title}
          description={item.description}
          onClick={() => handleOpenProject(item.title)}
          imgTrash={trash}
          imgEdit={pencil}
          onClickTrash={() => warning(
            "Eliminar proyecto", 
            "¿Estas seguro que quieres eliminar el proyecto '" + item.title + "'?", 
            true, 
            () => setWarning(null), 
            () => eliminarProyecto(arrayProjects, item.title, setArrayProjects, setWarning),
            setWarning)}
          onClickEdit={() => editMenu(item.title, item.description, arrayProjects, setMenu, setArrayProjects, setWarning)}
        />
      ))}
    </section>
  )
}