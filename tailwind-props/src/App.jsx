import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello, Vite + React!</h1>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-black">Chai Component</div>
          <p className="text-gray-500">This is a simple Tailwind CSS component.</p>
        </div>
      </div>
      <Card />
    </>
  )
}

export default App
