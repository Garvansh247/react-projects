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
                            checked={toDo.isCompleted}
                            onChange={()=>{toggleTodoCompletion(toDo.id); setToDoError(toDo.id,false)}}
                        />
                        
                        <input className={`bg-transparent focus:outline-none ${toDo.isCompleted ? 'line-through text-gray-600' : '' }`}
                            type="text"
                            onChange={(e)=>{setToDoError(toDo.id,false); setToDoText(e.target.value); }}
                            readOnly={!isEditing}
                            value={!isEditing ? toDo.toDoText : toDoText}
                        />
                        <div className="flex gap-4">
                        {/* Edit */}
                        { !isEditing && <button disabled={toDo.isCompleted} onClick={()=>setIsEditing(true)}><Pencil className="w-5 h-5 text-blue-600 hover:text-blue-800 cursor-pointer" /></button>}

                        {/* Save */}
                        { isEditing && <button disabled={toDo.isCompleted} onClick={()=>{
                            updateToDo(toDo.id,{toDoText : toDoText});
                            setToDoText(toDo.toDoText);
                            setIsEditing(false);
                        }}><Save className="w-5 h-5 text-green-600 hover:text-green-800 cursor-pointer" /></button>}

                        {/* Cancel / Close */}
                        <button onClick={()=>deleteToDo(toDo.id)}><X className="w-5 h-5 text-red-600 hover:text-red-800 cursor-pointer" /></button>
                        </div>
                    </div>
                    <div className="text-red-600">
                        {
                            toDo.showError && 
                            (<div className="border p-2 bg-red-200 rounded">
                                <p> This entry is already present in the todo list</p>
                                <button className="bg-red-400 p-1 rounded" onClick={()=>setToDoError(toDo.id,false)}>OK</button>
                            </div>)
                        }

                    </div>
                
            </div>
        </>
    )
    

}

export default ToDoItem;