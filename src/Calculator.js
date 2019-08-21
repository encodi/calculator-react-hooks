import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState(null);
  const [prevNumber, setPrevNumber] = useState(0);
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  const [periodCounter, setPeriodCounter] = useState(0);
  useEffect(() => {
    if (periodCounter > 0) {
      setResult(Number(number).toFixed(2));
    } else {
      setResult(number);
    }
  });
  function handleNumberClick(e) {
    if (counter < 10) {
      let num = e.target.innerHTML;
      if (num > 0 && counter > 0) {
        num = number + e.target.innerHTML;
      }
      setNumber(num);
      setCounter(counter + 1);
    }
  }
  function handlePeriodClick(e) {
    if (counter < 10 && periodCounter < 1) {
      const num = number + e.target.innerHTML;
      setNumber(num);
      setCounter(counter + 1);
      setPeriodCounter(periodCounter + 1);
    }
  }
  function handleOperationClick(e) {
    const op = e.target.innerHTML;
    setPrevNumber(number);
    setOperation(op);
    if (op == "+/-") {
      // TODO: Bug, need to fix
      setPrevNumber(-number);
      setNumber(-number);
      setOperation(op);
    } else {
      setNumber(0);
      setCounter(0);
    }
  }
  function handleEqualsClick(e) {
    console.log(operation, prevNumber, number);
    switch (operation) {
      case "+":
        setNumber(parseFloat(prevNumber, 10) + parseFloat(number, 10));
        break;
      case "-":
        setNumber(parseFloat(prevNumber, 10) - parseFloat(number, 10));
        break;
      case "X":
        setNumber(parseFloat(prevNumber, 10) * parseFloat(number, 10));
        break;
      case "/":
        setNumber(parseFloat(prevNumber, 10) / parseFloat(number, 10));
        break;
    }
  }
  function handleResetClick(e) {
    setResult(0);
    setOperation(null);
    setPrevNumber(0);
    setNumber(0);
    setCounter(0);
    setPeriodCounter(0);
  }
  return (
    <div
      css={css`
        display: flex;
        width: 400px;
        justify-content: center;
        align-content: center;
        margin: 0 auto;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-content: center;
          background-color: #505050;
        `}
      >
        <div
          className="result"
          css={css`
            width: 100%;
            height: 50px;
            background-color: #505050;
            flex-basis: 100%;
            font-size: 2.5em;
            padding: 0.5em;
            justify-content: flex-end;
            display: flex;
            align-items: flex-end;
          `}
          onClick={handleOperationClick}
        >
          {result}
        </div>
        <button className="fnAC" onClick={handleResetClick}>
          AC
        </button>
        <button className="fnPlusMinus" onClick={handleOperationClick}>
          +/-
        </button>
        <button className="fnPercent" onClick={handleOperationClick}>
          %
        </button>
        <button className="fnDiv" onClick={handleOperationClick}>
          /
        </button>
        <button className="fnSeven" onClick={handleNumberClick}>
          7
        </button>
        <button className="fnEight" onClick={handleNumberClick}>
          8
        </button>
        <button className="fnNine" onClick={handleNumberClick}>
          9
        </button>
        <button className="fnX" onClick={handleOperationClick}>
          X
        </button>
        <button className="fnFour" onClick={handleNumberClick}>
          4
        </button>
        <button className="fnFive" onClick={handleNumberClick}>
          5
        </button>
        <button className="fnSix" onClick={handleNumberClick}>
          6
        </button>
        <button className="fnMin" onClick={handleOperationClick}>
          -
        </button>
        <button className="fnOne" onClick={handleNumberClick}>
          1
        </button>
        <button className="fnTwo" onClick={handleNumberClick}>
          2
        </button>
        <button className="fnThree" onClick={handleNumberClick}>
          3
        </button>
        <button className="fnPlus" onClick={handleOperationClick}>
          +
        </button>
        <button className="fnZero" onClick={handleNumberClick}>
          0
        </button>
        <button className="fnPeriod" onClick={handlePeriodClick}>
          .
        </button>
        <button className="fnEqual" onClick={handleEqualsClick}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
