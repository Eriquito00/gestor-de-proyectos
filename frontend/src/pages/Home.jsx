import { useNavigate } from 'react-router-dom'
import ProjectsContainer from '../components/ProjectsContainer'

import ButtonMenu from '../components/ButtonMenu'

import {
  abrirMenu
} from '../utils/projectFunctions'

import plus from '../assets/plus.svg'

export default function Home({ arrayProjects, setarrayProjects, setMenu, menu, setWarning, warning }) {
  const navigate = useNavigate();

  const handleOpenProject = (title) => {
    navigate(`/project/${title}`);
  }

  return (
    <>
      <h1 className='h1_projects'>Bienvenido a mi Gestor de Proyectos</h1>

      <ProjectsContainer 
        arrayProjects={arrayProjects}
        setMenu={setMenu}
        setArrayProjects={setarrayProjects}
        setWarning={setWarning}
        handleOpenProject={handleOpenProject}
      />

      {menu}
      {warning}

      <footer className='footer_projects'>
        <ButtonMenu 
          msg="Crear Proyecto" 
          icon={ plus } 
          onClick={ () => abrirMenu(arrayProjects, setarrayProjects, setMenu, setWarning) } 
        />
      </footer>
    </>
  )
}