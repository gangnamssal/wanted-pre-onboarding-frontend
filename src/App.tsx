import React from "react";
import { css, Global } from "@emotion/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Todo from "./routes/Todo";

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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
