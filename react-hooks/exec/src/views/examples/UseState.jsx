import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const UseState = (props) => {
    const [valor, setValor] = useState(0)
    const [name,setName] = useState("");
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">
                    {valor}
                </span>
                <div>
                    <button className="btn" onClick={() => setValor((valor) => valor + 1)}>
                        +1
                    </button>
                    <button className="btn" onClick={() => setValor((valor) => valor - 1)}>
                        -1
                    </button>
                </div>
            </div>
            <SectionTitle title="Exercicio #02" />
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="input"/>
            <input type="text" value={undefined} className="input"/>
            <span className="text">{name}</span>
        </div>
    )
}

export default UseState
