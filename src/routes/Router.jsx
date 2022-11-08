import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../components/loginAndRegister/Login";
import Register from "../components/loginAndRegister/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
