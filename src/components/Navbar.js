import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#4CAF50",
      color: "white",
      borderRadius: "0 0 10px 10px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
    }}>
      <div style={{ display: "flex", gap: "20px", fontWeight: "bold" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/lessons" style={{ color: "white", textDecoration: "none" }}>Lessons</Link>
        <Link to="/analytics" style={{ color: "white", textDecoration: "none" }}>Analytics</Link>
      </div>
      <LanguageSwitcher />
    </nav>
  );
};

export default Navbar;
