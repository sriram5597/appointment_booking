import { GET_ALL_BOOKINGS, GET_BOOKING, ADD_BOOKING } from '../types';

const initialState = {
    bookings: [],
    booking: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ALL_BOOKINGS: 
            return {
                ...state,
                bookings: action.payload
            }

        case GET_BOOKING:
            return {
                ...state,
                booking: state.bookings[action.payload]
            }

        case ADD_BOOKING:
            return {
                ...state,
                bookings: [...state.bookings, action.payload],
            }

        default:
            return state;
    }
}
