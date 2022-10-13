import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import cartSvg from '../../assets/icons/cart.svg';
import currencySvg from '../../assets/icons/currency.svg';


class Actions extends Component {
    render() {
        return (
            <div className="header-actions">
                <div className="header-actions--container">
                    <NavLink to=""><img src={currencySvg } alt="currency-icon" /></NavLink>
                </div>
                <div className="header-actions--container">
                    <NavLink to="/cart"><img src={cartSvg } alt="cart-icon" /></NavLink>
                </div>
            </div>
        );
    }
}

export default Actions;
