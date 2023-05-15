import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import { BetProvider } from "../src/components/BetContext";

ReactDOM.render(
  <React.StrictMode>
    <BetProvider>
      <App />
    </BetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
