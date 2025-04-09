"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../api/BASE_URL"

export default function SignupPage() {
    const [fullname, setfullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!fullname || !email || !password || !confirmPassword) return setError("Please Enter All Feilds");

            if (password.length < 8) return setError("Password Must be atleast 8 character long");

            if (!(password === confirmPassword)) return setError("Password Not Matched");

            const payload = {
                fullname,
                email,
                password
            }

            const res = await fetch(`${BASE_URL}/v1/signup`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json()
            if (!res.ok) return setError(data.message);

            setError(null);
            navigate("/login")
        } catch (error) {
            console.warn(error.message);
            setError(error.message)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                    <div className="mb-6 text-center">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Create an account</h1>
                        <p className="text-gray-600">Join us today and start your journey</p>
                    </div>

                    {/* Decorative element */}
                    <div className="flex justify-center mb-8">
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-600 rounded-full"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                autoComplete="name"
                                value={fullname}
                                onChange={(e) => setfullname(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 outline-none"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 outline-none"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full px-4 py-3 rounded-lg border ${error ? "border-red-500" : "border-gray-300"
                                    } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 outline-none`}
                                placeholder="Create a password"
                            />
                            <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long</p>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                autoComplete="new-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={`w-full px-4 py-3 rounded-lg border ${error ? "border-red-500" : "border-gray-300"
                                    } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 outline-none`}
                                placeholder="Confirm your password"
                            />
                            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                            >
                                Create Account
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Bottom decorative banner */}
                <div className="h-2 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            </div>
        </div>
    )
}
