import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';
import MemoComponent from './MemoComponent'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Sowjanya Golthi",
         count:1,
         interval:0
      }
    }
    
    componentDidMount(){
        console.log("component Didmount")
        this.state.interval=setInterval(()=>{
            this.setState({
                name:"Sowjanya Golthi"
            })
    },1000)
}

  render() {
    console.log("*************Parent Component****************")
    return (
      <div>
        <MemoComponent  name={this.state.name}/>
        {/*<RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>*/}
      </div>
    )
  }
}

export default ParentComp
