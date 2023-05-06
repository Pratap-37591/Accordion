import React, { useState, useEffect } from "react";

function SetTimer() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count * 1);
    }, 1000);
  }, []);

  return(
  <div>
    <h1>I've rendered {count} times!</h1>
  </div>
  );
}

export default SetTimer;
