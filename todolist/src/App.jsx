import { useState,useEffect } from 'react'

import React from 'react'
import { ToDoContextProvider } from './context/index.js';
import {ToDoForm,ToDoItem} from './components/index.js';


function App() {
  const [toDos, setToDos] = useState(() => {
        const storedData = localStorage.getItem("toDos");
        return storedData ? JSON.parse(storedData) : [];
  }); //initially load data from local storage

  const [showError,setShowError]=useState(false); // for duplicate todo given in form to add in todos



  const setToDoError=(id, value)=>{ // for duplicate encounter while editing a todo item
    setToDos((prevToDos)=>prevToDos.map((toDo)=>toDo.id===id?{...toDo,showError : value}:toDo));
  } // this is immutable update of toDos array where for the toDo with given id we set showError to value as whole array is changed



  const addToDo = (toDo) => {// toDo without id
  const isDuplicate = toDos.some(
    (prev) => prev.toDoText === toDo.toDoText
  );

  if (isDuplicate) {
    setShowError(true); // on changining in the input field of form i will setShowError to false
    return;
  }

  setToDos((prev) => [
    ...prev,
    { id: Date.now(), ...toDo }
  ]);
};

  const deleteToDo=(id)=>{
    setToDos((prevToDos)=>prevToDos.filter((toDo)=>toDo.id!==id));
  }

  const updateToDo = (id, updatedToDo) => {
        const isDuplicate = toDos.some(
          (t) => t.id !== id && t.toDoText === updatedToDo.toDoText
        );

        if (isDuplicate) {
          setToDoError(id, true);
          return;
        }

        setToDos((prev) =>
          prev.map((t) =>
            t.id === id ? { ...updatedToDo, id } : t
          )
        );
  };

  const toggleTodoCompletion=(id)=>{
    setToDos((prevToDos)=>prevToDos.map((prevToDo)=>prevToDo.id===id?{...prevToDo,isCompleted: !prevToDo.isCompleted}:prevToDo));
  }
  
  // useEffect(
  //   ()=>{
  //     const storedData=localStorage.getItem("toDos");
  //     setToDos(storedData ? JSON.parse(storedData) :[]);
  //   },
  //   []

  // );

  useEffect(
    ()=>{
      localStorage.setItem("toDos",JSON.stringify(toDos));
    },
    [toDos]

  );

  

  return (
    <ToDoContextProvider value={{toDos, addToDo, deleteToDo, updateToDo, toggleTodoCompletion, showError,setShowError,setToDoError}}>
        <div className=' mx-auto mt-10 p-4 border rounded shadow w-full max-w-4/5 bg-gray-800 max-h-screen overflow-y-auto'>
            <div className='text-center mb-4 bg-gray-600 text-white p-4 rounded w-full max-w-4/5 mx-auto'>
                <h1 className='text-2xl font-bold mb-4'>ToDo List</h1>
                <div className='mb-4'>
                  {/* {add input field and button to add todo here} */}
                  <ToDoForm />
                </div>
                <div className='space-y-2'>
                  {/* {addTodo list here} */}
                  {
                    toDos.map((toDo)=>(
                      <ToDoItem key={toDo.id} toDo={toDo} />
                    ))
                  }
                </div>
            </div>
        </div>
    </ToDoContextProvider>
  )
}

export default App
