import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartPageSummary extends Component {

  calculateQuantity = () => {
    const quantity = this.props.cartItems.reduce((accumulator, object) => {
      return accumulator + object.quantity
    }, 0);
    return quantity
  }
  render() {
    console.log(this.calculateQuantity())
    return (

        <div className="cartpage-summary">
        <div className="cartpage-summary-labels">
          <span>Tax 21%</span>
          <span>Quantity:</span>
          <span className="cartpage-summary-label-total">Total:</span>
        </div>
        <div className="cartpage-summary-labels">
          <span><strong>$42.00</strong></span>
          <span><strong>3</strong></span>
          <span><strong>$200.00</strong></span>
        </div>
      </div>
          )
  }
}

const mapStateToProps = state => ({
  cartItems: state.cartItems
})

export default connect(mapStateToProps, null) (CartPageSummary)