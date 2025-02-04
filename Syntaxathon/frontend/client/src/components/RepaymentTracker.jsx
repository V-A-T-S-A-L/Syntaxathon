import { useState, useEffect } from "react";

const RepaymentTracker = () => {
	const [loans, setLoans] = useState([]);
	const [newLoan, setNewLoan] = useState({ amount: "", interestRate: "" });

	const token = localStorage.getItem("token");

	// Fetch loans from the API
	useEffect(() => {
		const fetchLoans = async () => {
			try {
				const response = await fetch("http://localhost:5000/api/loans/list", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",  // Optional: Specify content type
						"Authorization": `Bearer ${token}`  // Send token in Authorization header
					},
				});
				const data = await response.json();
				console.log("Fetched data:", data); // Check the structure of the data

				if (Array.isArray(data)) {
					setLoans(data);
				} else {
					console.error("Received data is not an array");
					setLoans([]); // Set an empty array if data isn't as expected
				}
			} catch (error) {
				console.error("Error fetching loans:", error);
			}
		};
		fetchLoans();
	}, []);


	// Handle making a payment
	const makePayment = async (loanId, amount) => {
		try {
			const response = await fetch("http://localhost:5000/api/loans/pay", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`
				},
				body: JSON.stringify({ loanId, amount }),
			});

			if (response.ok) {
				// Update loan after successful payment
				const updatedLoan = await response.json();
				setLoans((prevLoans) =>
					prevLoans.map((loan) =>
						loan.id === updatedLoan.id ? updatedLoan : loan
					)
				);
				location.reload();
			} else {
				console.error("Error making payment");
			}
		} catch (error) {
			console.error("Error making payment:", error);
		}
	};

	// Handle adding a new loan
	const addLoan = async () => {
		if (!newLoan.amount || !newLoan.interestRate) return;

		try {
			const response = await fetch("http://localhost:5000/api/loans/create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`
				},
				body: JSON.stringify(newLoan),
			});

			if (response.ok) {
				const createdLoan = await response.json();
				setLoans((prevLoans) => [...prevLoans, createdLoan]);
				setNewLoan({ amount: "", interestRate: "" });
				location.reload();
			} else {
				console.error("Error adding loan");
			}
		} catch (error) {
			console.error("Error adding loan:", error);
		}
	};

	// Calculate the total owed
	const calculateTotalOwed = () => {
		if (!Array.isArray(loans)) {
			console.error("Loans is not an array", loans);
			return 0;
		}

		return loans.reduce((total, loan) => total + loan.remainingBalance, 0);
	};

	return (
		<div className="repayment-tracker">
			<h2>Loan Repayment Tracker</h2>
			<div className="total-owed">
				<h3>Total Amount Owed</h3>
				<p>₹{calculateTotalOwed().toFixed(2)}</p>
			</div>
			{loans.map((loan, idx) => (
				<div key={idx} className="loan-item">
					<h3>Loan #{idx + 1}</h3>
					<div className="loan-details">
						<p>Original Amount: ₹{loan.amount}</p>
						<p>Remaining Balance: ₹{loan.remainingBalance}</p>
						<p>Next Payment Due: {new Date(loan.nextPaymentDue).toLocaleDateString()}</p>
						<p>Interest Rate: {loan.interestRate}%</p>
					</div>
					<div className="payment-actions">
						<button onClick={() => makePayment(loan._id, 100)}>Pay ₹100</button>
						<button onClick={() => makePayment(loan._id, 500)}>Pay ₹500</button>
						<button onClick={() => makePayment(loan._id, 1000)}>Pay ₹1000</button>
					</div>
				</div>
			))}
			<div className="add-loan">
				<h3>Add New Loan</h3>
				<input
					type="number"
					placeholder="Amount"
					value={newLoan.amount}
					onChange={(e) => setNewLoan({ ...newLoan, amount: e.target.value })}
				/>
				<input
					type="number"
					placeholder="Interest Rate"
					value={newLoan.interestRate}
					onChange={(e) => setNewLoan({ ...newLoan, interestRate: e.target.value })}
				/>
				<button onClick={addLoan}>Add Loan</button>
			</div>
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
        .add-loan {
          margin-top: 20px;
          padding: 20px;
          background-color: #e8f5e9;
          border-radius: 8px;
          text-align: center;
        }
        .add-loan input {
          margin: 5px;
          padding: 10px;
          width: calc(50% - 12px);
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .add-loan button {
          padding: 10px 15px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
          margin-top: 10px;
        }
        .add-loan button:hover {
          background-color: #45a049;
        }
      `}</style>
		</div>
	);
};

export default RepaymentTracker;
