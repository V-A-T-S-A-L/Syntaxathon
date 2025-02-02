import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import backgroundImage from "../assets/farm.png";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError("Please enter both email and password.");
            return;
        }
        setError("");
        console.log("Login successful:", formData);
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
                <h2 className="text-2xl font-bold text-green-700 text-center mb-6">Login</h2>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
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
                    Don't have an account? <a href="/signup" className="text-green-500 font-semibold">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
