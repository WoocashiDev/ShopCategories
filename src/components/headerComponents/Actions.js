import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import cartSvg from '../../assets/icons/cart.svg';
import currencySvg from '../../assets/icons/currency.svg';
import { connect } from "react-redux";


class Actions extends Component {


    render() {
        return (
            <div className="header-actions">
                <div className="header-actions--container">
                    <NavLink to=""><img src={currencySvg } alt="currency-icon" /></NavLink>
                </div>
                <div className="header-actions--container">
                    <NavLink className="header-actions-cart" to="/cart">
                        <img src={cartSvg} alt="cart-icon" />
                        {this.props.cartItems.length === 0 ? "" : <div className="header-actions-cart-count">
                            {this.props.cartItems.length}
                        </div>}
                    </NavLink>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartItems: state.cartItems
})

export default connect(mapStateToProps, null)(Actions);
