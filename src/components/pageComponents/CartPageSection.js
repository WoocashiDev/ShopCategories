import React, { Component } from 'react';
import ProductSizes from './ProductSizes';
import ProductColors from './ProductColors';


class CartPageSection extends Component {

    state = {
        value: ""
    }

    componentDidMount() {
        const selectedValue = this.props.selectedAttributes.filter(attribute => {
            return attribute.name === this.props.attribute.name
        })
        this.setState({value: selectedValue[0].value})
    }



    render() {
        const { type, items, name } = this.props.attribute

        return (
            <div className='cartpage-product-section'>
                <span className="product-sectiontitle">
                    {name}
                </span>
                {type === "swatch" ? <ProductColors onPress={this.props.onPress} name={name} activeAttribute={this.state.value} colors={items}/>:<ProductSizes activeAttribute={this.state.value}  onPress={this.props.onPress} name={name} sizes={items}/>}
            </div>
        );
    }
}

export default CartPageSection;
