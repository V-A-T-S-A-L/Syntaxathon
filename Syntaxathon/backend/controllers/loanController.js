const Loan = require("../models/Loan");
const jwt = require("jsonwebtoken");

// Helper function to get next payment date
const getNextPaymentDate = (currentDate) => {
    const date = new Date(currentDate);
    date.setMonth(date.getMonth() + 1);
    return date;
};

// Create a new loan
exports.createLoan = async (req, res) => {
    try {
        // Extract token from headers
        const token = req.header("Authorization").replace("Bearer ", "");
        if (!token) return res.status(401).json({ message: "No token provided" });

        // Decode token to get farmer ID
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const farmerId = decoded.id;

        const { amount, interestRate } = req.body;

        const newLoan = new Loan({
            farmerId,
            amount,
            remainingBalance: amount,
            nextPaymentDue: getNextPaymentDate(new Date()),
            interestRate
        });

        console.log(newLoan);

        await newLoan.save();
        res.status(201).json({ message: "Loan created successfully", loan: newLoan });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Make a payment on an existing loan
exports.makePayment = async (req, res) => {
    try {
        // Extract token from headers
        const token = req.header("Authorization").replace("Bearer ", "");
        if (!token) return res.status(401).json({ message: "No token provided" });

        // Decode token to get farmer ID
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const farmerId = decoded.id;

        const { loanId, amount } = req.body;

        const loan = await Loan.findOne({ _id: loanId, farmerId });
        if (!loan) {
            return res.status(404).json({ message: "Loan not found" });
        }

        loan.remainingBalance = Math.max(0, loan.remainingBalance - amount);
        if (loan.remainingBalance > 0) {
            loan.nextPaymentDue = getNextPaymentDate(loan.nextPaymentDue);
        }

        await loan.save();
        res.json({ message: "Payment successful", loan });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// List all loans for the logged-in farmer
exports.getLoans = async (req, res) => {
    try {
        // Extract token from headers
        const token = req.header("Authorization").replace("Bearer ", "");
        if (!token) return res.status(401).json({ message: "No token provided" });

        // Decode token to get farmer ID
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const farmerId = decoded.id;

        const loans = await Loan.find({ farmerId });
        res.json(loans);

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
