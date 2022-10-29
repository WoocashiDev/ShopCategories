import React, { Component } from 'react';

class CartPageOrderBtn extends Component {
    render() {
        return (
            <button className="cartpage-order-btn">{this.props.text}</button>
        );
    }
}

export default CartPageOrderBtn;
