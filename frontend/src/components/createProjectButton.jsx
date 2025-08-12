import './styles/createProjectButton.css'

export default function CreateProjectButton( { msg, icon, onClick } ) {
  return (
    <button onClick={onClick}>
        <img src={ icon } />
        <h3>{msg}</h3>
    </button>
  )
}