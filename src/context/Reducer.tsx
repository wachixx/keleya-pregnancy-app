import {IAction, IState } from "./Interfaces";

const Reducer = (state: IState, action: IAction): IState => { 
    let key = action.key;                 
    switch (action.type) {                                                      
        case 'CREATE':                                                             
            return {                                                            
                ...state,                                                       
                [key]: action.payload                                           
            };                                                                                                                                      
        case 'UPDATE':                                                        
            return {                                                            
                ...state, [key]: action.payload                                                
            };                                                     
        default:                                                                
            return state;                                                       
    }                                                                           
};                                                                              
                                                                                
export default Reducer; 