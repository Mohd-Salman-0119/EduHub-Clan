import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../shared/Layout";
import Register from "../components/Register";
import Login from "../components/Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Dashboard</h1>} />
        <Route path="lectures" element={<h1>lectures</h1>} />
        <Route path="courses" element={<h1>courses</h1>} />
      </Route>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default MainRoutes;
