import { GET_PROMOTIONS } from '../types';
import promotions from '../../mockData/promotions';

export const getPromotions = () => (dispatch) => {
    dispatch({
        type: GET_PROMOTIONS,
        payload: promotions,
    });
};
