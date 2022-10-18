import React, { Component } from 'react';
import ProductSizes from './ProductSizes';
import ProductColors from './ProductColors';


class ProductPageSection extends Component {

    render() {
        const {type, items, name} = this.props.attribute
        return (
            <div className='productpage-product-section'>
                <span className="product-sectiontitle">
                    {name}
                </span>
                {type==="swatch"?<ProductColors colors={items}/>:<ProductSizes sizes={items}/>}
            </div>
        );
    }
}

export default ProductPageSection;
