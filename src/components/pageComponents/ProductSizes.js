import React, { Component } from 'react';



class ProductSizes extends Component {

    
    render() {
        console.log(this.props.activeAttribute)
        const {sizes, name} = this.props
        return (
            <div className='product-sizes'>
                {sizes.map((size, key) => (
                    <button onClick={(e) => this.props.onPress(e)} data-name={name} data-value={size.value} data-displayvalue={size.displayValue} key={key} className={`product-size ${this.props.activeAttribute === size.value? 'product-size-active': ''}`}>
                    {size.value}
                    </button>
                ))}
            </div>
        );
    }
}

export default ProductSizes;
