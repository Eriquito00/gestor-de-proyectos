import { useState } from 'react';

import ButtonMenu from "./ButtonMenu";

import './styles/CreateProjectMenu.css'

import iconoCreate from '../assets/plus.svg';
import iconoClose from '../assets/x.svg';


export default function CreateProjectMenu( { title, description, onClose, onCreate, buttonL, buttonR }) {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const maxNameLength = 50;
  const maxDescriptionLength = 150;

  function mostrarDatos() {
    onCreate(projectName,projectDescription);
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="create_project_menu">
          <label className='label_create_project_menu'> { title }:</label>
          <input className='input_create_project_menu' type="text" value={projectName} onChange={e => {
            if (e.target.value.length <= maxNameLength) {
              setProjectName(e.target.value);
            }
          }} />
          <small className='small_create_project_menu'>{projectName.length} / {maxNameLength}</small>
          <label className='label_create_project_menu'> { description }:</label>
          <input className='input_create_project_menu' type="text" value={projectDescription} onChange={e => {
            if (e.target.value.length <= maxDescriptionLength) {
              setProjectDescription(e.target.value);
            }
          }} />
          <small className='small_create_project_menu'>{projectDescription.length} / {maxDescriptionLength}</small>
          <div className='buttons_create_project_menu'>
            <ButtonMenu msg={ buttonL } icon={ iconoCreate } onClick={ mostrarDatos } />
            <ButtonMenu msg={ buttonR } icon={ iconoClose } onClick={ onClose } />
          </div>
      </div>
    </>
  )
}

