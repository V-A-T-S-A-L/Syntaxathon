import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import agrify from '../assets/agrify.png';

function Navbar() {
    return (
        <header className="navbar shadow p-4 absolute top-0 left-0 overflow-hidden">
            <div className="container mx-auto flex justify-between items-center w-screen">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                        <Link to={"/"}><img src={agrify} alt="Logo" className="h-8 mr-3" /></Link>
                    </div>
                    <div className='px-5'>
                        <a className='px-5 text-gray-200' href='#'>About</a>
                        <Link to={"contact-us"} className='px-5 text-gray-200' href='#'>Contact</Link>
                        <Link to={'login'} className='px-5 text-gray-200'>Login</Link>
                        <Link to={'signup'} className='px-5 text-gray-200'>Signup</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
