import { useState, useEffect } from "react"
import { FaSun, FaCloud, FaCloudSun, FaCloudRain, FaBolt, FaSnowflake, FaSmog, FaWind, FaLeaf } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const IncomeWeatherForecast = () => {
	const [activeTab, setActiveTab] = useState("income");
	const navigate = useNavigate();

	useEffect(() => {
		// Check for JWT in localStorage
		const token = localStorage.getItem("token");
		if (!token) {
			// Redirect to login if no JWT token found
			navigate("/login");
		}

		window.scrollTo(0, 0);
	}, [navigate]);

	return (
		<div className="mt-14 min-w-screen min-h-screen bg-gradient-to-b from-green-100 to-green-200 p-6 flex flex-col items-center">
			<h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Farm Helper</h1>
			<div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
				<div className="flex justify-center mb-6">
					<div className="bg-green-100 p-2 rounded-lg inline-flex">
						<TabButton
							active={activeTab === "income"}
							onClick={() => setActiveTab("income")}
							icon={<FaLeaf className="mr-2" />}
						>
							Income Prediction
						</TabButton>
						<div className="w-4"></div>
						<TabButton
							active={activeTab === "weather"}
							onClick={() => setActiveTab("weather")}
							icon={<FaSun className="mr-2" />}
						>
							Weather Forecast
						</TabButton>
					</div>
				</div>
				{activeTab === "income" ? <IncomeForm /> : <WeatherForecast />}
			</div>
		</div>
	)
}

const TabButton = ({ active, onClick, children, icon }) => (
	<button
		onClick={onClick}
		className={`flex items-center px-6 py-2 rounded-md font-semibold transition-colors duration-200 ${active ? "bg-green-500 text-white" : "bg-green-200 text-green-800 hover:bg-green-300"
			}`}
	>
		{icon}
		{children}
	</button>
)

const IncomeForm = () => {
	const [prediction, setPrediction] = useState(null);
	const [cropType, setCropType] = useState("");
	const [landArea, setLandArea] = useState("");
	const [expectedYield, setExpectedYield] = useState("");
	const [marketPrice, setMarketPrice] = useState("");


	const handleSubmit = async (e) => {
		e.preventDefault();

		const token = localStorage.getItem("token");
		if (!token) {
			alert("User not logged in");
			return;
		}

		const formData = {
			cropType,
			landArea,
			expectedYield,
			marketPrice,
			predictedIncome: Math.floor(Math.random() * 10000) + 5000 // Mock prediction
		};

		try {
			const response = await fetch("http://localhost:5000/api/predict-income", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`
				},
				body: JSON.stringify(formData)
			});

			const data = await response.json();
			if (response.ok) {
				setPrediction(data.data.predictedIncome);
			} else {
				alert(data.message);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	// Varshilshah
	return (
		<div>
			<h2 className="text-2xl font-bold text-green-700 mb-4">Income Prediction</h2>
			<form onSubmit={handleSubmit} className="space-y-4 text-black">
				<InputField
					label="Crop Type"
					type="text"
					placeholder="e.g., Wheat, Rice, Corn"
					value={cropType}
					onChange={(e) => setCropType(e.target.value)}
				/>
				<InputField
					label="Land Area (in acres)"
					type="number"
					placeholder="Enter land size"
					value={landArea}
					onChange={(e) => setLandArea(e.target.value)}
				/>
				<InputField
					label="Expected Yield (kg)"
					type="number"
					placeholder="Enter expected yield"
					value={expectedYield}
					onChange={(e) => setExpectedYield(e.target.value)}
				/>
				<InputField
					label="Market Price (per kg)"
					type="number"
					placeholder="Enter market price"
					value={marketPrice}
					onChange={(e) => setMarketPrice(e.target.value)}
				/>

				<button className="w-full bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition-colors duration-200">
					Predict Income
				</button>
			</form>
			{prediction && (
				<div className="mt-6 p-4 bg-green-100 rounded-lg">
					<h3 className="text-xl font-semibold text-green-800">Predicted Income</h3>
					<p className="text-3xl font-bold text-green-600">₹{prediction.toLocaleString()}</p>
				</div>
			)}
		</div>
	)
}

const InputField = ({ label, type, placeholder, value, onChange }) => (
	<div>
		<label className="block text-gray-700 font-medium mb-2">{label}</label>
		<input
			type={type}
			className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	</div>
);

const WeatherForecast = () => {
	const weatherData = [
		{ day: "Monday", temp: 28, condition: "Sunny" },
		{ day: "Tuesday", temp: 26, condition: "Cloudy" },
		{ day: "Wednesday", temp: 29, condition: "Partly Cloudy" },
		{ day: "Thursday", temp: 27, condition: "Rainy" },
		{ day: "Friday", temp: 30, condition: "Clear" },
		{ day: "Saturday", temp: 31, condition: "Hot" },
		{ day: "Sunday", temp: 25, condition: "Thunderstorms" },
		{ day: "Monday", temp: 22, condition: "Windy" },
		{ day: "Tuesday", temp: 18, condition: "Foggy" },
		{ day: "Wednesday", temp: 0, condition: "Snowy" },
		{ day: "Thursday", temp: 33, condition: "Heatwave" },
		{ day: "Friday", temp: 20, condition: "Overcast" },
	]

	const getWeatherIcon = (condition) => {
		switch (condition.toLowerCase()) {
			case "sunny":
			case "clear":
			case "hot":
			case "heatwave":
				return <FaSun className="text-yellow-500 text-4xl" />
			case "cloudy":
			case "overcast":
				return <FaCloud className="text-gray-500 text-4xl" />
			case "partly cloudy":
				return <FaCloudSun className="text-orange-400 text-4xl" />
			case "rainy":
				return <FaCloudRain className="text-blue-500 text-4xl" />
			case "thunderstorms":
				return <FaBolt className="text-yellow-600 text-4xl" />
			case "snowy":
				return <FaSnowflake className="text-blue-300 text-4xl" />
			case "foggy":
				return <FaSmog className="text-gray-400 text-4xl" />
			case "windy":
				return <FaWind className="text-blue-400 text-4xl" />
			default:
				return <FaSun className="text-yellow-500 text-4xl" />
		}
	}

	const getWeatherBackground = (condition) => {
		switch (condition.toLowerCase()) {
			case "sunny":
				return "bg-[url('https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')]"
			case "cloudy":
				return "bg-[url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1051&q=80')]"
			case "partly cloudy":
				return "bg-[url('https://images.unsplash.com/photo-1595865749889-b37a43c4eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')]"
			case "rainy":
				return "bg-[url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80')]"
			case "thunderstorms":
				return "bg-[url('https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80')]"
			case "clear":
				return "bg-[url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')]"
			case "hot":
			case "heatwave":
				return "bg-[url('https://images.unsplash.com/photo-1504370805625-d32c54b16100?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')]"
			case "windy":
				return "bg-[url('https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')]"
			case "foggy":
				return "bg-[url('https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80')]"
			case "snowy":
				return "bg-[url('https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1208&q=80')]"
			case "overcast":
				return "bg-[url('https://images.unsplash.com/photo-1594492215832-8b4ad73ff538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')]"
			default:
				return "bg-white"
		}
	}

	return (
		<div>
			<h2 className="text-2xl font-bold text-green-700 mb-4">Weather Forecast</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
				{weatherData.map((day, index) => (
					<div
						key={index}
						className={`p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200 bg-cover bg-center ${getWeatherBackground(day.condition)}`}
					>
						<div className="bg-white bg-opacity-80 p-2 rounded-lg">
							<h3 className="text-lg font-semibold text-green-800">{day.day}</h3>
							<div className="my-3">{getWeatherIcon(day.condition)}</div>
							<p className="text-2xl font-bold text-green-600">{day.temp}°C</p>
							<p className="text-gray-800">{day.condition}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default IncomeWeatherForecast

