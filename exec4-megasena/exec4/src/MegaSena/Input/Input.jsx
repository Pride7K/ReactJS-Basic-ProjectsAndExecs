import React,{useState} from "react"

import CorpoGerador from "../Gerador/CorpoGerador/CorpoGerador"
import "./Input.css"

export default props =>{
    var [valorInputado,setValorInputado] = useState("0");
    return(
        <div className="corpo">
            <label htmlFor="qtdNumerosMegaInpt">Informe quantos números deseja sortear: </label>
            <input type="number" value={valorInputado} onChange={(e)=> setValorInputado(e.target.value)} id="qtdNumerosMegaInpt"/>
            <br/>
            {props.valor.length >= 6 ? <CorpoGerador valores={props.valor} /> : ""}
            <br/>
            <button type="button" onClick={()=> props.handleSetqtdNumeros(valorInputado)}> Gerar Mega</button>
        </div>
    )
}