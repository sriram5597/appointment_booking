import { GET_OFFERS } from '../types';

export const getOffers = () => (dispatch) => {
    const offers = [
        {
            offerId: 1,
            shopName: 'Tony & Guy',
            rating: 4,
            image: require('../../assets/pop1.png'),
            offer: 20
        },
        {
            offerId: 2,
            rating: 4.2,
            shopName: 'Green Trends',
            image: require('../../assets/pop2.png'),
            offer: 15
        },
        {
            offerId: 3,
            rating: 4.1,
            shopName: 'Lakme Salon',
            image: require('../../assets/pop5.png'),
            offer: 20
        }
    ];

    dispatch({
        type: GET_OFFERS,
        payload: offers
    })
}