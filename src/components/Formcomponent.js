import React, { Component} from'react';

class  FormComponent extends Component{
   constructor(){
    super ()
    this.state={
         userName:'',
         comments:'',
         skill:'React'

    }
   }

   handleUsernameChange=(event)=>{
     this.setState({
        userName:event.target.value,

     })
    }

    handleCommentsChange=(event)=>{
       this.setState({
        comments:event.target.value
       })
    }

    handletopicChange= event=>{
        this.setState({
            skill:event.target.value
        })
    }
    handlesubmit=(event)=>{
        const {userName,comments,skill}=this.state
        console.log(skill)
       alert(`${userName},${comments},${skill}`);
       event.preventDefault();

    }

   render(){
    return (
        <form>
            <div>
                <label>UserName</label>
                <input text="type" value={this.state.userName} onChange={this.handleUsernameChange}/>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
            </div>
            <select value={this.state.skill} onChange={this.handletopicChange}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
            </select>
            <button onClick={this.handlesubmit}>Click here</button>
        </form>
    )
   }
}

export default FormComponent;
