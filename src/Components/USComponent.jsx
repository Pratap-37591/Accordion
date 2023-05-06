import React, { useState } from 'react';


function USComponent() {
   const [name, setName] = useState("Pratap");
   let changeState = () => {
    setName("Zain")
   }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeState}>Update</button>
    </div>
  )
}

export default USComponent;



