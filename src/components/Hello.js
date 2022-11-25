import React, { createElement } from 'react';


const Hello=()=>{
    /*return(<div>
        <h1>Hello Sowjanya</h1>
    </div>)*/  // with JSX

    return React.createElement('div',{id:"hello",
className:"Helloworld"}, React.createElement('h1',null,'Hello Sowjanya')) // without JSX
}

export default Hello;