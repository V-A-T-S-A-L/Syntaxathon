import React from "react";
import Spline from '@splinetool/react-spline';
import { Link } from "react-router-dom";
import '../App.css';

function LandingPage() {
    return (
        <>
            <div className="model flex justify-around items-center w-full h-screen px-4 mt-10">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-gray-800 font-serif text-left">INCREDIBLE</h1>
                    <p className="text-xl text-gray-600 mt-4 text-left text-wrap">AI-Powered Credit Scoring System for the Unreserved and Farmers</p>
                </div>
                <div className="w-auto h-125 scale-125 rounded-lg overflow-hidden mt-12">
                    <Spline scene="https://prod.spline.design/zyubwNwX4c1oX1oh/scene.splinecode" />
                </div>
            </div>

            <div className="mt-16 px-4 mb-10">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Why Choose Our Software?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart AI-Powered Scoring</h3>
                            <p className="text-gray-600">Our AI model analyzes financial data to provide accurate credit scores for farmers and unreserved communities.</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy to Use</h3>
                            <p className="text-gray-600">With an intuitive user interface, managing credit scores has never been easier.</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Customizable Solutions</h3>
                            <p className="text-gray-600">Our system offers customizable options to fit your specific needs and requirements.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quote Section */}
            <div className="quote flex flex-col justify-start items-center py-5 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold text-center text-white italic">
                    "In the heart of agriculture, AI can sow the seeds for better access to finance and resources."
                </h2>
            </div>

            {/* Get Started Today Section */}
            <div className="get-started mt-16 px-4 mb-10">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Get Started Today</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Income / Weather Prediction</h3>
                            <p className="text-gray-600">AI-powered forecasts for weather conditions and crop yield, helping farmers estimate income and plan efficiently.</p>
                            <div className="mt-4">
                                <Link to={'predict-income&weather'}><button className="flex mx-auto hover:-translate-y-1 px-6 py-2 bg-black text-white rounded-full">Learn More&nbsp;&nbsp;<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                                </svg>
                                </button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Agricultural Needs Prediction</h3>
                            <p className="text-gray-600">Predicts fertilizer, water, seed, pesticide, and nutrient requirements for your crops based on land size, crop type, etc.</p>
                            <div className="mt-4">
                                <Link to={'agricultural-needs'}><button className="flex mx-auto hover:-translate-y-1 px-6 py-2 bg-black text-white rounded-full">Learn More&nbsp;&nbsp;<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                                </svg>
                                </button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Crop Price Forecasting</h3>
                            <p className="text-gray-600">Predict the price of crops based on market trends.</p>
                            <div className="mt-4">
                                <Link to={'crop-price-forecast'}><button className="flex mx-auto hover:-translate-y-1 px-6 py-2 bg-black text-white rounded-full">Learn More&nbsp;&nbsp;<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                                </svg>
                                </button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Financial Advisory</h3>
                            <p className="text-gray-600">Receive tailored loan recommendations based on your financial health and business needs.</p>
                            <div className="mt-4">
                                <Link to={'financial-advisory'}><button className="flex mx-auto hover:-translate-y-1 px-6 py-2 bg-black text-white rounded-full">Learn More&nbsp;&nbsp;<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                                </svg>
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
