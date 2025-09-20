import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Analytics from "./pages/Analytics";
import "./i18n/i18n";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/lessons" element={<Lessons/>}/>
        <Route path="/analytics" element={<Analytics/>}/>
      </Routes>
    </Router>
  );
}

export default App;

