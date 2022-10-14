import React, { Component } from 'react';

class ProductPrimaryBtn extends Component {
    render() {
        return (
            <button className="product-primary-btn">{this.props.text}</button>
        );
    }
}

export default ProductPrimaryBtn;
