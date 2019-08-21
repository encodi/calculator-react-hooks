import React, { useState } from "react";
import { css } from "@emotion/core";

const Calculator = () => {
  const [btnResult, setResult] = useState(0);
  function handleNumberClick(e) {
    e.preventDefault();
    setResult(e.target.innerHTML);
  }
  function handleOperationClick(e) {
    e.preventDefault();
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
          {btnResult}
        </div>
        <button className="fnAC">AC</button>
        <button className="fnPlusMinus">+/-</button>
        <button className="fnPercent">%</button>
        <button className="fnDiv">/</button>
        <button className="fnSeven" onClick={handleNumberClick}>
          7
        </button>
        <button className="fnEight" onClick={handleNumberClick}>
          8
        </button>
        <button className="fnNine" onClick={handleNumberClick}>
          9
        </button>
        <button className="fnX">X</button>
        <button className="fnFour" onClick={handleNumberClick}>
          4
        </button>
        <button className="fnFive" onClick={handleNumberClick}>
          5
        </button>
        <button className="fnSix" onClick={handleNumberClick}>
          6
        </button>
        <button className="fnMin">-</button>
        <button className="fnOne" onClick={handleNumberClick}>
          1
        </button>
        <button className="fnTwo" onClick={handleNumberClick}>
          2
        </button>
        <button className="fnThree" onClick={handleNumberClick}>
          3
        </button>
        <button className="fnPlus">+</button>
        <button className="fnZero" onClick={handleNumberClick}>
          0
        </button>
        <button className="fnNine">.</button>
        <button className="fnEqual">=</button>
      </div>
    </div>
  );
};

export default Calculator;
