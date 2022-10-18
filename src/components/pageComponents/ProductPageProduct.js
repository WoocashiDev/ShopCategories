import React, { Component } from 'react';
import ProductTitle from './ProductTitle';
import ProductSectionTitle from './ProductSectionTitle';
import ProductPrice from './ProductPrice';
import ProductPrimaryBtn from './ProductPrimaryBtn';
import ProductDescription from './ProductDescription';
import ProductPageSection from './ProductPageSection';



class ProductPageProduct extends Component {

    render() {
        const { name, brand, prices, attributes, description } = this.props.product
        console.log(this.props.product)
        return (
            <div className='productpage-product'>
                <div className="productpage-product-description-layout">
                    <ProductTitle name={name} brand={brand} />
                    {attributes.map((attribute, key) => (
                        <ProductPageSection key={key} attribute={attribute}/> 
                    ))}
                    
                    <ProductSectionTitle sectionTitle="Price:" />
                    <ProductPrice currency={ prices[0].currency.symbol } price={ prices[0].amount } />

                    
                    <ProductPrimaryBtn text="Add to cart" />
                    
                    <ProductDescription description={description}/>

                </div>
            </div>
        );
    }
}

export default ProductPageProduct;
