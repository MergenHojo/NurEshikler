import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profilePic from '../assets/b2.jpg'; // Kendi resim yolunuzu ekleyin

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    const handleOutsideClick = (e) => {
        if (e.target.id === 'overlay') {
            setIsOpen(false);
        }
    };

    return (
        <nav className="bg-gray-800  p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="text-white text-2xl font-bold">
                    Nur eşikler
                </Link>

                <div className="flex">
                    <div className="hidden md:flex space-x-2">
                        <Link
                            to="/about"
                            className={`${currentPath === '/about'
                                ? 'bg-gray-950 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                } rounded-md px-3 py-2 text-lg font-medium`}
                        >
                            Çagalar
                        </Link>
                        <Link
                            to="/projects"
                            className={`${currentPath === '/projects'
                                ? 'bg-gray-950 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                } rounded-md px-3 py-2 text-lg font-medium`}
                        >
                            Býujeteriýa
                        </Link>
                        <Link
                            to="/contacts"
                            className={`${currentPath === '/contacts'
                                ? 'bg-gray-950 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                } rounded-md px-3 py-2 text-lg font-medium`}
                        >
                            Materiallar
                        </Link>
                        <Link
                            to="/blog"
                            className={`${currentPath === '/blog'
                                ? 'bg-gray-950 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                } rounded-md px-3 py-2 text-lg font-medium`}
                        >
                            Gyňaçlar
                        </Link>
                        <Link
                            to="/achievements"
                            className={`${currentPath === '/achievements'
                                ? 'bg-gray-950 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                } rounded-md px-3 py-2 text-lg font-medium`}
                        >
                            Satyjylar
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:flex items-center ml-4">
                        <img src={profilePic} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
                    </div>
                </div>

                {/* Sidebar */}
                {isOpen && (
                    <div
                        id="overlay"
                        className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end"
                        onClick={handleOutsideClick}
                    >
                        <div className="w-64 bg-gray-900 p-4 flex flex-col" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-between border-b w-full">
                                <img src={profilePic} alt="Profile" className="w-20 h-20 rounded-full object-cover" />
                                <button onClick={() => setIsOpen(false)} className="text-white mb-11 self-end focus:outline-none">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>

                            <Link
                                to="/about"
                                className="text-white py-2 text-lg font-medium hover:bg-gray-700 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Men Barada
                            </Link>
                            <Link
                                to="/projects"
                                className="text-white py-2 text-lg font-medium hover:bg-gray-700 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Işlerim
                            </Link>
                            <Link
                                to="/contacts"
                                className="text-white py-2 text-lg font-medium hover:bg-gray-700 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Habarlaşmak
                            </Link>
                            <Link
                                to="/blog"
                                className="text-white py-2 text-lg font-medium hover:bg-gray-700 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                to="/achievements"
                                className="text-white py-2 text-lg font-medium hover:bg-gray-700 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Gazananlarym
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;