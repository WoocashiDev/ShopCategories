import React, { Component } from 'react';
import ProductSizes from '../commonComponents/ProductSizes';
import ProductColors from '../commonComponents/ProductColors';


class ProductPageSection extends Component {

    state = {
        value: ""
    }

    getSelectedValue = () => {
        const selectedValue = this.props.selectedAttributes.filter(attribute => {
            return attribute.name === this.props.attribute.name
        })
        return selectedValue[0]
    }

    componentDidMount() {
        this.setState({value: this.getSelectedValue().value})
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({value: this.getSelectedValue().value})
        }
    }


    render() {
        const { type, items, name } = this.props.attribute

        return (
            <div className='productpage-product-section'>
                <span className="product-sectiontitle">
                    {name}
                </span>
                {type === "swatch" ? <ProductColors onPress={this.props.onPress} name={name} colors={items} activeAttribute={this.state.value} /> : <ProductSizes small={false} onPress={this.props.onPress} name={name} sizes={items} activeAttribute={this.state.value} />}
            </div>
        );
    }
}

export default ProductPageSection;
