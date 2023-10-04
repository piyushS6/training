import React, { useState } from "react";
import { evaluate } from "mathjs";

import "./App.css";

function App() {
  const [result, setResult] = useState("");

  // const operators = ["/", "-", "+", "="];

  const resultHandler = (event) => {
    let val = event.target.innerHTML;
    setResult((result) => [...result, val]);
  };

  const clearInputHandler = () => {
    setResult("");
  };

  const calculateHandler = () => {
    const input = result.join("");

    setResult(evaluate(input));

    // var operator = "";
    // var index = 0;
    // var op1 = "";
    // var op2 = "";
    // for (const key in result) {
    //   if (operators.includes(result[key])) {
    //     operator += result[key];
    //     index = key;
    //   }
    // }

    // for (const key in result) {
    //   if (key < index) {
    //     op1 += result[key];
    //   }
    // }

    // for (const key in result) {
    //   if (key > index) {
    //     op2 += result[key];
    //   }
    // }

    // if (operator === "/") {
    //   setResult(() => {
    //     return Number(op1) / Number(op2);
    //   });
    // } else if (operator === "+") {
    //   setResult(() => {
    //     return Number(op1) + Number(op2);
    //   });
    // } else if (operator === "-") {
    //   setResult(() => {
    //     return Number(op1) - Number(op2);
    //   });
    // }
  };

  return (
    <div className="App">
      <div className="top">{result}</div>
      <div className="bottom">
        <div className="up">
          <div onClick={clearInputHandler}>
            <h2>clear</h2>
          </div>
          <div onClick={resultHandler}>
            <h1>/</h1>
          </div>
        </div>
        <div className="down">
          <div className="number" onClick={resultHandler}>
            <h1>7</h1>
          </div>
          <div className="number" onClick={resultHandler}>
            <h1>8</h1>
          </div>
          <div className="number" onClick={resultHandler}>
            <h1>9</h1>
          </div>
          <div className="operator" onClick={resultHandler}>
            <h1>-</h1>
          </div>
          <div className="number" onClick={resultHandler}>
            <h1>4</h1>
          </div>
          <div className="number" onClick={resultHandler}>
            <h1>5</h1>
          </div>
          <div className="number" onClick={resultHandler}>
            <h1>6</h1>
          </div>
          <div className="operator" onClick={resultHandler}>
            <h1>+</h1>
          </div>
          <div className="number" onClick={resultHandler}>
            <h1>1</h1>
          </div>
          <div className="number" onClick={resultHandler}>
            <h1>2</h1>
          </div>
          <div className="number" onClick={resultHandler}>
            <h1>3</h1>
          </div>
          <div className="operator" onClick={calculateHandler}>
            <h1>=</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
