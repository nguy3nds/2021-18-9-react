import React from "react";
import styled from "styled-components";

export default function What() {
  return (
    <divContent>
      <h3>What is react router?</h3>
      <p>
        <b>React Router</b> is a standard library for routing in React.
      </p>
      <p>
        It enables the navigation among views of various components in a React
        Application, allows changing the browser URL, and keeps the UI in sync
        with the URL.
      </p>
      <h3>What is SPA1?</h3>
      <p>
        SPA (Single-page application) is a web application or website that
        interacts with the user by dynamically rewriting the current web page
        with new data from the web server, instead of the default method of a
        web browser loading entire new pages. The goal is faster transitions
        that make the website feel more like a native app.
      </p>
      <img src="react-router.png" alt="" />
    </divContent>
  );
}

const divContent = styled.div`
  margin: 0 50px;
`;
