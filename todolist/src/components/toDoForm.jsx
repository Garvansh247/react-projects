import React from "react";
import { useState } from "react";
import {useToDo} from '../context/index.js';

function ToDoForm(){
    const {addToDo,showError,setShowError}=useToDo();
    const [toDoText,setToDoText]=useState("");

    return(
        <>
            <div className="border-b p-4 bg-gray-400">
                <form 
                    onSubmit={(e)=>{
                        e.preventDefault();
                        const trimmed = toDoText.trim();
                        if (!trimmed) return;
                        addToDo({ toDoText: trimmed, isCompleted: false });
                        setToDoText("");
                    }}
                    className="flex flex-col md:flex-row gap-4 bg-gray-200 p-4 rounded"
                >
                    <input
                        className="border p-2 grow border-gray-400 rounded bg-white text-black"
                        type="text"
                        onChange={(e) => { setShowError(false); setToDoText(e.target.value); }}
                        value={toDoText}
                        placeholder="Add a todo..."
                    />
                    <button className="bg-blue-500 text-white p-2 rounded" type="submit">Add</button>

                </form>
                {showError && (
                    <div className="mt-2 text-red-700 bg-red-200 border border-red-300 rounded p-2">
                        This todo already exists.
                    </div>
                )}
            </div>
        
        </>

    );

}
 export default ToDoForm;