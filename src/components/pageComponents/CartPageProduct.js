import React, { Component } from 'react';
import DefaultImage from '../../assets/images/default.png';

class CartPageProduct extends Component {
    render() {
        return (
            <div className='productpage-product'>
                <img className='productpage-product--image' src={DefaultImage} alt="product" />
                <div className="productpage-product-description">
                    <h3 className="productpage-product-description--brand">
                        Apollo
                    </h3>
                    <h4 className="productpage-product-description--name">
                        Running Short
                    </h4>
                    <span className="productpage-product-description--header">Size:</span>
                    <div className='productpage-product-sizes'>
                        <div className="productpage-product-size">
                            <span>XS</span>
                        </div>
                        <div className="productpage-product-size">
                            <span>S</span>
                        </div>
                        <div className="productpage-product-size">
                            <span>M</span>
                        </div>
                        <div className="productpage-product-size">
                            <span>L</span>
                        </div>
                    </div>

                    <span className="productpage-product-description--header">Color:</span>
                    <div className="productpage-product-colors">
                        <div className="productpage-product-colorbox">
                            <div className="productpage-product-color">
                            </div>
                        </div>
                        <div className="productpage-product-colorbox">
                            <div className="productpage-product-color">
                            </div>
                        </div>
                        <div className="productpage-product-colorbox">
                            <div className="productpage-product-color">
                            </div>
                        </div>
                    </div>

                    <span className="productpage-product-description--header">Price:</span>
                    <span className="productpage-product-description--price">$50.00</span>
                    <button className="productpage-product-description--btn">add to cart</button>
                    <div className="productpage-product-description--text">
                    Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
                    </div>
                </div>
            </div>
        );
    }
}

export default CartPageProduct;
