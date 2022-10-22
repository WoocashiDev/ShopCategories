import React, { Component } from 'react';

class ProductColors extends Component {

    render() {
        const { colors, name } = this.props
        
        return (
            <div className="product-colors">
                {colors.map((color, key) => (
                    <div key={key} className={`product-colorbox ${this.props.activeAttribute === color.value? 'product-colorbox-active': ''}`}>
                        <div onClick={(e) => this.props.onPress(e)} data-value={color.value}  data-name={name} data-displayvalue={color.displayValue} className="product-color" style={{background: color.value}}></div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ProductColors;
