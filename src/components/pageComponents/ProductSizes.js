import React, { Component } from 'react';



class ProductSizes extends Component {

    state = {
        selectedAtrribute: ""
    }
    
    render() {
        const {sizes, name} = this.props
        return (
            <div className='product-sizes'>
                {sizes.map((size, key) => (
                    <button onClick={(e) => this.props.onPress(e)} data-name={name} data-value={size.displayValue} key={key } className="product-size">
                    {size.value}
                    </button>
                ))}
            </div>
        );
    }
}

export default ProductSizes;
