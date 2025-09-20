import React, { useEffect, useState } from "react";
import { getOfflineData } from "../utils/localStorage";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("You");

  useEffect(() => {
    const fetchData = async () => {
      const userPoints = (await getOfflineData("userProgress"))?.points || 0;
      let data = await getOfflineData("leaderboard") || [
        { name: "You", points: userPoints },
        { name: "Rahul", points: 40 },
        { name: "Anita", points: 60 }
      ];
      data.sort((a,b)=>b.points-a.points);
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div style={{marginTop:"20px"}}>
      <h3>Leaderboard</h3>
      <ol>
        {users.map((u,i)=>(
          <li key={i} style={{
            fontWeight: u.name===currentUser ? "bold" : "normal",
            color: u.name===currentUser ? "#4CAF50" : "black",
            animation: u.name===currentUser ? "pulse 1s infinite" : "none"
          }}>
            {u.name} - {u.points} pts
          </li>
        ))}
      </ol>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default Leaderboard;

