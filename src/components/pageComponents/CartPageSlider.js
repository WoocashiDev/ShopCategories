import React, { Component } from 'react';
import DefaultImage from "../../assets/images/default.png";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import PlusIcon from "../../assets/icons/plus.svg";
import MinusIcon from "../../assets/icons/minus.svg";

class CartPageSlider extends Component {


    render() {
        return (
            <div className="cartpage-product-slider-layout">
                <div className='cartpage-product-count-group'>
                    <div className='cartpage-product-button'><img src={PlusIcon } alt="add" /></div>
                    <div className='cartpage-product-count'>2</div>
                    <div className='cartpage-product-button'><img src={MinusIcon } alt="remove" /></div>
                </div>
                <div className="cartpage-product-slider-image" style={{
                    background: `url(${DefaultImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="cartpage-product-slider-buttons">
                        <div className="cartpage-product-slider-button">
                            <img src={ArrowLeft} alt="previous"/>
                        </div>
                        <div className="cartpage-product-slider-button">
                            <img src={ArrowRight} alt="next" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartPageSlider;
