import React from "react";

import Paragraphy from "../Paragraphy/Paragraphy"

export default _ =>
    <React.Fragment>
        <div>
            <h1>Exercicio 1</h1>
            <h3>Retornar números aleatorios a partir de um componente</h3>
            <Paragraphy minValue={1} maxValue={100}></Paragraphy>
        </div>
    </React.Fragment>
