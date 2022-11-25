import React from 'react'

function Function() {

   function ClickFunction(){
        console.log("Button Clicked");
    }
  return (
    <div>
      <button onClick={ClickFunction}>click</button>
    </div>
  )
}

export default Function
