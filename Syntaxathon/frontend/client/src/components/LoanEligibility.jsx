import { useState } from "react"

const LoanEligibility = () => {
  const [formData, setFormData] = useState({
    farmSize: "",
    annualRevenue: "",
    creditScore: "",
    existingLoans: "",
    cropType: "",
  })

  const [eligibility, setEligibility] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const checkEligibility = (e) => {
    e.preventDefault()
    const { farmSize, annualRevenue, creditScore, existingLoans, cropType } = formData

    // Enhanced eligibility logic
    let score = 0
    if (Number.parseInt(farmSize) > 10) score += 20
    if (Number.parseInt(annualRevenue) > 50000) score += 25
    if (Number.parseInt(creditScore) > 650) score += 30
    if (Number.parseInt(existingLoans) < 2) score += 15
    if (["corn", "wheat", "soybeans"].includes(cropType)) score += 10

    let message, color
    if (score >= 80) {
      message = "Congratulations! You are eligible for our premium loan package."
      color = "#4caf50"
    } else if (score >= 60) {
      message = "You are eligible for a standard loan. Contact our loan officer for more details."
      color = "#ffa000"
    } else {
      message =
        "We're sorry, but you don't meet our current eligibility criteria. Consider improving your credit score or diversifying your crops."
      color = "#f44336"
    }

    setEligibility({ message, color })
  }

  return (
    <div className="loan-eligibility">
      <h2>Check Loan Eligibility</h2>
      <form onSubmit={checkEligibility}>
        <div className="form-group">
          <label htmlFor="farmSize">Farm Size (acres):</label>
          <input
            type="number"
            id="farmSize"
            name="farmSize"
            value={formData.farmSize}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="annualRevenue">Annual Revenue ($):</label>
          <input
            type="number"
            id="annualRevenue"
            name="annualRevenue"
            value={formData.annualRevenue}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="creditScore">Credit Score:</label>
          <input
            type="number"
            id="creditScore"
            name="creditScore"
            value={formData.creditScore}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="existingLoans">Number of Existing Loans:</label>
          <input
            type="number"
            id="existingLoans"
            name="existingLoans"
            value={formData.existingLoans}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cropType">Primary Crop:</label>
          <select id="cropType" name="cropType" value={formData.cropType} onChange={handleInputChange} required>
            <option value="">Select a crop</option>
            <option value="corn">Corn</option>
            <option value="wheat">Wheat</option>
            <option value="soybeans">Soybeans</option>
            <option value="cotton">Cotton</option>
            <option value="rice">Rice</option>
          </select>
        </div>
        <button type="submit">Check Eligibility</button>
      </form>
      {eligibility && (
        <div className="eligibility-result" style={{ backgroundColor: eligibility.color }}>
          {eligibility.message}
        </div>
      )}
      <style jsx>{`
        .loan-eligibility {
          max-width: 500px;
          margin: 0 auto;
        }
        h2 {
          color: #2e7d32;
          margin-bottom: 20px;
          text-align: center;
        }
        .form-group {
          margin-bottom: 20px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          color: #1b5e20;
        }
        input, select {
          width: 100%;
          padding: 10px;
          border: 1px solid #4caf50;
          border-radius: 4px;
          font-size: 16px;
        }
        button {
          display: block;
          width: 100%;
          padding: 12px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 18px;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #45a049;
        }
        .eligibility-result {
          margin-top: 20px;
          padding: 15px;
          border-radius: 4px;
          color: white;
          text-align: center;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

export default LoanEligibility

