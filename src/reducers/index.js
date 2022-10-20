import {combineReducers} from '@reduxjs/toolkit';
import cartItemReducer from './cartItem';

const allReducers = combineReducers({
    cartItems: cartItemReducer
})

export default allReducers