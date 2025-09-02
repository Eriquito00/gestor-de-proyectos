import { StrictMode } from "react";

import WarningPanel from "../components/WarningPanel.jsx";

export function warning(title, description, withOptions, onClose, func, setWarning) {
  setWarning(
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

export function compruebaTitulo(msgTitulo, msgDescripcion, titulo, setMenu, setWarning) {
  if (titulo.trim() === '') {
    warning(msgTitulo, msgDescripcion, false, () => setWarning(null), null, setWarning);
    setMenu(null);
    return false;
  }
  return true;
}