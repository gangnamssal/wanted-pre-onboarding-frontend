import React from "react";
import { css, Global } from "@emotion/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";

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
      <Global styles={globalStype} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
