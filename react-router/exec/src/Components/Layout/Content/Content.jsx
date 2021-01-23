import React from "react"
import "./Content.css"
import {Switch,Route} from "react-router-dom"
import About from "../../../Views/Examples/About/About"
import Home from "../../../Views/Examples/Home/Home"
import Param from "../../../Views/Examples/Param/Param"
import NotFound from "../../../Views/Examples/NotFound/NotFound"

const Content = _ =>{
    return(
        <>
        <main className="Content">
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/Param/:id">
                    <Param/>
                </Route>
                <Route path="/About">
                    <About/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </main>
        </>
    )
}

export default Content;