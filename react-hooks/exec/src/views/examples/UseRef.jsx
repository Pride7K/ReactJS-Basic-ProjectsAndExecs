import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function merge(v1, v2) {

    return [...v1].map((letra, indice) => {
        return `${letra}${(v2[indice] || "")}`
    }).join("")

}

const UseRef = (props) => {
    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");
    const count = useRef(0);

    const inpt1 = useRef(null);
    const inpt2 = useRef(null);

    useEffect(() => {
        count.current = count.current + 1
        inpt2.current.focus();
    }, [valor1])


    useEffect(() => {
        count.current = count.current + 1
        inpt1.current.focus();
    }, [valor2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercicio #01"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(valor1, valor2)}[</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input ref={inpt1} type="text" value={valor1} onChange={(e) => setValor1(e.target.value)} className="input" />
            </div>
            <SectionTitle title="Exercicio #02"></SectionTitle>
            <div className="cente">
                <input ref={inpt2} type="text" value={valor2} onChange={e => setValor2(e.target.value)} className="input" />
            </div>
        </div>
    )
}

export default UseRef
