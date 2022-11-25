import React, { Component } from 'react'

class EventBind extends Component {
          constructor(props) {
        super(props)
        this.state = {
           message:"Hello"
        }
        this.clickConstructorBind=this.clickConstructorBind.bind(this) //recomandable
      }
        clickHandler(){
        this.setState({
            message:"Binded the function in the onClick Event Handler"
        })
      }
      clickHandlerArrow=()=>{
        this.setState({
            message:"Binded the function through arrow function in the Class component itself"
        })
      }// recomandable 
      clickConstructorBind(){
        this.setState({
            message:"Binded the function in the Constructor function"
        })
      }
      ClickArrowEventHander(){
        this.setState({
            message:"called the function through arrow function in the Event Handler"
        })
      }
    
  render() {
    const {message}=this.state
    return (
      <div>
        <p>{message}</p>
        <button onClick={this.clickHandler.bind(this)}>Bind onclick</button> {/* One of the approch with binding of the function in the event Handler itself*/}
        <button onClick={this.clickHandlerArrow}>Bind through ArraowFun</button>{/* Another approach with arrow function*/}
        <button onClick={this.clickConstructorBind}>Bind Constructor</button>{/*Another approch binding in the constructor function */}
        <button onClick={()=>this.ClickArrowEventHander()}>Bind Arrow InEvent</button>{/*Another approch gib=ving arrow function in the onclick event Handler */}
      </div>
    )
  }
}

export default EventBind;
