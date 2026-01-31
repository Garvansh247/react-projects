import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react';
function App() {
  const [length, setLength] = useState(0);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [specialCharsAllowed, setSpecialCharsAllowed] = useState(false);
  const [password, setPassword] = useState('');


  const generatePassword=useCallback(
    ()=>{
      let pass='';
      let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if(numbersAllowed){
        str+='0123456789';
      }
      if(specialCharsAllowed){
        str+='!@#$%^&*()_+~`|}{[]:;?><,./-=';
      }
      for(let i=0;i<length;i++){
        const charIndex=Math.floor(Math.random()*str.length);
        pass+=str.charAt(charIndex);
      }
      setPassword(pass);
    },
    [length,numbersAllowed,specialCharsAllowed,setPassword]

  );


  const passwordReference=useRef(null);

  const copyToClipboard=useCallback(
    ()=>{
      if(passwordReference.current){
        passwordReference.current.select();
        passwordReference.current.setSelectionRange(0, 10); // you have to give selection range after selecting the input field as in above line otherwise the full line is selected
        window.navigator.clipboard.writeText(passwordReference.current.value.substring(0,10)); // if you give less than 10 length password it will copy full password otherwise first 10 characters
      }
      // or 
      // passwordReference.current?.select();
      // window.navigator.clipboard.writeText(password);
    },
    [passwordReference,password]
  );


  const handlerLength=useCallback(
    (e)=>{
        setLength(e.target.value);
        
    },
    [length,numbersAllowed,specialCharsAllowed,setPassword]
  )
    
  const handlerChars=useCallback(
    (e)=>{
        setSpecialCharsAllowed((prev)=>!prev);
        
    },
    [length,numbersAllowed,specialCharsAllowed,setPassword]
  )
  const handlerNums=useCallback(
    (e)=>{
        setNumbersAllowed((prev)=>!prev);
        
    },
    [length,numbersAllowed,specialCharsAllowed,setPassword]
  )

  useEffect(
    ()=>{
      generatePassword();
    },
    [length,numbersAllowed,specialCharsAllowed,generatePassword]
  );
  // here we cannot give password as dependency in useEffect because it will create infinite loop as generatePassword sets password which will trigger useEffect again and again
  // also if generatePassword is given as dependency here in useEffect then we cannot give password as dependency in generatePassword as it will create circular dependency infinite loop triggers because generatePassword sets password and password is dependency of generatePassword so useEffect will be triggered again and again because generatePassword is dependency of useEffect as generatePassword changed because password changed and password is dependency of generatePassword so infinite loop will be created
  return (
    <>
      <div className='min-h-screen flex flex-col items-center p-4 space-y-6 bg-gray-900'>
        <div className='text-3xl font-bold overflow-hidden rounded-lg bg-gray-600 p-4 shadow-lg text-gray-800  max-w-svw text-center flex'>
          <div className='flex pr-4 items-center  space-x-2 '>
            <input type="text" ref={passwordReference} value={password} placeholder='generate password here...' readOnly className='rounded-md border border-gray-800 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
            <button onClick={copyToClipboard} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200'>
              Copy
            </button>
          </div>
        </div>
        {/* slider to control length and checkboxes to include numbers and characters or not  first basic structure without any attributes only className attribute*/}
        <div className=' bg-gray-600 p-6 rounded-lg shadow-lg space-y-4 text-gray-200 flex space-x-20'>
          {/* slider here: */}
          <div className='flex  space-y-2'>
            <div className='flex flex-col gap-1.5'>
              <label htmlFor="length" className='font-semibold'>Password Length: {length}</label>
              <input type="range" id="length" min="0" max="20" value={length} onChange={handlerLength} className='w-full'/>
            </div>
          </div>
          <div className='flex  space-y-2'>
            <div className='flex flex-col gap-1.5'>
              <label htmlFor="numbers" className='font-semibold'>Numbers Allowed?</label>
              <input type="checkbox" id="numbers" checked={numbersAllowed} onChange={handlerNums} />
            </div>
          </div>

          <div className='flex  space-y-2'>
            <div className='flex flex-col gap-1.5'>
              <label htmlFor="characters" className='font-semibold'>Special Chars Allowed?</label>
              <input type="checkbox" id="characters" checked={specialCharsAllowed} onChange={handlerChars} />
            </div>
          </div>

        </div>

        <div>
          <button onClick={generatePassword} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200'>Generate Password</button>
        </div>
      </div>
    </>
  )
}

export default App
