import { GET_OFFERS } from '../types';
import offers from '../../mockData/offers';

export const getOffers = () => (dispatch) => {
    dispatch({
        type: GET_OFFERS,
        payload: offers,
    });
};
