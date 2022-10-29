import React, { Component } from 'react';

class ProductPrice extends Component {
    render() {
        const small = this.props.small
        return (
            <span className={small?"small-product-price":"product-price"}>{this.props.currency}{this.props.price}</span>
        );
    }
}

export default ProductPrice;
