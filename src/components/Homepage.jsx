import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Aside from './Aside';



export default function Homepage() {

    const [isShown, setIsShown] =useState(false)

    const handleClick = event =>{
        setIsShown(current=> !current);
    }
    
  return (
  <>
  <header className='bg-white w-[100%]'>
            <nav className='bg-[#379b73] h-auto '>
        <button onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          </button>
                <div className='flex justify-evenly mt-8'>
                    <div className='h-24 w-24 rounded-full bg-white'></div>
                    <div className="my-auto ml-10">
                        <p className='text-white text-base font-bold'>Abob Tech</p>
                        <p className='text-white text-sm'>Software and web developer</p>
                    </div>
                </div>
            </nav>
            {isShown &&(
          <Aside onClick={handleClick}/>
        )}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#379b73" fillOpacity="1" d="M0,320L48,304C96,288,192,256,288,224C384,192,480,160,576,165.3C672,171,768,213,864,208C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div className='bg-green-100 shadow-sm text-base p-2 mt-5 mb-20'>
              <h1 className="my-6 font-bold text-black text-lg">Attempt to style <a href= "https://twitter.com/TheObiLeonard?s=20&t=oL0cZxoAkCof1eBMLg1tfA" target="_blank" rel="nonreferrer">&#64;TheObiLeonard</a> mobile app design</h1>
              <p className='text-base text-[#379b73]'>This project was built as a website as against its original design, mobile app. This website is subject to diplay differently per device screen size,
              because of some features, the contents in the left drawer, and the user page.</p>
              <p className='text-base text-[#379b73] mt-3'> The rings designed around the user&apos;s logo might diplay differently because of the CSS position attributes, as it will 
              inherit the dimension of your device screen size and possibly mar the positioning during build time.</p>
              <p className='text-base text-[#379b73] mt-3'>Well, that&apos;s one con of overstyling a website, but this website is wrapped with a width of 320px, which will possibly restrict the website from inheriting your device screen size and choosing this option caused whitespaces
              at the x-axis, i do not want the rings to scatter</p>
              <p className='text-base text-[#379b73] mt-3'>Overall, I enjoyed working on this project as it covers most of CSS attributes and values </p>
              <p className='text-base text-[#379b73] mt-3'>Designer&#58; <a href= "https://twitter.com/TheObiLeonard?s=20&t=oL0cZxoAkCof1eBMLg1tfA" target="_blank" rel="nonreferrer">&#64;TheObiLeonard</a></p>
              <p className='text-base text-[#379b73] mt-3'>Developer&#58; <a href= "https://twitter.com/ti_stephen" target="_blank" rel="nonreferrer">&#64;ti_stephen</a></p>
            </div>
            </header>
  </>
  )
}
