import React, { Component } from 'react';
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import PlusIcon from "../../assets/icons/plus.svg";
import MinusIcon from "../../assets/icons/minus.svg";
import {connect} from 'react-redux';
import { changeQuantity, removeItem } from '../../actions/index';

class CartPageSlider extends Component {

    state = {
        activeImage: 0,
        quantity: 1
    }


    nextImage = () => {
        this.state.activeImage < this.props.gallery.length-1?this.setState({activeImage: this.state.activeImage+1}):this.setState({activeImage: 0})
        
    }

    prevImage = () => {
        this.state.activeImage === 0?this.setState({activeImage: this.props.gallery.length-1}):this.setState({activeImage: this.state.activeImage-1})
    }

    addItem = () => {
        this.props.changeQuantity(this.props.item.name, this.state.quantity)
        this.setState({quantity: this.state.quantity+1})
        
    }

    subtractItem = () => {
        if (this.state.quantity >= 1) {
            this.props.changeQuantity(this.props.item.name, this.state.quantity)
            this.setState({ quantity: this.state.quantity - 1 })
        } else {
            this.props.removeItem(this.props.item.name)
        }
        
    }


    render() {

        const {gallery} = this.props
        return (
            <div className="cartpage-product-slider-layout">
                <div className='cartpage-product-count-group'>
                    <div onClick={()=> {this.addItem()} } className='cartpage-product-button'><img src={PlusIcon } alt="add" /></div>
                    <div className='cartpage-product-count'>{this.state.quantity}</div>
                    <div onClick={()=> {this.subtractItem()} }className='cartpage-product-button'><img src={MinusIcon } alt="remove" /></div>
                </div>
                <div className="cartpage-product-slider-image" style={{
                    backgroundImage: `url(${gallery[this.state.activeImage]})`,
                }}>
                    {gallery.length===1?"":<div className="cartpage-product-slider-buttons">
                        
                        <div onClick={()=>{this.prevImage()} } className="cartpage-product-slider-button">
                            <img src={ArrowLeft} alt="previous"/>
                        </div>
                        <div onClick={()=>{this.nextImage()} }  className="cartpage-product-slider-button">
                            <img src={ArrowRight} alt="next" />
                        </div>
                    </div>}
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartItems: state.cartItems
})

export default connect(mapStateToProps, {changeQuantity, removeItem}) (CartPageSlider);
