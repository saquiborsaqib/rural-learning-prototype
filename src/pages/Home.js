import React, { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";
import Badge from "../components/Badge";
import Leaderboard from "../components/Leaderboard";
import { getOfflineData } from "../utils/localStorage";
import { getBadges } from "../utils/gamification";
import Confetti from "react-confetti";

const Home = () => {
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState([]);
  const [animatedPoints, setAnimatedPoints] = useState(0);

  useEffect(() => {
    const fetchProgress = async () => {
      const data = await getOfflineData("userProgress") || { points: 0 };
      setPoints(data.points);
      setBadges(getBadges(data.points));
    };
    fetchProgress();
  }, []);

  // Animated points counter
  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      if (start >= points) clearInterval(interval);
      else setAnimatedPoints(++start);
    }, 10);
    return () => clearInterval(interval);
  }, [points]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome</h1>
      {points >= 50 && <Confetti />}
      <ProgressBar points={animatedPoints} />
      <div style={{ marginTop: "10px" }}>
        {badges.map((b, i) => (
          <Badge key={i} name={b} />
        ))}
      </div>
      <Leaderboard />
    </div>
  );
};

export default Home;


