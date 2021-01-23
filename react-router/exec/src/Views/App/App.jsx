import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Content from "../../Components/Layout/Content/Content"
import Menu from "../../Components/Layout/Menu/Menu"
import "./App.css"


const App = _ => {
    return (
        <div className="App">
            <Router>
                <Menu />
                <Content />
            </Router>  
        </div>
    )
}

export default App;