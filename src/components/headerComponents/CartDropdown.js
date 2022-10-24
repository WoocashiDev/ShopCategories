import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartPageOrderBtn from '../pageComponents/CartPageOrderBtn';
import CartPageProduct from '../pageComponents/CartPageProduct';
import CartPageSummary from '../pageComponents/CartPageSummary';

class CartDropdown extends Component {
    
    render() {
        const cartItems = this.props.cartItems
        return (
            <div className="cartdropdown-overlay-container">
                <div className="cart-dropdown">
                    <div className='cart-dropdown-container'>
                        <h4 className='cart-dropdown--title'><strong>My Bag</strong> {cartItems.length} items</h4>
                        {cartItems.map((item, key) => (<CartPageProduct key={key} cartItem={item} />))}
                        <CartPageSummary />
                        <CartPageOrderBtn text="order"/>
                    </div>
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartItems: state.cartItems
  })

export default connect(mapStateToProps, null) (CartDropdown);
