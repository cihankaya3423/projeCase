import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "./Assets/styles/font/stylesheet.css";
import "./Assets/styles/css/main.css";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById("root")
);
