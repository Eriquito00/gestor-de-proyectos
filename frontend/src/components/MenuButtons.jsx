import { useState } from "react"

import "./styles/MenuButtons.css"

import ButtonLogo from "./ButtonLogo.jsx"

import puntos from "../assets/puntos.svg"

export default function MenuButtons({ MenuButtons = [], direction }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="menu_buttons">
            <button className="menu_buttons_button" onClick={ () => setOpen(!open)}>
                <img className="menu_buttons_button_img" src={ puntos } />
            </button>

            <div className={`menu_buttons_buttons ${direction} ${open ? "open" : ""}`}>
                {MenuButtons.map(({logo, color, onClick}, index) => (
                    <ButtonLogo
                        key={index}
                        logo={logo}
                        color={color}
                        onClick={() => { onClick(); setOpen(false); }}
                    />
                ))}
            </div>
        </div>
    )
}