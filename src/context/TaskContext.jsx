import React, { useContext, useReducer, useState } from "react";
import TodoReducer from "../reducers/TodoReducer";


const AppContext = React.createContext(); 

const initialState = {
    jokes: [],
  };

const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(TodoReducer, initialState);
    const fetchJokes = (query) => {
        fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
          .then(response => response.json())
          .then(data => {
            state.jokes.push(...data.result);
          });
      };
    
    return(
        <AppContext.Provider value={{
            ...state,
            dispatch,
            fetchJokes, // Define the fetchJokes prop as a function
            
        }}>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}


export {AppContext, AppProvider}