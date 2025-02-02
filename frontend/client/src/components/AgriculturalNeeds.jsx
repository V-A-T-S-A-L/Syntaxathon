import { useState , useEffect } from "react";

const AgriculturalNeeds = () => {
    useEffect(() => {
		window.scrollTo(0, 0); // Scrolls to the top when the page loads
	}, []);

    const [formData, setFormData] = useState({
        landSize: "",
        cropType: "",
        soilType: "",
        season: "",
    });

    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePredict = () => {
        // Dummy prediction logic (Replace with API call)
        setPrediction({
            fertilizer: `${formData.landSize * 2} kg`,
            water: `${formData.landSize * 500} liters`,
            seeds: `${formData.landSize * 10} kg`,
            pesticide: `${formData.landSize * 1.5} liters`,
            nutrients: `${formData.landSize * 5} kg`,
        });
    };

    return (
        <div className="min-h-screen min-w-screen mt-10 flex flex-col items-center justify-center bg-green-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
                <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">Agricultural Needs Prediction</h2>
                
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Land Size (acres)</label>
                        <input 
                            type="number" 
                            name="landSize" 
                            value={formData.landSize} 
                            onChange={handleChange} 
                            className="w-full p-2 border rounded-md text-black"
                            placeholder="Enter land size"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Crop Type</label>
                        <input 
                            type="text" 
                            name="cropType" 
                            value={formData.cropType} 
                            onChange={handleChange} 
                            className="w-full p-2 border rounded-md text-black"
                            placeholder="Enter crop type"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Soil Type</label>
                        <select 
                            name="soilType" 
                            value={formData.soilType} 
                            onChange={handleChange} 
                            className="w-full p-2 border rounded-md text-black"
                        >
                            <option value="">Select Soil Type</option>
                            <option value="sandy">Sandy</option>
                            <option value="loamy">Loamy</option>
                            <option value="clayey">Clayey</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Season</label>
                        <select 
                            name="season" 
                            value={formData.season} 
                            onChange={handleChange} 
                            className="w-full p-2 border rounded-md text-black"
                        >
                            <option value="">Select Season</option>
                            <option value="summer">Summer</option>
                            <option value="winter">Winter</option>
                            <option value="monsoon">Monsoon</option>
                        </select>
                    </div>

                    <button 
                        onClick={handlePredict} 
                        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                    >
                        Predict Requirements
                    </button>
                </div>

                {prediction && (
                    <div className="mt-6 p-4 bg-green-200 rounded-lg">
                        <h3 className="text-lg font-bold text-green-700 mb-2">Predicted Requirements</h3>
                        <p className="text-gray-700"><strong className="text-black">Fertilizer:</strong> {prediction.fertilizer}</p>
                        <p className="text-gray-700"><strong className="text-black">Water:</strong> {prediction.water}</p>
                        <p className="text-gray-700"><strong className="text-black">Seeds:</strong> {prediction.seeds}</p>
                        <p className="text-gray-700"><strong className="text-black">Pesticide:</strong> {prediction.pesticide}</p>
                        <p className="text-gray-700"><strong className="text-black">Nutrients:</strong> {prediction.nutrients}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AgriculturalNeeds;
