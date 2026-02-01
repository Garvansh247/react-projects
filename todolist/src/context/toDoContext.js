import { createContext,useContext } from "react";


export const toDoContext = createContext({
    toDos: [
        {
            id : 1,
            toDoText : "Sample ToDo",
            isCompleted : false,
            showError : false
        }
    ],
    addToDo : (toDo) => {},
    deleteToDo : (id) => {},
    updateToDo : (id, updatedToDo) => {},
    toggleTodoCompletion : (id) => {},
    showError : false,
    setShowError : () => {},
    setToDoError : (id,value) => {}
});

export const ToDoContextProvider = toDoContext.Provider;

export function useToDo(){
    return useContext(toDoContext);
}