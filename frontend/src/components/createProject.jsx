import "./styles/createProject.css"
export default function CreateProject( { title, description } ) {
  return (
    <button className="project">
      <h2>{ title }</h2>
      <p>{ description }</p>
    </button>
  )
}