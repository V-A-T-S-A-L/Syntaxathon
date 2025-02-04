import Spline from '@splinetool/react-spline';
import { Link } from "react-router-dom";
import { FaLeaf, FaChartLine, FaCog } from "react-icons/fa";
import { motion } from "framer-motion";
import '../App.css';
import GetStartedTodaySection from './GetStartedTodaySection'; // Import your updated section
import TextPressure from './TextPressure';


function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTA3NmM0ZDVjZDY3ZWY2OTQ4MGIwMSIsImlhdCI6MTczODYxMzQxNywiZXhwIjoxNzM4NjE3MDE3fQ.UA15FzQ0nVD1zNcn8VMCH7T1pmQ-u1m205DHZRJSVL4");

function LandingPage() {
    return (
        <>
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-[#0a281e] via-[#053d2c] to-[#021a12] text-white">
                {/* Hero Section */}
                <div className="flex justify-around items-center w-full h-screen px-4 mt-10 flex-col sm:flex-row">
                    <div className="w-1/2 text-center sm:text-left">
                        <div style={{ position: 'relative', height: '300px' }} className="group">
                            <TextPressure
                                text="Agrify!"
                                flex={true}
                                alpha={false}
                                stroke={false}
                                width={true}
                                weight={true}
                                italic={true}
                                textColor="#ffffff"
                                strokeColor="#ff0000"
                                minFontSize={24}
                                className="transition-colors duration-300 ease-in-out group-hover:text-green-500 group-hover:stroke-green-500"
                            />
                        </div>
                        <p className="text-xl mt-4 text-wrap raleway">
                            AI-Powered Credit Scoring System for the Unreserved and Farmers
                        </p>

                        {/* Buttons Below Text */}
                        <div className="mt-6 flex gap-4 justify-center">
                            {/* Get Started Button */}
                            <button
                                className="bg-white text-green-600 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-green-100 hover:text-green-800 active:scale-95 ease-in-out"
                            >
                                Get Started
                            </button>

                            {/* Contact Us Button */}
                            <Link to={'contact-us'}>
                                <button
                                    className="bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-700 active:scale-95 ease-in-out"
                                >
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Spline Model (Position Unchanged) */}
                    <div className="w-1/2 sm:w-4/5 h-auto sm:h-125 rounded-lg overflow-hidden mt-12 shadow-">
                        <Spline scene="https://prod.spline.design/zyubwNwX4c1oX1oh/scene.splinecode" className="w-1/2 h-full" />
                    </div>
                </div>

                {/* Why Choose Our Software Section */}
                <section id="features" className="py-16 bg-gradient-to-b from-[#1b3a28] to-[#0f2b1e]">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-white mb-12 animate__animated animate__fadeIn">
                            Why Choose Our Software?
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {[{
                                icon: <FaLeaf className="text-5xl text-green-400 mb-4" />,
                                title: "Smart AI-Powered Scoring",
                                description:
                                    "Our AI model analyzes financial data to provide accurate credit scores for farmers and unreserved communities.",
                            },
                            {
                                icon: <FaChartLine className="text-5xl text-blue-400 mb-4" />,
                                title: "Easy to Use",
                                description:
                                    "With an intuitive user interface, managing credit scores has never been easier.",
                            },
                            {
                                icon: <FaCog className="text-5xl text-orange-400 mb-4" />,
                                title: "Customizable Solutions",
                                description:
                                    "Our system offers customizable options to fit your specific needs and requirements.",
                            }].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-to-t from-[#283d2d] to-[#1b3a28] p-6 shadow-xl rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 ease-in-out"
                                    whileHover={{ y: -10, scale: 1.05 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="flex justify-center mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                    <p className="text-white text-sm">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Updated Quote Section */}
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <blockquote className="text-2xl font-semibold text-white text-center italic">
                            "In the heart of agriculture, AI can sow the seeds for better access to finance and resources."
                        </blockquote>
                    </div>
                </section>

                {/* Get Started Today Section */}
                <GetStartedTodaySection /> {/* Replace your old section with this component */}
            </div>
        </>
    );
}

export default LandingPage;
