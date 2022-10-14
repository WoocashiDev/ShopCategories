import React, { Component } from 'react';

class ProductPrice extends Component {
    render() {
        return (
            <span className="productpage-product-description--price">{this.props.price}</span>
        );
    }
}

export default ProductPrice;
