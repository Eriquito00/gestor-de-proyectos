import { useState } from "react"

import "./styles/MenuButtons.css"

import ButtonLogo from "./ButtonLogo.jsx"

import puntos from "../assets/puntos.svg"
import plus from "../assets/plus.svg"
import pencil from "../assets/pencil.svg"
import trash from "../assets/trash.svg"

export function MenuButtons({ onCreate, onEdit, onDelete }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="menu_buttons">
            <button className="menu_buttons_button" onClick={ () => setOpen(!open)}>
                <img className="menu_buttons_button_img" src={ puntos } />
            </button>

            <div className={`menu_buttons_buttons ${open ? "open" : ""}`}>
                <ButtonLogo 
                    logo={ plus }
                    color={ "white" }
                    onClick={ () => { onCreate(); setOpen(false); }}
                />
                <ButtonLogo 
                    logo={ pencil }
                    color={ "white" }
                    onClick={ () => { onEdit(); setOpen(false); }}
                />
                <ButtonLogo 
                    logo={ trash }
                    color={ "white" }
                    onClick={ () => { onDelete(); setOpen(false); }}
                />
            </div>
        </div>
    )
}