const Reducer = (state,  action) => {                                           
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