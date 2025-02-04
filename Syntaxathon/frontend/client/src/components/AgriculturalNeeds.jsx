import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { Sprout, Droplet, Wheat, Bug, FlaskConical } from "lucide-react"
import backgroundImage from "../assets/agriculturalneeds.jpg";

const AgriculturalNeeds = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      navigate("/login")
    }
    window.scrollTo(0, 0)
  }, [navigate])

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

  const calculatePrediction = async (formData) => {
    try {
      const genAI = new GoogleGenerativeAI("AIzaSyDluNAD8Ytq_1OkvIP83HUvtPWB023xPJ8")
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

      const chatSession = model.startChat({
        generationConfig: {
          temperature: 1,
          topP: 0.95,
          topK: 64,
          maxOutputTokens: 8192,
          responseMimeType: "text/plain",
        },
      })

      const example = {
        fertilizer: "1200",
        water: "1500",
        seeds: "500",
        pesticide: "100",
        nutrients: "250",
      }

      const query = `Based on the following details, suggest the predicted requirements of fertilizer, water, seeds, pesticide, nutrients in following format ${example} for farming: Land Size: ${formData.landSize} acres, Crop Type: ${formData.cropType}, Soil Type: ${formData.soilType}, Season: ${formData.season}. Don't speak more just give numerical values for the appropriate fields.`

      const result = await chatSession.sendMessage(query)
      const responseText = await result.response.text()

      console.warn(responseText)

      const parsedResponse = {
        fertilizer: responseText.match(/"fertilizer":\s*(\d+)/)?.[1] + " kg",
        water: responseText.match(/"water":\s*(\d+)/)?.[1] + " liters",
        seeds: responseText.match(/"seeds":\s*(\d+)/)?.[1] + " kg",
        pesticide: responseText.match(/"pesticide":\s*(\d+)/)?.[1] + " liters",
        nutrients: responseText.match(/"nutrients":\s*(\d+)/)?.[1] + " kg",
      }

      setPrediction(parsedResponse)
      return parsedResponse
    } catch (error) {
      console.error("Error with Gemini AI:", error)
      return null
    }
  }

  const handlePredict = async () => {
    setIsLoading(true)
    const token = localStorage.getItem("token")

    try {
      const predictionData = await calculatePrediction(formData)
      if (!predictionData) {
        console.error("Failed to fetch prediction data")
        return
      }

      await fetch("http://localhost:5000/api/agriculture-needs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          prediction: predictionData,
        }),
      })
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen min-w-screen mt-12 py-12 px-4 sm:px-6 lg:px-8"
		style={{
						backgroundImage: `url(${backgroundImage})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
					>
      <div className="max-w-4xl mx-auto ">
        <div className="border-2 border-green-400 shadow-xl rounded-lg overflow-hidden bg-white shadow-md">
          <div className="bg-green-600 px-6 py-8 text-center shadow-md">
            <h2 className="text-3xl font-extrabold text-white">Agricultural Needs Prediction</h2>
            <p className="mt-2 text-green-100">Plan your farming resources efficiently</p>
          </div>

          <div className="p-6 sm:p-10 space-y-8 text-black shadow-md">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 ">
              <InputField
                label="Land Size (acres)"
                name="landSize"
                type="number"
                value={formData.landSize}
                handleChange={handleChange}
              />
              <InputField
                label="Crop Type"
                name="cropType"
                type="text"
                value={formData.cropType}
                handleChange={handleChange}
              />
              <SelectField
                label="Soil Type"
                name="soilType"
                value={formData.soilType}
                handleChange={handleChange}
                options={["Sandy", "Loamy", "Clayey"]}
              />
              <SelectField
                label="Season"
                name="season"
                value={formData.season}
                handleChange={handleChange}
                options={["Summer", "Winter", "Monsoon"]}
              />
            </div>

            <button
              onClick={handlePredict}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading || !formData.landSize || !formData.cropType || !formData.soilType || !formData.season}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Predicting...
                </div>
              ) : (
                "Predict Requirements"
              )}
            </button>
          </div>

          {prediction && (
            <div className="bg-green-50 p-6 sm:p-10 border-t-2 border-green-100">
              <h3 className="text-2xl font-bold text-green-800 mb-6">Predicted Requirements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <PredictionItem icon={<SproutIcon />} label="Fertilizer" value={prediction.fertilizer} />
                <PredictionItem icon={<DropletIcon />} label="Water" value={prediction.water} />
                <PredictionItem icon={<WheatIcon />} label="Seeds" value={prediction.seeds} />
                <PredictionItem icon={<BugIcon />} label="Pesticide" value={prediction.pesticide} />
                <PredictionItem icon={<FlaskIcon />} label="Nutrients" value={prediction.nutrients} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const InputField = ({ label, name, type, value, handleChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={name}>
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition duration-300 ease-in-out"
    />
  </div>
)

const SelectField = ({ label, name, value, handleChange, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={name}>
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition duration-300 ease-in-out"
    >
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option} value={option.toLowerCase()}>
          {option}
        </option>
      ))}
    </select>
  </div>
)

const PredictionItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg">
    <div className="flex-shrink-0 text-green-600">{icon}</div>
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
    </div>
  </div>
)

// Custom SVG icons
const SproutIcon = () => <Sprout className="h-6 w-6" />
const DropletIcon = () => <Droplet className="h-6 w-6" />
const WheatIcon = () => <Wheat className="h-6 w-6" />
const BugIcon = () => <Bug className="h-6 w-6" />
const FlaskIcon = () => <FlaskConical className="h-6 w-6" />

export default AgriculturalNeeds

