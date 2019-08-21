import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./Calculator";
import "./style.css";
import { css } from "@emotion/core";

const App = () => {
  return <Calculator />;
};

ReactDOM.render(<App />, document.getElementById("root"));
