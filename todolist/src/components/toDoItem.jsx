import React from "react";

import { useState } from "react";
import {useToDo} from '../context/index.js';
import {Pencil,Save,X} from 'lucide-react';

function ToDoItem({ toDo }) {
    const { deleteToDo, updateToDo, toggleTodoCompletion, setToDoError } = useToDo();
    const [isEditing, setIsEditing] = useState(false);
    const [toDoText,setToDoText] = useState(toDo.toDoText);

    
    return (
        <>
            <div className={`flex flex-col justify-between border-b p-2 ${toDo.isCompleted ? 'bg-green-300' : 'bg-yellow-300' }`}>
                    <div className="flex items-center gap-4">
                        <input 
                            className="w-4 h-4"
                            type="checkbox" 
                            checked={toDo.isCompleted} // checked attribute to reflect completion status
                            onChange={()=>{toggleTodoCompletion(toDo.id); setToDoError(toDo.id,false)}} // here i set toDoError to false because if user marks a todo as completed then even if it was duplicate earlier it should not show error
                        />
                        
                        <input className={`bg-transparent focus:outline-none ${toDo.isCompleted ? 'line-through text-gray-600' : '' }`}
                            type="text"
                            onChange={(e)=>{setToDoError(toDo.id,false); setToDoText(e.target.value); }}
                            readOnly={!isEditing} // if isEditing is false then input is readOnly else editable
                            value={!isEditing ? toDo.toDoText : toDoText} // when not editing show original text else show the one being edited as if it was duplicated text given while editing it remains in the input field but reset to toDo.toDoText if it was duplicate on saving
                        />
                        <div className="flex gap-4">


                            {/* Edit */}
                            { !isEditing && !toDo.isCompleted && <button disabled={toDo.isCompleted} onClick={()=>setIsEditing(true)}><Pencil className="w-5 h-5 text-blue-600 hover:text-blue-800 cursor-pointer" /></button>}

                            {/* Save */}
                            { isEditing && !toDo.isCompleted && <button disabled={toDo.isCompleted} onClick={()=>{
                                updateToDo(toDo.id,{toDoText : toDoText});
                                setToDoText(toDo.toDoText); // if updateToDo fails due to duplicate, revert back to original text or if updated then it remains the same updated text as it was while we were typing
                                setIsEditing(false);
                            }}><Save className="w-5 h-5 text-green-600 hover:text-green-800 cursor-pointer" /></button>}


                        
                        
                        {/* Cancel / Close */}
                        <button onClick={()=>deleteToDo(toDo.id)}><X className="w-5 h-5 text-red-600 hover:text-red-800 cursor-pointer" /></button>
                        </div>
                    </div>
                    { toDo.showError &&
                        <div className="text-red-600">
                            
                                <div className="border p-2 bg-red-200 rounded">
                                    <p> This entry is already present in the todo list</p>
                                    <button className="bg-red-400 p-1 rounded" onClick={()=>setToDoError(toDo.id,false)}>OK</button>
                                </div>
                            

                        </div>
                    }           
                
            </div>
        </>
    )
    

}

export default ToDoItem;