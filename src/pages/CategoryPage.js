import React, { Component } from 'react';
import CategoryPageItem from '../components/pageComponents/CategoryPageItem';
import { gql  } from '@apollo/client';
import { Query } from '@apollo/client/react/components';
import { withRouter } from '../utils.js';
import Loader from '../components/pageComponents/Loader';


const productsQuery = gql`
    query Category($name: String!)    
    {
        category(input: {title: $name}) {
            products {
                id
                name
                inStock
                gallery
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
                <div className="container categorypage">
                    <h1 className="categorypage-title">{this.props.router.params.name}</h1>
                
                    <Query query={productsQuery} variables={{name: this.props.router.params.name}}>
                        {({ data, loading, error }) => {
                            if (loading) return <Loader/>
                            if (error) return <p>Error</p>;

                            return (
                                <div className="categorypage-items">
                                    {data.category.products.map((product, key) => (<CategoryPageItem key={key} product={product} />))}
                                </div>
                            )
                        }}
                    </Query>
                </div>
            )
    }
}

export default withRouter(CategoryPage);
