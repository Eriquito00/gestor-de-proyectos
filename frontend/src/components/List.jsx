import "./styles/List.css"

export default function List( { name } ) {
  return (
    <div className="list">
      <h2 className="h2_list">{ name }</h2>
      {/* falta boton para poder editar el nombre de la lista */}
      {/* falta boton para poder eliminar la lista */}
      <section className="section_list">
        {/* componentes tarea */}
      </section>
    </div>
  )
}