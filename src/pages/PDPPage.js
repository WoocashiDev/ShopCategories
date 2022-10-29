import React, { Component } from 'react';
import ProductPageProduct from '../components/productPageComponents/ProductPageProduct';
import ProductPageSlider from '../components/productPageComponents/ProductPageSlider';
import { gql  } from '@apollo/client';
import { Query } from '@apollo/client/react/components';
import { withRouter } from '../utils';
import Loader from '../components/commonComponents/Loader';


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
            if (loading) return <Loader/>;
            if (error) return <p>Error</p>;
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
