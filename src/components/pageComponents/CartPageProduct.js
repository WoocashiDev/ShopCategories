import React, { Component } from 'react';
import ProductTitle from './ProductTitle';
import ProductSectionTitle from './ProductSectionTitle';
import ProductPrice from './ProductPrice';
import CartPageSlider from './CartPageSlider';
import CartPageSection from './CartPageSection';
import { connect } from "react-redux";

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
        const { selectedAttributes } = this.props.cartItem
        const small = this.props.small
        
        return (
            <div className ={small?"small-cartpage-product":"cartpage-product"} >
                <div className={small ? "small-cartpage-product-choice-layout" : "cartpage-product-choice-layout"}>
                    <ProductTitle small={small} name={name} brand={brand} />

                    {small ? "" : <ProductSectionTitle getAttributes={this.getAttributes} sectionTitle="Price:" />}
                    <ProductPrice small={small} currency={prices[0].currency.symbol} price={prices[0].amount} />
                    
                    {attributes.map((attribute, key) => (
                            <CartPageSection small={small} selectedAttributes={selectedAttributes} onPress={(e) => this.selectAttribute(e)} key={key} attribute={attribute} />
                        ))}
                </div>
                <CartPageSlider small={small} quantity={this.props.cartItem.quantity} item={this.props.cartItem.item} gallery={gallery}/>
                
            </div >
        );
    }
}

const mapStateToProps = state => ({
    cartItems: state.cartItems
})

export default connect(mapStateToProps, null)(CartPageProduct);
