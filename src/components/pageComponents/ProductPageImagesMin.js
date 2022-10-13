import React, { Component } from 'react';
import DefaultImage from '../../assets/images/default.png';

export default class ProductPageImagesMin extends Component {
  render() {
    return (
        <div className='productpage-imagesmin'>
            <div className='productpage-imagemin'>
                <img className="productpage-imagemin--image" src={ DefaultImage } alt="product-miniature" />
            </div>
            <div className='productpage-imagemin'>
                <img className="productpage-imagemin--image" src={ DefaultImage } alt="product-miniature" />
            </div>
            <div className='productpage-imagemin'>
                <img className="productpage-imagemin--image" src={ DefaultImage } alt="product-miniature" />
            </div>
      </div>
    )
  }
}
