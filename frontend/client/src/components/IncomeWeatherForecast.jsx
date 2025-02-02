import { useState, useEffect } from "react";

const IncomeWeatherForecast = () => {
    const [activeTab, setActiveTab] = useState("income");
	useEffect(() => {
		window.scrollTo(0, 0); // Scrolls to the top when the page loads
	}, []);

    return (
        <div className="min-h-screen mt-28 min-w-screen  p-6 flex flex-col items-center">
            {/* Tabs */}
            <div className="flex space-x-4 mb-6 bg-green-100 p-2 rounded-lg">
                <button
                    onClick={() => setActiveTab("income")}
                    className={`px-6 py-2 rounded-md font-semibold ${
                        activeTab === "income" ? "model text-white" : "bg-green-200 text-green-800"
                    }`}
                >
                    Income Prediction
                </button>
                <button
                    onClick={() => setActiveTab("weather")}
                    className={`px-6 py-2 rounded-md font-semibold ${
                        activeTab === "weather" ? "model text-white" : "bg-green-200 text-green-800"
                    }`}
                >
                    Weather Forecast
                </button>
            </div>

            {/* Content */}
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                {activeTab === "income" ? <IncomeForm /> : <WeatherForecast />}
            </div>
        </div>
    );
};

// Income Prediction Form
const IncomeForm = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">Income Prediction</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium">Crop Type</label>
                    <input type="text" className="w-full p-2 border text-black rounded-md" placeholder="Enter crop type" />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Land Area (in acres)</label>
                    <input type="number" className="w-full p-2 border text-black rounded-md" placeholder="Enter land size" />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Expected Yield (kg)</label>
                    <input type="number" className="w-full p-2 border text-black rounded-md" placeholder="Enter expected yield" />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Market Price (per kg)</label>
                    <input type="number" className="w-full p-2 border text-black rounded-md" placeholder="Enter market price" />
                </div>
                <button className="model w-full text-white py-2 rounded-md mt-2 hover:bg-green-600">
                    Predict Income
                </button>
            </form>
        </div>
    );
};

// Weather Forecast Cards
const WeatherForecast = () => {
    const weatherData = [
        { day: "Monday", temp: "28°C", condition: "Sunny" },
        { day: "Tuesday", temp: "26°C", condition: "Cloudy" },
        { day: "Wednesday", temp: "29°C", condition: "Partly Cloudy" },
        { day: "Thursday", temp: "27°C", condition: "Rainy" },
        { day: "Friday", temp: "30°C", condition: "Sunny" },
        { day: "Saturday", temp: "31°C", condition: "Sunny" },
        { day: "Sunday", temp: "25°C", condition: "Thunderstorms" },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">7-Day Weather Forecast</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {weatherData.map((day, index) => (
                    <div key={index} className="model p-4 rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-semibold">{day.day}</h3>
                        <p className="text-green-100 font-medium">{day.temp}</p>
                        <p className="text-gray-600">{day.condition}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IncomeWeatherForecast;
