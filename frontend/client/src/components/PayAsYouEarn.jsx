import { useState } from "react"

const PayAsYouEarn = () => {
  const [income, setIncome] = useState("")
  const [loanAmount, setLoanAmount] = useState("")
  const [loanTerm, setLoanTerm] = useState("12")
  const [paymentAmount, setPaymentAmount] = useState(null)

  const calculatePayment = (e) => {
    e.preventDefault()
    const incomeNum = Number.parseFloat(income)
    const loanNum = Number.parseFloat(loanAmount)
    const termNum = Number.parseInt(loanTerm)

    // Enhanced calculation logic
    const interestRate = 0.05 // 5% annual interest rate
    const monthlyInterestRate = interestRate / 12
    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, termNum)
    const denominator = Math.pow(1 + monthlyInterestRate, termNum) - 1
    const monthlyPayment = loanNum * (numerator / denominator)

    // Adjust based on income (simplified version)
    const adjustedPayment = Math.min(monthlyPayment, incomeNum * 0.3)

    setPaymentAmount(adjustedPayment.toFixed(2))
  }

  return (
    <div className="pay-as-you-earn">
      <h2>Pay As You Earn Calculator</h2>
      <form onSubmit={calculatePayment}>
        <div className="form-group">
          <label htmlFor="income">Monthly Income ($):</label>
          <input type="number" id="income" value={income} onChange={(e) => setIncome(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount ($):</label>
          <input
            type="number"
            id="loanAmount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="loanTerm">Loan Term (months):</label>
          <select id="loanTerm" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)}>
            <option value="12">12 months</option>
            <option value="24">24 months</option>
            <option value="36">36 months</option>
            <option value="48">48 months</option>
            <option value="60">60 months</option>
          </select>
        </div>
        <button type="submit">Calculate Payment</button>
      </form>
      {paymentAmount && (
        <div className="payment-result">
          <h3>Recommended Monthly Payment:</h3>
          <p>${paymentAmount}</p>
          <small>This amount is adjusted based on your income and loan terms.</small>
        </div>
      )}
      <style jsx>{`
        .pay-as-you-earn {
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
        .payment-result {
          margin-top: 20px;
          padding: 20px;
          background-color: #e8f5e9;
          border-radius: 8px;
          text-align: center;
        }
        .payment-result h3 {
          color: #2e7d32;
          margin-bottom: 10px;
        }
        .payment-result p {
          font-size: 24px;
          font-weight: bold;
          color: #1b5e20;
          margin-bottom: 10px;
        }
        .payment-result small {
          color: #4caf50;
        }
      `}</style>
    </div>
  )
}

export default PayAsYouEarn

