import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import What from "./components/What.js";
import How from "./components/Why";
import Why from "./components/How";
import styled, { keyframes } from "styled-components";

export default function App() {
  return (
    <Router>
      <DivContainer>
        <h1>React Router Overview</h1>
        <Rotate>
          <img
            src="https://lh6.googleusercontent.com/m9VlRb9FHZcqWTBz0msD2FZGpSQs84aAOwwniApLbL1oZWSDJsg4opq2uc81QzPWDtx5QJ2DeO12CFeol6vqJXcSOyp10LGoOW3K_wXIp3UDuQt1XhXE5KeUC8Epkj2hO51asKYe"
            className="App-logo"
            alt="logo"
            style={{ width: "50px" }}
          />
        </Rotate>
        <nav>
          <ul className="menu">
            <li class="menu-item has-child">
              <Link to="/What">What?</Link>
            </li>
            <li className="menu-item has-child">
              <Link to="/Why">Why?</Link>
            </li>
            <li className="menu-item has-child">
              <Link to="/How">How?</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/How">
            <How />
          </Route>
          <Route path="/Why">
            <Why />
          </Route>
          <Route path="/What">
            <What />
          </Route>
        </Switch>
      </DivContainer>
    </Router>
  );
}

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const DivContainer = styled.div`
  margin: 0 auto;
  padding: 50px;
  text-align: center;
  color: #eee;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  height: 100vh;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
