import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <nav className="bg-black p-4 shadow-lg flex justify-between">
          <h1 className="text-white text-xl font-bold">LeakLoom</h1>
          <div>
            <Link to="/" className="text-white px-4 hover:text-red-500">Home</Link>
            <Link to="/dashboard" className="text-white px-4 hover:text-red-500">Dashboard</Link>
            <Link to="/about" className="text-white px-4 hover:text-red-500">About</Link>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold">Welcome to LeakLoom</h2>
      <p className="mt-4 text-lg">Smart water management using AI, ML, and IoT.</p>
      <Button className="mt-6 bg-blue-600 text-white">Get Started</Button>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <p className="mt-4">Monitor water usage, detect leaks, and optimize efficiency.</p>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Real-time Leak Detection</h3>
          <p className="text-gray-600">Using AI-driven insights to detect pipeline leaks.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Water Consumption Analytics</h3>
          <p className="text-gray-600">Track and optimize your daily water usage.</p>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold">About LeakLoom</h2>
      <p className="mt-4 text-lg">
        LeakLoom is an AI-powered smart water management system designed to reduce water
        wastage and enhance efficiency in urban water networks.
      </p>
    </div>
  );
}

export default App;
