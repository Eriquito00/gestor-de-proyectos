import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";

import ButtonMenu from '../components/ButtonMenu'
import ListsContainer from "../components/ListsContainer"

import {
  abrirMenu
} from "../utils/listFunctions"

import home from '../assets/home.svg'
import plus from '../assets/plus.svg'

export default function ProjectView({ menu, setMenu, warning, setWarning }) {
  const { title } = useParams();

  const navigate = useNavigate();

  const handleCloseProject = () => { navigate("/"); }

  const [arrayListsTasks, setArrayListsTasks] = useState([
    { id: uuidv4(), title: "Pendientes", tasks: [] },
    { id: uuidv4(), title: "En Proceso", tasks: [] },
    { id: uuidv4(), title: "Completadas", tasks: [] }
  ]);

  return (
    <>
      <div className='main_header'>
        <h1 className='main_h1'>{title}</h1>
        <div className='main_buttons'>
          <ButtonMenu 
              msg="Crear Lista" 
              icon={ plus }
              onClick={() => abrirMenu(arrayListsTasks, setArrayListsTasks, setMenu, setWarning)}
          />
          <ButtonMenu 
              msg="Volver a Proyectos" 
              icon={ home }
              onClick={() => handleCloseProject()}
          />
        </div>
      </div>

      {menu}
      {warning}

      <ListsContainer 
        array={arrayListsTasks}
        setArray={setArrayListsTasks}
        setMenu={setMenu}
        setWarning={setWarning}
      />
    </>
  )
}