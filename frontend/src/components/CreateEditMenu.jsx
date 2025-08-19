import { useState } from 'react';

import ButtonMenu from "./ButtonMenu";

import './styles/CreateProjectMenu.css'

import iconoCreate from '../assets/plus.svg';
import iconoClose from '../assets/x.svg';


export default function CreateProjectMenu( { create, msgTitle, msgDescription, oldTitle, oldDescription, titleLenght, descriptionLenght, onCreate, onClose, buttonL, buttonR, withDescription }) {
  let [finalTitle, setProjectName] = useState(create ? "" : oldTitle);
  let [finalDescription, setProjectDescription] = useState(create ? "" : oldDescription);

  function mostrarDatos() {
    if (withDescription) onCreate(finalTitle,finalDescription);
    else onCreate(finalTitle);
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="create_project_menu">
          <label className='label_create_project_menu'> { msgTitle }:</label>
          <input className='input_create_project_menu' type="text" value={finalTitle} onChange={e => {
            if (e.target.value.length <= titleLenght) {
              setProjectName(e.target.value);
            }
          }} />
          <small className='small_create_project_menu'>{finalTitle.length} / {titleLenght}</small>
          { withDescription && (
            <>
              <label className='label_create_project_menu'> { msgDescription }:</label>
              <input className='input_create_project_menu' type="text" value={finalDescription} onChange={e => {
                if (e.target.value.length <= descriptionLenght) {
                  setProjectDescription(e.target.value);
                }
              }} />
              <small className='small_create_project_menu'>{finalDescription.length} / {descriptionLenght}</small>
            </>
          )}

          <div className='buttons_create_project_menu'>
            <ButtonMenu msg={ buttonL } icon={ iconoCreate } onClick={ mostrarDatos } />
            <ButtonMenu msg={ buttonR } icon={ iconoClose } onClick={ onClose } />
          </div>
      </div>
    </>
  )
}

