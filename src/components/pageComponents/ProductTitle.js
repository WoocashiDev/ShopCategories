import React, { Component } from 'react';

class ProductTitle extends Component {
    render() {
        return (
            <div className="product-title">
                <h3 className="product-title--brand">
                        {this.props.brand}
                    </h3>
                    <h4 className="product-title--name">
                    {this.props.name}
                </h4>
            </div>
        );
    }
}

export default ProductTitle;
