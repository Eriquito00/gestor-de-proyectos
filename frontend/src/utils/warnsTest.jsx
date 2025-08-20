import { StrictMode } from "react";

import WarningPanel from "../components/WarningPanel.jsx";

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

export function cerrarMenu(rend) {
  rend.render(null)
}

export function projectName(name){
  window.location.href = `project.html?name=${encodeURIComponent(name)}`;
}

export function compruebaTitulo(msgTitulo, msgDescripcion, titulo, root, warnings) {
  if (titulo.trim() === '') {
    warning(msgTitulo, msgDescripcion, false, () => cerrarMenu(warnings), null, warnings);
    cerrarMenu(root);
    return false;
  }
  return true;
}

export function compruebaExistente(msgTitulo, msgDescripcion, titulo, array, warnings, oldTitle = null) {

  for (let i = 0; i < array.length; i++) {
    if (oldTitle && array[i].title === oldTitle.trim()) continue;
    
    if (array[i].title === titulo.trim()) {
      warning(msgTitulo, msgDescripcion, false, () => cerrarMenu(warnings), null, warnings);
      return false;
    }
  }
  return true;
}