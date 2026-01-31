import React from "react";
import { useState,useContext } from "react";
import useAppContext from "../../context/context.js";


function Login(){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const {user,setUser}=useAppContext();
    

    const handleLogin=(e)=>{
        e.preventDefault();
        // Dummy authentication logic
        setUser({ username,password });
        if(username && password){
            alert(`Logged in as ${username}`);
        }
    };
    // useEffect(
    //     ()=>{
    //         if(user){
    //             alert(`Logged in as ${user.username}`);
    //         }
    //     },
    //     [username,password,user]
    // );

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <div className="bg-transparent dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md text-black dark:text-white">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 dark:text-gray-200">Username</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"    
                            placeholder="Enter your username"
                            onChange={(e)=> setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-gray-200">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"    
                            placeholder="Enter your password"
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={handleLogin}
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300 dark:bg-yellow-700 dark:text-black dark:hover:bg-yellow-800"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Login;