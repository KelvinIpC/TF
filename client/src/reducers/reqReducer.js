import FETCH_REQUEST from '../actions/type';

export const reqReducer = (state = null, action)=>{
    switch(action.type){
        case FETCH_REQUEST: return action.payload || false; 
        default: return null;
        
    }
};