import React, { Component } from 'react';
import CartPageProduct from '../components/pageComponents/CartPageProduct';


export default class CartPage extends Component {
  render() {
    return (
      <div className="container cartpage">
        <CartPageProduct />
        <CartPageProduct/>
    </div>
    )
  }
}
