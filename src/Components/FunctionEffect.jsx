import React from "react";
import { useEffect, useState } from "react";

function FunctionEffect() {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("Adil");
  //  useEffect( () => {
  //     console.log("side effect...", count)
  //  }, [])
  useEffect(() => {
    console.log("Hello count will +++.", count);
  }, [count]);

  useEffect(() => {
    console.log("side effect...", name);
  }, [name]);
  
  return (
    <div>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={() => setCount(count + 1)}>update</button>
      <button onClick={() => setName("KD")}>Name</button>
    </div>
  );
}

export default FunctionEffect;
