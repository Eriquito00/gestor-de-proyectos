import CreateProjectButton from "./createProjectButton";

import './styles/createProjectMenu.css'

export default function CreateProjectMenu( { title, description }) {
  return (
    <div>
        <label> { title } :</label>
        <input type="text" />
        <label> { description }:</label>
        <input type="text" />
        <CreateProjectButton msg='Crear' />
    </div>
  )
}