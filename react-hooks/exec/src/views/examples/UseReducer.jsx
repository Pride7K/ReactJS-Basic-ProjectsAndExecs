import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle"
import { add2ToNumber, multi7ToNumber, split25ToNumber } from '../../Store/Actions/Number/Number'

import {Reducer,initialState} from "../../Store/Config/index"

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    const [numeroInput, setNumeroInput] = useState(0)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01"></SectionTitle>
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Sem úsuario logado</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => add2ToNumber(dispatch)}>+2</button>
                    <button className="btn" onClick={() => multi7ToNumber(dispatch)}>*7</button>
                    <button className="btn" onClick={() => split25ToNumber(dispatch)}>/25</button>
                </div>
                <br />
                <div>
                    <button className="btn" onClick={() => dispatch({ type: "convertToInteger" })}>Converter para inteiro</button>
                </div>
                <br />
                <div>
                    <span className="text">Adicionar um número qualquer</span>
                    <input type="number" value={numeroInput} onChange={(e) => setNumeroInput(e.target.value ? parseFloat(e.target.value) : e.target.value)} className="input" />
                    <button className="btn" onClick={() => dispatch({ type: "addValue", value: numeroInput ? numeroInput : 0 })}>Adicionar</button>
                </div>
                <br />
                <div>
                    <button className="btn" onClick={() => dispatch({ type: "login", payload: "Maria" })}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
