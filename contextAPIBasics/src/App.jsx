import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider,createBrowserRouter, createRoutesFromElements,Route} from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import { ContextProvider } from './context/context.js'
import { useEffect } from 'react'


function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>} >
        <Route path='' element={<Home/>}/>
        <Route path='login' element={<Login/>} />
        
      </ Route>
    )
  );
  const [user,setUser]=useState(null);
  
  const [theme,setTheme]=useState("light");
  

  const toggleTheme=()=>{
    setTheme((prevTheme)=>(prevTheme==="light"?"dark":"light"));
  }

  useEffect(
    ()=>{
      const html = document.documentElement;

      if (theme === "dark") {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
    ,
    [theme]
  );


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <ContextProvider value={{user,setUser,theme,toggleTheme}}>
        <RouterProvider router={router}/>
      </ContextProvider>
    </div>
  )
}

export default App
