import React from "react"

const Data = {
    number:123,
    text:"Context API"
}

const DataContext = React.createContext(Data);

export {DataContext,Data}