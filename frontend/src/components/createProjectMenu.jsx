import { useState, useEffect } from 'react';

import CreateProjectButton from "./createProjectButton";

import './styles/createProjectMenu.css'

import iconoCreate from '../assets/plus.svg';
import iconoClose from '../assets/x.svg';


export default function CreateProjectMenu( { title, description, onClose, onCreate }) {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  function mostrarDatos() {
    onCreate(projectName,projectDescription);
    onClose();
  }

  return (
    <div className="create_project_menu">
        <label> { title } :</label>
        <input type="text" value={projectName} onChange={e => setProjectName(e.target.value)} />
        <label> { description }:</label>
        <input type="text" value={projectDescription} onChange={e => setProjectDescription(e.target.value)} />
        <div>
          <CreateProjectButton msg='Crear' icon={ iconoCreate } onClick={ mostrarDatos } />
          <CreateProjectButton msg='Cerrar' icon={ iconoClose } onClick={ onClose } />
        </div>
    </div>
  )
}

