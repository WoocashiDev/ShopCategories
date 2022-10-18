import React, { Component } from 'react';
import ProductPageProduct from '../components/pageComponents/ProductPageProduct';
import ProductPageSlider from '../components/pageComponents/ProductPageSlider';
import { gql  } from '@apollo/client';
import { Query } from '@apollo/client/react/components';
import { withRouter } from '../utils';

const productQuery = gql`
    query Product($id: String!)    
    {
        product(id: $id) {
                id
                name
                brand
                description
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
`

class PDPPage extends Component {

  render() {
    return (
      <div className="container productpage">
        <Query fetchPolicy='network-only' query={productQuery} variables={{ id: this.props.router.params.id }}>

          {({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;
            console.log(data.product)
            return (
              <>
                <ProductPageSlider gallery={data.product.gallery} />
                <ProductPageProduct product={data.product} />
              </>
            )
          }
          }
          

        </Query>
      </div>
    )
  }
}

export default withRouter(PDPPage)
