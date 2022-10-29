import './App.css';
import './scss/styles.js';
import React, { Component } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import PDPPage from './pages/PDPPage';
import CartPage from './pages/CartPage';
import Header from './components/headerComponents/Header';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Navigate to="/category/all"/>}>
            
        </Route>
        <Route path='/category/:name' element={<CategoryPage />}/>
        <Route path='/product/:id' element={<PDPPage/>} />
        <Route path='/cart' element={<CartPage/>} />
      </Routes>
    </div>
    )
  }
}