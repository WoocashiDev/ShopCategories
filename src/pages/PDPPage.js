import React, { Component } from 'react';
import ProductPageProduct from '../components/pageComponents/ProductPageProduct';
import ProductPageSlider from '../components/pageComponents/ProductPageSlider';

export default class PDPPage extends Component {
  render() {
    return (
      <div className="container productpage">
        <ProductPageSlider/>
        <ProductPageProduct/>
      </div>
    )
  }
}
