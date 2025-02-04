<<<<<<< HEAD
"use client"

import { useState, useEffect } from "react"
import { Loader2, Sprout, Droplet, Wheat, Bug, FlaskRoundIcon as Flask } from "lucide-react"

const AgriculturalNeeds = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    landSize: "",
    cropType: "",
    soilType: "",
    season: "",
  })

  const [prediction, setPrediction] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePredict = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setPrediction({
      fertilizer: `${formData.landSize * 2} kg`,
      water: `${formData.landSize * 500} liters`,
      seeds: `${formData.landSize * 10} kg`,
      pesticide: `${formData.landSize * 1.5} liters`,
      nutrients: `${formData.landSize * 5} kg`,
    })
    setIsLoading(false)
  }

  return (
    <div className=" min-w-screen min-h-[calc(100vh-56px)] bg-gradient-to-b from-green-100 to-green-200 p-6 flex items-center justify-center mt-12">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-green-600 p-6">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Agricultural Needs Prediction</h2>
          <p className="text-green-100 text-center">Plan your farming resources efficiently</p>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="landSize">
                Land Size (acres)
              </label>
              <input
                type="number"
                id="landSize"
                name="landSize"
                value={formData.landSize}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="Enter land size"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="cropType">
                Crop Type
              </label>
              <input
                type="text"
                id="cropType"
                name="cropType"
                value={formData.cropType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="Enter crop type"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="soilType">
                Soil Type
              </label>
              <select
                id="soilType"
                name="soilType"
                value={formData.soilType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              >
                <option value="">Select Soil Type</option>
                <option value="sandy">Sandy</option>
                <option value="loamy">Loamy</option>
                <option value="clayey">Clayey</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="season">
                Season
              </label>
              <select
                id="season"
                name="season"
                value={formData.season}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              >
                <option value="">Select Season</option>
                <option value="summer">Summer</option>
                <option value="winter">Winter</option>
                <option value="monsoon">Monsoon</option>
              </select>
            </div>
          </div>

          <button
            onClick={handlePredict}
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading || !formData.landSize || !formData.cropType || !formData.soilType || !formData.season}
          >
            {isLoading ? (
              <>
                <Loader2 className="inline-block mr-2 h-5 w-5 animate-spin" />
                Predicting...
              </>
            ) : (
              "Predict Requirements"
            )}
          </button>
        </div>

        {prediction && (
          <div className="p-6 bg-gradient-to-b from-green-50 to-green-100 border-t-2 border-green-200">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Predicted Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PredictionItem
                icon={<Sprout className="text-black" />}
                label="Fertilizer"
                value={prediction.fertilizer}
              />
              <PredictionItem icon={<Droplet className="text-black" />} label="Water" value={prediction.water} />
              <PredictionItem icon={<Wheat className="text-black" />} label="Seeds" value={prediction.seeds} />
              <PredictionItem icon={<Bug className="text-black" />} label="Pesticide" value={prediction.pesticide} />
              <PredictionItem icon={<Flask className="text-black" />} label="Nutrients" value={prediction.nutrients} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const PredictionItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow">
    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">{icon}</div>
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
    </div>
  </div>
)

export default AgriculturalNeeds

=======
"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GoogleGenerativeAI } from '@google/generative-ai';

const AgriculturalNeeds = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) {
			navigate("/login");
		}
		window.scrollTo(0, 0);
	}, [navigate]);

	const [formData, setFormData] = useState({
		landSize: "",
		cropType: "",
		soilType: "",
		season: "",
	});

	const [prediction, setPrediction] = useState({
		fertilizer: "",
		water: "",
		seeds: "",
		pesticide: "",
		nutrients: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const calculatePrediction = async (formData) => {
		try {
			const genAI = new GoogleGenerativeAI("AIzaSyDluNAD8Ytq_1OkvIP83HUvtPWB023xPJ8");
			const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

			const chatSession = model.startChat({
				generationConfig: {
					temperature: 1,
					topP: 0.95,
					topK: 64,
					maxOutputTokens: 8192,
					responseMimeType: "text/plain",
				},
			});

			const example = {
				fertilizer: "1200",
				water: "1500",
				seeds: "500",
				pesticide: "100",
				nutrients: "250"
			};

			const query = `Based on the following details, suggest the predicted requirements of fertilizer, water, seeds, pesticide, nutrients in following format ${example} for farming: Land Size: ${formData.landSize} acres, Crop Type: ${formData.cropType}, Soil Type: ${formData.soilType}, Season: ${formData.season}. Don't speak more just give numerical values for the appropriate fields.`;

			const result = await chatSession.sendMessage(query);
			const responseText = await result.response.text();

			console.warn(responseText);

			const parsedResponse = {
				fertilizer: responseText.match(/"fertilizer":\s*(\d+)/)?.[1],
				water: responseText.match(/"water":\s*(\d+)/)?.[1],
				seeds: responseText.match(/"seeds":\s*(\d+)/)?.[1],
				pesticide: responseText.match(/"pesticide":\s*(\d+)/)?.[1],
				nutrients: responseText.match(/"nutrients":\s*(\d+)/)?.[1],
			};
			
			setPrediction(parsedResponse);
			return parsedResponse;
		} catch (error) {
			console.error("Error with Gemini AI:", error);
			return null;
		}
	};

	const handlePredict = async () => {
		setIsLoading(true);
		const token = localStorage.getItem("token");

		try {
			// Call the Gemini API to get predictions
			const predictionData = await calculatePrediction(formData);
			if (!predictionData) {
				console.error("Failed to fetch prediction data");
				return;
			}

			// Send prediction data along with the form data to the backend
			const response = await fetch("http://localhost:5000/api/agriculture-needs", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					...formData,
					prediction: predictionData, // Send the generated prediction data from Gemini
				}),
			});

			const data = await response.json();
		} catch (error) {
			console.error("Error:", error);
		} finally {
			setIsLoading(false);
		}
	};


	return (
		<div className="min-w-screen min-h-[calc(100vh-56px)] bg-gradient-to-b from-green-100 to-green-200 p-6 flex items-center justify-center mt-12">
			<div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
				<div className="bg-green-600 p-6">
					<h2 className="text-3xl font-bold text-white mb-2 text-center">Agricultural Needs Prediction</h2>
					<p className="text-green-100 text-center">Plan your farming resources efficiently</p>
				</div>

				<div className="p-6 space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="block text-gray-700 font-medium mb-2" htmlFor="landSize">
								Land Size (acres)
							</label>
							<input
								type="number"
								id="landSize"
								name="landSize"
								value={formData.landSize}
								onChange={handleChange}
								className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
								placeholder="Enter land size"
							/>
						</div>

						<div>
							<label className="block text-gray-700 font-medium mb-2" htmlFor="cropType">
								Crop Type
							</label>
							<input
								type="text"
								id="cropType"
								name="cropType"
								value={formData.cropType}
								onChange={handleChange}
								className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
								placeholder="Enter crop type"
							/>
						</div>

						<div>
							<label className="block text-gray-700 font-medium mb-2" htmlFor="soilType">
								Soil Type
							</label>
							<select
								id="soilType"
								name="soilType"
								value={formData.soilType}
								onChange={handleChange}
								className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
							>
								<option value="">Select Soil Type</option>
								<option value="sandy">Sandy</option>
								<option value="loamy">Loamy</option>
								<option value="clayey">Clayey</option>
							</select>
						</div>

						<div>
							<label className="block text-gray-700 font-medium mb-2" htmlFor="season">
								Season
							</label>
							<select
								id="season"
								name="season"
								value={formData.season}
								onChange={handleChange}
								className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
							>
								<option value="">Select Season</option>
								<option value="summer">Summer</option>
								<option value="winter">Winter</option>
								<option value="monsoon">Monsoon</option>
							</select>
						</div>
					</div>

					<button
						onClick={handlePredict}
						className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
						disabled={isLoading}
					>
						{isLoading ? <Loader2 className="animate-spin" /> : "Predict Requirements"}
					</button>

					{prediction && (
						<div className="mt-6 text-black">
							<h3 className="text-lg font-semibold">Predicted Requirements:</h3>
							<ul className="space-y-2 mt-2">
								<li>Fertilizer: {prediction.fertilizer} kg</li>
								<li>Water: {prediction.water} litres</li>
								<li>Seeds: {prediction.seeds} kg</li>
								<li>Pesticide: {prediction.pesticide} litres</li>
								<li>Nutrients: {prediction.nutrients} kg</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default AgriculturalNeeds;
>>>>>>> f00b114 (final by joshua)
