import React from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.landingPage} bg-background-light font-display text-gray-800 dark:bg-background-dark dark:text-gray-200`}>
      <div className="relative flex min-h-screen flex-col justify-between overflow-hidden">
        <div className="absolute -left-48 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute -bottom-48 -right-48 h-96 w-96 bg-primary/30 blur-3xl"></div>
        <div className="relative z-10 flex flex-1 flex-col">
          {/* <header className="p-4 text-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">AI Chat</h1>
          </header> */}
          {/* Header */}
          <div className="px-4 py-6 shadow-sm">
            <h1 className="text-2xl font-bold text-center">
              <span className="text-purple-400 dark:text-purple-200">AI</span>
              <span className="text-primary dark:text-white"> Dost</span>
            </h1>
          </div>
          <main className="flex-1 px-6 pb-4 pt-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Ready to dive in?
              </h2>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                Let's get you a fun nickname!
              </p>
            </div>
            <div className="mt-8">
              <button className="w-full rounded-xl bg-primary py-4 text-lg font-bold text-white shadow-lg shadow-primary/30 transition-transform duration-200 ease-in-out hover:scale-[1.02] active:scale-95">
                Generate a Fun Nickname
              </button>
            </div>
            <div className="mt-10">
              <h3 className="text-center text-xl font-bold text-gray-900 dark:text-white">
                Choose your AI companion
              </h3>
              <fieldset className="mt-4">
                <legend className="sr-only">AI Model Selection</legend>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <input checked={true} className="peer sr-only" id="simple" name="ai-model" type="radio" />
                    <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-gray-300 bg-white p-6 text-center shadow-md transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary dark:border-gray-700 dark:bg-background-dark/50 dark:peer-checked:bg-primary/30 dark:peer-checked:text-primary" htmlFor="simple">
                      <span className="text-2xl font-bold">The Chill Buddy</span>
                      <span className="mt-2 text-sm text-gray-500 dark:text-gray-400">Casual chats &amp; good vibes</span>
                    </label>
                  </div>
                  <div>
                    <input className="peer sr-only" id="medium" name="ai-model" type="radio" />
                    <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-gray-300 bg-white p-6 text-center shadow-md transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary dark:border-gray-700 dark:bg-background-dark/50 dark:peer-checked:bg-primary/30 dark:peer-checked:text-primary" htmlFor="medium">
                      <span className="text-2xl font-bold">The Brainy One</span>
                      <span className="mt-2 text-sm text-gray-500 dark:text-gray-400">Smart insights &amp; deep dives</span>
                    </label>
                  </div>
                  <div>
                    <input className="peer sr-only" id="advanced" name="ai-model" type="radio" />
                    <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-gray-300 bg-white p-6 text-center shadow-md transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary dark:border-gray-700 dark:bg-background-dark/50 dark:peer-checked:bg-primary/30 dark:peer-checked:text-primary" htmlFor="advanced">
                      <span className="text-2xl font-bold">The Visionary</span>
                      <span className="mt-2 text-sm text-gray-500 dark:text-gray-400">Creative ideas &amp; future trends</span>
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </main>
          <div className="px-6 pb-6">
            <button className="w-full rounded-xl bg-primary py-4 text-lg font-bold text-white shadow-lg shadow-primary/30 transition-transform duration-200 ease-in-out hover:scale-[1.02] active:scale-95" onClick={() => navigate('/chat')}>
              Start Chatting
            </button>
          </div>
        </div>
        {/* <nav className="relative z-10 border-t border-gray-200/50 py-2 backdrop-blur-sm dark:border-gray-800/50 dark:bg-background-dark/70">
            <div className="mx-auto flex max-w-md justify-around">
              <a className="flex flex-col items-center gap-1 p-2 text-primary" href="#">
                <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
                  <path d="M216,48H40a16,16,0,0,0-16,16V160a16,16,0,0,0,16,16H88v37.22a8,8,0,0,0,13.41,5.89L132.57,176H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48Zm0,112H128a8,8,0,0,0-5.41,2.11L96,184.34V168a8,8,0,0,0-8-8H40V64H216ZM116,108a12,12,0,1,1-12-12A12,12,0,0,1,116,108Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,156,108Z"></path>
                </svg>
                <span className="text-xs font-bold">Chat</span>
              </a>
              <a className="flex flex-col items-center gap-1 p-2 text-gray-500 dark:text-gray-400" href="#">
                <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
                  <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                </svg>
                <span className="text-xs font-medium">Profile</span>
              </a>
            </div>
          </nav> */}
      </div>
    </div>
  )
}

export default Landing