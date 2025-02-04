import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
<<<<<<< HEAD
import backgroundImage from "../assets/farm.png";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
=======
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/farm.png";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        phone: "",
        password: "",
    });

>>>>>>> f00b114 (final by joshua)
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

<<<<<<< HEAD
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError("Please enter both email and password.");
            return;
        }
        setError("");
        console.log("Login successful:", formData);
=======
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.phone || !formData.password) {
            setError("Please enter both phone number and password.");
            return;
        }
        setError("");

        try {
            const response = await axios.post("http://localhost:5000/api/farmers/login", formData);
            
            // Store the JWT token in localStorage
            localStorage.setItem("token", response.data.token);
            
            navigate("/"); // Redirect to the homepage
            location.reload();
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.error || "Login failed! Please check your credentials.");
        }
>>>>>>> f00b114 (final by joshua)
    };

    return (
        <div
            className="min-h-screen min-w-screen flex items-center justify-center p-6"
            style={{
                backgroundImage: `url(${backgroundImage})`,
<<<<<<< HEAD
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",      // Ensures the image covers the entire screen
                backgroundPosition: "center", // Centers the image
                width: "100vw",               // Full width
                height: "100vh",              // Full height
=======
                backgroundSize: "cover",
                backgroundPosition: "center",
>>>>>>> f00b114 (final by joshua)
            }}
        >
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
                <h2 className="text-2xl font-bold text-green-700 text-center mb-6">Login</h2>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
<<<<<<< HEAD
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
=======
                    {/* Phone Field */}
                    <div>
                        <label className="block text-gray-700 font-medium">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md text-black"
                            placeholder="Enter your phone number"
                            required
>>>>>>> f00b114 (final by joshua)
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
<<<<<<< HEAD
                        />
                        <button
                            type="button"
                            className="absolute right-0 top-7 text-gray-600"
=======
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-9 text-gray-600"
>>>>>>> f00b114 (final by joshua)
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* Login Button */}
                    <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
                        Login
                    </button>
                </form>

                {/* Register Link */}
                <p className="text-sm text-center text-gray-600 mt-4">
<<<<<<< HEAD
                    Don't have an account? <a href="/signup" className="text-green-500 font-semibold">Sign up</a>
=======
                    Dont have an account? <a href="/signup" className="text-green-500 font-semibold">Sign up</a>
>>>>>>> f00b114 (final by joshua)
                </p>
            </div>
        </div>
    );
};

export default Login;
<<<<<<< HEAD
=======
    
>>>>>>> f00b114 (final by joshua)
