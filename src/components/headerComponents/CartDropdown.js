import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartPageProduct from '../cartPageComponents/CartPageProduct';
import { Link } from 'react-router-dom';

class CartDropdown extends Component {

    calculateValue = () => {
        const value = this.props.cartItems.reduce((accumulator, object) => {
          return accumulator + object.quantity*object.item.prices[this.props.activeCurrency.index].amount
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
        const {symbol} = this.props.activeCurrency
        console.log()
        return (
                <div className="cart-dropdown">
                    <div className='cart-dropdown-container'>
                    <h4 className='cart-dropdown--title'>
                        <strong>My Bag</strong> {this.calculateQuantity()} items
                    </h4>
                        {cartItems.map((item) => (<CartPageProduct small={true} key={item.id} cartItem={item} />))}
                        <div className='cart-dropdown-summary'>
                            <div className='cart-dropdown-row'>
                                <div className='cart-dropdown-total-label'>Total</div>
                            <div className='cart-dropdown-total-amount'>
                                {symbol}{this.calculateValue()}
                            </div>
                            </div>
                            <div className='cart-dropdown-row'>
                                <Link onClick={()=>this.props.hideDropdowns()} to="/cart" className='cart-dropdown-button cart-dropdown-button-empty'>View Bag</Link>
                                <div onClick={()=>this.props.hideDropdowns()} className='cart-dropdown-button cart-dropdown-button-filled'>Check Out</div>
                            </div>
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
  
  export default connect(mapStateToProps, null) (CartDropdown);
