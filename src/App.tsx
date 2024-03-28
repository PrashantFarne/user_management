import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import UserList from "./pages/userList";
import UserDetails from "./pages/userDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<UserList />} />
        <Route path="/userdetail/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
