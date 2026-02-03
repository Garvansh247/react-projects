import React from "react";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { discardUpdate, updateTodo } from "../features/todos/todosSlice";

function ToDoUpdate() {
    const todoUpdate = useSelector((state) => state.todos.todoUpdate);
    const todos = useSelector((state) => state.todos.todos);
    const [text, setText] = useState(todoUpdate.initialText);
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const inputHandler = (e) => {
        setText(e.target.value);
        setError(false);
    };

    const discardHandler = () => {
        dispatch(discardUpdate());
    };

    const updateHandler = () => {
        const isDuplicate = todos.some(
            (item) => item.id !== todoUpdate.id && item.text === text
        );
        if (isDuplicate) {
            setError(true);
            return;
        }
        dispatch(updateTodo({ id: todoUpdate.id, text }));
        dispatch(discardUpdate());
    };

    return (
        <>
            {/* backdrop */}
            <div className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm z-40" />

            {/* modal */}
            <div
                className="fixed top-1/2 left-1/2 z-50 
                            w-[90%] max-w-xl min-h-[220px]
                            -translate-x-1/2 -translate-y-1/2
                            bg-white dark:bg-gray-800 
                            rounded-xl shadow-2xl p-6
                            flex flex-col gap-8 animate-scaleIn"
         >
                
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 text-center">
                    Update Todo
                </h2>

                <div className="flex gap-2">
                    <input
                        type="text"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 
                                   focus:outline-none focus:ring-2 focus:ring-indigo-500 
                                   dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        value={text}
                        onChange={(e) => inputHandler(e)}
                    />
                    <button
                        onClick={updateHandler}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white 
                                   px-4 py-2 rounded-lg font-medium transition"
                    >
                        Update
                    </button>
                </div>

                <button
                    onClick={discardHandler}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 
                               dark:text-gray-400 dark:hover:text-gray-200 
                               font-semibold"
                >
                    Discard
                </button>

                {error && (
                    <div className="flex flex-col items-center gap-2 bg-red-50 
                                    border border-red-200 rounded-lg p-3">
                        <p className="text-sm text-red-600 font-medium">
                            Duplicate todos are not allowed
                        </p>
                        <button
                            className="text-sm text-red-600 hover:underline"
                            onClick={() => setError(false)}
                        >
                            OK
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default ToDoUpdate;
