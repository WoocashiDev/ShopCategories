import React, { Component } from 'react';

class ProductDescription extends Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.props.description}} className="product-description">
            </div>
        );
    }
}

export default ProductDescription;
