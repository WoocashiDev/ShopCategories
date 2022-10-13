import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DefaultImage from '../../assets/images/default.png';
import CartIcon from '../../assets/icons/category-cart.svg';

class CategoryPageItem extends Component {
    render() {
        return (
            <div className="categorypage-item">
                <div className="categorypage-item--image">
                    <img alt="product" src={DefaultImage} />
                    <Link to="/product/id">
                        <div className='categorypage-item--cart'>
                            <img alt="add-to-cart" src={CartIcon} />
                        </div>
                    </Link>
                </div>
                
                <span className="categorypage-item--name">Product Name</span>
                <span className="categorypage-item--price">$99.00</span>
            </div>
        );
    }
}

export default CategoryPageItem;
