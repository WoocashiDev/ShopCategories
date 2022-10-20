import React, { Component } from 'react';

class ProductColors extends Component {

    state = {
        selectedColor: ""
    }

    render() {
        const { colors, name } = this.props
        
        return (
            <div className="product-colors">
                {colors.map((color, key) => (
                    <div key={key} className="product-colorbox">
                        <div onClick={(e) => this.props.onPress(e)} data-name={name} data-value={color.displayValue} className="product-color" style={{background: color.value}}></div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ProductColors;
