<<<<<<< HEAD
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import backgroundImage from "../assets/farm.png";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setError("All fields are required.");
            return;
        }
=======
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/farm.png";

const Signup = () => {
    const navigate = useNavigate();

    // Redirect if already logged in
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/");
        }
    }, [navigate]);

    const [formData, setFormData] = useState({
        name: "", phone: "", email: "", password: "", confirmPassword: "",
        district: "", state: "", aadharOrKisaanId: "", age: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (Object.values(formData).some(value => value === "")) {
            setError("All fields are required.");
            return;
        }
        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }
>>>>>>> f00b114 (final by joshua)
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
<<<<<<< HEAD
        setError("");
        console.log("Signup successful:", formData);
    };

    return (
        <div 
            className="min-h-screen min-w-screen flex items-center justify-center p-6"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",      // Ensures the image covers the entire screen
                backgroundPosition: "center", // Centers the image
                width: "100vw",               // Full width
                height: "100vh",              // Full height
            }}
            
        >
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
=======

        setError("");
        setLoading(true);

        try {
            const submitData = { ...formData }; // Avoid modifying state directly
            delete submitData.confirmPassword; // Remove confirmPassword before sending

            const response = await axios.post("http://localhost:5000/api/farmers/signup", submitData);

            if (response.status === 201) {
                alert("Signup successful!");
                navigate("/login");
            } else {
                setError("Signup failed. Please try again.");
            }
        } catch (err) {
            console.error("Signup Error:", err);
            setError(err.response?.data?.error || "Signup failed! Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen min-w-screen flex items-center justify-center p-6 bg-gray-100"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
>>>>>>> f00b114 (final by joshua)
                <h2 className="text-2xl font-bold text-green-700 text-center mb-6">Sign Up</h2>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
<<<<<<< HEAD
                    {/* Name Field */}
                    <div>
                        <label className="block text-gray-700 font-medium">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md text-black"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md text-black"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md pr-10 text-black"
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            className="absolute right-0 top-7 text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                        >
=======
                    <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required className="w-full p-2 border rounded-md text-black" autoComplete="off" />
                    <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required className="w-full p-2 border rounded-md text-black" autoComplete="off" />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded-md text-black" autoComplete="off" />
                    <input type="text" name="district" placeholder="District" onChange={handleChange} required className="w-full p-2 border rounded-md text-black" />
                    <input type="text" name="state" placeholder="State" onChange={handleChange} required className="w-full p-2 border rounded-md text-black" />
                    <input type="text" name="aadharOrKisaanId" placeholder="Aadhar/Kisaan ID" onChange={handleChange} required className="w-full p-2 border rounded-md text-black" autoComplete="off" />
                    <input type="number" name="age" placeholder="Age" min="18" onChange={handleChange} required className="w-full p-2 border rounded-md text-black" />

                    {/* Password Fields */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-md pr-10 text-black"
                            autoComplete="new-password"
                        />
                        <button type="button" className="absolute right-3 top-3 text-gray-600" onClick={() => setShowPassword(!showPassword)}>
>>>>>>> f00b114 (final by joshua)
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

<<<<<<< HEAD
                    {/* Confirm Password Field */}
                    <div className="relative">
                        <label className="block text-gray-700 font-medium">Confirm Password</label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md pr-10 text-black"
                            placeholder="Confirm your password"
                        />
                        <button
                            type="button"
                            className="absolute right-0 top-7 text-gray-600"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
=======
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-md pr-10 text-black"
                            autoComplete="new-password"
                        />
                        <button type="button" className="absolute right-3 top-3 text-gray-600" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
>>>>>>> f00b114 (final by joshua)
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

<<<<<<< HEAD
                    {/* Signup Button */}
                    <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
                        Sign Up
                    </button>
                </form>

                {/* Login Link */}
=======
                    <button
                        type="submit"
                        className={`w-full text-white py-2 rounded-md transition duration-200 ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
                        disabled={loading}
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>

>>>>>>> f00b114 (final by joshua)
                <p className="text-sm text-center text-gray-600 mt-4">
                    Already have an account? <a href="/login" className="text-green-500 font-semibold">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
