import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "./components/What";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="menu">
            <li class="menu-item has-child">
              <Link to="/">What?</Link>
            </li>
            <li className="menu-item has-child">
              <Link to="/about">Why?</Link>
            </li>
            <li className="menu-item has-child">
              <Link to="/users">How?</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
