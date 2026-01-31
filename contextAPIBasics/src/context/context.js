import { createContext,useContext } from "react";


export const Context=createContext(
    {
        user : null,
        setUser: ()=>{},
        theme : "light",
        toggleTheme : ()=>{},
    }
);

export const ContextProvider=Context.Provider;

function useAppContext(){
    return useContext(Context);
}
export default useAppContext;