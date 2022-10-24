import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import cartSvg from '../../assets/icons/cart.svg';
import currencySvg from '../../assets/icons/currency.svg';
import { connect } from "react-redux";
import CartDropdown from './CartDropdown';


class Actions extends Component {

    render() {
        const {onCartPress, isCartActive} = this.props
        return (
            <div className="header-actions">
                <div className="header-actions--container">
                    <NavLink to=""><img src={currencySvg } alt="currency-icon" /></NavLink>
                </div>
                <div className="header-actions--container">
                    <div className="header-actions-cart">
                        <img onClick={onCartPress} src={cartSvg} alt="cart-icon" />
                        {this.props.cartItems.length === 0 ? "" : <div className="header-actions-cart-count">
                            {this.props.cartItems.length}
                        </div>}
                        {isCartActive?<CartDropdown/>:""}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartItems: state.cartItems
})

export default connect(mapStateToProps, null)(Actions);
