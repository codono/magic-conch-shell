import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { SingleImgInput } from "./component/SingleImgInput";
import styled from "styled-components";
import { DragAndDrop } from "./component/DragAndDrop";
import { Carousel } from "./component/Carousel";
import { Home } from "./component/Home";

function App() {
  const history = createBrowserHistory();

  return (
    <div className="App">
      <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route path="/singleImgInput" component={SingleImgInput} />
        <Route path="/dragAndDrop" component={DragAndDrop} />
        <Route path="/carousel" component={Carousel} />
      </Router>
    </div>
  );
}

export default App;
