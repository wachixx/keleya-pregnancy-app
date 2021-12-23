import React, {createContext, useReducer} from "react";              
import Reducer from './Reducer';
            
                                                                                                                                                         
const initialState = {user: []}      
                                                                                                                           
export const Context = createContext(initialState);                                                     
                                                                                
const Store = ({children}: {children:any}) => {                                                 
    const [state, dispatch] = useReducer(Reducer, initialState);                                                                                                                                               
    return (                                                                    
        <Context.Provider value={[state, dispatch]}>                            
            {children}                                                          
        </Context.Provider>                                                     
    )                                                                           
};  

export default Store;