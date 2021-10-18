import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { SingleImgInput } from "./component/SingleImgInput";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
  background-color: aliceblue;
`;

const Body = styled.div`
  padding: 50px;
`;

function App() {
  const history = createBrowserHistory();

  return (
    <div className="App">
      <Nav>
        <button onClick={() => (window.location.href = "/")}>home</button>
        <button onClick={() => (window.location.href = "/singleImgInput")}>
          single img input
        </button>
      </Nav>
      <Body>
        <Router history={history}>
          <Route path="/singleImgInput" component={SingleImgInput} />
        </Router>
      </Body>
    </div>
  );
}

export default App;
