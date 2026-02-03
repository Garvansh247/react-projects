import { useState } from 'react'
import ToDoForm from './components/toDoForm'
import ToDoLists from './components/toDoLists'
import ToDoUpdate from './components/ToDoUpdate'
import { useSelector } from 'react-redux'


function App() {
  const todoUpdate = useSelector((state) => state.todos.todoUpdate);

  return (
    <>
      
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 
                      text-gray-900 dark:text-white 
                      transition-colors duration-300 
                      flex flex-col gap-8 py-10">
          <div className="text-center">
              {
                todoUpdate.status && 
                  < ToDoUpdate/>
          
              }
              <ToDoForm />
              <ToDoLists />
          </div>
      </div>
    </>
    
  )
}

export default App;
