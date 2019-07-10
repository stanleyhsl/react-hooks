import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../routes";

const App = () => <BrowserRouter basename="/">{Routes()}</BrowserRouter>;
export default App;
