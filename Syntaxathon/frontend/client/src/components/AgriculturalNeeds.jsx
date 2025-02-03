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

