import React, { useEffect, useState } from "react";
import { Trophy, Star, BarChart3 } from "lucide-react";
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
      const data = (await getOfflineData("userProgress")) || { points: 0 };
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
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {points >= 50 && <Confetti />}

      {/* Header */}
      <h1 className="text-3xl font-bold text-indigo-800 mb-6">
        🎉 Welcome Back, Learner!
      </h1>

      {/* Points + Progress Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-2 mb-4">
            <Star className="text-yellow-500" size={28} />
            <h2 className="text-xl font-semibold text-gray-800">
              Your Progress
            </h2>
          </div>
          <p className="text-2xl font-bold text-indigo-700 mb-2">
            {animatedPoints} Points
          </p>
          <ProgressBar points={animatedPoints} />
        </div>

        {/* Badges */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="text-orange-500" size={28} />
            <h2 className="text-xl font-semibold text-gray-800">
              Your Badges
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {badges.length > 0 ? (
              badges.map((b, i) => <Badge key={i} name={b} />)
            ) : (
              <p className="text-gray-500 italic">No badges yet. Keep learning!</p>
            )}
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="text-green-500" size={28} />
          <h2 className="text-xl font-semibold text-gray-800">Leaderboard</h2>
        </div>
        <Leaderboard />
      </div>
    </div>
  );
};

export default Home;

