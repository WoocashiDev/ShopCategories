import React, { Component } from 'react';

class ProductColors extends Component {

    render() {
        const colors = this.props.colors
        return (
            <div className="product-colors">
                {colors.map((color, key) => (
                    <div key={key} className="product-colorbox">
                        <div className="product-color" style={{background: color.value}}></div>
                    </div>
                ))}
            
            </div>
        );
    }
}

export default ProductColors;
