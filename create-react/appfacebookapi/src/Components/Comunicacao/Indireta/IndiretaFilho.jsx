import React from "react";

export default props =>{
    var idadeMinima = 50
    var idadeMax = 70;
    var gerarIdade = ()=> parseInt(Math.random() * (idadeMax - idadeMinima)) + idadeMinima; 

    return(
        <div>
            <div>
                Filho
            </div>
            <button onClick={()=>props.quandoClicar("gui",gerarIdade(),true)}>Fornecer Informações</button>
        </div>
    )
}