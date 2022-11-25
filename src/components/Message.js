import React ,{Component} from 'react'

class Message extends React.Component {
   constructor(){
    super()
    this.state={
        Message:"Welcome Visitor"
    }

   }
   subscribe(){
    console.log("Button Clicked");
        this.setState({
            Message:"Thank you for visiting"
        })
    }
    render(){
        return <div>
               <h1>{this.state.Message}</h1>
               <button onClick={()=>this.subscribe()}>Subscriber</button>
            </div>
    }
}

export default Message;