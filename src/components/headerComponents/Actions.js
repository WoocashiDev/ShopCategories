import React, { Component } from 'react';
import cartSvg from '../../assets/icons/cart.svg';
import currencySvg from '../../assets/icons/currency-arrow.svg';
import { connect } from "react-redux";
import CartDropdown from './CartDropdown';
import CurrencyDropdown from './CurrencyDropdown';


class Actions extends Component {

    calculateQuantity = () => {
        if (this.props.cartItems) {
            const quantity = this.props.cartItems.reduce((accumulator, object) => {
                return accumulator + object.quantity
            }, 0);
            return quantity
        } else {
            return ""
        }
      }

    render() {
        const {onCartPress, onCurrencyPress, isCartActive, isCurrencyActive} = this.props
        return (
            <div className="header-actions">
                <div className="header-actions--container">
                    <div className="header-actions-currency" onClick={onCurrencyPress}>
                        {this.props.activeCurrency.symbol}
                        <div className={isCurrencyActive?"currency-dropdown-icon-active":"currency-dropdown-icon"}><img src={currencySvg} alt="currency-icon" /></div>
                    </div>
                    {isCurrencyActive ? <CurrencyDropdown hideDropdowns={this.props.hideDropdowns } />:""}
                </div>
                <div className="header-actions--container">
                    <div className="header-actions-cart">
                        <div onClick={onCartPress}><img src={cartSvg} alt="cart-icon" />
                        {this.props.cartItems.length === 0 ? "" : <div className="header-actions-cart-count">
                            {this.calculateQuantity()}
                        </div>}</div>
                        {isCartActive?<CartDropdown hideDropdowns={this.props.hideDropdowns }/>:""}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartItems: state.cartItems,
    activeCurrency: state.activeCurrency
})

export default connect(mapStateToProps, null)(Actions);
