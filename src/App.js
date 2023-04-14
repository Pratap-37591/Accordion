import React, { useState } from "react";
import "./App.css";
// import Accordion from "./Components/Accordion";
// import Dropdown from "./Dropdown";
// import CustomMenuBar from "./CustomMenuBar";
import Translate from "./Translate";

// const items = [
//   {
//     title: "What is React?",
//     content: "Prakasj told me React is a frontend javascript framework",
//   },
//   {
//     title: "Why is React?",
//     content: "React is a favorite JS library among students at UPSHOT",
//   },
//   {
//     title: "hOW do you use React?",
//     content: "any one can use React by creating components",
//   },
// ];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <>
      <br />
      {/* <Dropdown selected={selected} onSelectedChange={setSelected}  options={options}/> */}

      {/* <CustomMenuBar/> */}

      <Translate />
    </>
  );
};

export default App;
