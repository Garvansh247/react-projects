import {Link,NavLink} from 'react-router-dom';
import React from 'react';
import '../../App.css';
import techInfoVideo from '../../assets/Tech-Info.mp4';
import { Context } from '../../context/context.js';

function Header({userName}) {
    const {theme, toggleTheme} = React.useContext(Context);
    // Debug: log context values
    console.log('Header context:', { theme, toggleTheme });

    // Handler for select dropdown
    const handleToolChange = (e) => {
        if (e.target.value === "tool1") {
            toggleTheme();
        }
        // Reset select so user can toggle again
        e.target.value = "";
    };

    return (
        <>
            <div className='bg-blue-500 text-white dark:bg-gray-800 dark:text-gray-100 p-4 flex justify-between items-center top-0 fixed w-full z-50 mx-0 transition-colors duration-300'>
                <nav className='flex items-center gap-8'>
                    {/* video logo tag first in the left slightly padded from left add that first from assets the mp4 video as logo below:*/}
                    <video 
                        src={techInfoVideo} 
                        className="h-12 w-40 rounded-full border-2 border-white object-cover" 
                        style={{ maxHeight: '90%'}} 
                        autoPlay 
                        loop 
                        muted
                    ></video>
                    <div className='flex items-center gap-12'>
                        <NavLink to="/" 
                            className={({ isActive }) => isActive ? "mx-2 text-lg font-semibold text-gray-300 dark:text-yellow-300" : "mx-2 text-lg font-semibold hover:text-gray-300 dark:hover:text-yellow-200"} >
                            Home
                        </NavLink>
                        <select name="Tools" id="tools" className="px-2 py-1 rounded border border-gray-300 text-white bg-blue-600 hover:bg-blue-900 hover:cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 dark:bg-gray-700 dark:text-yellow-200" onChange={handleToolChange} defaultValue="">
                            <option value="" disabled>Select a tool</option>
                            <option value="tool1">Toggle Theme</option>
                            <option value="tool2">Tool 2</option>
                            <option value="tool3">Tool 3</option>
                        </select>
                    </div>
                    <div>
                        <NavLink to="/login" className="mx-2 text-lg font-semibold hover:text-gray-300 dark:hover:text-yellow-200" >
                            Login
                        </NavLink>
                        <NavLink to="/" className="mx-2 text-lg font-semibold hover:text-gray-300 rounded-md bg-blue-700 px-3 py-1 dark:bg-yellow-700 dark:text-black" >
                            Get Started
                        </NavLink>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;