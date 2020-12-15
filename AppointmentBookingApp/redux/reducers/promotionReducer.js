import { GET_PROMOTIONS } from '../types';

const initialState = {
    promotions: [],
    promotion: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_PROMOTIONS:
            return {
                ...state,
                promotions: action.payload
            }
        
        default:
            return state;
    }
}