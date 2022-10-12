import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import PDPPage from './pages/PDPPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import CartOverlayPage from './pages/CartOverlayPage';





export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' >
          <Route index path='category/:name' element={<CategoryPage />}/>
            <Route path='product/:product' element={<PDPPage />} />
            <Route path='cart' element={<CartPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/*<Routes>
        <Route path='/' element={<CartOverlayPage/> } />
        </Routes>
        */}
    </div>
    )
  }
}