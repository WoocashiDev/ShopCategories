import React, { Component } from 'react';
import ProductSizes from './ProductSizes';
import ProductColors from './ProductColors';


class ProductPageSection extends Component {

    selectAttribute = (e) => {
        let attributeValue = e.target.getAttribute("data-value")
        let attributeName = e.target.getAttribute("data-name")
        console.log(attributeValue)
        console.log(attributeName)
    }

    render() {
        const {type, items, name} = this.props.attribute
        return (
            <div className='productpage-product-section'>
                <span className="product-sectiontitle">
                    {name}
                </span>
                {type === "swatch" ? <ProductColors onPress={this.props.onPress} name={name} colors={items}/>:<ProductSizes onPress={this.props.onPress} name={name} sizes={items}/>}
            </div>
        );
    }
}

export default ProductPageSection;
