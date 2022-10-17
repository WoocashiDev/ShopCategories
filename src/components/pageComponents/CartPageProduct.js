import React, { Component } from 'react';
import ProductTitle from './ProductTitle';
import ProductSectionTitle from './ProductSectionTitle';
import ProductPrice from './ProductPrice';
import ProductColors from './ProductColors';
import ProductSizes from './ProductSizes';
import CartPageSlider from './CartPageSlider';

class CartPageProduct extends Component {
    render() {
        return (
            <div className='cartpage-product'>
                <div className="cartpage-product-choice-layout">
                    <ProductTitle/>

                    <ProductPrice price="$50.00" />
                    
                    <div className="cartpage-product-section">
                        <ProductSectionTitle sectionTitle="Size:" />
                        <ProductSizes />
                    </div>
                    <div className='productpage-product-section'>
                        <ProductSectionTitle sectionTitle="Color:" />
                        <ProductColors/>
                    </div>
                </div>
                <CartPageSlider/>
            </div>
        );
    }
}

export default CartPageProduct;
