import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import What from "./components/What.js";
import How from "./components/Why";
import Why from "./components/How";
import styled from "styled-components";

export default function App() {
  return (
    <Router>
      <div>
        <h1>React Router Overview</h1>
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
      </div>
    </Router>
  );
}
