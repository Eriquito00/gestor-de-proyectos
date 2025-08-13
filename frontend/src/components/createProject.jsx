import "./styles/createProject.css"
export default function CreateProject( { title, description } ) {
  return (
    <div className="project">
      <h1>{ title }</h1>
      <p>{ description }</p>
    </div>
  )
}