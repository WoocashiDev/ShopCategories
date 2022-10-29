import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../../assets/icons/category-cart.svg';
import { connect } from 'react-redux';
import { addItem } from '../../actions/index';

class CategoryPageItem extends Component {


    handleCartButton = () => {
        this.props.product.attributes.length ? this.props.router.navigate(`/product/${this.props.product.id}`) : this.props.addItem(this.props.product, this.props.product.attributes)     
    }



    render() {
        const { gallery, id, name, prices, inStock } = this.props.product

        const {index, symbol} = this.props.activeCurrency
        return (
            <div className="categorypage-item">
                <div className="categorypage-item-container">
                <Link to={`/product/${id}`}>
                <div className="categorypage-item--image" style={{ backgroundImage: `url(${gallery[0]})` }}>
                        {inStock ? "" : <div className="categorypage-item--soldout">Out of Stock</div>}
                    </div>
                    
                </Link>
                {inStock ? <div onClick={() => this.handleCartButton()} className='categorypage-item--cart'>
                                <img alt="add-to-cart" src={CartIcon} />
                            </div> : ""}
                    </div>
                <span className="categorypage-item--name">{name}</span>
                <span className="categorypage-item--price">{symbol}{prices[index].amount}</span>
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    activeCurrency: state.activeCurrency,
    cartItems: state.cartItems
  })

export default connect(mapStateToProps,{addItem}) (CategoryPageItem);
