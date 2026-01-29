import React, { useState, useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
function GitHub() {
    const [data,setData]=useState("");
    const [user,setUser] = useState(useLoaderData());
    const inputRef=useRef(null);
    useEffect(
        ()=>{
            if(!data) return;
            fetch(`https://api.github.com/users/${data}`)
            .then((res)=>res.json())
            .then((info)=>{
                setUser(info);
            });
        }
        ,
        [data]
    );
    return (
        <>
            <div className='flex flex-col items-center mt-10'>
                <div className="flex justify-center items-center gap-4">
                    <h1 className="text-3xl font-bold mb-4">GitHub Profile</h1>
                    <input type="text" className="border border-gray-300 rounded px-2 py-1" ref={inputRef} />
                    <button onClick={() => setData(inputRef.current.value)} className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-600">Search</button>
                </div>
                <div className='flex flex-wrap justify-center gap-6 mt-6'>
                    {/* Avatar */}
                    <div className="w-32 h-32 relative">
                        <img
                            src={user.avatar_url}
                            alt={user.login}
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    {/* Info */}
                    <div className="flex flex-col justify-center ml-6">
                        <h2 className="text-2xl font-bold">{user.login}</h2>
                        {user.name && <p className="text-lg">{user.name}</p>}
                        {user.bio && <p className="text-gray-600">{user.bio}</p>}
                        {user.location && <p className="text-gray-500">📍 {user.location}</p>}
                        <p>Public Repos: {user.public_repos}</p>
                        <p>Followers: {user.followers} | Following: {user.following}</p>
                        <a
                            href={user.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            View GitHub Profile
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default GitHub;