import React from 'react'
import {Link}  from 'react-router-dom'
// import man from './myproject.jpg'

export const User = () => {
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
            <p className="text-base font-bold text-[#379b73]">Thomas Inyang S</p>
            <button><Link to='/settings'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#379b73]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                </Link>
            </button>
        </div>

        <div className="relative mt-16">
            <div className='w-[220px] block mx-auto mt-6 bg-[#379b73] rounded-full h-[220px]'>
                <div className='mx-auto w-[100px] h-[100px] my-auto pt-12'>
                <img src='/myproject.jpg' alt="an"/>
                </div>
            </div>
            <div className='absolute max-w-[70px] max-h-[70px] py-4 px-5 mx-auto bottom-1 left-[200px] bg-green-600 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            </div>
            <div className='border-2 border-green-500 h-[35px] w-[35px] rounded-full absolute top-0 left-[68px]'></div>
            <div className='border-2 border-pink-500 h-[40px] w-[40px] rounded-full absolute bottom-[70px] left-[20px]'></div>
            <div className='border-2 border-purple-700 h-[25px] w-[25px] rounded-full absolute inset-x-[130px] -bottom-3'></div>
            <div className='border-2 border-gray-400 h-[40px] w-[40px] rounded-full absolute top-[220px] right-[14px]'></div>
        </div>
        <div className="mt-12 p-4">
                <div className="">

                    <label htmlFor='username' className='uppercase text-lg text-[#379b73] font-bold'>username</label>
                    <input type='text' value='@Ti_stephen' className='block text-[#379b73] text-sm font-semibold'/>
                </div>
                <div className="mt-4">
                    <label htmlFor='username' className='uppercase text-lg text-[#379b73] font-bold mt-5'>fullname</label>
                    <input type='text' value='stephen inyang thomas' className='block text-[#379b73] text-sm font-semibold uppercase w-full'/>
                </div>
                <div className="mt-4">
                    <label htmlFor='username' className='uppercase text-lg text-[#379b73] font-bold'>username</label>
                    <input type='email' value='abobtech@webdevelopers.com' className='block text-[#379b73] text-sm font-semibold '/>
                </div>
        </div>

        <div className="mt-4 p-4 h-auto mb-10">
            <p className="font-bold capitalize text-[#379b73]">Numbers of ratings &#58;</p>
            <div className='flex bg-[#379b73] p-3 rounded-lg mt-2 justify-evenly mb-20'>
                <p className='px-1.5 py-auto bg-white text-[#379b73] text-sm font-bold rounded-lg'>350
                    <span className='block text-[12px] text-[#379b73]'>Rtngs</span>
                </p>
                <span className="block my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </span>
                <span className="block my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                 </span>
                 <span className="block my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                 </span>
                 <span className="block my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                 </span>
                 <span className="block my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                 </span>
            </div>
        </div>
        
    </main>
    </>
  )
}
