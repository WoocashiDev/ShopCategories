import React, { Component } from 'react';

class ProductDescription extends Component {
    render() {
        return (
            <div className="product-description">
                    {this.props.description}
            </div>
        );
    }
}

export default ProductDescription;
