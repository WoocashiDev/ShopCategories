import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../../assets/icons/category-cart.svg';

class CategoryPageItem extends Component {

    
    render() {
        console.log(this.props.product)
        return (
            <div className="categorypage-item">
                <div className="categorypage-item--image" style={{backgroundImage: `url(${this.props.product.gallery[0]})`}}>
                    <Link to={`/product/${this.props.product.id}`}>
                        <div className='categorypage-item--cart'>
                            <img alt="add-to-cart" src={CartIcon} />
                        </div>
                    </Link>
                </div>
                
                <span className="categorypage-item--name">{this.props.product.name}</span>
                <span className="categorypage-item--price">{this.props.product.prices[0].currency.label}{this.props.product.prices[0].amount}</span>
            </div>
        );
    }
}

export default CategoryPageItem;
