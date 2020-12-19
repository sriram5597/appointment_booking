import { GET_SHOPS, GET_SHOP } from '../types';

const initialState = {
    shops: [],
    shop: {},
};

function reducer(state = initialState, action) {
    switch (action.type) {
    case GET_SHOPS:
        return {
            ...state,
            shops: action.payload,
        };

    case GET_SHOP:
        return {
            ...state,
            shop: action.payload,
        };

    default:
        return state;
    }
}

export default reducer;
