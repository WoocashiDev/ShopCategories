import React, { Component } from 'react';

class ProductPageSlider extends Component {

    state = {
        activeImage: 0
    }

    handleActiveImage = (e) => {
        let imageIndex = e.target.getAttribute("data-index")
        if (imageIndex !== this.state.activeImage) {
            this.setState({activeImage: imageIndex})
        }
    }

    render() {

        return (
            <div className="productpage-slider">
                <div className='productpage-slider-images-min'>
                    {this.props.gallery.map((image, index) => (
                        <div style={{backgroundImage: `url(${image})`}} key={index} className='productpage-slider-image-min' data-index={index} onClick={this.handleActiveImage}>
                            
                        </div>
                    )
                    )}
                </div>
                <div className="productpage-slider-image-main" style={{backgroundImage: `url(${this.props.gallery[this.state.activeImage]})`}}>
                </div>
            </div>
        );
    }
}

export default ProductPageSlider;
