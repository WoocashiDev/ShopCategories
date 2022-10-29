import React, { Component } from 'react';

class ProductPrimaryBtn extends Component {
    state = {
        isClicked: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.attributes !== this.props.attributes) {
            this.setState({isClicked: false})
        }
    }

    handleClick = () => {
        this.props.onPress()
        this.setState({isClicked: true})
    }
    render() {
        return (
            <button onClick={this.state.isClicked?()=>{return}:()=>this.handleClick()} className="product-primary-btn">{this.state.isClicked?"product added":this.props.text}</button>
        );
    }
}

export default ProductPrimaryBtn;
