import React from "react";
import TextoBase from "../TextoBase/TextoBase"

export default function TextoBaseJSX() {
    const subTitulo = "Este é um subtitulo"
    return (
        <div>
            <h2>{TextoBase()}</h2>
            <p>{subTitulo}</p>
        </div>
    )
}