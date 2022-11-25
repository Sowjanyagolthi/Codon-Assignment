import React, { Component } from 'react'

    class Input extends Component {
        constructor(props) {
          super(props)
          this.inputRef=React.createRef()
        } 

        focusInputMethod(){
          
            this.inputRef.current.focus()
       }      
  render() {
    console.log(this.inputRef)
       const {focusInputMethod}=this
    return (
      <div>
        <input type="text"  ref={this.inputRef}/>
        <button onClick={this.onClickHandler}>Input Button</button>
        <button onClick={focusInputMethod}>Hello</button>
      </div>
    )
  }
}

export default Input
