import React from "react";
import { Route } from "react-browser-router";
import Homepage from "./components/layout/Homepage";
import Aboutpage from "./components/layout/Aboutpage";
import Navigation from "./components/layout/Navigation";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Navigation} />
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={Aboutpage} />
    </div>
  );
}

export default App;
