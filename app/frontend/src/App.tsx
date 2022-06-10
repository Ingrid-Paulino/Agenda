import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerDay from "./pages/CustomerDay";
import CustomerHour from "./pages/CustomerHour";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="customerDay" element={<CustomerDay />} />
        <Route path="customerHour" element={<CustomerHour />} />
      </Routes>
    </>
  );
}

export default App;
