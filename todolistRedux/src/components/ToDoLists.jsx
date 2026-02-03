import React from "react";

import { useEffect } from "react";
import { toggleTodoCompletion,setUpdateTodo,removeTodo } from "../features/todos/todosSlice";
import { useSelector, useDispatch } from "react-redux";

function ToDoUpdate() {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    useEffect(
        ()=>{
            localStorage.setItem("todos",JSON.stringify(todos));
        }
        ,
        [todos]

    );
    const updateHandler=(id,text)=>{
        dispatch(setUpdateTodo({id,text}));
    }
    const deleteHandler=(id)=>{
        dispatch(removeTodo(id));
    }
    
    return (
        // now applying css on completed todos
        <div className="list-container p-6 max-w-2xl mx-auto bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl shadow-xl">
            <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">Your todos here:</h1>
            {
                todos.map((todo)=>(
                    <div className={`todo-item mb-4 flex items-center flex-wrap gap-3 p-4 rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                    ${
                        todo.completed
                            ? "line-through text-gray-500 text-opacity-60 cursor-not-allowed bg-green-50 border-l-4 border-green-500"
                            : ""
                    }`}
                     key={todo.id}
                    >
                        <input type="checkbox" 
        
                                className="mr-2 w-5 h-5 accent-indigo-600 cursor-pointer"
                               checked={todo.completed}
                               onChange={()=>{dispatch(toggleTodoCompletion(todo.id))}}
                        />
                        <p className="text-lg bg-gray-200 p-2 rounded text-gray-800">{todo.text}</p>
                        {
                            todo.completed && <span className="ml-2 text-green-600 font-semibold text-sm"> (Completed) </span>
                        }
                        {
                            !todo.completed &&
                                <button onClick={()=>updateHandler(todo.id,todo.text)} 
                                className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition-transform duration-200 hover:scale-105"
                                >
                                Update</button>
                        }
                        {
                            !todo.completed &&
                                <button onClick={()=>deleteHandler(todo.id)} className="ml-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition-transform duration-200 hover:scale-105">Delete</button>
                        }
                    </div>
                ))
            }
        </div>
    );
}
export default ToDoUpdate;