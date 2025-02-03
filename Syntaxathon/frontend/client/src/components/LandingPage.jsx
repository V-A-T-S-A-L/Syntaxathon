import React from "react";
import Spline from '@splinetool/react-spline';
import { Link } from "react-router-dom";
import { FaLeaf, FaChartLine, FaCog } from "react-icons/fa";
import { motion } from "framer-motion";
import '../App.css';

function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function LandingPage() {
    return (
        <>
            {/* Hero Section */}
            <div className="model flex justify-around items-center w-full h-screen px-4 mt-10">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-gray-800 font-serif text-left">AGRIFY</h1>
                    <p className="text-xl text-gray-600 mt-4 text-left text-wrap">
                        AI-Powered Credit Scoring System for the Unreserved and Farmers
                    </p>

                    {/* Buttons Below Text */}
                    <div className="mt-6 flex gap-4">
                        <button
                            className="bg-green-600 text-white font-bold py-2 px-6 rounded-full hover:bg-green-700 transition duration-300"
                            onClick={() => scrollToSection("get-started")}
                        >
                            Get Started
                        </button>
                        <Link to={'contact-us'}>
                            <button
                                className="bg-gray-800 text-white font-bold py-2 px-6 rounded-full hover:bg-gray-900 transition duration-300"
                            >
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Spline Model (Position Unchanged) */}
                <div className="w-auto h-125 scale-125 rounded-lg overflow-hidden mt-12">
                    <Spline scene="https://prod.spline.design/zyubwNwX4c1oX1oh/scene.splinecode" />
                </div>
            </div>

            {/* Why Choose Our Software Section */}
            <section id="features" className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Why Choose Our Software?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaLeaf className="text-5xl text-green-500 mb-4" />,
                                title: "Smart AI-Powered Scoring",
                                description:
                                    "Our AI model analyzes financial data to provide accurate credit scores for farmers and unreserved communities.",
                            },
                            {
                                icon: <FaChartLine className="text-5xl text-green-500 mb-4" />,
                                title: "Easy to Use",
                                description:
                                    "With an intuitive user interface, managing credit scores has never been easier.",
                            },
                            {
                                icon: <FaCog className="text-5xl text-green-500 mb-4" />,
                                title: "Customizable Solutions",
                                description:
                                    "Our system offers customizable options to fit your specific needs and requirements.",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-green-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {feature.icon}
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Updated Quote Section */}
            <section className="bg-green-600 py-16">
                <div className="container mx-auto px-6">
                    <blockquote className="text-2xl font-semibold text-white text-center italic">
                        "In the heart of agriculture, AI can sow the seeds for better access to finance and resources."
                    </blockquote>
                </div>
            </section>

            {/* Get Started Today Section (Updated) */}
            <section id="get-started" className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get Started Today</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Income / Weather Prediction",
                                description:
                                    "AI-powered forecasts for weather conditions and crop yield, helping farmers estimate income and plan efficiently.",
                                link: "predict-income&weather",
                            },
                            {
                                title: "Agricultural Needs Prediction",
                                description:
                                    "Predicts fertilizer, water, seed, pesticide, and nutrient requirements for your crops based on land size, crop type, etc.",
                                link: "agricultural-needs",
                            },
                            {
                                title: "Crop Price Forecasting",
                                description: "Predict the price of crops based on market trends.",
                                link: "crop-price-forecast",
                            },
                            {
                                title: "Loan Recommendation",
                                description:
                                    "Receive tailored loan recommendations based on your financial health and business needs.",
                                link: "financial-advisory",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden"
                                whileHover={{ scale: 1.03 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 mb-4">{item.description}</p>
                                    <Link to={item.link}>
                                        <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default LandingPage;
