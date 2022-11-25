import React ,{Component} from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"Parent"
      }
    }

    clickHandler=(name)=>{
        console.log(name)
                this.setState({
            parentName:name
        })

    }

    render(){
        return(
            <div>
                <p>Hello {this.state.parentName}</p>
                <ChildComponent getName={this.clickHandler}/>
            </div>
        )
    }
    
}

export default ParentComponent;