import { GET_PROMOTIONS } from '../types';

export const getPromotions = () => (dispatch) => {
    const promotions = [
        require('../../assets/promo1.png'),
        require('../../assets/promo2.png'),
        require('../../assets/promo3.png')
    ]

    dispatch({
        type: GET_PROMOTIONS,
        payload: promotions
    });
}