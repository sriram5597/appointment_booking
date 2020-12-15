import { GET_SHOP, GET_SHOPS } from '../types';

import shops from '../../mockData/shops';

export const getAllShops = () => (dispatch) => {
    dispatch({
        type: GET_SHOPS,
        payload: shops
    });
}

export const getShop = (index) => (dispatch) => {
    console.log(index);
    dispatch({
        type: GET_SHOP,
        payload: shops[index]
    });
}