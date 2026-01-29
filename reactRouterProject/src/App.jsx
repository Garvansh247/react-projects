import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Header from './components/header/Header.jsx';
import Layout from './components/layouts/Layout.jsx'
import { Route } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import User from './components/user/User.jsx';
import GitHub from './components/github/GitHub.jsx';
import ContactUs from './components/contact-us/ContactUs.jsx';

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>} >
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='user/:userId' element={<User/>}/>
        <Route path='github' element={<GitHub/>}/>
        <Route path='contactus' element={<ContactUs/>}/>
      </ Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
