import React, { Component } from 'react';
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import PlusIcon from "../../assets/icons/plus.svg";
import MinusIcon from "../../assets/icons/minus.svg";

class CartPageSlider extends Component {

    state = {
        activeImage: 0
    }

    nextImage = () => {
        this.state.activeImage < this.props.gallery.length-1?this.setState({activeImage: this.state.activeImage+1}):this.setState({activeImage: 0})
        
    }

    prevImage = () => {
        this.state.activeImage === 0?this.setState({activeImage: this.props.gallery.length-1}):this.setState({activeImage: this.state.activeImage-1})
    }


    render() {
        console.log(this.props.gallery)
        console.log(this.state.activeImage)
        const {gallery} = this.props
        return (
            <div className="cartpage-product-slider-layout">
                <div className='cartpage-product-count-group'>
                    <div className='cartpage-product-button'><img src={PlusIcon } alt="add" /></div>
                    <div className='cartpage-product-count'>2</div>
                    <div className='cartpage-product-button'><img src={MinusIcon } alt="remove" /></div>
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

export default CartPageSlider;
