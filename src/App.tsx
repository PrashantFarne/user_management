import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/login";

const App = () => {
  return (
    <Router>
      <Route path="/" Component={Login} />
      <Route path="/dashboard" Component={Login} />
    </Router>
  );
};

export default App;
