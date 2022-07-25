import React, { useState } from 'react'
import Aside from './Aside';



export default function Homepage() {

    const [isShown, setIsShown] =useState(false)

    const handleClick = event =>{
        setIsShown(current=> !current);
    }
    
  return (
  <>
  <header className='bg-white w-[100%] h-full'>
            <nav className='bg-[#4caf50] h-auto '>
        <button onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4caf50" fillOpacity="1" d="M0,320L48,304C96,288,192,256,288,224C384,192,480,160,576,165.3C672,171,768,213,864,208C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div className='bg-green-100 shadow-sm text-base p-2 mt-5'>
              <p>This project was built as a website as against its original style, mobile app. This project is subject to diplay wrongly on different devices.</p>
              <p> This because of certain features, like the user page, you would notice the rings around the user logo, those can display wrongly on different screen size cause it was design using css positions and the position used in built the project might differ from yours.</p>
              <p>But, it might function well, because, I restricted the web page with from covering every screen size other than 320 x 800</p>
              <p>Overall, I enjoyed working on this project as it covers most styling attributes and values </p>
            </div>
            </header>
  </>
  )
}
