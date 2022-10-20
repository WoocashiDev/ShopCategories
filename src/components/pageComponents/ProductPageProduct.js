import React, { Component } from 'react';
import ProductTitle from './ProductTitle';
import ProductSectionTitle from './ProductSectionTitle';
import ProductPrice from './ProductPrice';
import ProductPrimaryBtn from './ProductPrimaryBtn';
import ProductDescription from './ProductDescription';
import ProductPageSection from './ProductPageSection';
import { connect } from "react-redux";
import { addItem, removeItem } from '../../actions/index';



class ProductPageProduct extends Component {

    state = {
        item: {},
        selectedAttributes: []
    }

    componentDidMount() {
        this.setState({item:this.props.product})
    }

    addToCart = () => {
        this.props.addItem(this.state.item)
    }

    selectAttribute = (e) => {
        const attributeValue = e.target.getAttribute("data-value")
        const attributeName = e.target.getAttribute("data-name")
        console.log(attributeValue)
        console.log(attributeName)

        const isFound = () => {this.state.selectedAttributes.some(element => {
            if (element.name === attributeName) {
                console.log(element.name)
                console.log(attributeName)
              return true;
            } else {
                return false;
            } 
          });} 
        
        const selectedAtrribute = {
            name: attributeName,
            value: attributeValue
        }

        if (isFound) {
            console.log("true")
            return 
        } else {
            this.setState({selectedAttributes: this.state.selectedAttributes.push(selectedAtrribute)})
        }
    }



    render() {
        console.log(this.props)
        console.log(this.state)
        const { name, brand, prices, attributes, description } = this.props.product
        
        return (
            <div className='productpage-product'>
                <div className="productpage-product-description-layout">
                    <ProductTitle name={name} brand={brand} />
                    {attributes.map((attribute, key) => (
                        <ProductPageSection onPress={(e)=> this.selectAttribute(e)} key={key} attribute={attribute}/> 
                    ))}
                    
                    <ProductSectionTitle getAttributes={ this.getAttributes } sectionTitle="Price:" />
                    <ProductPrice currency={ prices[0].currency.symbol } price={ prices[0].amount } />

                    
                    <ProductPrimaryBtn onPress={() =>  this.addToCart() } text="Add to cart" />
                    
                    <ProductDescription description={description}/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartItems: state.cartItems
})

export default connect(mapStateToProps, {addItem}) (ProductPageProduct);
