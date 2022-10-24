import React, { Component } from 'react';



class ProductSizes extends Component {

    
    render() {

        const { sizes, name, small } = this.props
        
        return (
            <div className={small?'small-product-sizes':'product-sizes' }>
                {sizes.map((size, key) => (
                    <button onClick={(e) => this.props.onPress(e)} data-name={name} data-value={size.value} data-displayvalue={size.displayValue} key={key} className={small?`small-product-size ${this.props.activeAttribute === size.value? 'small-product-size-active': ''}`:`product-size ${this.props.activeAttribute === size.value? 'product-size-active': ''}`}>
                    {size.value}
                    </button>
                ))}
            </div>
        );
    }
}

export default ProductSizes;
