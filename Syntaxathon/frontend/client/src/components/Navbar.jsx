import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import agrify from '../assets/agrify.png';

function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
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

    return (
        <header className="navbar shadow p-4 absolute top-0 left-0 overflow-hidden">
            <div className="container mx-auto flex justify-between items-center w-screen">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                        <Link to={"/"}>
                            <img src={agrify} alt="Logo" className="h-8 mr-3" />
                        </Link>
                    </div>
                    <div className='px-5'>
                        <a className='px-5 text-gray-200' href='#'>About</a>
                        <Link to={"contact-us"} className='px-5 text-gray-200'>Contact</Link>
                        {isAuthenticated ? (
                            <>
                                <Link to={'/profile'} className='px-5 text-gray-200'>Profile</Link>
                                <button onClick={handleLogout} className='px-5 text-red-500'>Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to={'/login'} className='px-5 text-gray-200'>Login</Link>
                                <Link to={'/signup'} className='px-5 text-gray-200'>Signup</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
