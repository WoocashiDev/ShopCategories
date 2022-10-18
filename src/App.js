import './App.css';
import './scss/styles.js';
import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import PDPPage from './pages/PDPPage';
import CartPage from './pages/CartPage';
import Header from './layout/Header';
//import CartOverlayPage from './pages/CartOverlayPage';





export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Routes>
      <Route path='/category/:name' element={<CategoryPage />}/>
      <Route path='/product/:id' element={<PDPPage/>} />
      <Route path='/cart' element={<CartPage/>} />
      </Routes>
      {/*<Routes>
        <Route path='/' element={<CartOverlayPage/> } />
        </Routes>
        */}
    </div>
    )
  }
}