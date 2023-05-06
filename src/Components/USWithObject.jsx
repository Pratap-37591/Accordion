import React from 'react'
import { useState } from 'react';
function USWithObject() {
    const obj = {
        name: "pratap",
        age: 21,
        height: 5.11,
        isYoung: true
    } 
    const [person, setPerson] = useState(obj);

    let changeState = () => {
 
     setPerson( prevState => {
      return {
        ...prevState ,
        name:"saju"
      }
     })

      // setPerson({
      //   name: "anat",
      //   age: 59,
      //   height: 6,
      //   isYoung: false
      // })
    }
  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.height}</h1>
      <h1>{person.isYoung.toString()}</h1>
      <button  onClick={changeState}>Update</button>
    </div>
  )
}

export default USWithObject;
