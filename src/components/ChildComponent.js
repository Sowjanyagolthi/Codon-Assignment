import React from 'react'

function ChildComponent(props) {
    const{getName}=props
  return (
    <div>
      <button onClick={()=>getName("Sowjanya")}>Button Clicked</button>
    </div>
  )
}

export default ChildComponent
