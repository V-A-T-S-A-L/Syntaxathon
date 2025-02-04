<<<<<<< HEAD
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
=======
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaMicrophone, FaLeaf, FaChartLine, FaCog, FaGlobe } from "react-icons/fa";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { motion } from "framer-motion";
import '../App.css';
import TextPressure from './TextPressure';
import Spline from '@splinetool/react-spline';
import GetStartedTodaySection from './GetStartedTodaySection';
import { useTranslation } from 'react-i18next';

function LandingPage() {
    const { t, i18n } = useTranslation();
    const [isListening, setIsListening] = useState(false);
    const [micError, setMicError] = useState(null);
    const [commandCaption, setCommandCaption] = useState("");
    const { transcript, resetTranscript } = useSpeechRecognition();

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        const checkMicrophone = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                stream.getTracks().forEach(track => track.stop());
            } catch (error) {
                setMicError(t("Microphone is not accessible. Please check permissions."));
            }
        };

        checkMicrophone();
    }, [t]);

    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language: "en-US" });
        setIsListening(true);
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        setIsListening(false);
    };

    const handleVoiceCommand = useCallback((command) => {
        setCommandCaption(command);

        const lowerCaseCommand = command.toLowerCase();

        if (lowerCaseCommand.includes("income")) {
            window.location.href = '/predict-income&weather';
        } else if (lowerCaseCommand.includes("need")) {
            window.location.href = '/agricultural-needs';
        } else if (lowerCaseCommand.includes("crop")) {
            window.location.href = '/crop-price-forecast';
        } else if (lowerCaseCommand.includes("advice")) {
            window.location.href = '/financial-advisory';
        } else if (lowerCaseCommand.includes("started")) {
            scrollToSection('get-started-section');
        } else if (lowerCaseCommand.includes("contact")) {
            window.location.href = '/contact-us';
        }
    }, []);

    useEffect(() => {
        if (transcript) {
            handleVoiceCommand(transcript);
            resetTranscript();
        }
    }, [transcript, handleVoiceCommand, resetTranscript]);

    return (
        <>
            {/* Language Switcher Icon */}
            <div className="fixed top-5 right-5 z-50">
                <button 
                    onClick={() => handleLanguageChange(i18n.language === 'en' ? 'hi' : 'en')} 
                    className="bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
                    aria-label={i18n.language === 'en' ? t('Switch to Hindi') : t('Switch to English')}
                >
                    <FaGlobe size={20} />
                </button>
            </div>

            {/* Hero Section */}
            <div className="bg-gradient-to-b from-[#0a281e] via-[#053d2c] to-[#021a12] text-white">
                <div className="flex justify-around items-center w-full h-screen px-4 mt-10 flex-col sm:flex-row">
                    <div className="w-1/2 mx-6 text-center sm:text-left">
                        <div style={{ position: 'relative', height: '300px', marginRight: '1em' }} className="group">
                            <TextPressure
                                text={t('Agrify!')}
                                flex={true}
                                alpha={false}
                                stroke={false}
                                width={true}
                                weight={true}
                                italic={true}
                                textColor="#ffffff"
                                strokeColor="#ff0000"
                                minFontSize={24}
                                className="transition-colors mr-1 duration-300 ease-in-out group-hover:text-green-500 group-hover:stroke-green-500"
                            />
                        </div>
                        <p className="text-xl mt-4 text-wrap raleway">
                            {t('AI-powered credit scoring system for farmers and unreserved communities')}
                        </p>

                        {/* Buttons Below Text */}
                        <div className="mt-6 flex gap-4 justify-center">
                            {/* Get Started Button */}
                            <button
                                className="bg-white text-green-600 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-green-100 hover:text-green-800 active:scale-95 ease-in-out"
                                onClick={() => scrollToSection('get-started-section')}
                            >
                                {t('Get Started')}
                            </button>

                            {/* Contact Us Button */}
                            <Link to={'/contact-us'}>
                                <button
                                    className="bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-700 active:scale-95 ease-in-out"
                                >
                                    {t('Contact Us')}
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Spline Model (Position Unchanged) */}
                    <div className="hidden md:block w-1/2 sm:w-4/5 h-auto sm:h-125 rounded-lg overflow-hidden mt-12">
                        <Spline scene="https://prod.spline.design/Rqai9EoFUUQo8Ody/scene.splinecode" className="w-1/2 h-full" />
                    </div>
                </div>

                {/* Why Choose Our Software Section */}
                <section id="features" className="py-16 bg-gradient-to-b from-[#1b3a28] to-[#0f2b1e]">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-white mb-12 animate__animated animate__fadeIn">
                            {t('Why Choose Our Software?')}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {[{
                                icon: <FaLeaf className="text-5xl text-green-400 mb-4" />,
                                title: t("Smart AI-Powered Scoring"),
                                description: t("Our AI model analyzes financial data to provide accurate credit scores for farmers and unreserved communities."),
                            },
                            {
                                icon: <FaChartLine className="text-5xl text-blue-400 mb-4" />,
                                title: t("Easy to Use"),
                                description: t("With an intuitive user interface, managing credit scores has never been easier."),
                            },
                            {
                                icon: <FaCog className="text-5xl text-orange-400 mb-4" />,
                                title: t("Customizable Solutions"),
                                description: t("Our system offers customizable options to fit your specific needs and requirements."),
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
                            {t('In the heart of agriculture, AI can sow the seeds for better access to finance and resources.')}
                        </blockquote>
                    </div>
                </section>

                {/* Get Started Today Section */}
                <section id="get-started-section">
                    <GetStartedTodaySection />
                </section>
            </div>

            {micError && (
                <div className="text-red-500 text-center p-4">
                    {micError}
                </div>
            )}

            {/* Voice Command Button */}
            <button
                onClick={isListening ? stopListening : startListening}
                className="fixed bottom-10 right-10 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
            >
                <FaMicrophone size={30} />
            </button>
>>>>>>> f00b114 (final by joshua)
        </>
    );
}

export default LandingPage;
