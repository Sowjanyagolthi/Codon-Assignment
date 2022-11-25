import React, {Component} from'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"Sowjanya"
        }
        console.log("LifeCYcleA Constructor")
    }
    static  getDerivedStateFromProps(){
       console.log("LifeCycleA getDerivedStateFromProps")
       return null
    }

    componentDidMount(){
        console.log("LifeCycleA componentDidMount")
    }
    

    shouldComponentUpdate(){
        console.log(" LifeCycleA shouldComponentUpdate")
        return true

    
    }
    getSnapshotBeforeUpdate(orevPops,prevState){
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdtae")
    }       

 componentWillUnmount(){
    console.log("LifecycleA componenMount")

 }
   
    onChangeHandler=()=>{
        this.setState({
            message:"Asha"
        })
    }

    render(){
        console.log("LifeCycleA Render")
        return(
            <div>
            LifeCycleA
            <button onClick={this.onChangeHandler}>Click Here</button>
            <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA;