import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import { DataContext, Data } from "../data/DataContext/DataContext"
import {Store} from '../data/Store/Store'


const App = props => {

    const [state, setState] = useState(Data);
    return (
        <Store>
            <DataContext.Provider value={{ state, setState }}>
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.Provider>
        </Store>
    )
}

export default App