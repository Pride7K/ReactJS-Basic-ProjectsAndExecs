import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter/useCounter'
import { useFetch } from '../../hooks/useFetch/useFetch'

const UseRef = (props) => {

    const [count, inc, dec] = useCounter(10);
    const url = "http://files.cod3r.com.br/curso-react/estados.json";
    const response = useFetch(url);

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercicio #01"></SectionTitle>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => inc()}>+1</button>
                    <button className="btn" onClick={() => dec()}>-1</button>
                </div>
            </div>
            <SectionTitle title="Exercicio #02"></SectionTitle>
            <div className="center">
                <ul>
                    {!response.loading ? response.map(({data}) => {
                        <li key={data.nome}>{data.nome} - {data.sigla}</li>
                    }) : ""}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
