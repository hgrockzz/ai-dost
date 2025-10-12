import React from 'react'
import { useNavigate } from 'react-router-dom'
// import notFound from '../assets/images/not-found.png'

const NotFound: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center h-screen p-4 pt-20 gap-[50px] text-center'>
            {/* <img src={notFound} alt="Not Found" className='w-1/2 h-1/2 object-contain' /> */}
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-4">
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
            <h1 className='text-2xl font-bold'>Looks like you're lost. Let's find your way back.</h1>
            <button onClick={() => navigate('/')} className='bg-primary text-white py-3 px-6 rounded-xl font-medium hover:bg-purple-700 transition-colors'>Go to Home</button>
        </div>
    )
}

export default NotFound