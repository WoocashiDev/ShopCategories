import React, { Component } from 'react';

class ProductSectionTitle extends Component {
    render() {
        return (
            <span className="product-sectiontitle">
                {this.props.sectionTitle}
            </span>
        );
    }
}

export default ProductSectionTitle;
