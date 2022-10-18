import React, { Component } from 'react';


class ProductSizes extends Component {
    render() {
        const sizes = this.props.sizes
        return (
            <div className='product-sizes'>
                {sizes.map((size, key) => (
                    <div key={key } className="product-size">
                        <span>{size.value}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default ProductSizes;
