import { GET_SHOPS, GET_SHOP } from '../types';

const initialState = {
    shops: [],
    shop: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_SHOPS: 
            return {
                ...state,
                shops: action.payload
            }

        case GET_SHOP:
            return {
                ...state,
                shop: action.payload
            }
        
        default:
            return state;
    }
}