import React, { Component } from 'react';
import DefaultImage from '../../assets/images/default.png';

class ProductPageSlider extends Component {
    render() {
        return (
            <div className="productpage-slider">
                <div className='productpage-slider-images-min'>
                    <div className='productpage-slider-image-min'>
                        <img className="productpage-slider-image-min--image" src={ DefaultImage } alt="product-miniature" />
                    </div>
                    <div className='productpage-slider-image-min'>
                        <img className="productpage-slider-image-min--image" src={ DefaultImage } alt="product-miniature" />
                    </div>
                    <div className='productpage-slider-image-min'>
                        <img className="productpage-slider-image-min--image" src={ DefaultImage } alt="product-miniature" />
                    </div>
                </div>
                <div className="productpage-slider-image-main">
                    <img src={DefaultImage} alt="product" />
                </div>
                
            </div>
        );
    }
}

export default ProductPageSlider;
