import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import ThemeToggle from "./ThemeToggle";

const Settings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Header */}
      <div className="bg-white px-4 py-6 shadow-sm">
        <div className="flex items-center">
          <button onClick={() => navigate("/")} className="mr-4 p-1 hover:bg-gray-100 rounded-full transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h1 className="text-xl font-semibold">Settings</h1>
        </div>
      </div>

      {/* Settings Content */}
      <div className="flex-1 px-4 py-6">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Profile Section */}
          <div className="px-4 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Profile</h2>
            <div className="flex items-center space-x-3" onClick={() => navigate("/landing")}>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-800">User</p>
                <p className="text-sm text-gray-500">user@example.com</p>
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="px-4 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Preferences</h2>
            <div className="space-y-3">
              <ThemeToggle />

              <div className="flex items-center justify-between">
                <span className="text-gray-700">Notifications</span>
                <button className="w-12 h-6 bg-primary rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Sound Effects</span>
                <button className="w-12 h-6 bg-primary rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
                </button>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="px-4 py-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">About</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Version</span>
                <span className="text-gray-500">1.0.0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Privacy Policy</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400"
                >
                  <polyline
                    points="9,18 15,12 9,6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Terms of Service</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400"
                >
                  <polyline
                    points="9,18 15,12 9,6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
