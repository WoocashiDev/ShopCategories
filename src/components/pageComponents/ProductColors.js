import React, { Component } from 'react';

class ProductColors extends Component {

    render() {
        const { colors, name } = this.props
        const small = this.props.small
        
        return (
            <div className={ small?"small-product-colors":"product-colors"}>
                {colors.map((color, key) => (
                    <div key={key} className={small?`small-product-colorbox ${this.props.activeAttribute === color.value? 'small-product-colorbox-active': ''}`:`product-colorbox ${this.props.activeAttribute === color.value? 'product-colorbox-active': ''}`}>
                        <div onClick={(e) => this.props.onPress(e)} data-value={color.value} data-name={name} data-displayvalue={color.displayValue} className={ small?"small-product-color":"product-color" } style={{background: color.value}}></div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ProductColors;
