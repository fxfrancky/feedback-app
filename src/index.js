//Entry point to React
import React from "react";
// import ReactDOM from "react-dom"; //Before
import { createRoot } from "react-dom/client"; // After react 17
import "./index.css";
import App from "./App";

//Before
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.querySelector("#root")
// );

// After
const root = createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
