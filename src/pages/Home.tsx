import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            {/* Header */}
            <div className="bg-white px-4 py-6 shadow-sm">
                <h1 className="text-2xl font-bold text-center">
                    <span className="text-purple-400">AI</span>
                    <span className="text-primary"> Dost</span>
                </h1>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-4">
                <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-white"
                        >
                            <path
                                d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle cx="8" cy="10" r="1" fill="currentColor" />
                            <circle cx="12" cy="10" r="1" fill="currentColor" />
                            <circle cx="16" cy="10" r="1" fill="currentColor" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Welcome to AI Dost</h2>
                    <p className="text-gray-600">Your intelligent companion for conversations and assistance</p>
                </div>

                {/* Action Buttons */}
                <div className="w-full max-w-sm space-y-3">
                    <button
                        onClick={() => navigate('/chat')}
                        className="w-full bg-primary text-white py-3 px-6 rounded-xl font-medium hover:bg-purple-700 transition-colors"
                    >
                        Start Chatting
                    </button>

                    <button
                        onClick={() => navigate('/settings')}
                        className="w-full bg-white text-gray-700 py-3 px-6 rounded-xl font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                        Settings
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Home;