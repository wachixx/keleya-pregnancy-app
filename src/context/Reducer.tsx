import {IAction, IState } from "./Interfaces";

const Reducer = (state: IState, action: IAction): IState => {                  
    switch (action.type) {                                                      
        case 'CREATE':                                                             
            return {                                                            
                ...state,                                                       
                user: action.payload                                            
            };                                                                                                                                      
        case 'UPDATE':                                                        
            return {                                                            
                ...state,                                                       
               ...action.payload                                                
            };                                                     
        default:                                                                
            return state;                                                       
    }                                                                           
};                                                                              
                                                                                
export default Reducer; 