import { createSlice,nanoid } from "@reduxjs/toolkit";


const storedTodos = (() => {
    try {
        const data = JSON.parse(localStorage.getItem("todos"));
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
})();

const initialState = {
    todos: storedTodos,
    todoUpdate: {
        status: false,
        id: null,
        initialText: ""
    }
};

export const todosSlice= createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo : (state,action)=>{
            state.todos.push({
                id : nanoid(),
                text : action.payload,
                completed : false,
                // duplicateError: false // added this because i will not have each todo as a separate component and i will not be able to manage local state for each todo item using useState
            });
        },
        removeTodo : (state,action) =>{
            state.todos= state.todos.filter((item)=> item.id !== action.payload);
        },
        updateTodo : (state,action)=>{ // we will get id and text in payload
            state.todos= state.todos.map((item)=>item.id === action.payload.id ? {...item, ...action.payload}: item)
        },
        discardUpdate : (state)=>{
            state.todoUpdate= {status: false, id: null, initialText : ""};
        },
        setUpdateTodo : (state,action)=>{
            state.todoUpdate= {status: true, id: action.payload.id, initialText : action.payload.text};
        },
        toggleTodoCompletion : (state,action)=>{
            state.todos= state.todos.map((item)=>item.id===action.payload ? {...item,completed : !item.completed}: item);
        },
        // setDuplicateErrorTo : (state,action)=>{ // requires either true or false as payload and id of the item for which we want to set duplicateError
        //     state.todos= state.todos.map((item)=>item.id===action.payload.id ? {...item, duplicateError: action.payload.duplicateError}: item);
        // } //duplicate error while adding a todo in the form can be handled in the component where form is present but duplicate error while editing a todo item can only be handled here in the slice because we will not have separate component for each todo item and we will not be able to manage local state for each todo item using useState so we will have to manage duplicateError for each todo item in the global state itself and for that we need this reducer to set duplicateError to true or false for a particular todo item based on the id of that item which is also present in the payload of this action creator.
        
        // above reducer not needed now because i will useState for error in the pop up component where i update the todo item
    }
});

export const { addTodo, removeTodo, updateTodo, discardUpdate, setUpdateTodo, toggleTodoCompletion } = todosSlice.actions;

export default todosSlice.reducer;