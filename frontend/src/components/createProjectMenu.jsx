import CreateProjectButton from "./createProjectButton";

import './styles/createProjectMenu.css'

import iconoCreate from '../assets/plus.svg';
import iconoClose from '../assets/x.svg';


export default function CreateProjectMenu( { title, description }) {
  return (
    <div className="create_project_menu">
        <label> { title } :</label>
        <input type="text" />
        <label> { description }:</label>
        <input type="text" />
        <div>
          <CreateProjectButton msg='Crear' icon={ iconoCreate } />
          <CreateProjectButton msg='Cerrar' icon={ iconoClose } />
        </div>
    </div>
  )
}