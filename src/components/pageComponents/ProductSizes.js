import React, { Component } from 'react';

class ProductSizes extends Component {
    render() {
        return (
            <div className='product-sizes'>
                <div className="product-size">
                    <span>XS</span>
                </div>
                <div className="product-size">
                    <span>S</span>
                </div>
                <div className="product-size">
                    <span>M</span>
                </div>
                <div className="product-size">
                    <span>L</span>
                </div>
            </div>
        );
    }
}

export default ProductSizes;
