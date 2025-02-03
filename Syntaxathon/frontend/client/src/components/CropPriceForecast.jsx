import { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const crops = ["Wheat", "Corn", "Soybeans", "Rice"]
const timeframes = ["1 Month", "3 Months", "6 Months", "1 Year"]

const generateMockData = (dataPoints) => {
    return Array.from({ length: dataPoints }, () => Math.floor(Math.random() * 100) + 50)
}

export default function CropPriceForecast() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [selectedCrop, setSelectedCrop] = useState(crops[0])
    const [selectedTimeframe, setSelectedTimeframe] = useState(timeframes[0])

    const data = {
        labels: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
        datasets: [
            {
                label: `${selectedCrop} Price Forecast`,
                data: generateMockData(12),
                borderColor: "#2ecc71",
                backgroundColor: "rgba(46, 204, 113, 0.2)",
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: `${selectedCrop} Price Forecast - ${selectedTimeframe}`,
            },
        },
    }

    return (
        <div className="min-w-screen min-h-screen bg-gradient-to-b from-green-100 to-green-200 py-12 px-4 sm:px-6 lg:px-8 mt-16">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Crop Price Forecast</h1>
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <form className="mb-6 flex flex-wrap gap-4">
                        <div className="flex-1 min-w-[200px]">
                            <label htmlFor="crop" className="block text-sm font-medium text-green-700 mb-1">
                                Select Crop
                            </label>
                            <select
                                id="crop"
                                value={selectedCrop}
                                onChange={(e) => setSelectedCrop(e.target.value)}
                                className="text-black w-full p-2 border border-green-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            >
                                {crops.map((crop) => (
                                    <option key={crop} value={crop}>
                                        {crop}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex-1 min-w-[200px]">
                            <label htmlFor="timeframe" className="block text-sm font-medium text-green-700 mb-1">
                                Select Timeframe
                            </label>
                            <select
                                id="timeframe"
                                value={selectedTimeframe}
                                onChange={(e) => setSelectedTimeframe(e.target.value)}
                                className="text-black w-full p-2 border border-green-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            >
                                {timeframes.map((timeframe) => (
                                    <option key={timeframe} value={timeframe}>
                                        {timeframe}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </form>
                    <div className="bg-green-100 p-4 rounded-lg">
                        <Line options={options} data={data} />
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 text-left">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Forecast Insights</h2>
                    <p className="text-gray-800 mb-2">
                        The chart above shows the projected price trends for {selectedCrop} over the next {selectedTimeframe}.
                    </p>
                    <p className="text-gray-700 mb-2">Factors influencing this forecast include:</p>
                    <ul className="list-disc list-inside text-gray-600 px-4">
                        <li>Historical price data</li>
                        <li>Seasonal trends</li>
                        <li>Global supply and demand</li>
                        <li>Weather patterns</li>
                        <li>Economic indicators</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

