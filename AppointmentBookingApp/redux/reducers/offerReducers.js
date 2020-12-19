import { GET_OFFERS } from '../types';

const initialState = {
    offers: [],
    offer: {},
};

function reducer(state = initialState, action) {
    switch (action.type) {
    case GET_OFFERS:
        return {
            ...state,
            offers: action.payload,
        };

    default:
        return state;
    }
}

export default reducer;
