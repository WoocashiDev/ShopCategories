import React, { Component } from 'react';

class ProductSectionTitle extends Component {
    render() {
        return (
            <span class="product-sectiontitle">
                {this.props.sectionTitle}
            </span>
        );
    }
}

export default ProductSectionTitle;
