import React, { Component } from "react"
import "./Calculator.css"
import Button from "../../Components/Button/Button"
import Display from "../../Components/Display/Display"

const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}


export default class Calculator extends Component {

    state = { ...initialState }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        if(this.state.current == 0)
        {
            this.setState({operation,current: 1,clearDisplay:true})
        }
        else
        {
            const equals = operation === "="
            const currentOperation = this.state.operation
            const values = [...this.state.values]
            try
            {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            }
            catch(e)
            {
                values[0] = this.state.values[0];
            }           
            values[1] = 0;
            this.setState({values,operation: equals ? null : operation,displayValue: values[0],clearDisplay:!equals,current: equals ? 0 : 1})
        }
    }

    addDigit(n) {
        if (n === "." && this.state.displayValue.includes(".")) {
            return;
        }
        const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false });
        if(n !== ".")
        {
            const i = this.state.current
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue
            this.setState({values})
        }

    }

    render() {
        return (
            <div className="calculator">
                <Display valor={this.state.displayValue} />
                <Button label="AC" triple click={() => this.clearMemory()} />
                <Button label="/" operation click={(op)=> this.setOperation(op)} />
                <Button label="7" click={(value)=>this.addDigit(value)} />
                <Button label="8" click={(value)=>this.addDigit(value)} />
                <Button label="9" click={(value)=>this.addDigit(value)} />
                <Button label="*" operation click={(op) => this.setOperation(op)} />
                <Button label="4" click={(value)=>this.addDigit(value)} />
                <Button label="5" click={(value)=>this.addDigit(value)} />
                <Button label="6" click={(value)=>this.addDigit(value)} />
                <Button label="-" operation click={(op)=> this.setOperation(op)} />
                <Button label="1" click={(value)=>this.addDigit(value)} />
                <Button label="2" click={(value)=>this.addDigit(value)} />
                <Button label="3" click={(value)=>this.addDigit(value)} />
                <Button label="+" operation click={(op)=> this.setOperation(op)}/>
                <Button label="0" double click={(value)=>this.addDigit(value)} />
                <Button label="." click={(value)=>this.addDigit(value)} />
                <Button label="=" operation click={(op)=> this.setOperation(op)} />
            </div>
        )
    }
}