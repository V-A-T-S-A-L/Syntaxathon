import { useState, useEffect } from "react"
import LoanEligibility from "./LoanEligibility"
import RepaymentTracker from "./RepaymentTracker"
import AgricultureSchemes from "./AgricultureSchemes"
import PayAsYouEarn from "./PayAsYouEarn"
import FinancialEducation from "./FinancialEducation"

const Finance = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [activeTab, setActiveTab] = useState("eligibility")

    const tabs = [
        { id: "eligibility", label: "Loan Eligibility", icon: "📊" },
        { id: "repayment", label: "Repayment Tracker", icon: "💰" },
        { id: "schemes", label: "Agri Schemes", icon: "🌾" },
        { id: "paye", label: "Pay As You Earn", icon: "💸" },
        { id: "education", label: "Financial Education", icon: "📚" },
    ]

    return (
        <div className="farmer-dashboard min-w-screen text-black">
            <header className="mt-24">
                <h1>INCREDIBLE Finance</h1>
                <p>Smart Microfinance for Modern Farmers</p>
            </header>
            <div className="nav-container py-3">
                <nav>
                    {tabs.map((tab) => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={activeTab === tab.id ? "active" : ""}>
                            <span className="icon">{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>
            <main>
                {activeTab === "eligibility" && <LoanEligibility />}
                {activeTab === "repayment" && <RepaymentTracker />}
                {activeTab === "schemes" && <AgricultureSchemes />}
                {activeTab === "paye" && <PayAsYouEarn />}
                {activeTab === "education" && <FinancialEducation />}
            </main>
            <style jsx>{`
        .farmer-dashboard {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Arial', sans-serif;
        }
        header {
          text-align: center;
          margin-bottom: 30px;
        }
        h1 {
          color: #2e7d32;
          font-size: 2.5em;
          margin-bottom: 10px;
        }
        nav {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          background-color: #e8f5e9;
          color: #2e7d32;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1em;
          width: 180px;
          height: 50px;
        }
        button:hover, button.active {
          background-color: #2e7d32;
          color: white;
        }
        .icon {
          font-size: 1.2em;
        }
        .nav-container {
          overflow-x: auto;
          margin-bottom: 30px;
        }
        main {
          background-color: #f1f8e9;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
        </div>
    )
}

export default Finance

