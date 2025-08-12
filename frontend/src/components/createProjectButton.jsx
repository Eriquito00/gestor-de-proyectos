import './styles/createProjectButton.css'

import plusIcon from "../assets/plus.svg"

export default function CreateProjectButton( {msg} ) {
  return (
    <button>
        <img src={ plusIcon } />
        <h3>{msg}</h3>
    </button>
  )
}