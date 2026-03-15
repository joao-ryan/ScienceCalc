import { useState } from "react";
import { calculate } from "../engine/mathEngine";

export default function Calculator() {

  const [input,setInput] = useState("");

  function handleClick(value){

    if(value === "="){
      setInput(String(calculate(input)));
      return;
    }

    if(value === "C"){
      setInput("");
      return;
    }

    setInput(prev => prev + value);
  }

  const buttons = [
    "sin(","cos(","tan(","√(",
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","=","+"
  ];

  return (
    <div className="calculator">

      <div className="display">{input}</div>

      <div className="buttons">
        {buttons.map(btn => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

    </div>
  );
}