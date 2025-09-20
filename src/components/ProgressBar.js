import React, { useEffect, useState } from "react";
import { getLevel } from "../utils/gamification";

const ProgressBar = ({ points }) => {
  const level = getLevel(points);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let start = 0;
    const target = Math.min((points % 50) * 2, 100);
    const interval = setInterval(() => {
      start += 1;
      setWidth(start);
      if (start >= target) clearInterval(interval);
    }, 10);
  }, [points]);

  return (
    <div style={{ margin: "10px 0" }}>
      <p>Level {level} - Points: {points}</p>
      <div style={{ background: "#eee", width: "200px", height: "20px", borderRadius: "10px" }}>
        <div
          style={{
            width: `${width}%`,
            height: "100%",
            background: "linear-gradient(to right, red, yellow, green)",
            borderRadius: "10px",
            transition: "width 0.5s ease-in-out"
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;


