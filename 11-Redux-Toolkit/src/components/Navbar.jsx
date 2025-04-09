"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="bg-white shadow-md">
            {/* Top gradient line */}
            <div className="h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        {/* Logo/Brand */}
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <div className="h-8 w-8 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
                                T
                            </div>
                            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                TaskFlow
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link
                                to="/"
                                className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                Dashboard
                            </Link>
                            <Link
                                to="/tasks"
                                className="border-transparent text-gray-500 hover:border-indigo-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                            >
                                Tasks
                            </Link>
                            <Link
                                to="/projects"
                                className="border-transparent text-gray-500 hover:border-indigo-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                            >
                                Projects
                            </Link>
                            <Link
                                to="/calendar"
                                className="border-transparent text-gray-500 hover:border-indigo-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                            >
                                Calendar
                            </Link>
                        </div>
                    </div>

                    {/* Right side - User section */}
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        {/* Notification bell */}
                        <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                            <span className="sr-only">View notifications</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                        </button>

                        {/* Profile dropdown */}
                        <div className="ml-3 relative">
                            <div>
                                <button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="sr-only">Open user menu</span>
                                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-medium">
                                        JD
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <Link
                            to="/"
                            className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                        >
                            Dashboard
                        </Link>
                        <Link
                            to="/tasks"
                            className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-indigo-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors"
                        >
                            Tasks
                        </Link>
                        <Link
                            to="/projects"
                            className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-indigo-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors"
                        >
                            Projects
                        </Link>
                        <Link
                            to="/calendar"
                            className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-indigo-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors"
                        >
                            Calendar
                        </Link>
                    </div>

                    {/* Mobile profile section */}
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-medium">
                                    JD
                                </div>
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-gray-800">John Doe</div>
                                <div className="text-sm font-medium text-gray-500">john@example.com</div>
                            </div>
                            <button className="ml-auto p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                                <span className="sr-only">View notifications</span>
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-3 space-y-1">
                            <Link
                                to="/profile"
                                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
                            >
                                Your Profile
                            </Link>
                            <Link
                                to="/settings"
                                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
                            >
                                Settings
                            </Link>
                            <Link
                                to="/logout"
                                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
                            >
                                Sign out
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
