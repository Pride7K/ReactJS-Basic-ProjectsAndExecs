import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(valor) {
    if (valor < 0) return -1;
    if (valor === 0) return 1;
    return calcFatorial(valor - 1) * valor
}

function checkParImpar(valor)
{
    if(valor === "") return "Forneça um valor"
    return valor % 2 === 0 ? "Par" : "Impar"
}

const UseEffect = (props) => {
    const [valor, setValor] = useState(1);
    const [valor2,setValor2] = useState(1);
    const [parImpar,setParImpar] = useState(null);
    const [fatorial, setFatorial] = useState(1);

    useEffect(() => {
        setFatorial(calcFatorial(valor));
    }, [valor])

    useEffect(()=>{
        setParImpar(checkParImpar(valor2))
    },[valor2])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial <= -1 ? "Não Existe" : fatorial}</span>
                </div>
                <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} className="input" />
            </div>
            <SectionTitle title="Desafio #01"/>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{parImpar}</span>
                </div>
                <input type="number" value={valor2} onChange={(e)=> setValor2(e.target.value)} className="input"/>
            </div>
        </div>
    )
}

export default UseEffect
