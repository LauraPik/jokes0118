import React, { useContext, useReducer } from "react";
import TodoReducer from "../reducers/TodoReducer";


const AppContext = React.createContext(); 

const initialState = []

const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(TodoReducer, initialState)
    
    return(
        <AppContext.Provider value={{
            ...state,
            
        }}>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}


export {AppContext, AppProvider}