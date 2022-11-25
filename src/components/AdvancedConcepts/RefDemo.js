import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
      super(props)
       this.inputref=React.createRef()
       this.cbRef=null
    }
    
    componentDidMount(){
        this.inputref.current.focus()
        this.cbRef.focus();
    }
    callBackFun=(element)=>{
        this.cbRef=element
    }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputref}/>
         next <input type="text" ref={this.callBackFun} />
         </div>
    )
  }
}

export default RefDemo
