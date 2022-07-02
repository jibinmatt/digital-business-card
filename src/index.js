/*
Build from scratch!
Fill in your own infomation
Separate compnents for: 
    * Info (photo, name, buttons, etc.)
    * About
    * Interests
    * Footer(social icons)
*/

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App className="main" />, rootElement);
