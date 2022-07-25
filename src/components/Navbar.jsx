import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinkStyles=({isActive})=>{
        return{
            display:isActive?"block":"block",
            backgroundColor:isActive?"#379b73":"white",
            textAlign:isActive?"center":"center",
            transition:isActive?"0.5s":"",
            color:isActive?"white":"black",
            padding:isActive?"auto 30px":"",
            margin:isActive?"auto 0":"",
            // backgroundImage:isActive?`url("+"/indicator.svg)`:"",
            borderRadius:isActive?"70px 70px 0px 0px":""
        }
    }
    
    return (
        <>
        <nav className="h-[60px] md:max-w-[400px] fixed shadow-md bottom-0 w-full">
        <ul className="flex justify-between">
            <NavLink to='/shop' style={navLinkStyles}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
            </NavLink>
                                  
            <NavLink to='/' style={navLinkStyles}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
            </NavLink>
                                  
            <NavLink to='/user' style={navLinkStyles}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
            </NavLink>
           
            </ul>
                    </nav>
        </>
    );
}

export default Navbar;
