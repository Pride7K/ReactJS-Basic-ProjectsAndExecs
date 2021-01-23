import React from "react";


export default props =>{
    console.log(props)
    return(
        <div>
            <span>{props.nome}</span>
            <span> {props.idade}</span>
            <span> {props.nerd ? "Verdadeiro" : "Falso"} !</span>
        </div>
    )
}