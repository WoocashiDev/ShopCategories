import React, { Component } from 'react';
import ProductTitle from '../commonComponents/ProductTitle';
import ProductSectionTitle from '../commonComponents/ProductSectionTitle';
import ProductPrice from './ProductPrice';
import ProductPrimaryBtn from './ProductPrimaryBtn';
import ProductDescription from './ProductDescription';
import ProductPageSection from './ProductPageSection';
import { connect } from "react-redux";
import { addItem } from '../../actions/index';



class ProductPageProduct extends Component {

    state = {
        item: {},
        selectedAttributes: []
    }


    getInitialAttributes = () => {
        const attribArray = this.props.product.attributes.map((attr) => (
            {
                name: attr.name,
                value: attr.items[0].value,
                displayValue: attr.items[0].displayValue

            }
                
        ))
        return attribArray
    }

    componentDidMount() {
        this.setState({
            
            selectedAttributes: this.getInitialAttributes(),
            item: this.props.product
            
        })
    }

    addToCart = () => {
        this.props.addItem(this.state.item, this.state.selectedAttributes)
    }


    selectAttribute = (e) => {
        const attributeValue = e.target.getAttribute("data-value")
        const attributeName = e.target.getAttribute("data-name")
        const attributeDisplayValue = e.target.getAttribute("data-displayvalue")

        const newState = this.state.selectedAttributes.map((attr) => {
            if (attr.name === attributeName) {
                const newObject = {
                    name: attributeName,
                    value: attributeValue,
                    displayValue: attributeDisplayValue
                }
                return newObject
            } else return {name: attr.name, value:attr.value, displayValue:attr.displayValue}
        })

       this.setState({selectedAttributes:newState})

    }

        render() {
            const { name, brand, prices, attributes, description, inStock } = this.props.product

            const {index,symbol} = this.props.activeCurrency
        
            return (
                <div className='productpage-product'>
                    <div className="productpage-product-description-layout">
                        <ProductTitle name={name} brand={brand} />
                        {attributes.map((attribute, key) => (
                            <ProductPageSection onPress={(e) => this.selectAttribute(e)} key={key} attribute={attribute} selectedAttributes={this.state.selectedAttributes.length !== 0?this.state.selectedAttributes:this.getInitialAttributes()} />
                        ))}
                    
                        <ProductSectionTitle getAttributes={this.getAttributes} sectionTitle="Price:" />
                        <ProductPrice currency={symbol} price={prices[index].amount} />

                        
                        {inStock?<ProductPrimaryBtn attributes={this.state.selectedAttributes} onPress={() => this.addToCart()} text="Add to cart" />:<button className="product-disabled-btn">Out of stock</button>}
                    
                        <ProductDescription description={description} />

                    </div>
                </div>
            );
        }
    }


const mapStateToProps = state => ({
    cartItems: state.cartItems,
    activeCurrency: state.activeCurrency
    })
      
    export default connect(mapStateToProps, {addItem}) (ProductPageProduct);
