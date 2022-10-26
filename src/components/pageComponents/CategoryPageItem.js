import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../../assets/icons/category-cart.svg';
import { connect } from 'react-redux';

class CategoryPageItem extends Component {

    render() {
        const { gallery, id, name, prices, inStock } = this.props.product
        const {index, symbol} = this.props.activeCurrency
        return (
            <div className="categorypage-item">
                <Link to={`/product/${id}`}>
                <div className="categorypage-item--image" style={{ backgroundImage: `url(${gallery[0]})` }}>
                    {inStock ? <Link to={`/product/${id}`}>
                        <div className='categorypage-item--cart'>
                            <img alt="add-to-cart" src={CartIcon} />
                        </div>
                    </Link> : <div className="categorypage-item--soldout">Out of Stock</div>}
                </div>
                </Link>
                <span className="categorypage-item--name">{name}</span>
                <span className="categorypage-item--price">{symbol}{prices[index].amount}</span>
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    activeCurrency: state.activeCurrency
  })

export default connect(mapStateToProps,null) (CategoryPageItem);
