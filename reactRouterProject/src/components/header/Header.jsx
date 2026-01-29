import {Link,NavLink} from 'react-router-dom';
import React from 'react';
import '../../App.css';
import techInfoVideo from '../../assets/Tech-Info.mp4';

function Header({userName}) {
    return (
        <>
            <div className='bg-blue-500 text-white p-4 flex justify-between items-center'>
                <nav className='flex items-center gap-70'>
                    {/* video logo tag first in the left slightly padded from left add that first from assets the mp4 video as logo below:*/}
                    <video 
                        src={techInfoVideo} 
                        className="ml-2 h-12 w-40 rounded-full border-2 border-white object-cover" 
                        style={{ maxHeight: '90%'}} 

                        autoPlay 
                        loop 
                        muted
                    ></video>
                    <div className='flex items-center gap-12'>
                        <NavLink to="/" 
                            className={({ isActive }) => isActive ? "mx-2 text-lg font-semibold text-gray-300" : "mx-2 text-lg font-semibold hover:text-gray-300"} >
                            Home
                        </NavLink>
                        <NavLink to="/about" 
                            className={({ isActive }) => isActive ? "mx-2 text-lg font-semibold text-gray-300" : "mx-2 text-lg font-semibold hover:text-gray-300"} >
                            About
                        </NavLink>
                        <NavLink to={`user/${userName}`} 
                            className={({ isActive }) => isActive ? "mx-2 text-lg font-semibold text-gray-300" : "mx-2 text-lg font-semibold hover:text-gray-300"} >
                            User
                        </NavLink>
                        <NavLink to="github" 
                            className={({ isActive }) => isActive ? "mx-2 text-lg font-semibold text-gray-300" : "mx-2 text-lg font-semibold hover:text-gray-300"} >
                            GitHub
                        </NavLink>
                        <NavLink to="contactus" 
                            className={({ isActive }) => isActive ? "mx-2 text-lg font-semibold text-gray-300" : "mx-2 text-lg font-semibold hover:text-gray-300"} >
                            Contact Us
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/" className="mx-2 text-lg font-semibold hover:text-gray-300" >
                            Login
                        </NavLink>
                        
                        <NavLink to="/" className="mx-2 text-lg font-semibold hover:text-gray-300 rounded-md bg-blue-700 px-3 py-1" >
                            Get Started
                        </NavLink>

                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;