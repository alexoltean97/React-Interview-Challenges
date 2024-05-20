import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </React.Fragment>
  );
}

export default App;
