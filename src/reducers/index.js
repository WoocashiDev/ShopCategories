import {combineReducers} from '@reduxjs/toolkit';
import cartItemReducer from './cartItem';
import currencyReducer from './currency';

const allReducers = combineReducers({
    cartItems: cartItemReducer,
    activeCurrency: currencyReducer
})

export default allReducers