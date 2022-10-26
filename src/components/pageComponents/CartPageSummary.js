import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartPageSummary extends Component {

  calculateQuantity = () => {
    const quantity = this.props.cartItems.reduce((accumulator, object) => {
      return accumulator + object.quantity
    }, 0);
    return quantity
  }

  calculateValue = () => {
    const value = this.props.cartItems.reduce((accumulator, object) => {
      return accumulator + object.quantity*object.item.prices[this.props.activeCurrency.index].amount
    }, 0)
    return value.toFixed(2)
  }

  calculateTax = () => {
    const taxValue = this.calculateValue(this.props.activeCurrency) * 0.21
    return taxValue.toFixed(2)
  }


  render() {
    const {symbol} = this.props.activeCurrency
    return (
        <div className="cartpage-summary">
        <div className="cartpage-summary-labels">
          <span>Tax 21%</span>
          <span>Quantity: </span>
          <span className="cartpage-summary-label-total">Total:</span>
        </div>
        <div className="cartpage-summary-labels">
          <span><strong>{symbol}{this.calculateTax()}</strong></span>
          <span><strong>{this.calculateQuantity()}</strong></span>
          <span><strong>{symbol}{this.calculateValue()}</strong></span>
        </div>
      </div>
          )
  }
}

const mapStateToProps = state => ({
  cartItems: state.cartItems,
  activeCurrency: state.activeCurrency
})

export default connect(mapStateToProps, null) (CartPageSummary)