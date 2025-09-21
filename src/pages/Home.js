import { BookOpen, Users, Trophy } from "lucide-react";
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Progress from '../components/ui/Progress';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Math", progress: 80 },
  { name: "Science", progress: 60 },
  { name: "English", progress: 90 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-indigo-700">Empowering Rural Learning</h1>
        <p className="mt-2 text-gray-600 text-lg">Interactive, accessible, and fun learning for everyone</p>
        <Button className="mt-6 px-6 py-3 rounded-2xl shadow-lg">Start Learning</Button>
      </section>

      {/* Dashboard Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 py-8">
        <Card>
          <CardContent className="flex items-center space-x-4 p-6">
            <BookOpen className="text-indigo-600" size={40} />
            <div>
              <h3 className="text-xl font-semibold">Lessons Completed</h3>
              <p className="text-gray-500">120+</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center space-x-4 p-6">
            <Users className="text-green-600" size={40} />
            <div>
              <h3 className="text-xl font-semibold">Active Learners</h3>
              <p className="text-gray-500">350+</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center space-x-4 p-6">
            <Trophy className="text-yellow-500" size={40} />
            <div>
              <h3 className="text-xl font-semibold">Achievements</h3>
              <p className="text-gray-500">50+ Badges</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Learning Progress Chart */}
      <section className="px-10 py-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Module Progress</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="progress" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Gamified Modules */}
      <section className="px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((module, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">{module.name}</h3>
              <Progress value={module.progress} className="mt-4" />
              <p className="mt-2 text-sm text-gray-600">{module.progress}% completed</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}


