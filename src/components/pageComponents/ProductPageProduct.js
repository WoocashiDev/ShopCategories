import React, { Component } from 'react';
import ProductTitle from './ProductTitle';
import ProductSectionTitle from './ProductSectionTitle';
import ProductPrice from './ProductPrice';
import ProductPrimaryBtn from './ProductPrimaryBtn';
import ProductDescription from './ProductDescription';
import ProductColors from './ProductColors';
import ProductSizes from './ProductSizes';


class ProductPageProduct extends Component {
    render() {
        return (
            <div className='productpage-product'>
                <div className="productpage-product-description-layout">
                    <ProductTitle/>
                    <div className='productpage-product-section'>
                        <ProductSectionTitle sectionTitle="Size:" />
                        <ProductSizes/>
                    </div>
                    <div className='productpage-product-section'>
                        <ProductSectionTitle sectionTitle="Color:" />
                        <ProductColors/>
                    </div>
                    <ProductSectionTitle sectionTitle="Price:" />
                    <ProductPrice price="$50.00" />

                    
                    <ProductPrimaryBtn text="Add to cart" />
                    
                    <ProductDescription description="
                    Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."
                    />
                </div>

                
                
            </div>
        );
    }
}

export default ProductPageProduct;
