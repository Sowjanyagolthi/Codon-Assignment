import React,{Component} from 'react';


class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    incrementCount(){
      //  this.setState({
          //  count: this.state.count+1 // ikkada emi jaruguthundhi ante setsates anni okkasare call avuthundhi to avoid this another approch
      //  })

        this.setState((preState)=>({
            count:preState.count+1}))
        console.log(this.state.count)
    }

    incrementFive(){
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();

    }
    render(){
        const {count}= this.state;
        return (
            <div>
              <p>Counter : {count}</p>
              <button onClick={()=>this.incrementFive()}>Click Here</button>
            </div>
          )
    }
}

export default Counter;
