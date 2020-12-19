import { GET_ALL_BOOKINGS, GET_BOOKING, ADD_BOOKING } from '../types';

import data from '../../mockData/appointments';

export const getAllBookings = () => (dispatch) => {
    dispatch({
        type: GET_ALL_BOOKINGS,
        payload: [...data],
    });
};

export const getBooking = (index) => (dispatch) => {
    dispatch({
        type: GET_BOOKING,
        payload: index,
    });
};

export const addBooking = (booking) => (dispatch) => {
    dispatch({
        type: ADD_BOOKING,
        payload: booking,
    });
};
