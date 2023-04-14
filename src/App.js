import React, { useState } from "react";
import "./App.css";
import Accordion from "./Components/Accordion";


const items = [
  {
    title: "What is React?",
    content: "Prakasj told me React is a frontend javascript framework",
  },
  {
    title: "Why is React?",
    content: "React is a favorite JS library among students at UPSHOT",
  },
  {
    title: "hOW do you use React?",
    content: "any one can use React by creating components",
  },
];


const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <>
    <Accordion items={items}/>
    </>
  );
};

export default App;
