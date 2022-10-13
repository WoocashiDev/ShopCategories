import React, { Component } from 'react';
import ProductPageImagesMin from '../components/pageComponents/ProductPageImagesMin';
import ProductPageProduct from '../components/pageComponents/ProductPageProduct';

export default class PDPPage extends Component {
  render() {
    return (
      <div className="container productpage">
        <ProductPageImagesMin/>
        <ProductPageProduct/>
      </div>
    )
  }
}
