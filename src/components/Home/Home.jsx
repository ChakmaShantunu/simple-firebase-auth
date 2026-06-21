import React from "react";

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
            <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-2xl text-center">

                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Welcome to My App 🚀
                </h1>

                <p className="text-gray-500 mt-4 text-lg">
                    This is a simple Firebase Authentication project with Google and GitHub login.
                </p>

                <div className="mt-6 flex justify-center gap-4 flex-wrap">
                    <div className="px-5 py-3 bg-blue-100 text-blue-700 rounded-xl font-medium">
                        ⚡ Fast Auth
                    </div>

                    <div className="px-5 py-3 bg-green-100 text-green-700 rounded-xl font-medium">
                        🔐 Secure Login
                    </div>

                    <div className="px-5 py-3 bg-purple-100 text-purple-700 rounded-xl font-medium">
                        🎨 Modern UI
                    </div>
                </div>

                <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Home;