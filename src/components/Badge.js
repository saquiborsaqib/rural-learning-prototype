import React from "react";

const Badge = ({ name }) => (
  <div style={{
    display: "inline-block",
    margin: "5px",
    padding: "5px 10px",
    background: "#ffeb3b",
    borderRadius: "5px",
    fontWeight: "bold",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
  }}>
    {name}
  </div>
);

export default Badge;
