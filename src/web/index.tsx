import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./pages/app";

const dom = document.getElementById("main");
ReactDom.render(<App />, dom);
