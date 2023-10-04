import React from "react";
import "./Grid.css";

function Grid() {

    const valueHandler = (event) => {
        console.log(event.target.innerHTML);
        console.log(typeof event.target.innerHTML);
    }
  return (
    <div className="grid-container">
      <div className="number" onClick={valueHandler}>
        <h1>7</h1>
      </div>
      <div className="number">
        <h1>8</h1>
      </div>
      <div className="number">
        <h1>9</h1>
      </div>
      <div className="operator">
        <h1>-</h1>
      </div>
      <div className="number">
        <h1>4</h1>
      </div>
      <div className="number">
        <h1>5</h1>
      </div>
      <div className="number">
        <h1>6</h1>
      </div>
      <div className="operator">
        <h1>+</h1>
      </div>
      <div className="number">
        <h1>1</h1>
      </div>
      <div className="number">
        <h1>2</h1>
      </div>
      <div className="number">
        <h1>3</h1>
      </div>
      <div className="operator">
        <h1>=</h1>
      </div>
    </div>
  );
}

export default Grid;
