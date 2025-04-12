import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import WeatherDashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";

import ProtectedRoute from "./ProtectedRoute";
import { Navigate } from "react-router-dom";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes go here */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<WeatherDashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
