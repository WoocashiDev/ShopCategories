import React, { Component } from 'react';
import CategoryPageItem from '../components/categoryPageComponents/CategoryPageItem';
import { gql  } from '@apollo/client';
import { Query } from '@apollo/client/react/components';
import { withRouter } from '../utils.js';
import Loader from '../components/commonComponents/Loader';


const productsQuery = gql`
    query Category($name: String!)    
    {
        category(input: {title: $name}) {
            products {
                id
                name
                inStock
                gallery
                attributes {
                  id
                  name
                  type
                  items {
                    displayValue
                    value
                    id
                  }
                }
                prices {
                    amount
                    currency {
                        label
                        symbol
                    }
                }
                }
        }
    }
`

class CategoryPage extends Component {

    render() {
            return (
                <div className="container">
                    <div className='categorypage'>
                    <h1 className="categorypage-title">{this.props.router.params.name}</h1>
                
                    <Query query={productsQuery} variables={{name: this.props.router.params.name}}>
                        {({ data, loading, error }) => {
                            if (loading) return <Loader/>
                            if (error) return <p>Error</p>;

                            return (
                                <div className="categorypage-items">
                                    {data.category.products.map((product, key) => (<CategoryPageItem router={this.props.router} key={key} product={product} />))}
                                </div>
                            )
                        }}
                        </Query>
                        </div>
                </div>
            )
    }
}

export default withRouter(CategoryPage);
