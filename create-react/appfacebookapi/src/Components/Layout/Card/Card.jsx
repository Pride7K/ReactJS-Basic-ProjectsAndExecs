import React from "react"
import "./Card.css";

export default (props) => {
    const cardStyle = {
        backgroundColor: props.color,
        borderColor:props.color
    }
    return (
        <div className="Card" style={{backgroundColor:props.color,borderColor:props.color}}>
            <div className="Title">
                {props.titulo}
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}

/*
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">
                {props.titulo}
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}

*/

