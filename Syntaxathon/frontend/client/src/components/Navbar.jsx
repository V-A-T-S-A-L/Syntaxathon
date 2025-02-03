import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaUser, FaSignInAlt, FaBars, FaTimes } from 'react-icons/fa';
import agrify from '../assets/agrify.png';

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if JWT token is present in localStorage
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Set isAuthenticated to true if token exists
  }, []);

  const handleLogout = () => {
    // Remove token and set authentication state to false
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login'); // Redirect to login page after logout
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar p-2 min-w-full absolute top-0 left-0 w-full backdrop-blur-3xl bg-gradient-to-b from-[#1b3a28] to-[#0f2b1e] bg-opacity-60 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <Link to={"/"}>
              <img
                src={agrify}
                alt="Logo"
                className="h-10 mr-3 transition-transform transform hover:scale-110 hover:rotate-12 duration-500 ease-in-out"
              />
            </Link>
          </div>

          {/* Desktop Navbar (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to={"/"}
              className="flex items-center text-lg text-gray-200 hover:text-green-400 transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <FaHome className="mr-2 text-xl transition-transform duration-300 ease-in-out hover:scale-125" />
              Home
            </Link>
            <Link
              to={"about"}
              className="flex items-center text-lg text-gray-200 hover:text-green-400 transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <FaInfoCircle className="mr-2 text-xl transition-transform duration-300 ease-in-out hover:scale-125" />
              About
            </Link>
            <Link
              to={"contact-us"}
              className="flex items-center text-lg text-gray-200 hover:text-green-400 transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <FaEnvelope className="mr-2 text-xl transition-transform duration-300 ease-in-out hover:scale-125" />
              Contact
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to={'/profile'}
                  className="flex items-center text-lg text-gray-200 hover:text-green-400 transition-transform duration-300 ease-in-out transform hover:scale-110"
                >
                  <FaUser className="mr-2 text-xl" />
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-lg text-red-500 hover:text-green-400 transition-transform duration-300 ease-in-out transform hover:scale-110"
                >
                  <FaSignInAlt className="mr-2 text-xl" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to={'/login'}
                  className="flex items-center text-lg text-gray-200 hover:text-green-400 transition-transform duration-300 ease-in-out transform hover:scale-110"
                >
                  <FaSignInAlt className="mr-2 text-xl" />
                  Login
                </Link>
                <Link
                  to={'/signup'}
                  className="flex items-center text-lg text-gray-200 hover:text-green-400 transition-transform duration-300 ease-in-out transform hover:scale-110"
                >
                  <FaUser className="mr-2 text-xl" />
                  Signup
                </Link>
              </>
            )}
          </div>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {menuOpen ? (
                <FaTimes className="text-white text-3xl" />
              ) : (
                <FaBars className="text-white text-3xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar (Hidden on Desktop) */}
      <div
        className={`md:hidden bg-[#1b3a28] w-full absolute top-16 left-0 flex flex-col items-center space-y-6 py-6 ${menuOpen ? 'block' : 'hidden'}`}
      >
        <Link
          to={"/"}
          className="flex items-center text-lg text-gray-200 hover:text-green-400 transition-transform duration-300 ease-in-out transform hover:scale-110"
          onClick={() => setMenuOpen(false)} // Close menu when item is clicked
        >
          <FaHome className="mr-2 text-xl" />
          Home
        </Link>
        <Link
          to={"about"}
          className="flex items-center text-lg text-gray-200 hover:text-green-400 transition-transform duration-300 ease-in-out transform hover:scale-110"
          onClick={() => setMenuOpen(false)} // Close menu when item is clicked
        >
          <FaInfoCircle className="mr-2 text-xl" />
          About
        </Link>
        <Link
          to={"contact-us"}
          className="flex items-center text-lg text-gray-200 hover:text-green-400 transition-transform duration-300 ease-in-out transform hover:scale-110"
          onClick={() => setMenuOpen(false)} // Close menu when item is clicked
        >
          <FaEnvelope className="mr-2 text-xl" />
          Contact
        </Link>
        {isAuthenticated ? (
          <>
            <Link
              to={'/profile'}
              className="flex items-center text-lg text-gray-200 hover:text-green-400 transition-transform duration-300 ease-in-out transform hover:scale-110"
              onClick={() => setMenuOpen(false)} // Close menu when item is clicked
            >
              <FaUser className="mr-2 text-xl" />
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center text-lg text-red-500 hover:text-green-400 transition-transform duration-300 ease-in-out transform hover:scale-110"
              onClick={() => setMenuOpen(false)} // Close menu when item is clicked
            >
              <FaSignInAlt className="mr-2 text-xl" />
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to={'/login'}
              className="flex items-center text-lg text-gray-200 hover:text-green-400 transition-transform duration-300 ease-in-out transform hover:scale-110"
              onClick={() => setMenuOpen(false)} // Close menu when item is clicked
            >
              <FaSignInAlt className="mr-2 text-xl" />
              Login
            </Link>
            <Link
              to={'/signup'}
              className="flex items-center text-lg text-gray-200 hover:text-green-400 transition-transform duration-300 ease-in-out transform hover:scale-110"
              onClick={() => setMenuOpen(false)} // Close menu when item is clicked
            >
              <FaUser className="mr-2 text-xl" />
              Signup
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
