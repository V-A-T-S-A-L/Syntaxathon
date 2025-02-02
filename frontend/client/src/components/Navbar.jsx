import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className="navbar shadow p-4 absolute top-0 left-0 overflow-hidden">
            <div className="container mx-auto flex justify-between items-center w-screen">
                <div className="flex items-center justify-between w-full">
                    <Link to={'/'}><h2 className='left-0'>Agrify</h2></Link>
                    <div className='px-5'>
                        <a className='px-5 text-gray-200' href='#'>About</a>
                        <a className='px-5 text-gray-200' href='#'>Contact</a>
                        <Link to={'login'} className='px-5 text-gray-200'>Login</Link>
                        <Link to={'signup'} className='px-5 text-gray-200'>Signup</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
