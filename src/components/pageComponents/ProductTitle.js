import React, { Component } from 'react';

class ProductTitle extends Component {
    render() {
        const small = this.props.small
        return (
            <div className={small?"small-product-title":"product-title" }>
                <h3 className={small? "small-product-title--brand" : "product-title--brand"}>
                        {this.props.brand}
                    </h3>
                <h4 className={small?"small-product-title--name": "product-title--name"}>
                    {this.props.name}
                </h4>
            </div>
        );
    }
}

export default ProductTitle;
