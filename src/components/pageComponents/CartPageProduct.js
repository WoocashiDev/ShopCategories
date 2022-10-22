import React, { Component } from 'react';
import ProductTitle from './ProductTitle';
import ProductSectionTitle from './ProductSectionTitle';
import ProductPrice from './ProductPrice';
import CartPageSlider from './CartPageSlider';
import CartPageSection from './CartPageSection';
import { connect } from "react-redux";
import { editItem } from '../../actions/index';

class CartPageProduct extends Component {

    state = {
        item: {},
        selectedAttributes: []
    }

    componentDidMount() {
        this.setState({
            selectedAttributes: this.props.cartItem.selectedAttributes,
            item: this.props.cartItem.item
        })
    }


    selectAttribute = (e) => {
        const attributeValue = e.target.getAttribute("data-value")
        const attributeName = e.target.getAttribute("data-name")

        const newState = this.state.selectedAttributes.map((attr) => {
            if (attr.name === attributeName) {
                const newObject = {
                    name: attributeName,
                    value: attributeValue
                }
                return newObject
            } else return {name: attr.name, value:attr.value}
        })

       this.setState({selectedAttributes:newState})
    }
    
    render() {  
        const { name, brand, prices, attributes, gallery } = this.props.cartItem.item
        const selectedAttributes = this.props.cartItem.selectedAttributes
        
        return (
            <div className='cartpage-product'>
                <div className="cartpage-product-choice-layout">
                    <ProductTitle name={name} brand={brand} />

                    <ProductSectionTitle getAttributes={this.getAttributes} sectionTitle="Price:" />
                    <ProductPrice currency={prices[0].currency.symbol} price={prices[0].amount} />
                    
                    {attributes.map((attribute, key) => (
                            <CartPageSection selectedAttributes={selectedAttributes} onPress={(e) => this.selectAttribute(e)} key={key} attribute={attribute} />
                        ))}
                </div>
                <CartPageSlider gallery={gallery}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartItems: state.cartItems
})

export default connect(mapStateToProps, {editItem})(CartPageProduct);
