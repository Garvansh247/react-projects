import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";

export const store= configureStore(
    {
        reducer: { // or simply reducer: todosReducer, when there is only one slice
            todos: todosReducer // this key 'todos' will be used in useSelector to access the todos state
        }
    }
);