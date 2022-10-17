import React, { Component } from 'react';

export default class CartPageSummary extends Component {
  render() {
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
