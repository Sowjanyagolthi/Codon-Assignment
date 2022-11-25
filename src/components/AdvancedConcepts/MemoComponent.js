import React from 'react'

function MemoComponent({name}){
    console.log("rendering component")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComponent);
