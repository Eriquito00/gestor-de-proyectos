import { useState, useEffect } from 'react';

import CreateProjectButton from "./createProjectButton";

import './styles/createProjectMenu.css'

import iconoCreate from '../assets/plus.svg';
import iconoClose from '../assets/x.svg';


export default function CreateProjectMenu( { title, description, onClose, onCreate }) {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const maxNameLength = 30;
  const maxDescriptionLength = 150;

  function mostrarDatos() {
    onCreate(projectName,projectDescription);
  }

  return (
    <div className="create_project_menu">
        <label> { title } :</label>
        <input type="text" value={projectName} onChange={e => {
          if (e.target.value.length <= maxNameLength) {
            setProjectName(e.target.value);
          }
        }} />
        <small>{projectName.length} / {maxNameLength}</small>
        <label> { description }:</label>
        <input type="text" value={projectDescription} onChange={e => {
          if (e.target.value.length <= maxDescriptionLength) {
            setProjectDescription(e.target.value);
          }
        }} />
        <small>{projectDescription.length} / {maxDescriptionLength}</small>
        <div>
          <CreateProjectButton msg='Crear' icon={ iconoCreate } onClick={ mostrarDatos } />
          <CreateProjectButton msg='Cerrar' icon={ iconoClose } onClick={ onClose } />
        </div>
    </div>
  )
}

