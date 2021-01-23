import React,{useState} from "react"

export default props =>{
    const [valor,setValor] = useState("Inicial");
    return(
        <div>
            <h2>{valor}</h2>
            <input value={valor} onChange={ (e) => setValor(e.target.value)} />
            <input value={valor} readOnly />
            <input value={undefined}  />
        </div>
    )
}