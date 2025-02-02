import React from 'react';
import '../App.css';

function Navbar() {
    return (
        <header className="navbar shadow p-4 absolute top-0 left-0 overflow-hidden">
            <div className="container mx-auto flex justify-between items-center w-screen">
                <div className="flex items-center justify-between w-full">
                    <h2 className='left-0'>INcreDible.ia</h2>
                    <div className='px-5'>
                        <a className='px-5 text-gray-200' href='#'>About</a>
                        <a className='px-5 text-gray-200' href='#'>Contact</a>
                        <a className='px-5 text-gray-200' href='#'>Login</a>
                        <a className='px-5 text-gray-200' href='#'>Signup</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
