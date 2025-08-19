import { StrictMode } from 'react';

import {
    cerrarMenu
} from "./warnsTest.jsx"

import CreateList from "../components/CreateEditMenu.jsx"

export function createList (root) {
    root.render(
        <StrictMode>
            <CreateList
                title={"Nombre de la lista"}
                description={""}
                onClose={() => cerrarMenu(root)}
                onCreate={"llamaremos a una funcion que cree un componente lista"}
                buttonL={"Crear"}
                buttonR={"Cancelar"}
                withDescription={false}
            />
        </StrictMode>
    )
}