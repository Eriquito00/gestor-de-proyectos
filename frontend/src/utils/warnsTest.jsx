import { StrictMode } from "react";

import WarningPanel from "../components/WarningPanel.jsx";
import ProjectInfo from "../components/ProjectInfo.jsx";

import trash from "../assets/trash.svg";
import pencil from "../assets/pencil.svg";

import {
  editMenu,
  eliminarProyecto
} from "./projectFunctions.jsx"

export function warning(title, description, withOptions, onClose, func, warnings) {
  warnings.render(
    <StrictMode>
      <WarningPanel 
        title={title}
        description={description}
        withOptions={withOptions}
        onClose={onClose}
        func={func}
      />
    </StrictMode>
  )
}

export function cargarArray(array, projects, root, warnings) {
  projects.render(
    <StrictMode>
      {array.map((item, index) => (
        <ProjectInfo
          key={index}
          title={item.title}
          description={item.description}
          imgTrash={trash}
          imgEdit={pencil}
          onClickTrash={() => warning(
            "Eliminar proyecto", 
            "¿Estas seguro que quieres eliminar el proyecto '" + item.title + "'?", 
            true, 
            () => cerrarMenu(warnings), 
            () => eliminarProyecto(array, item.title, projects, warnings, root),
            warnings)}
          onClickEdit={() => editMenu(item.title, item.description, root, array, warnings, projects)}
        />
      ))}
    </StrictMode>
  )
}


export function cerrarMenu(rend) {
  rend.render(null)
}

export function compruebaTitulo(titulo, root, warnings) {
  if (titulo.trim() === '') {
    warning("Campo obligatorio", "El nombre del proyecto es obligatorio", false, () => cerrarMenu(warnings), null, warnings);
    cerrarMenu(root);
    return false;
  }
  return true;
}

export function compruebaExistente(titulo, array, warnings, oldTitle = null) {

  for (let i = 0; i < array.length; i++) {
    if (oldTitle && array[i].title === oldTitle.trim()) continue;
    
    if (array[i].title === titulo.trim()) {
      warning("Proyecto existente", `Ya existe un proyecto con el titulo '${titulo.trim()}' elige otro.`, false, () => cerrarMenu(warnings), null, warnings);
      return false;
    }
  }
  return true;
}