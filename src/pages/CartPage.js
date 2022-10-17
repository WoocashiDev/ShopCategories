import React, { Component } from 'react';
import CartPageProduct from '../components/pageComponents/CartPageProduct';
import CartPageOrderBtn from '../components/pageComponents/CartPageOrderBtn';
import CartPageSummary from '../components/pageComponents/CartPageSummary';


export default class CartPage extends Component {
  render() {
    return (
      <div className="container cartpage">
        <h3 className="cartpage-title">Cart</h3>
        <CartPageProduct />
        <CartPageProduct />
        <CartPageSummary />
        <CartPageOrderBtn text="order"/>
    </div>
    )
  }
}
