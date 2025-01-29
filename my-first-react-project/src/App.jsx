import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale } from "chart.js";
ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale);

const App = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-blue-600 p-6 text-white text-center">
                <h1 className="text-2xl font-bold">Water Management System for Delhi</h1>
                <p className="mt-2">Real-time Water Leakage Detection and Prevention</p>
                <Button className="mt-4 bg-white text-blue-600">Learn More</Button>
            </header>

            <main className="p-6">
                {/* Home Section */}
                <section id="home" className="mb-12">
                    <Card>
                        <CardContent>
                            <h2 className="text-xl font-bold mb-4">About the Project</h2>
                            <p className="text-gray-700">
                                Our innovative system leverages IoT sensors, AI/ML models, and cloud technologies to detect water leakage in real-time and notify users for quick resolution. This initiative aims to conserve water and reduce wastage in Delhi.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Dashboard Section */}
                <section id="dashboard" className="mb-12">
                    <h2 className="text-xl font-bold mb-4">Dashboard</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardContent>
                                <h3 className="text-lg font-semibold mb-2">Flow Rates (Real-Time)</h3>
                                <Line
                                    data={{
                                        labels: ["1 PM", "2 PM", "3 PM", "4 PM", "5 PM"],
                                        datasets: [
                                            {
                                                label: "Flow Rate (L/min)",
                                                data: [12, 18, 8, 15, 10],
                                                borderColor: "#2563eb",
                                                borderWidth: 2,
                                                fill: false,
                                            },
                                        ],
                                    }}
                                    options={{ responsive: true, maintainAspectRatio: false }}
                                />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                <h3 className="text-lg font-semibold mb-2">Usage Trends</h3>
                                <Bar
                                    data={{
                                        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                        datasets: [
                                            {
                                                label: "Water Usage (Liters)",
                                                data: [120, 150, 100, 130, 170],
                                                backgroundColor: "#60a5fa",
                                            },
                                        ],
                                    }}
                                    options={{ responsive: true, maintainAspectRatio: false }}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="mb-12">
                    <Card>
                        <CardContent>
                            <h2 className="text-xl font-bold mb-4">About the Technology</h2>
                            <p className="text-gray-700 mb-4">
                                This project uses advanced technologies including:
                            </p>
                            <ul className="list-disc pl-5 text-gray-700">
                                <li><strong>AI/ML:</strong> Machine learning models detect anomalies in water flow and pressure data.</li>
                                <li><strong>IoT:</strong> Smart sensors collect real-time data from pipelines and taps.</li>
                                <li><strong>Cloud:</strong> Data is stored and processed on scalable platforms like AWS and Google Cloud.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </section>

                {/* Contact Section */}
                <section id="contact" className="mb-12">
                    <Card>
                        <CardContent>
                            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" className="mt-1 p-2 w-full border rounded-md" placeholder="Your Email" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea className="mt-1 p-2 w-full border rounded-md" rows="4" placeholder="Your Message"></textarea>
                                </div>
                                <Button type="submit" className="bg-blue-600 text-white">Submit</Button>
                            </form>
                        </CardContent>
                    </Card>
                </section>
            </main>

            <footer className="bg-gray-800 text-white p-6 text-center">
                <p>&copy; 2025 Water Management System for Delhi. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;