import { GET_PROMOTIONS } from '../types';

const initialState = {
    promotions: [],
    promotion: {},
};

function reducer(state = initialState, action) {
    switch (action.type) {
    case GET_PROMOTIONS:
        return {
            ...state,
            promotions: action.payload,
        };

    default:
        return state;
    }
}

export default reducer;
