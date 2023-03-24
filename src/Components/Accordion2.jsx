import React, { useState } from "react";
import "./Accordion.css";
import { RiAddLine } from "react-icons/ri";

const Accordion2 = () => {
  const [accActive, setAccActive] = useState();

  let accordionData = [
    {
      title: "React is  not a framework",
      accordionContent: "Even professional React developers often say that",
    },
    {
      title: "React has a strong community",
      accordionContent: "Developers love React, and it shows in how strong",
    },
    {
      title: "Supports Type Systems",
      accordionContent: "React comes with a built-in way to validate props.",
    },
  ];

  const handleActive = (index) => {
    if (accActive === index) {
      setAccActive();
    } else {
      setAccActive(index);
    }
  };

  return (
    <div className="accordionContainer">
      {accordionData.map((acc, index) => {
        return (
          <div
            className="accordion"
            onClick={() => {
              handleActive(index);
            }}
          >
            <div className="accordionHeading">
                <span className="addIcon" style={{transform: `${accActive === index ? 'rotate(45deg)':'rotate(0deg)'}`}}>
                   <RiAddLine size={25}/>
                </span>
                <h3>{acc.title}</h3>
            </div>
            {
                accActive === index ? <div className="accordionContent">{acc.accordionContent}</div> : null
            }
          </div>
        );
      })}
    </div>
  );
};

export default Accordion2;
