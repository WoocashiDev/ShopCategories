import React, { Component } from 'react';
import CartPageProduct from '../components/cartPageComponents/CartPageProduct';
import CartPageOrderBtn from '../components/cartPageComponents/CartPageOrderBtn';
import CartPageSummary from '../components/cartPageComponents/CartPageSummary';
import { connect } from 'react-redux';


class CartPage extends Component {

  
  render() {
    const cartItems = this.props.cartItems
    return (
      <div className="container cartpage">
        <h3 className="cartpage-title">Cart</h3>
        {cartItems.map((item, key) => (<CartPageProduct small={false} key={key} cartItem={item} />))}
        <CartPageSummary small={false} />
        <CartPageOrderBtn small={false} text="order"/>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  cartItems: state.cartItems
})

export default connect(mapStateToProps, null) (CartPage)
