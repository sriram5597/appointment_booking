import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//reducers
import promotionReducer from './reducers/promotionReducer';
import offersReducer from './reducers/offerReducers';
import shopReducer from './reducers/shopReducer';
import bookingReducer from './reducers/bookingReducer';

const initialState = { };

const middleware = [thunk];

const reducers = combineReducers({
    promotion: promotionReducer,
    offers: offersReducer,
    shop: shopReducer,
    booking: bookingReducer,
});

const store = createStore(reducers, initialState, compose(
    applyMiddleware(...middleware)
));

export default store;