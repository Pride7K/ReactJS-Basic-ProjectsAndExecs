import React from "react"

import "./App.css"
import JsxH2 from "./Components/TextoBaseJSX/TextoBaseJSX"
import MethodParameter from "./Components/ComParametro/ComParametro"
import Card from "./Components/Layout/Card/Card"
import Familia from "./Components/Familia/Familia"
import Membro from "./Components/Familia/FamiliaMembro"
import Repeticao from "./Components/Repeticao/Repeticao"
import Condicional from "./Components/Condicional/Condicional"
import If from "./Components/Condicional/If"
import Usuario from "./Components/Condicional/UsuarioIndo"
import DiretaPai from "./Components/Comunicacao/DiretaPai"
import IndiretaPai from "./Components/Comunicacao/Indireta/IndiretaPai"
import Input from "./Components/Formulario/Input/Input"

const tag = <strong>{JsxH2()}</strong>;

export default _ =>
    <>
        <h1>Fundamentos do React</h1>
        <div className="cardsDiv">
            <Card titulo="Desafio Formulario" color="#080">
                <Input />
            </Card>
            <Card titulo="Desafio Indireta" color="#080">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="Desafio Direta" color="#080">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="Desafio Aleatorio" color="#080">
                <If test={7 == 7}>
                    <span>Teste</span>
                    <span>Teste</span>
                    <span>Teste</span>
                </If>
            </Card>
            <Card titulo="Desafio Aleatorio" color="#080">
                <Condicional numero={20}></Condicional>
                <Usuario usuario={{ id: 1, nome: "gfigueiredo" }}></Usuario>
            </Card>
            <Card titulo="Desafio Aleatorio" color="#080">
                <Usuario></Usuario>
            </Card>
            <Card titulo="Desafio Aleatorio" color="#080">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="Desafio Aleatorio" color="#080">
                <div>{tag}</div>
            </Card>
            <Card titulo="Desafio Aleatorio">
                <MethodParameter titulo="Segundo Component" subtitulo="Segundo Subtitulo" />
            </Card>
            <Card titulo="Componente com membro">
                <Familia sobrenome="Pedro">
                    <Membro nome="Ana"></Membro>
                    <Membro nome="Emerson"></Membro>
                    <Membro nome="Pedro"></Membro>
                </Familia>
            </Card>
        </div>
    </>



/*
export default function App(props) {
    return (
        <>
            <h1>Fundamentos do React</h1>
            <div>{tag}</div>
            <MethodParameter titulo="Segundo Component" subtitulo="Segundo Subtitulo" />
        </>
    )
}
*/
