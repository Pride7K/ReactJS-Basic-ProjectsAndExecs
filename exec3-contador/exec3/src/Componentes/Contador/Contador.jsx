import React from "react"

import Display from "../Display/Display"
import PassoFor from "../PassoForm/PassoFor"
import Button from "../Button/Button"

export default class Contador extends React.Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    increment = () => {
        this.setState({
            numero:  this.state.passo != "" ? this.state.numero + this.state.passo : this.state.numero
        })
    }


    decremento = () => {
        this.setState({
            numero: this.state.passo != "" ?  this.state.numero - this.state.passo : this.state.numero
        })
    }

    setPasso = (event) => {
        this.setState({
            passo: parseInt(event.target.value)
        })
    }

    render() {
        return (
            <div>
                <h2>Hello World!</h2>
                <Display numero={this.state.numero} />
                <PassoFor passo={this.state.passo} incrementator={this.setPasso} />
                <Button incrementar={this.increment} decrementar={this.decremento} />
            </div>
        )
    }
}