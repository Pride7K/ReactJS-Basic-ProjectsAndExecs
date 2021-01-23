import React from "react"


export default props => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input type="number" onChange={props.incrementator} value={props.passo} id="passoInput" />
        </div>
    )
}