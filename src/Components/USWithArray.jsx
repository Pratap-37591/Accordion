import React from 'react'
import { useState } from 'react';
function USWithArray() {
    let num = [11,22,33,44];
    const [numbers, setNumbers] = useState(num);

    let changelist = () => {
      setNumbers( prev =>{
        return [...prev, Math.floor(Math.random()* 50 )];
      })
    }
    // let changelist = () =>{
    //   setNumbers([55,66,77,88]);
    // }
  return (
    <div>
      <ul>
        {numbers.map((n,i)=> <li key={i}>{n}</li>)}
      </ul>
      <button onClick={changelist}>ChangeArray</button>
    </div>
  )
}

export default USWithArray;
