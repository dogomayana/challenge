import React from 'react'
// import Toggle from 'react-toggle'
import { Link } from 'react-router-dom'

export const Settings = () => {
  return (
    <>
    <main className='bg-white w-full md:max-w-[414px] md:mx-auto p-3'>
        <div className='flex justify-between'>
            <button><Link to="/"> 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#379b73]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                </Link>
             </button>
            <p className="text-base font-bold text-[#379b73]">Settings</p>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#379b73] " viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
            </button>
        </div>

        <div className='mt-14  p-3'>
            <p className='flex'>
                <span className='inline-block text-[#379b73]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
                <p className='ml-3 inline-block text-lg font-bold text-[#379b73]'>Account</p>
            </p>

            <p className='flex mt-7 font-semibold text-base text-[#379b73] justify-between'>
                <p> Edit Profile</p>
                <p className='inline-block text-[#379b73]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </p>
            </p>

            <p className='flex mt-7 font-semibold text-base text-[#379b73] justify-between'>
                <p> Change Password</p>
                <p className='inline-block text-[#379b73]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </p>
            </p>

            <p className='flex mt-7 font-semibold text-base text-[#379b73] justify-between'>
                <p> Connect Socials</p>
                <p className='inline-block text-[#379b73]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </p>
            </p>
        </div>

        <div className='mt-6  p-3'>
            <p className='flex'>
                <span className='inline-block text-[#379b73]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </span>
                <p className='ml-3 inline-block text-lg font-bold text-[#379b73]'>Notification</p>
            </p>

            <p className='flex mt-7 font-semibold text-base text-[#379b73] justify-between'>
                <p>Notifications</p>
                <p className='inline-block text-[#379b73]'>
                    <label className="switch">
                    <input type="checkbox"></input>
                    <span className="slider round"></span>
                    </label>
                </p>
            </p>

            <p className='flex mt-7 font-semibold text-base text-[#379b73] justify-between'>
                <p>App Notifications</p>
                <p className='inline-block text-[#379b73]'>
                    <label className="switch">
                    <input type="checkbox"></input>
                    <span className="slider round"></span>
                    </label>
                </p>
            </p>
        </div>

        <div className='mt-6  p-3'>
            <p className='flex'>
                <span className='inline-block text-[#379b73]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
                <p className='ml-3 inline-block text-lg font-bold text-[#379b73]'>More</p>
            </p>

            <p className='flex mt-7 font-semibold text-base text-[#379b73] justify-between'>
                <p> Language</p>
                <p className='inline-block text-[#379b73]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </p>
            </p>

            <p className='flex mt-7 font-semibold text-base text-[#379b73] justify-between'>
                <p> State</p>
                <p className='inline-block text-[#379b73]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </p>
            </p>
            
        </div>

        <div className='w-full mt-8  p-3'>
        <p className='text-center p-3'>
                <span className='inline-block text-[#379b73]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                </span>
                <p className='ml-3 inline-block text-lg font-bold text-[#379b73]'>Logout</p>
            </p>

        </div>


    </main>
    </>
  )
}
