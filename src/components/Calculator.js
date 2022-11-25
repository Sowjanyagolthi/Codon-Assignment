import React, { Component } from 'react';
import './Calculator.css';



export class Calculator extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        displayOutput:"",
    }
  }
  getExpressionOutput(input) {
    try {
      return eval(input)
    }
    catch (e) {
      console.warn('Invalid expression', input)
      return "Invalid expression"
    }
  }
  onClickShowOutput=()=>{
    let {displayOutput}=this.state
   let output= this.getExpressionOutput(displayOutput)
   console.log(output)
   this.setState({
    displayOutput: output
 })
  }
  

 appendNumberToOutput(number){
  
   let {displayOutput}=this.state
  if (displayOutput !=="Invalid expression")
  {
    this.setState(({displayOutput: this.state.displayOutput + number.toString()})) 
  }
  else
  this.setState(({
    displayOutput:number
 }))
}

 resetTheOutput=()=> {
  this.setState({
    displayOutput: ""
 })

}
    
  render() {
    return (
      <div className="calculatorContainer">
        <div className="displaySession">
          <p className="displayOutput">{this.state.displayOutput}</p>
        </div>
        <div>
            <button className="addition button" onClick={()=>this.appendNumberToOutput("+")}>+</button>
            <button className="substraction button" onClick={()=>this.appendNumberToOutput("-")}>-</button>
            <button className="multiplication button" onClick={()=>this.appendNumberToOutput("*")}>*</button>
            <button className="division button" onClick={()=>this.appendNumberToOutput("/")}>/</button>
        </div>
        <div className="bottomContainer">
            <div id = "numbersContainer">
                <div>
                    <button className="button-7 button" onClick={()=>this.appendNumberToOutput(7)}>7</button>
                    <button className="button-8 button"  onClick={()=>this.appendNumberToOutput(8)}>8</button>
                    <button className="button-9 button" onClick={()=>this.appendNumberToOutput(9)}>9</button>
                </div>
                <div>
                    <button className="button-4 button" onClick={()=>this.appendNumberToOutput(4)}>4</button>
                    <button className="button-5 button" onClick={()=>this.appendNumberToOutput(5)}>5</button>
                    <button className="button-6 button" onClick={()=>this.appendNumberToOutput(6)}>6</button>
                </div>
                <div>
                     <button className="button-1 button" onClick={()=>this.appendNumberToOutput(1)}>1</button>
                    <button className="button-2 button" onClick={()=>this.appendNumberToOutput(2)}>2</button>
                    <button className="button-3 button" onClick={()=>this.appendNumberToOutput(3)}>3</button>
                </div>
                <div>
                     <button className="button-0 button" onClick={()=>this.appendNumberToOutput(0)}>0</button>
                    <button className="button-dot button" onClick={()=>this.appendNumberToOutput(".")}>.</button>
                    <button className="button-clear button" onClick={this.resetTheOutput}>Clear</button>
                </div>
            </div>
            <div className="equalSession">
                <button className="button-equal button" onClick={this.onClickShowOutput}>=</button>
            </div>
        </div>
      </div>
    )
  }
}

export default Calculator
