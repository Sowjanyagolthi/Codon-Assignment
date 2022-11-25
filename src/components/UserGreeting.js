import React,{ Component } from "react";

class UserGreeting extends Component{
   constructor(props){
    super(props)
      this.state={
        isLoggedIn:false
    }
}

render(){
    const {isLoggedIn}= this.state
//if(isLoggedIn){
  //  return <div>Hello Sowjanya</div>
//}
//else {
  //  return <div>Welsome to the Portal</div>
//}

// let message;
// if(isLoggedIn)
// message=<div>Hello Sowjanya</div>
// else 
// message=<div>Welsome Guest</div>
// return message
// }

return isLoggedIn && <div>Welcome Sowjanya</div>


// }
 
// return isLoggedIn && <div>Welcome Sowjanya</div>




}

}
export default UserGreeting