import React, { Component } from 'react';
import ProductTitle from '../commonComponents/ProductTitle';
import ProductSectionTitle from '../commonComponents/ProductSectionTitle';
import ProductPrice from '../productPageComponents/ProductPrice';
import CartPageSlider from './CartPageSlider';
import CartPageSection from './CartPageSection';
import { connect } from "react-redux";
import { changeAttributes } from '../../actions/index';

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

    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props) {
        this.setState({
            selectedAttributes: this.props.cartItem.selectedAttributes,
            item: this.props.cartItem.item
        })
        }
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

        this.setState({ selectedAttributes: newState })
        this.props.changeAttributes(this.props.cartItem.item, newState, this.props.cartItem.id)
    }
    
    render() {
        const { name, brand, prices, attributes, gallery } = this.props.cartItem.item
        const { selectedAttributes } = this.props.cartItem
        const small = this.props.small
        const {index} = this.props.activeCurrency
        
        return (
            <div className ={small?"small-cartpage-product":"cartpage-product"} >
                <div className={small ? "small-cartpage-product-choice-layout" : "cartpage-product-choice-layout"}>
                    <ProductTitle small={small} name={name} brand={brand} />

                    {small ? "" : <ProductSectionTitle getAttributes={this.getAttributes} sectionTitle="Price:" />}
                    <ProductPrice small={small} currency={prices[index].currency.symbol} price={prices[index].amount} />
                    
                    {attributes.map((attribute, key) => (
                            <CartPageSection small={small} selectedAttributes={selectedAttributes} onPress={(e) => this.selectAttribute(e)} key={key} attribute={attribute} />
                        ))}
                </div>
                <CartPageSlider small={small} quantity={this.props.cartItem.quantity} itemId={this.props.cartItem.id} item={this.props.cartItem.item} gallery={gallery}/>
                
            </div >
        );
    }
}

const mapStateToProps = state => ({
    cartItems: state.cartItems,
    activeCurrency: state.activeCurrency
})

export default connect(mapStateToProps, {changeAttributes})(CartPageProduct);
