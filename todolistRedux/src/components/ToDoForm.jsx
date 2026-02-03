import React from "react";
import { addTodo } from "../features/todos/todosSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ToDoForm(){
    const [inputText,setInputText]=useState("");
    const [error,setError]=useState(false);
    const todos=useSelector((state)=>state.todos.todos);
    const dispatch=useDispatch();

    const addHandler=(e)=>{
        e.preventDefault();
        const isDuplicate=todos.some((item)=> item.text === inputText);
        if(isDuplicate){
            setError(true);
            return;
        }
        dispatch(addTodo(inputText));
        setInputText("");
    };

    const inputHandler=(e)=>{
        setInputText(e.target.value);
        setError(false);
    };

    return (
        <>
            <div className="form-container p-6 max-w-xl mx-auto 
                            bg-white dark:bg-gray-800 
                            rounded-2xl shadow-lg">
                    
                    <form className="todo-form flex gap-3" onSubmit={(e)=>addHandler(e)}>
                            <input 
                                type="text"
                                placeholder="Enter a todo..."
                                onChange={(e) =>{inputHandler(e)}}
                                value={inputText}
                                className="flex-1 border border-gray-300 rounded-xl 
                                           px-4 py-2 text-gray-800
                                           focus:outline-none focus:ring-2 focus:ring-indigo-500
                                           dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                            <button 
                                type="submit" 
                                className="bg-indigo-600 hover:bg-indigo-700 
                                           text-white rounded-xl px-5 py-2 
                                           font-medium transition">
                                Add
                            </button>
                    </form>

                    {
                        error &&
                        <div className="mt-4 flex flex-col items-center 
                                        bg-red-50 border border-red-200 
                                        rounded-xl p-3 gap-2">
                            <p className="text-sm text-red-600 font-medium">
                                Duplicate todos are not allowed
                            </p>
                            <button 
                                onClick={()=>setError(false)}
                                className="text-sm text-red-600 hover:underline">
                                OK
                            </button>
                        </div>
                    }
            </div>
        </>
    );
}

export default ToDoForm;
