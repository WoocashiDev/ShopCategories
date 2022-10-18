import React, { Component } from 'react';

class ProductPrice extends Component {
    render() {
        return (
            <span className="product-price">{this.props.currency}{this.props.price}</span>
        );
    }
}

export default ProductPrice;
