import React, { Component } from 'react';
import CartPageProduct from '../components/pageComponents/CartPageProduct';
import CartPageOrderBtn from '../components/pageComponents/CartPageOrderBtn';
import CartPageSummary from '../components/pageComponents/CartPageSummary';
import { connect } from 'react-redux';


class CartPage extends Component {



  
  render() {
    const cartItems = this.props.cartItems
    return (
      <div className="container cartpage">
        <h3 className="cartpage-title">Cart</h3>
        {cartItems.map((item, key) => (<CartPageProduct key={key} cartItem={item} />))}
        <CartPageSummary />
        <CartPageOrderBtn text="order"/>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  cartItems: state.cartItems
})

export default connect(mapStateToProps, null) (CartPage)
