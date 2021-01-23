import ReactDOM from "react-dom"

import Contador from "./Componentes/Contador/Contador"

ReactDOM.render(
    <div>
        <Contador numeroInicial={10}></Contador>
        <Contador numeroInicial={100}></Contador>
    </div>
    , document.getElementById("root"));