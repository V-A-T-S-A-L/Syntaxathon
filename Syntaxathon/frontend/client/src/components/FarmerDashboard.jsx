import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data (in a real app, this would come from your backend)
const sampleInventoryData = {
  farmType: "Mixed Crop and Dairy",
  landSize: 250,
  crops: [
    {
      name: "Wheat", yields: [
        { year: 2020, yield: 100 },
        { year: 2021, yield: 80 },
        { year: 2022, yield: 100 },
        { year: 2023, yield: 120 },
        { year: 2024, yield: 135 }
      ]
    },
    {
      name: "Corn", yields: [
        { year: 2020, yield: 70 },
        { year: 2021, yield: 80 },
        { year: 2022, yield: 85 },
        { year: 2023, yield: 95 },
        { year: 2024, yield: 110 }
      ]
    },
    {
      name: "Soybeans", yields: [
        { year: 2020, yield: 120 },
        { year: 2021, yield: 90 },
        { year: 2022, yield: 75 },
        { year: 2023, yield: 90 },
        { year: 2024, yield: 105 }
      ]
    }
  ],
  livestock: [
    { name: "Dairy Cows", count: 45 },
    { name: "Chickens", count: 200 },
  ],
  machinery: [
    { name: "Tractor", count: 3 },
    { name: "Harvester", count: 1 },
  ],
  monthlyFinance: {
    revenue: [
      { month: "January", amount: 45000 },
      { month: "February", amount: 52000 },
      { month: "March", amount: 48000 },
      { month: "April", amount: 55000 },
    ],
    expenses: [
      { month: "January", amount: 35000 },
      { month: "February", amount: 40000 },
      { month: "March", amount: 38000 },
      { month: "April", amount: 42000 },
    ]
  }
};

// Prepare data for line chart
const prepareCropYieldData = (crops) => {
  const years = [...new Set(crops.flatMap(crop => crop.yields.map(y => y.year)))].sort();

  return years.map(year => {
    const yearData = { year };
    crops.forEach(crop => {
      const yieldForYear = crop.yields.find(y => y.year === year);
      yearData[crop.name] = yieldForYear ? yieldForYear.yield : 0;
    });
    return yearData;
  });
};

const transformFinanceData = (finance) => {
  return finance.revenue.map((rev) => {
    const expenseEntry = finance.expenses.find((exp) => exp.month === rev.month);
    return {
      month: rev.month,
      Revenue: rev.amount,
      Expenses: expenseEntry ? expenseEntry.amount : 0, // Default to 0 if missing
    };
  });
};

const FarmerDashboard = () => {
  const cropYieldData = prepareCropYieldData(sampleInventoryData.crops);
  const financeData = transformFinanceData(sampleInventoryData.monthlyFinance);

  return (
    <div className="min-h-screen bg-green-50 p-6 min-w-screen mt-16">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">
          Farm Management Dashboard
        </h1>

        {/* Top Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.768-.152-1.507-.44-2.192M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.768.152-1.507.44-2.192m0 0a5.002 5.002 0 019.12 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div>
                <p className="text-green-800 font-semibold">Farm Type</p>
                <p className="text-green-700">{sampleInventoryData.farmType}</p>
              </div>
            </div>
          </div>

          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-green-800 font-semibold">Land Size</p>
                <p className="text-green-700">{sampleInventoryData.landSize} acres</p>
              </div>
            </div>
          </div>

          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <div>
                <p className="text-green-800 font-semibold">Total Crop Yield</p>
                <p className="text-green-700">
                  {sampleInventoryData.crops.reduce((sum, crop) =>
                    sum + crop.yields[crop.yields.length - 1].yield, 0)} tons
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-green-800 font-semibold">Net Income</p>
                <p className="text-green-700">
                  ${sampleInventoryData.monthlyFinance.revenue.reduce((sum, rev) => sum + rev.amount, 0) -
                    sampleInventoryData.monthlyFinance.expenses.reduce((sum, exp) => sum + exp.amount, 0)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Crop Yield Chart */}
        <div className='flex justify-between'>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 w-5/12">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Crop Yield Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={cropYieldData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="year" stroke="#4a9c57" />
                <YAxis stroke="#4a9c57" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#e8f5e9',
                    borderColor: '#4caf50'
                  }}
                />
                <Legend />
                {sampleInventoryData.crops.map((crop, index) => (
                  <Line
                    key={crop.name}
                    type="monotone"
                    dataKey={crop.name}
                    name={crop.name}
                    stroke={`hsl(${120 + index * 30}, 70%, 50%)`}
                    strokeWidth={3}
                    dot={{ r: 5 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6 w-5/12">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Monthly Finance Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={financeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Revenue" stroke="#4CAF50" strokeWidth={2} />
                <Line type="monotone" dataKey="Expenses" stroke="#F44336" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Existing Inventory Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Crops Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Crop Inventory</h2>
            <div className="space-y-3">
              {sampleInventoryData.crops.map((crop, index) => (
                <div
                  key={index}
                  className="bg-green-50 p-3 rounded-lg flex justify-between items-center"
                >
                  <span className="text-green-700 font-medium">{crop.name}</span>
                  <span className="text-green-600">
                    {crop.yields[crop.yields.length - 1].yield} tons
                    <span className="text-sm ml-2 text-green-500">
                      ({crop.yields[crop.yields.length - 1].year})
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Livestock Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Livestock Inventory</h2>
            <div className="space-y-3">
              {sampleInventoryData.livestock.map((animal, index) => (
                <div
                  key={index}
                  className="bg-green-50 p-3 rounded-lg flex justify-between items-center"
                >
                  <span className="text-green-700 font-medium">{animal.name}</span>
                  <span className="text-green-600">{animal.count} head</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;