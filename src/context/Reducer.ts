
type State = {
    User: any,
}
type Action = {
    key: string,
    type: string,
    payload: Array<any>
}

const Reducer = (state: State,  action: Action) => {                                           
    let key = action.key;                                                       
    switch (action.type) {                                                      
        case 'SET':                                                             
            return {                                                            
                ...state,                                                       
               [key]: action.payload                                            
            };                                                                  
                                                                                
        case 'OVERRIDE':                                                        
            return {                                                            
                ...state,                                                       
               ...action.payload                                                
            };                                                      
        default:                                                                
            return state;                                                       
    }                                                                           
};                                                                              
                                                                                
export default Reducer; 