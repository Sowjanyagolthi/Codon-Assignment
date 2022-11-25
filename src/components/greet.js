import React from 'react'
let count =0;
const Greet= props=>
{
    console.log(count++);

    console.log ({props});

  return <h1>Hello {props.name}</h1>
}

export default Greet // we can import any of the name [//export Greet we neet import the with Greet name only]
