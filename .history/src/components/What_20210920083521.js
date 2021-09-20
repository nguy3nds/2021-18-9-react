import React from "react";
import imgReactRouter1 from "../image/react-router-1.png";

export default function What() {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h4>What is react router ?</h4>
      <p>
        <b>React Router</b> is a standard library for routing in React.
      </p>
      <p>
        It enables the navigation among views of various components in a React
        Application, allows changing the browser URL, and keeps the UI in sync
        with the URL.
      </p>
      <h3>What is SPA?</h3>
      <p>
        SPA (Single-page application) is a web application or website that
        interacts with the user by dynamically rewriting the current web page
        with new data from the web server, instead of the default method of a
        web browser loading entire new pages. The goal is faster transitions
        that make the website feel more like a native app.
      </p>
      <img style={{ marginTop: "10px" }} src={imgReactRouter1} alt="abc" />
    </div>
  );
}
