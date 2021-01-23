import React from "react"


export default props => {
    return (
        <div>
            <p>Os valores Gerados foram :
            {props.valores.map(valor => {
                return <span key={valor}> {valor} </span>
            })}
            </p>
        </div>
    )
}