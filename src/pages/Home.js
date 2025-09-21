import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, BarChart2, Award } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          📚 Rural Learning Prototype
        </h1>
        <p className="text-lg text-gray-600">
          Accessible, engaging, and gamified education for rural students 🚀
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Link to="/lessons">
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition">
            <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Lessons</h2>
            <p className="text-gray-500 text-center">
              Explore interactive lessons with quizzes and rewards.
            </p>
          </div>
        </Link>

        <Link to="/analytics">
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition">
            <BarChart2 className="w-12 h-12 text-green-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Analytics</h2>
            <p className="text-gray-500 text-center">
              Track your progress and performance in real time.
            </p>
          </div>
        </Link>

        <Link to="/leaderboard">
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition">
            <Award className="w-12 h-12 text-yellow-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Leaderboard</h2>
            <p className="text-gray-500 text-center">
              Compete with peers and earn badges & XP points.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;

