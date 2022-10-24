import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartPageProduct from '../pageComponents/CartPageProduct';
import { Link } from 'react-router-dom';

class CartDropdown extends Component {

    calculateValue = () => {
        const value = this.props.cartItems.reduce((accumulator, object) => {
          return accumulator + object.quantity*object.item.prices[0].amount
        }, 0)
        return value.toFixed(2)
    }
    
    calculateQuantity = () => {
        const quantity = this.props.cartItems.reduce((accumulator, object) => {
          return accumulator + object.quantity
        }, 0);
        return quantity
      }
    
    render() {
        const cartItems = this.props.cartItems
        console.log()
        return (
            <div className="cartdropdown-overlay-container">
                <div className="cart-dropdown">
                    <div className='cart-dropdown-container'>
                        <h4 className='cart-dropdown--title'><strong>My Bag</strong> {this.calculateQuantity()} items</h4>
                        {cartItems.map((item, key) => (<CartPageProduct small={true} key={key} cartItem={item} />))}
                        <div className='cart-dropdown-summary'>
                            <div className='cart-dropdown-row'>
                                <div className='cart-dropdown-total-label'>Total</div>
                                <div className='cart-dropdown-total-amount'>${this.calculateValue()}</div>
                            </div>
                            <div className='cart-dropdown-row'>
                                <Link to="/cart" className='cart-dropdown-button cart-dropdown-button-empty'>View Bag</Link>
                                <div className='cart-dropdown-button cart-dropdown-button-filled'>Check Out</div>
                            </div>
                        </div>
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
