import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(){
        super()
        this.state={
            message:"Sowjanya"
        }
        console.log("LifeCycleB Constructor")
    }
    
    static getDerviedStateFromProps(){
        console.log("LifeCycleB getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleB componentDidMount")
    }

    shouldComponentUpdate(){
        console.log(" LifeCycleB shouldComponentUpdate")
        return true
    }

   
    getSnapshotBeforeUpdate(orevPops,prevState){
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null;

    }
    componentDidUpdate(){
        console.log("LifeCycleB componentDidUpdate")
    }

   

    render(){
        console.log("LifeCycleB Render")
        return(
            <div>LifeCycleB</div>
        )
    }
}

export default LifeCycleB
