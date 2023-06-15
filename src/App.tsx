import React from "react";
import { css, Global } from "@emotion/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const globalStype = css`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <Router>
        <Global styles={globalStype} />
        <Routes></Routes>
      </Router>
    </>
  );
}

export default App;
