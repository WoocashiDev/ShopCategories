import React, { Component } from 'react';
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import PlusIcon from "../../assets/icons/plus.svg";
import MinusIcon from "../../assets/icons/minus.svg";
import {connect} from 'react-redux';
import { changeQuantity } from '../../actions/index';

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
        
        this.setState({quantity: this.state.quantity+1})
    }

    subtractItem = () => {
        if (this.state.quantity >= 0) {

            this.setState({ quantity: this.state.quantity - 1 })
        } 
    }

    componentDidMount() {
        this.setState({quantity: this.props.quantity})
    }

    componentDidUpdate(prevProps, prevState) {
       if (this.state.quantity !== prevState.quantity) {
           this.props.changeQuantity(this.props.item.name, this.state.quantity, this.props.itemId)
       }
    }


    render() {

        const {gallery, small} = this.props
        return (
            <div className={small?"small-cartpage-product-slider-layout":"cartpage-product-slider-layout" }>
                <div className={small? 'small-cartpage-product-count-group' : 'cartpage-product-count-group'}>
                    <div onClick={() => { this.addItem() }} className={small ? 'small-cartpage-product-button' : 'cartpage-product-button'}>
                        <img src={PlusIcon} alt="add" />
                    </div>
                    <div className={small ? 'small-cartpage-product-count' : 'cartpage-product-count'}>
                        {this.props.quantity}
                    </div>
                    <div onClick={() => { this.subtractItem() }} className={small ? 'small-cartpage-product-button' : 'cartpage-product-button'}>
                        <img src={MinusIcon} alt="remove" />
                    </div>
                </div>
                <div className={small ? "small-cartpage-product-slider-image": "cartpage-product-slider-image"} style={{
                    backgroundImage: `url(${gallery[this.state.activeImage]})`,
                }}>
                    {gallery.length===1 || small?"":<div className="cartpage-product-slider-buttons">
                        
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

export default connect(mapStateToProps, {changeQuantity}) (CartPageSlider);
