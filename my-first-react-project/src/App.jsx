import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-blue-200 text-gray-900 flex flex-col justify-between">
                <Navbar />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

function Navbar() {
    return (
        <nav className="bg-black p-4 shadow-lg flex justify-between">
            <h1 className="text-white text-xl font-bold">LeakLoom</h1>
            <div>
                <Link to="/" className="text-white px-4 hover:text-red-500">Home</Link>
                <Link to="/dashboard" className="text-white px-4 hover:text-red-500">Dashboard</Link>
                <Link to="/about" className="text-white px-4 hover:text-red-500">About</Link>
            </div>
        </nav>
    );
}

function Footer() {
    return (
        <footer className="bg-black p-4 text-center text-white mt-10">
            <p>&copy; 2025 LeakLoom. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                    <FaFacebook size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                    <FaTwitter size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
                    <FaInstagram size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
                    <FaLinkedin size={24} />
                </a>
            </div>
        </footer>
    );
}

function Home() {
    return (
        <div className="p-10 text-center">
            <h2 className="text-3xl font-bold">Welcome to LeakLoom</h2>
            <p className="mt-4 text-lg">Smart water management using AI, ML, and IoT.</p>

            {/* Images Section */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                    src="https://www.facilitiesnet.com/resources/editorial/2024/water-leak-sensor-sstock_2168858249.jpg"
                    alt="Water Leak Sensor"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                    src="https://www.shutterstock.com/image-photo/water-leaking-tap-field-260nw-1878223051.jpg"
                    alt="Leaking Tap in a Field"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
            </div>

            {/* Call to Action Button */}
            <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 transition-all">
                Get Started
            </button>
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
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md text-left text-gray-700 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                <p className="mt-4 text-lg">
                    This platform serves as a comprehensive source of information and solutions aimed at raising awareness about water scarcity, especially in regions severely affected by this crisis.
                    We aim to guide individuals and organizations on how to contribute to water conservation efforts, and provide practical tips for sustainable water usage.
                </p>
            </div>

            <div className="mt-8 space-y-8">
                {/* First Image */}
                <div>
                    <img
                        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.researchgate.net%2Ffigure%2FGIS-map-for-the-water-distribution-network-of-the-campus_fig1_312018621&psig=AOvVaw0SBYZkQ8OgBT4PQTqJbakj&ust=1738257393280000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDu1MW3m4sDFQAAAAAdAAAAABAJ"
                        alt="Water Distribution Network"
                        className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Second Image */}
                <div>
                    <img
                        src="https://www.sgligis.com/wp-content/uploads/2-Water-Supply-Management.jpg"
                        alt="Water Supply Management"
                        className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}






import { FaTachometerAlt, FaTint, FaWater, FaChartLine } from "react-icons/fa";

function Dashboard() {
    return (
        <div className="p-10">
            <h2 className="text-3xl font-bold text-center">Dashboard</h2>
            <p className="mt-4 text-center text-lg">
                Monitor water usage, detect leaks, and optimize efficiency.
            </p>

            {/* Dashboard Cards */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Leak Detection */}
                <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                    <FaTint size={40} className="text-blue-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-center">Real-time Leak Detection</h3>
                    <p className="text-gray-600 text-center">
                        AI-driven insights detect pipeline leaks instantly.
                    </p>
                </div>

                {/* Water Consumption Analytics */}
                <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                    <FaTachometerAlt size={40} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-center">Water Consumption Analytics</h3>
                    <p className="text-gray-600 text-center">
                        Track and optimize your daily water usage efficiently.
                    </p>
                </div>

                {/* AI-Powered Leak Forecasting */}
                <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                    <FaChartLine size={40} className="text-red-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-center">AI Leak Forecasting</h3>
                    <p className="text-gray-600 text-center">
                        Predict future leaks based on historical data and AI models.
                    </p>
                </div>

                {/* Water Quality Monitoring */}
                <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                    <FaWater size={40} className="text-purple-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-center">Water Quality Monitoring</h3>
                    <p className="text-gray-600 text-center">
                        Analyze water purity levels to ensure safe usage.
                    </p>
                </div>

                {/* Smart Water Distribution */}
                <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                    <FaTachometerAlt size={40} className="text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-center">Smart Water Distribution</h3>
                    <p className="text-gray-600 text-center">
                        Optimize distribution across different sectors efficiently.
                    </p>
                </div>
            </div>
        </div>
    );
}




export default App;