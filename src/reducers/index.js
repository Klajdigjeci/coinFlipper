import { combineReducers } from 'redux';

const sideReducer = (state="heads",action) =>{
    if(action.type==="GET_SIDE"){
        return action.payload
    }

    return state;
}

const flipReducer = (state= false,action) =>{
    if(action.type === "GET_FLIP"){
        return action.payload
    }
    return state
}

 export default combineReducers({
     side: sideReducer,
     flipped: flipReducer
 })
