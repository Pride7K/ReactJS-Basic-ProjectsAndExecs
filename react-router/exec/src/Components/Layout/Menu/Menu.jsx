import React from "react"
import "./Menu.css"

import {Link} from "react-router-dom"

const Menu = _ =>{
    return(
        <>
        <aside className="Menu">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Param/1">Param # 01</Link></li>
                    <li><Link to="/Param">Param # 02</Link></li>
                    <li><Link to="/NaoExiste">Este link não existe</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </nav>
        </aside>
        </>
    )
}

export default Menu;