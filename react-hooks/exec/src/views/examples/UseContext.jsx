import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

import { DataContext } from "../../data/DataContext/DataContext"
import { AppContext } from '../../data/Store/Store';

const UseContext = (props) => {
    const { state, setState } = useContext(DataContext);
    const { number, setNumber, text, setText } = useContext(AppContext);
    const value = state;


    function addNumber(n) {
        setState({
            ...state,
            number: value.number + n
        })
    }

    useEffect(()=>{
        if(number > 1236)
        {
            setText("Eita!!!!");
        }
    },[number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercicio #01"></SectionTitle>
            <div className="center">
                <span className="text">{value.text}</span>
                <span className="text">{value.number}</span>
                <div>
                    <button className="btn" onClick={() => addNumber(+1)}>+</button>
                    <button className="btn" onClick={() => addNumber(-1)}>-</button>
                </div>
            </div>
            <SectionTitle title="Exercicio #02"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">
                        {text}
                    </span>
                    <div>
                        <input type="text" value={text} onChange={(e)=> setText(e.target.value) } className="input"/>
                    </div>
                </div>
                <div>
                    <span className="text">{number}</span>
                    <div>
                        <button className="btn" onClick={() => setNumber(number + 1)}>+1</button>
                        <button className="btn" onClick={() => setNumber(number - 1)}>-1</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseContext
