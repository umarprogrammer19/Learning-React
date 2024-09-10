import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="bg-black h-16 flex justify-around items-center">
                <div className="flex h-full items-center">
                    <h1 className="text-3xl text-yellow-500">UF-Coder</h1>
                </div>
                <div className="flex h-full gap-4 items-center text-yellow-500">
                    <Link to="/" className="list-none text-xl">Home</Link>
                    <Link to="about" className="list-none text-xl">About</Link>
                    <Link to="contact" className="list-none text-xl">Contact</Link>
                    <Link to="services" className="list-none text-xl">Services</Link>
                    <Link to="skills" className="list-none text-xl">Skills</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;