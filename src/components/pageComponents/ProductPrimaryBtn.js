import React, { Component } from 'react';

class ProductPrimaryBtn extends Component {
    render() {
        return (
            <button onClick={this.props.onPress} className="product-primary-btn">{this.props.text}</button>
        );
    }
}

export default ProductPrimaryBtn;
