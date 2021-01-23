import React from "react";

import Generator from "../AleatoryNumber/AleatoryNumber"

export default (props)=>{
    var minValue = props.minValue;
    var maxValue = props.maxValue;
    return(
        <p>{Generator(minValue,maxValue)}</p>
    )
}