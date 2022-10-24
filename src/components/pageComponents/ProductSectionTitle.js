import React, { Component } from 'react';

class ProductSectionTitle extends Component {
    render() {
        const small = this.props.small
        return (
            <span className={ small?"small-product-sectiontitle":"product-sectiontitle"}>
                {this.props.sectionTitle}
            </span>
        );
    }
}

export default ProductSectionTitle;
