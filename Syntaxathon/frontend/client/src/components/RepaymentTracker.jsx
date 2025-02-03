import { useState } from "react"

const RepaymentTracker = () => {
  const [loans, setLoans] = useState([
    { id: 1, amount: 10000, remainingBalance: 8000, nextPaymentDue: "2023-07-15", interestRate: 5 },
    { id: 2, amount: 5000, remainingBalance: 3000, nextPaymentDue: "2023-07-30", interestRate: 4.5 },
  ])

  const makePayment = (id, amount) => {
    setLoans((prevLoans) =>
      prevLoans.map((loan) =>
        loan.id === id
          ? {
              ...loan,
              remainingBalance: Math.max(0, loan.remainingBalance - amount),
              nextPaymentDue: getNextPaymentDate(loan.nextPaymentDue),
            }
          : loan,
      ),
    )
  }

  const getNextPaymentDate = (currentDate) => {
    const date = new Date(currentDate)
    date.setMonth(date.getMonth() + 1)
    return date.toISOString().split("T")[0]
  }

  const calculateTotalOwed = () => {
    return loans.reduce((total, loan) => total + loan.remainingBalance, 0)
  }

  return (
    <div className="repayment-tracker">
      <h2>Loan Repayment Tracker</h2>
      <div className="total-owed">
        <h3>Total Amount Owed</h3>
        <p>${calculateTotalOwed().toFixed(2)}</p>
      </div>
      {loans.map((loan) => (
        <div key={loan.id} className="loan-item">
          <h3>Loan #{loan.id}</h3>
          <div className="loan-details">
            <p>Original Amount: ${loan.amount}</p>
            <p>Remaining Balance: ${loan.remainingBalance}</p>
            <p>Next Payment Due: {loan.nextPaymentDue}</p>
            <p>Interest Rate: {loan.interestRate}%</p>
          </div>
          <div className="payment-actions">
            <button onClick={() => makePayment(loan.id, 100)}>Pay $100</button>
            <button onClick={() => makePayment(loan.id, 500)}>Pay $500</button>
            <button onClick={() => makePayment(loan.id, 1000)}>Pay $1000</button>
          </div>
        </div>
      ))}
      <style jsx>{`
        .repayment-tracker {
          max-width: 600px;
          margin: 0 auto;
        }
        h2 {
          color: #2e7d32;
          margin-bottom: 20px;
          text-align: center;
        }
        .total-owed {
          background-color: #e8f5e9;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          margin-bottom: 20px;
        }
        .total-owed h3 {
          color: #2e7d32;
          margin-bottom: 10px;
        }
        .total-owed p {
          font-size: 24px;
          font-weight: bold;
          color: #1b5e20;
        }
        .loan-item {
          background-color: #f1f8e9;
          padding: 20px;
          margin-bottom: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .loan-item h3 {
          color: #2e7d32;
          margin-bottom: 15px;
        }
        .loan-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 15px;
        }
        .payment-actions {
          display: flex;
          justify-content: space-between;
        }
        button {
          padding: 10px 15px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  )
}

export default RepaymentTracker

