import { useState } from 'react'


import './App.css'

function App() {
  const [color, setColor] = useState('grey');
  
  const handleClick = (e) => {
    // const bgColor = e.target.className.split(' ')[0];
    //or
    const bgColor = window.getComputedStyle(e.currentTarget).backgroundColor;
    setColor(bgColor);
    console.log(bgColor);
    // document.body.style.backgroundColor = color; // this will not work because setColor is asynchronous but we did set color in the outer most div so html is reparsed with new color using hooks
  }

  return (
    <>

      <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: color }}>
        <div className='fixed bg-amber-300 px-4 py-2 rounded-md bottom-0 mb-4 flex flex-wrap items-center justify-center space-x-4 max-w-full gap-4'>
          
          <button onClick={handleClick} className="bg-slate-600 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Slate</button>
          <button onClick={handleClick} className="bg-gray-600 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Gray</button>
          <button onClick={handleClick} className="bg-zinc-600 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Zinc</button>
          <button onClick={handleClick} className="bg-neutral-600 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Neutral</button>
          <button onClick={handleClick} className="bg-stone-600 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Stone</button>

          <button onClick={handleClick} className="bg-blue-600 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Blue</button>
          <button onClick={handleClick} className="bg-cyan-500 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Cyan</button>
          <button onClick={handleClick} className="bg-teal-500 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Teal</button>
          <button onClick={handleClick} className="bg-emerald-600 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Emerald</button>
          <button onClick={handleClick} className="bg-green-600 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Green</button>

          <button onClick={handleClick} className="bg-amber-500 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Amber</button>
          <button onClick={handleClick} className="bg-orange-500 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Orange</button>
          <button onClick={handleClick} className="bg-red-500 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Red</button>
          <button onClick={handleClick} className="bg-rose-500 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Rose</button>
          <button onClick={handleClick} className="bg-pink-500 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Pink</button>

          <button onClick={handleClick} className="bg-indigo-600 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Indigo</button>
          <button onClick={handleClick} className="bg-violet-600 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Violet</button>
          <button onClick={handleClick} className="bg-purple-600 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Purple</button>
          <button onClick={handleClick} className="bg-fuchsia-600 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Fuchsia</button>
          <button onClick={handleClick} className="bg-sky-500 h-16 w-24 rounded-md transition-all duration-200 active:scale-95 hover:scale-105">Sky</button>

        </div>
      </div>
    </>
  )
}

export default App
