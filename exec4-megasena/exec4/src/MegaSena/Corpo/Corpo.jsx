import React, { useState } from "react"

import Input from "../Input/Input"
import Gerador from "../Gerador/Gerador"
import "./Corpo.css"

export default props => {
    const [qtdNumeros, setqtdNumeros] = useState(0);
    const [numerosGerados, setNumerosGerados] = useState([]);

    function handleSetqtdNumeros(valor) {

        setqtdNumeros(parseInt(valor))
        Gerador(valor, setNumerosGerados);

    }

    return (
        <div className="corpoPrincipal">
            <h1>Mega Sena</h1>
            <Input handleSetqtdNumeros={handleSetqtdNumeros} valor={numerosGerados} />
            <Button />
        </div>
    )
}