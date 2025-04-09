"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../api/BASE_URL"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!email || !password) return setError("Invalid Email Or Password");

            const payload = {
                email,
                password
            }

            const res = await fetch(`${BASE_URL}/v1/login`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (!res.ok) return setError(data.message);
            setError(null);
            navigate("/");
        } catch (error) {
            console.warn(error.message);
            setError(error.message)
        }
    };

    if (error) console.log(error);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50">
            <div className="max-w-md w-full px-6 py-8 bg-white rounded-xl shadow-lg">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back</h1>
                    <p className="text-gray-600">Sign in to your account to continue</p>
                </div>

                {/* Decorative element */}
                <div className="flex justify-center mb-8">
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-600 rounded-full"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                        <div className="flex items-center justify-between mb-1">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 outline-none"
                            placeholder="Enter your password"
                        />
                    </div>
                    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
